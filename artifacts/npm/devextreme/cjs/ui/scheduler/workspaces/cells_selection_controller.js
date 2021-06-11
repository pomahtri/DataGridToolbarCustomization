/**
* DevExtreme (cjs/ui/scheduler/workspaces/cells_selection_controller.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.CellsSelectionController = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CellsSelectionController = /*#__PURE__*/function () {
  function CellsSelectionController() {}

  var _proto = CellsSelectionController.prototype;

  _proto.handleArrowClick = function handleArrowClick(options) {
    var key = options.key,
        focusedCellPosition = options.focusedCellPosition,
        edgeIndices = options.edgeIndices,
        getCellDataByPosition = options.getCellDataByPosition,
        isAllDayPanelCell = options.isAllDayPanelCell;
    var nextCellIndices;

    switch (key) {
      case 'down':
        nextCellIndices = this.getCellFromNextRowPosition(focusedCellPosition, 'next', edgeIndices);
        break;

      case 'up':
        nextCellIndices = this.getCellFromNextRowPosition(focusedCellPosition, 'prev', edgeIndices);
        break;

      case 'left':
        nextCellIndices = this.getCellFromNextColumnPosition(_extends({}, options, {
          direction: 'prev'
        }));
        break;

      case 'right':
        nextCellIndices = this.getCellFromNextColumnPosition(_extends({}, options, {
          direction: 'next'
        }));
        break;
    }

    var currentCellData = getCellDataByPosition(nextCellIndices.rowIndex, nextCellIndices.cellIndex, isAllDayPanelCell);
    return this.moveToCell(_extends({}, options, {
      currentCellData: currentCellData
    }));
  };

  _proto.getCellFromNextRowPosition = function getCellFromNextRowPosition(focusedCellPosition, direction, edgeIndices) {
    var cellIndex = focusedCellPosition.cellIndex,
        rowIndex = focusedCellPosition.rowIndex;
    var deltaPosition = direction === 'next' ? 1 : -1;
    var nextRowIndex = rowIndex + deltaPosition;
    var validRowIndex = nextRowIndex >= 0 && nextRowIndex <= edgeIndices.lastRowIndex ? nextRowIndex : rowIndex;
    return {
      cellIndex: cellIndex,
      rowIndex: validRowIndex
    };
  };

  _proto.getCellFromNextColumnPosition = function getCellFromNextColumnPosition(options) {
    var focusedCellPosition = options.focusedCellPosition,
        direction = options.direction,
        edgeIndices = options.edgeIndices,
        isRTL = options.isRTL,
        isGroupedByDate = options.isGroupedByDate,
        groupCount = options.groupCount,
        isMultiSelection = options.isMultiSelection,
        isDateAndTimeView = options.isDateAndTimeView;
    var cellIndex = focusedCellPosition.cellIndex,
        rowIndex = focusedCellPosition.rowIndex;
    var firstCellIndex = edgeIndices.firstCellIndex,
        lastCellIndex = edgeIndices.lastCellIndex,
        firstRowIndex = edgeIndices.firstRowIndex,
        lastRowIndex = edgeIndices.lastRowIndex;
    var step = isGroupedByDate && isMultiSelection ? groupCount : 1;
    var sign = isRTL ? -1 : 1;
    var deltaCellIndex = direction === 'next' ? sign * step : -1 * sign * step;
    var nextCellIndex = cellIndex + deltaCellIndex;
    var isValidCellIndex = nextCellIndex >= firstCellIndex && nextCellIndex <= lastCellIndex;

    if (isValidCellIndex) {
      return {
        cellIndex: nextCellIndex,
        rowIndex: rowIndex
      };
    }

    return isDateAndTimeView ? focusedCellPosition : this._processEdgeCell({
      nextCellIndex: nextCellIndex,
      rowIndex: rowIndex,
      cellIndex: cellIndex,
      firstCellIndex: firstCellIndex,
      lastCellIndex: lastCellIndex,
      firstRowIndex: firstRowIndex,
      lastRowIndex: lastRowIndex,
      step: step
    });
  };

  _proto._processEdgeCell = function _processEdgeCell(options) {
    var nextCellIndex = options.nextCellIndex,
        rowIndex = options.rowIndex,
        cellIndex = options.cellIndex,
        firstCellIndex = options.firstCellIndex,
        lastCellIndex = options.lastCellIndex,
        firstRowIndex = options.firstRowIndex,
        lastRowIndex = options.lastRowIndex,
        step = options.step;
    var validCellIndex = nextCellIndex;
    var validRowIndex = rowIndex;
    var isLeftEdgeCell = nextCellIndex < firstCellIndex;
    var isRightEdgeCell = nextCellIndex > lastCellIndex;

    if (isLeftEdgeCell) {
      var cellIndexInNextRow = lastCellIndex - (step - cellIndex % step - 1);
      var nextRowIndex = rowIndex - 1;
      var isValidRowIndex = nextRowIndex >= firstRowIndex;
      validRowIndex = isValidRowIndex ? nextRowIndex : rowIndex;
      validCellIndex = isValidRowIndex ? cellIndexInNextRow : cellIndex;
    }

    if (isRightEdgeCell) {
      var _cellIndexInNextRow = firstCellIndex + cellIndex % step;

      var _nextRowIndex = rowIndex + 1;

      var _isValidRowIndex = _nextRowIndex <= lastRowIndex;

      validRowIndex = _isValidRowIndex ? _nextRowIndex : rowIndex;
      validCellIndex = _isValidRowIndex ? _cellIndexInNextRow : cellIndex;
    }

    return {
      cellIndex: validCellIndex,
      rowIndex: validRowIndex
    };
  };

  _proto.moveToCell = function moveToCell(options) {
    var isMultiSelection = options.isMultiSelection,
        isMultiSelectionAllowed = options.isMultiSelectionAllowed,
        focusedCellData = options.focusedCellData,
        currentCellData = options.currentCellData;
    var isValidMultiSelection = isMultiSelection && isMultiSelectionAllowed;
    var nextFocusedCellData = isValidMultiSelection ? this._getNextCellData(currentCellData, focusedCellData) : currentCellData;
    return nextFocusedCellData;
  };

  _proto._getNextCellData = function _getNextCellData(nextFocusedCellData, focusedCellData, isVirtualCell) {
    if (isVirtualCell) {
      return focusedCellData;
    }

    var isValidNextFocusedCell = this._isValidNextFocusedCell(nextFocusedCellData, focusedCellData);

    return isValidNextFocusedCell ? nextFocusedCellData : focusedCellData;
  };

  _proto._isValidNextFocusedCell = function _isValidNextFocusedCell(nextFocusedCellData, focusedCellData) {
    if (!focusedCellData) {
      return true;
    }

    var groupIndex = focusedCellData.groupIndex,
        allDay = focusedCellData.allDay;
    var nextGroupIndex = nextFocusedCellData.groupIndex,
        nextAllDay = nextFocusedCellData.allDay;
    return groupIndex === nextGroupIndex && allDay === nextAllDay;
  };

  return CellsSelectionController;
}();

exports.CellsSelectionController = CellsSelectionController;
