import $ from '../../../core/renderer';
import { noop } from '../../../core/utils/common';
import registerComponent from '../../../core/component_registrator';
import SchedulerWorkSpace from './ui.scheduler.work_space.indicator';
import dateUtils from '../../../core/utils/date';
import { getBoundingRect } from '../../../core/utils/position';
import dateLocalization from '../../../localization/date';
import dxrMonthDateTableLayout from '../../../renovation/ui/scheduler/workspaces/month/date_table/layout.j';
var MONTH_CLASS = 'dx-scheduler-work-space-month';
var DATE_TABLE_CURRENT_DATE_CLASS = 'dx-scheduler-date-table-current-date';
var DATE_TABLE_CELL_TEXT_CLASS = 'dx-scheduler-date-table-cell-text';
var DATE_TABLE_FIRST_OF_MONTH_CLASS = 'dx-scheduler-date-table-first-of-month';
var DATE_TABLE_OTHER_MONTH_DATE_CLASS = 'dx-scheduler-date-table-other-month';
var DATE_TABLE_SCROLLABLE_FIXED_CLASS = 'dx-scheduler-scrollable-fixed-content';
var DAYS_IN_WEEK = 7;
var DAY_IN_MILLISECONDS = 86400000;
var toMs = dateUtils.dateToMilliseconds;

class SchedulerWorkSpaceMonth extends SchedulerWorkSpace {
  get isDateAndTimeView() {
    return false;
  }

  _toggleFixedScrollableClass() {
    this._dateTableScrollable.$content().toggleClass(DATE_TABLE_SCROLLABLE_FIXED_CLASS, !this._isWorkSpaceWithCount() && !this._isVerticalGroupedWorkSpace());
  }

  _getElementClass() {
    return MONTH_CLASS;
  }

  _getRowCount() {
    return this._isWorkSpaceWithCount() ? 4 * this.option('intervalCount') + 2 : 6;
  }

  _getCellCount() {
    return DAYS_IN_WEEK;
  }

  _getDateByIndex(headerIndex) {
    var resultDate = new Date(this._firstViewDate);
    resultDate.setDate(this._firstViewDate.getDate() + headerIndex);
    return resultDate;
  }

  _getFormat() {
    return this._formatWeekday;
  }

  _calculateCellIndex(rowIndex, cellIndex) {
    if (this._isVerticalGroupedWorkSpace()) {
      rowIndex = rowIndex % this._getRowCount();
    } else {
      cellIndex = cellIndex % this._getCellCount();
    }

    return rowIndex * this._getCellCount() + cellIndex;
  }

  _getInterval() {
    return DAY_IN_MILLISECONDS;
  }

  _getIntervalBetween(currentDate) {
    var firstViewDate = this.getStartViewDate();
    var timeZoneOffset = dateUtils.getTimezonesDifference(firstViewDate, currentDate);
    return currentDate.getTime() - (firstViewDate.getTime() - this.option('startDayHour') * 3600000) - timeZoneOffset;
  }

  _getDateByCellIndexes(rowIndex, cellIndex) {
    var date = super._getDateByCellIndexes(rowIndex, cellIndex);

    this._setStartDayHour(date);

    return date;
  } // TODO: temporary fix, in the future, if we replace table layout on div layout, getCellWidth method need remove. Details in T712431
  // TODO: there is a test for this bug, when changing the layout, the test will also be useless


  getCellWidth() {
    return this.cache.get('cellWidth', () => {
      var DAYS_IN_WEEK = 7;
      var averageWidth = 0;

      var cells = this._getCells().slice(0, DAYS_IN_WEEK);

      cells.each((index, element) => {
        averageWidth += getBoundingRect(element).width;
      });
      return cells.length === 0 ? undefined : averageWidth / DAYS_IN_WEEK;
    });
  }

  _calculateHiddenInterval() {
    return 0;
  }

  _insertAllDayRowsIntoDateTable() {
    return false;
  }

