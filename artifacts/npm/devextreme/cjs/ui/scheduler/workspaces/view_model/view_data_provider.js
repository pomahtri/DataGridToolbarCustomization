/**
* DevExtreme (cjs/ui/scheduler/workspaces/view_model/view_data_provider.js)
* Version: 21.2.0
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.default = void 0;

var _date = _interopRequireDefault(require("../../../../core/utils/date"));

var _grouped_data_map_provider = require("./grouped_data_map_provider");

var _view_data_generator = require("./view_data_generator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ViewDataProvider = /*#__PURE__*/function () {
  function ViewDataProvider(workspace) {
    this._viewDataGenerator = null;
    this._viewData = [];
    this._completeViewDataMap = [];
    this._completeDateHeaderMap = [];
    this._viewDataMap = [];
    this._groupedDataMapProvider = null;
    this._workspace = workspace;
  }

  var _proto = ViewDataProvider.prototype;

  _proto.update = function update(isGenerateNewViewData) {
    var viewDataGenerator = this.viewDataGenerator;

    var renderOptions = this._workspace.generateRenderOptions();

    if (isGenerateNewViewData) {
      this.completeViewDataMap = viewDataGenerator._getCompleteViewDataMap(renderOptions);
      this.completeDateHeaderMap = viewDataGenerator._getCompleteDateHeaderMap(renderOptions, this.completeViewDataMap);
      this.completeTimePanelMap = viewDataGenerator._getCompleteTimePanelMap(renderOptions, this.completeViewDataMap);
    }

    this.viewDataMap = viewDataGenerator._generateViewDataMap(this.completeViewDataMap, renderOptions);
    this.viewData = viewDataGenerator._getViewDataFromMap(this.viewDataMap, renderOptions);
    this._groupedDataMapProvider = new _grouped_data_map_provider.GroupedDataMapProvider(this.viewDataGenerator, this.viewDataMap, this.completeViewDataMap, {
      isVerticalGrouping: renderOptions.isVerticalGrouping,
      isDateAndTimeView: renderOptions.isDateAndTimeView
    });
    this.dateHeaderData = viewDataGenerator._generateDateHeaderData(this.completeDateHeaderMap, renderOptions);
    this.timePanelData = viewDataGenerator._generateTimePanelData(this.completeTimePanelMap, renderOptions);
  };

  _proto.getStartDate = function getStartDate() {
    var groupedData = this.viewData.groupedData;
    var dateTable = groupedData[0].dateTable;
    return dateTable[0][0].startDate;
  };

  _proto.getGroupStartDate = function getGroupStartDate(groupIndex) {
    return this._groupedDataMapProvider.getGroupStartDate(groupIndex);
  };

  _proto.getGroupEndDate = function getGroupEndDate(groupIndex) {
    return this._groupedDataMapProvider.getGroupEndDate(groupIndex);
  };

  _proto.findGroupCellStartDate = function findGroupCellStartDate(groupIndex, startDate, endDate, isAllDay) {
    return this._groupedDataMapProvider.findGroupCellStartDate(groupIndex, startDate, endDate, isAllDay);
  };

  _proto.findAllDayGroupCellStartDate = function findAllDayGroupCellStartDate(groupIndex, startDate) {
    return this._groupedDataMapProvider.findAllDayGroupCellStartDate(groupIndex, startDate);
  };

  _proto.findCellPositionInMap = function findCellPositionInMap(cellInfo) {
    return this._groupedDataMapProvider.findCellPositionInMap(cellInfo);
  };

  _proto.getCellsGroup = function getCellsGroup(groupIndex) {
    return this._groupedDataMapProvider.getCellsGroup(groupIndex);
  };

  _proto.getCompletedGroupsInfo = function getCompletedGroupsInfo() {
    return this._groupedDataMapProvider.getCompletedGroupsInfo();
  };

  _proto.getGroupIndices = function getGroupIndices() {
    return this._groupedDataMapProvider.getGroupIndices();
  };

  _proto.getLastGroupCellPosition = function getLastGroupCellPosition(groupIndex) {
    return this._groupedDataMapProvider.getLastGroupCellPosition(groupIndex);
  };

  _proto.getRowCountInGroup = function getRowCountInGroup(groupIndex) {
    return this._groupedDataMapProvider.getRowCountInGroup(groupIndex);
  };

  _proto.getCellData = function getCellData(rowIndex, cellIndex, isAllDay) {
    if (isAllDay && !this.isVerticalGroupedWorkspace) {
      return this._viewData.groupedData[0].allDayPanel[cellIndex];
    }

    var dateTableMap = this.viewDataMap.dateTableMap;
    var cellData = dateTableMap[rowIndex][cellIndex].cellData;
    return cellData;
  };

  _proto.getCellsByGroupIndexAndAllDay = function getCellsByGroupIndexAndAllDay(groupIndex, allDay) {
    var workspace = this._workspace;

    var rowsPerGroup = workspace._getRowCountWithAllDayRows();

    var isShowAllDayPanel = workspace.isAllDayPanelVisible;
    var firstRowInGroup = this.isVerticalGroupedWorkspace ? groupIndex * rowsPerGroup : 0;
    var lastRowInGroup = this.isVerticalGroupedWorkspace ? (groupIndex + 1) * rowsPerGroup - 1 : rowsPerGroup;
    var correctedFirstRow = isShowAllDayPanel && !allDay ? firstRowInGroup + 1 : firstRowInGroup;
    var correctedLastRow = allDay ? correctedFirstRow : lastRowInGroup;
    return this.completeViewDataMap.slice(correctedFirstRow, correctedLastRow + 1).map(function (row) {
      return row.filter(function (_ref) {
        var currentGroupIndex = _ref.groupIndex;
        return groupIndex === currentGroupIndex;
      });
    });
  };

  _proto.getGroupData = function getGroupData(groupIndex) {
    var groupedData = this.viewData.groupedData;

    if (this.isVerticalGroupedWorkspace) {
      return groupedData.filter(function (item) {
        return item.groupIndex === groupIndex;
      })[0];
    }

    var filterCells = function filterCells(row) {
      return row === null || row === void 0 ? void 0 : row.filter(function (cell) {
        return cell.groupIndex === groupIndex;
      });
    };

    var _groupedData$ = groupedData[0],
        allDayPanel = _groupedData$.allDayPanel,
        dateTable = _groupedData$.dateTable;
    var filteredDateTable = [];
    dateTable.forEach(function (row) {
      filteredDateTable.push(filterCells(row));
    });
    return {
      allDayPanel: filterCells(allDayPanel),
      dateTable: filteredDateTable
    };
  };

  _proto.getCellCountWithGroup = function getCellCountWithGroup(groupIndex) {
    var rowIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var dateTableGroupedMap = this.groupedDataMap.dateTableGroupedMap;
    return dateTableGroupedMap.filter(function (_, index) {
      return index <= groupIndex;
    }).reduce(function (previous, row) {
      return previous + row[rowIndex].length;
    }, 0);
  };

  _proto.getAllDayPanel = function getAllDayPanel(groupIndex) {
    var groupData = this.getGroupData(groupIndex);
    return groupData === null || groupData === void 0 ? void 0 : groupData.allDayPanel;
  };

  _proto.isGroupIntersectDateInterval = function isGroupIntersectDateInterval(groupIndex, startDate, endDate) {
    var groupStartDate = this.getGroupStartDate(groupIndex);
    var groupEndDate = this.getGroupEndDate(groupIndex);
    return startDate < groupEndDate && endDate > groupStartDate;
  };

  _proto.findGlobalCellPosition = function findGlobalCellPosition(date) {
    var groupIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var allDay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var completeViewDataMap = this.completeViewDataMap,
        workspace = this._workspace;
    var showAllDayPanel = workspace.isAllDayPanelVisible;

    for (var rowIndex = 0; rowIndex < completeViewDataMap.length; rowIndex += 1) {
      var currentRow = completeViewDataMap[rowIndex];

      for (var columnIndex = 0; columnIndex < currentRow.length; columnIndex += 1) {
        var cellData = currentRow[columnIndex];
        var currentStartDate = cellData.startDate,
            currentEndDate = cellData.endDate,
            currentGroupIndex = cellData.groupIndex,
            currentAllDay = cellData.allDay;

        if (groupIndex === currentGroupIndex && allDay === !!currentAllDay && this._compareDatesAndAllDay(date, currentStartDate, currentEndDate, allDay)) {
          return {
            position: {
              columnIndex: columnIndex,
              rowIndex: showAllDayPanel && !this.isVerticalGroupedWorkspace ? rowIndex - 1 : rowIndex
            },
            cellData: cellData
          };
        }
      }
    }
  };

  _proto._compareDatesAndAllDay = function _compareDatesAndAllDay(date, cellStartDate, cellEndDate, allDay) {
    var time = date.getTime();

    var trimmedTime = _date.default.trimTime(date).getTime();

    var cellStartTime = cellStartDate.getTime();
    var cellEndTime = cellEndDate.getTime();
    return !allDay && time >= cellStartTime && time < cellEndTime || allDay && trimmedTime === cellStartTime;
  };

  _proto.getSkippedDaysCount = function getSkippedDaysCount(groupIndex, startDate, endDate, daysCount) {
    var dateTableGroupedMap = this._groupedDataMapProvider.groupedDataMap.dateTableGroupedMap;
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

    var lastCellStart = _date.default.trimTime(lastCell.startDate);

    var daysAfterView = Math.floor((endDate.getTime() - lastCellStart.getTime()) / _date.default.dateToMilliseconds('day'));
    var deltaDays = daysAfterView > 0 ? daysAfterView : 0;
    return daysCount - includedDays - deltaDays;
  };

  _proto.getColumnsCount = function getColumnsCount() {
    return this.viewDataMap.dateTableMap[0].length;
  };

  _proto.getViewEdgeIndices = function getViewEdgeIndices(isAllDayPanel) {
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
  };

  _proto.getGroupEdgeIndices = function getGroupEdgeIndices(groupIndex, isAllDay) {
    var groupedDataMap = this.groupedDataMap.dateTableGroupedMap[groupIndex];
    var cellsCount = groupedDataMap[0].length;
    var rowsCount = groupedDataMap.length;
    var firstCellIndex = groupedDataMap[0][0].position.cellIndex;
    var lastCellIndex = groupedDataMap[0][cellsCount - 1].position.cellIndex;

    if (isAllDay) {
      return {
        firstCellIndex: firstCellIndex,
        lastCellIndex: lastCellIndex,
        firstRowIndex: 0,
        lastRowIndex: 0
      };
    }

    return {
      firstCellIndex: firstCellIndex,
      lastCellIndex: lastCellIndex,
      firstRowIndex: groupedDataMap[0][0].position.rowIndex,
      lastRowIndex: groupedDataMap[rowsCount - 1][0].position.rowIndex
    };
  };

  _proto.isSameCell = function isSameCell(firstCellData, secondCellData) {
    var firstStartDate = firstCellData.startDate,
        firstGroupIndex = firstCellData.groupIndex,
        firstAllDay = firstCellData.allDay,
        firstIndex = firstCellData.index;
    var secondStartDate = secondCellData.startDate,
        secondGroupIndex = secondCellData.groupIndex,
        secondAllDay = secondCellData.allDay,
        secondIndex = secondCellData.index;
    return firstStartDate.getTime() === secondStartDate.getTime() && firstGroupIndex === secondGroupIndex && firstAllDay === secondAllDay && firstIndex === secondIndex;
  };

  _createClass(ViewDataProvider, [{
    key: "viewDataGenerator",
    get: function get() {
      if (!this._viewDataGenerator) {
        this._viewDataGenerator = new _view_data_generator.ViewDataGenerator();
      }

      return this._viewDataGenerator;
    }
  }, {
    key: "completeViewDataMap",
    get: function get() {
      return this._completeViewDataMap;
    },
    set: function set(value) {
      this._completeViewDataMap = value;
    }
  }, {
    key: "completeDateHeaderMap",
    get: function get() {
      return this._completeDateHeaderMap;
    },
    set: function set(value) {
      this._completeDateHeaderMap = value;
    }
  }, {
    key: "completeTimePanelMap",
    get: function get() {
      return this._completeTimePanelMap;
    },
    set: function set(value) {
      this._completeTimePanelMap = value;
    }
  }, {
    key: "viewData",
    get: function get() {
      return this._viewData;
    },
    set: function set(value) {
      this._viewData = value;
    }
  }, {
    key: "viewDataMap",
    get: function get() {
      return this._viewDataMap;
    },
    set: function set(value) {
      this._viewDataMap = value;
    }
  }, {
    key: "dateHeaderData",
    get: function get() {
      return this._dateHeaderData;
    },
    set: function set(value) {
      this._dateHeaderData = value;
    }
  }, {
    key: "timePanelData",
    get: function get() {
      return this._timePanelData;
    },
    set: function set(value) {
      this._timePanelData = value;
    }
  }, {
    key: "groupedDataMap",
    get: function get() {
      return this._groupedDataMapProvider.groupedDataMap;
    }
  }, {
    key: "isVerticalGroupedWorkspace",
    get: function get() {
      return this._workspace._isVerticalGroupedWorkSpace();
    }
  }]);

  return ViewDataProvider;
}();

exports.default = ViewDataProvider;
module.exports = exports.default;
module.exports.default = exports.default;
