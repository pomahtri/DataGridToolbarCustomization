/**
* DevExtreme (esm/ui/scheduler/workspaces/view_model/view_data_provider.js)
* Version: 21.2.0
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import dateUtils from '../../../../core/utils/date';
import { GroupedDataMapProvider } from './grouped_data_map_provider';
import { ViewDataGenerator } from './view_data_generator';
export default class ViewDataProvider {
  constructor(workspace) {
    this._viewDataGenerator = null;
    this._viewData = [];
    this._completeViewDataMap = [];
    this._completeDateHeaderMap = [];
    this._viewDataMap = [];
    this._groupedDataMapProvider = null;
    this._workspace = workspace;
  }

  get viewDataGenerator() {
    if (!this._viewDataGenerator) {
      this._viewDataGenerator = new ViewDataGenerator();
    }

    return this._viewDataGenerator;
  }

  get completeViewDataMap() {
    return this._completeViewDataMap;
  }

  set completeViewDataMap(value) {
    this._completeViewDataMap = value;
  }

  get completeDateHeaderMap() {
    return this._completeDateHeaderMap;
  }

  set completeDateHeaderMap(value) {
    this._completeDateHeaderMap = value;
  }

  get completeTimePanelMap() {
    return this._completeTimePanelMap;
  }

  set completeTimePanelMap(value) {
    this._completeTimePanelMap = value;
  }

  get viewData() {
    return this._viewData;
  }

  set viewData(value) {
    this._viewData = value;
  }

  get viewDataMap() {
    return this._viewDataMap;
  }

  set viewDataMap(value) {
    this._viewDataMap = value;
  }

  get dateHeaderData() {
    return this._dateHeaderData;
  }

  set dateHeaderData(value) {
    this._dateHeaderData = value;
  }

  get timePanelData() {
    return this._timePanelData;
  }

  set timePanelData(value) {
    this._timePanelData = value;
  }

  get groupedDataMap() {
    return this._groupedDataMapProvider.groupedDataMap;
  }

  get isVerticalGroupedWorkspace() {
    return this._workspace._isVerticalGroupedWorkSpace();
  }

  update(isGenerateNewViewData) {
    var viewDataGenerator = this.viewDataGenerator;

    var renderOptions = this._workspace.generateRenderOptions();

    if (isGenerateNewViewData) {
      this.completeViewDataMap = viewDataGenerator._getCompleteViewDataMap(renderOptions);
      this.completeDateHeaderMap = viewDataGenerator._getCompleteDateHeaderMap(renderOptions, this.completeViewDataMap);
      this.completeTimePanelMap = viewDataGenerator._getCompleteTimePanelMap(renderOptions, this.completeViewDataMap);
    }

    this.viewDataMap = viewDataGenerator._generateViewDataMap(this.completeViewDataMap, renderOptions);
    this.viewData = viewDataGenerator._getViewDataFromMap(this.viewDataMap, renderOptions);
    this._groupedDataMapProvider = new GroupedDataMapProvider(this.viewDataGenerator, this.viewDataMap, this.completeViewDataMap, {
      isVerticalGrouping: renderOptions.isVerticalGrouping,
      isDateAndTimeView: renderOptions.isDateAndTimeView
    });
    this.dateHeaderData = viewDataGenerator._generateDateHeaderData(this.completeDateHeaderMap, renderOptions);
    this.timePanelData = viewDataGenerator._generateTimePanelData(this.completeTimePanelMap, renderOptions);
  }

  getStartDate() {
    var {
      groupedData
    } = this.viewData;
    var {
      dateTable
    } = groupedData[0];
    return dateTable[0][0].startDate;
  }

  getGroupStartDate(groupIndex) {
    return this._groupedDataMapProvider.getGroupStartDate(groupIndex);
  }

  getGroupEndDate(groupIndex) {
    return this._groupedDataMapProvider.getGroupEndDate(groupIndex);
  }

  findGroupCellStartDate(groupIndex, startDate, endDate, isAllDay) {
    return this._groupedDataMapProvider.findGroupCellStartDate(groupIndex, startDate, endDate, isAllDay);
  }

  findAllDayGroupCellStartDate(groupIndex, startDate) {
    return this._groupedDataMapProvider.findAllDayGroupCellStartDate(groupIndex, startDate);
  }

  findCellPositionInMap(cellInfo) {
    return this._groupedDataMapProvider.findCellPositionInMap(cellInfo);
  }

  getCellsGroup(groupIndex) {
    return this._groupedDataMapProvider.getCellsGroup(groupIndex);
  }

  getCompletedGroupsInfo() {
    return this._groupedDataMapProvider.getCompletedGroupsInfo();
  }

  getGroupIndices() {
    return this._groupedDataMapProvider.getGroupIndices();
  }

  getLastGroupCellPosition(groupIndex) {
    return this._groupedDataMapProvider.getLastGroupCellPosition(groupIndex);
  }

  getRowCountInGroup(groupIndex) {
    return this._groupedDataMapProvider.getRowCountInGroup(groupIndex);
  }

  getCellData(rowIndex, cellIndex, isAllDay) {
    if (isAllDay && !this.isVerticalGroupedWorkspace) {
      return this._viewData.groupedData[0].allDayPanel[cellIndex];
    }

    var {
      dateTableMap
    } = this.viewDataMap;
    var {
      cellData
    } = dateTableMap[rowIndex][cellIndex];
    return cellData;
  }

  getCellsByGroupIndexAndAllDay(groupIndex, allDay) {
    var workspace = this._workspace;

    var rowsPerGroup = workspace._getRowCountWithAllDayRows();

    var isShowAllDayPanel = workspace.isAllDayPanelVisible;
    var firstRowInGroup = this.isVerticalGroupedWorkspace ? groupIndex * rowsPerGroup : 0;
    var lastRowInGroup = this.isVerticalGroupedWorkspace ? (groupIndex + 1) * rowsPerGroup - 1 : rowsPerGroup;
    var correctedFirstRow = isShowAllDayPanel && !allDay ? firstRowInGroup + 1 : firstRowInGroup;
    var correctedLastRow = allDay ? correctedFirstRow : lastRowInGroup;
    return this.completeViewDataMap.slice(correctedFirstRow, correctedLastRow + 1).map(row => row.filter(_ref => {
      var {
        groupIndex: currentGroupIndex
      } = _ref;
      return groupIndex === currentGroupIndex;
    }));
  }

  getGroupData(groupIndex) {
    var {
      groupedData
    } = this.viewData;

    if (this.isVerticalGroupedWorkspace) {
      return groupedData.filter(item => item.groupIndex === groupIndex)[0];
    }

    var filterCells = row => row === null || row === void 0 ? void 0 : row.filter(cell => cell.groupIndex === groupIndex);

    var {
      allDayPanel,
      dateTable
    } = groupedData[0];
    var filteredDateTable = [];
    dateTable.forEach(row => {
      filteredDateTable.push(filterCells(row));
    });
    return {
      allDayPanel: filterCells(allDayPanel),
      dateTable: filteredDateTable
    };
  }

  getCellCountWithGroup(groupIndex) {
    var rowIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var {
      dateTableGroupedMap
    } = this.groupedDataMap;
    return dateTableGroupedMap.filter((_, index) => index <= groupIndex).reduce((previous, row) => previous + row[rowIndex].length, 0);
  }

  getAllDayPanel(groupIndex) {
    var groupData = this.getGroupData(groupIndex);
    return groupData === null || groupData === void 0 ? void 0 : groupData.allDayPanel;
  }

  isGroupIntersectDateInterval(groupIndex, startDate, endDate) {
    var groupStartDate = this.getGroupStartDate(groupIndex);
    var groupEndDate = this.getGroupEndDate(groupIndex);
    return startDate < groupEndDate && endDate > groupStartDate;
  }

  findGlobalCellPosition(date) {
    var groupIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var allDay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var {
      completeViewDataMap,
      _workspace: workspace
    } = this;
    var showAllDayPanel = workspace.isAllDayPanelVisible;

    for (var rowIndex = 0; rowIndex < completeViewDataMap.length; rowIndex += 1) {
      var currentRow = completeViewDataMap[rowIndex];

      for (var columnIndex = 0; columnIndex < currentRow.length; columnIndex += 1) {
        var cellData = currentRow[columnIndex];
        var {
          startDate: currentStartDate,
          endDate: currentEndDate,
          groupIndex: currentGroupIndex,
          allDay: currentAllDay
        } = cellData;

        if (groupIndex === currentGroupIndex && allDay === !!currentAllDay && this._compareDatesAndAllDay(date, currentStartDate, currentEndDate, allDay)) {
          return {
            position: {
              columnIndex,
              rowIndex: showAllDayPanel && !this.isVerticalGroupedWorkspace ? rowIndex - 1 : rowIndex
            },
            cellData
          };
        }
      }
    }
  }

  _compareDatesAndAllDay(date, cellStartDate, cellEndDate, allDay) {
    var time = date.getTime();
    var trimmedTime = dateUtils.trimTime(date).getTime();
    var cellStartTime = cellStartDate.getTime();
    var cellEndTime = cellEndDate.getTime();
    return !allDay && time >= cellStartTime && time < cellEndTime || allDay && trimmedTime === cellStartTime;
  }

  getSkippedDaysCount(groupIndex, startDate, endDate, daysCount) {
    var {
      dateTableGroupedMap
    } = this._groupedDataMapProvider.groupedDataMap;
    var groupedData = dateTableGroupedMap[groupIndex];
    var includedDays = 0;

    for (var rowIndex = 0; rowIndex < groupedData.length; rowIndex += 1) {
      for (var columnIndex = 0; columnIndex < groupedData[rowIndex].length; columnIndex += 1) {
        var cell = groupedData[rowIndex][columnIndex].cellData;

        if (startDate.getTime() < cell.endDate.getTime() && endDate.getTime() > cell.startDate.getTime()) {
          includedDays += 1;
        }
      }
    }

    var lastCell = groupedData[groupedData.length - 1][groupedData[0].length - 1].cellData;
    var lastCellStart = dateUtils.trimTime(lastCell.startDate);
    var daysAfterView = Math.floor((endDate.getTime() - lastCellStart.getTime()) / dateUtils.dateToMilliseconds('day'));
    var deltaDays = daysAfterView > 0 ? daysAfterView : 0;
    return daysCount - includedDays - deltaDays;
  }

  getColumnsCount() {
    return this.viewDataMap.dateTableMap[0].length;
  }

  getViewEdgeIndices(isAllDayPanel) {
    if (isAllDayPanel) {
      return {
        firstCellIndex: 0,
        lastCellIndex: this.viewDataMap.allDayPanelMap.length - 1,
        firstRowIndex: 0,
        lastRowIndex: 0
      };
    }

    return {
      firstCellIndex: 0,
      lastCellIndex: this.viewDataMap.dateTableMap[0].length - 1,
      firstRowIndex: 0,
      lastRowIndex: this.viewDataMap.dateTableMap.length - 1
    };
  }

  getGroupEdgeIndices(groupIndex, isAllDay) {
    var groupedDataMap = this.groupedDataMap.dateTableGroupedMap[groupIndex];
    var cellsCount = groupedDataMap[0].length;
    var rowsCount = groupedDataMap.length;
    var firstCellIndex = groupedDataMap[0][0].position.cellIndex;
    var lastCellIndex = groupedDataMap[0][cellsCount - 1].position.cellIndex;

    if (isAllDay) {
      return {
        firstCellIndex,
        lastCellIndex,
        firstRowIndex: 0,
        lastRowIndex: 0
      };
    }

    return {
      firstCellIndex,
      lastCellIndex,
      firstRowIndex: groupedDataMap[0][0].position.rowIndex,
      lastRowIndex: groupedDataMap[rowsCount - 1][0].position.rowIndex
    };
  }

  isSameCell(firstCellData, secondCellData) {
    var {
      startDate: firstStartDate,
      groupIndex: firstGroupIndex,
      allDay: firstAllDay,
      index: firstIndex
    } = firstCellData;
    var {
      startDate: secondStartDate,
      groupIndex: secondGroupIndex,
      allDay: secondAllDay,
      index: secondIndex
    } = secondCellData;
    return firstStartDate.getTime() === secondStartDate.getTime() && firstGroupIndex === secondGroupIndex && firstAllDay === secondAllDay && firstIndex === secondIndex;
  }

}