  _getCellCoordinatesByIndex(index) {
    var rowIndex = Math.floor(index / this._getCellCount());
    var cellIndex = index - this._getCellCount() * rowIndex;
    return {
      rowIndex: rowIndex,
      cellIndex: cellIndex
    };
  }

  _createWorkSpaceElements() {
    if (this._isVerticalGroupedWorkSpace()) {
      this._createWorkSpaceScrollableElements();
    } else {
      super._createWorkSpaceElements();
    }
  }

  _needCreateCrossScrolling() {
    return this.option('crossScrollingEnabled') || this._isVerticalGroupedWorkSpace();
  }

  _renderTimePanel() {
    return noop();
  }

  _renderAllDayPanel() {
    return noop();
  }

  _getTableAllDay() {
    return noop();
  }

  _toggleAllDayVisibility() {
    return noop();
  }

  _changeAllDayVisibility() {
    return noop();
  }

  _setFirstViewDate() {
    var firstMonthDate = dateUtils.getFirstMonthDate(this._getViewStartByOptions());

    var firstDayOfWeek = this._getCalculatedFirstDayOfWeek();

    this._firstViewDate = dateUtils.getFirstWeekDate(firstMonthDate, firstDayOfWeek);

    this._setStartDayHour(this._firstViewDate);

    var date = this._getViewStartByOptions();

    this._minVisibleDate = new Date(date.setDate(1));
    this._maxVisibleDate = new Date(new Date(date.setMonth(date.getMonth() + this.option('intervalCount'))).setDate(0));
  }

  _getViewStartByOptions() {
    if (!this.option('startDate')) {
      return new Date(this.option('currentDate').getTime());
    } else {
      var startDate = this._getStartViewDate();

      var currentDate = this.option('currentDate');
      var diff = startDate.getTime() <= currentDate.getTime() ? 1 : -1;
      var endDate = new Date(new Date(this._getStartViewDate().setMonth(this._getStartViewDate().getMonth() + diff * this.option('intervalCount'))));

      while (!this._dateInRange(currentDate, startDate, endDate, diff)) {
        startDate = new Date(endDate);

        if (diff > 0) {
          startDate.setDate(1);
        }

        endDate = new Date(new Date(endDate.setMonth(endDate.getMonth() + diff * this.option('intervalCount'))));
      }

      return diff > 0 ? startDate : endDate;
    }
  }

  _getStartViewDate() {
    var firstMonthDate = dateUtils.getFirstMonthDate(this.option('startDate'));
    return firstMonthDate;
  }

  _renderTableBody(options) {
    options.getCellText = this._getCellText.bind(this);
    options.getCellTextClass = DATE_TABLE_CELL_TEXT_CLASS;

    super._renderTableBody(options);
  }

  _getCellText(rowIndex, cellIndex) {
    if (this.isGroupedByDate()) {
      cellIndex = Math.floor(cellIndex / this._getGroupCount());
    } else {
      cellIndex = cellIndex % this._getCellCount();
    }

    var date = this._getDate(rowIndex, cellIndex);

    if (this._isWorkSpaceWithCount() && this._isFirstDayOfMonth(date)) {
      return this._formatMonthAndDay(date);
    }

    return dateLocalization.format(date, 'dd');
  }

  _formatMonthAndDay(date) {
    var monthName = dateLocalization.getMonthNames('abbreviated')[date.getMonth()];
    return [monthName, dateLocalization.format(date, 'day')].join(' ');
  }

  _getDate(week, day) {
    var result = new Date(this._firstViewDate);

    var lastRowInDay = this._getRowCount();

    result.setDate(result.getDate() + week % lastRowInDay * DAYS_IN_WEEK + day);
    return result;
  }

  _updateIndex(index) {
    return index;
  }

  _prepareCellData(rowIndex, cellIndex, cell) {
    var data = super._prepareCellData(rowIndex, cellIndex, cell);

    var $cell = $(cell);
    $cell.toggleClass(DATE_TABLE_CURRENT_DATE_CLASS, this._isCurrentDate(data.startDate)).toggleClass(DATE_TABLE_FIRST_OF_MONTH_CLASS, this._isFirstDayOfMonth(data.startDate)).toggleClass(DATE_TABLE_OTHER_MONTH_DATE_CLASS, this._isOtherMonth(data.startDate));
    return data;
  }

  _isCurrentDate(cellDate) {
    return dateUtils.sameDate(cellDate, this._getToday());
  }

  _isFirstDayOfMonth(cellDate) {
    return this._isWorkSpaceWithCount() && cellDate.getDate() === 1;
  }

  _isOtherMonth(cellDate) {
    return !dateUtils.dateInRange(cellDate, this._minVisibleDate, this._maxVisibleDate, 'date');
  }

  isIndicationAvailable() {
    return false;
  }

  getCellDuration() {
    return this._calculateDayDuration() * 3600000;
  }

  getIntervalDuration() {
    return toMs('day');
  }

  getTimePanelWidth() {
    return 0;
  }

  getPositionShift(timeShift) {
    return {
      cellPosition: timeShift * this.getCellWidth(),
      top: 0,
      left: 0
    };
  }

  getCellCountToLastViewDate(date) {
    var firstDateTime = date.getTime();
    var lastDateTime = this.getEndViewDate().getTime();
    var dayDurationInMs = this.getCellDuration();
    return Math.ceil((lastDateTime - firstDateTime) / dayDurationInMs);
  }

  supportAllDayRow() {
    return false;
  }

  keepOriginalHours() {
    return true;
  }

  calculateEndDate(startDate) {
    var startDateCopy = new Date(startDate);
    return new Date(startDateCopy.setHours(this.option('endDayHour')));
  }

  getWorkSpaceLeftOffset() {
    return 0;
  }

  needApplyCollectorOffset() {
    return true;
  }

  _getCellPositionByIndex(index, groupIndex) {
    var position = super._getCellPositionByIndex(index, groupIndex);

    var rowIndex = this._getCellCoordinatesByIndex(index).rowIndex;

    var calculatedTopOffset;

    if (!this._isVerticalGroupedWorkSpace()) {
      calculatedTopOffset = this.getCellHeight() * rowIndex;
    } else {
      calculatedTopOffset = this.getCellHeight() * (rowIndex + groupIndex * this._getRowCount());
    }

    if (calculatedTopOffset) {
      position.top = calculatedTopOffset;
    }

    return position;
  }

  _getHeaderDate() {
    return this._getViewStartByOptions();
  }

  _supportCompactDropDownAppointments() {
    return false;
  }

  scrollToTime() {
    return noop();
  }

  _createAllDayPanelElements() {}

  _getRowCountWithAllDayRows() {
    return this._getRowCount();
  }

  renderRAllDayPanel() {}

  renderRTimeTable() {}

  renderRDateTable() {
    this.renderRComponent(this._$dateTable, dxrMonthDateTableLayout, 'renovatedDateTable', this._getRDateTableProps());
  }

  generateRenderOptions() {
    var options = super.generateRenderOptions();
    options.cellDataGetters.push((_, rowIndex, cellIndex) => {
      return {
        value: {
          text: this._getCellText(rowIndex, cellIndex)
        }
      };
    });

    var getCellMetaData = (_, rowIndex, cellIndex, groupIndex, startDate) => {
      return {
        value: {
          today: this._isCurrentDate(startDate),
          otherMonth: this._isOtherMonth(startDate),
          firstDayOfMonth: this._isFirstDayOfMonth(startDate)
        }
      };
    };

    options.cellDataGetters.push(getCellMetaData);
    return options;
  }

}

registerComponent('dxSchedulerWorkSpaceMonth', SchedulerWorkSpaceMonth);
export default SchedulerWorkSpaceMonth;