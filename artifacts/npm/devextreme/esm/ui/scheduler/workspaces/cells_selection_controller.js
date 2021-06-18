/**
* DevExtreme (esm/ui/scheduler/workspaces/cells_selection_controller.js)
* Version: 21.2.0
* Build date: Fri Jun 18 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import _extends from "@babel/runtime/helpers/esm/extends";
export class CellsSelectionController {
  handleArrowClick(options) {
    var {
      key,
      focusedCellPosition,
      edgeIndices,
      getCellDataByPosition,
      isAllDayPanelCell
    } = options;
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
      currentCellData
    }));
  }

  getCellFromNextRowPosition(focusedCellPosition, direction, edgeIndices) {
    var {
      cellIndex,
      rowIndex
    } = focusedCellPosition;
    var deltaPosition = direction === 'next' ? 1 : -1;
    var nextRowIndex = rowIndex + deltaPosition;
    var validRowIndex = nextRowIndex >= 0 && nextRowIndex <= edgeIndices.lastRowIndex ? nextRowIndex : rowIndex;
    return {
      cellIndex,
      rowIndex: validRowIndex
    };
  }

  getCellFromNextColumnPosition(options) {
    var {
      focusedCellPosition,
      direction,
      edgeIndices,
      isRTL,
      isGroupedByDate,
      groupCount,
      isMultiSelection,
      isDateAndTimeView
    } = options;
    var {
      cellIndex,
      rowIndex
    } = focusedCellPosition;
    var {
      firstCellIndex,
      lastCellIndex,
      firstRowIndex,
      lastRowIndex
    } = edgeIndices;
    var step = isGroupedByDate && isMultiSelection ? groupCount : 1;
    var sign = isRTL ? -1 : 1;
    var deltaCellIndex = direction === 'next' ? sign * step : -1 * sign * step;
    var nextCellIndex = cellIndex + deltaCellIndex;
    var isValidCellIndex = nextCellIndex >= firstCellIndex && nextCellIndex <= lastCellIndex;

    if (isValidCellIndex) {
      return {
        cellIndex: nextCellIndex,
        rowIndex
      };
    }

    return isDateAndTimeView ? focusedCellPosition : this._processEdgeCell({
      nextCellIndex,
      rowIndex,
      cellIndex,
      firstCellIndex,
      lastCellIndex,
      firstRowIndex,
      lastRowIndex,
      step
    });
  }

  _processEdgeCell(options) {
    var {
      nextCellIndex,
      rowIndex,
      cellIndex,
      firstCellIndex,
      lastCellIndex,
      firstRowIndex,
      lastRowIndex,
      step
    } = options;
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
  }

  moveToCell(options) {
    var {
      isMultiSelection,
      isMultiSelectionAllowed,
      focusedCellData,
      currentCellData
    } = options;
    var isValidMultiSelection = isMultiSelection && isMultiSelectionAllowed;
    var nextFocusedCellData = isValidMultiSelection ? this._getNextCellData(currentCellData, focusedCellData) : currentCellData;
    return nextFocusedCellData;
  }

  _getNextCellData(nextFocusedCellData, focusedCellData, isVirtualCell) {
    if (isVirtualCell) {
      return focusedCellData;
    }

    var isValidNextFocusedCell = this._isValidNextFocusedCell(nextFocusedCellData, focusedCellData);

    return isValidNextFocusedCell ? nextFocusedCellData : focusedCellData;
  }

  _isValidNextFocusedCell(nextFocusedCellData, focusedCellData) {
    if (!focusedCellData) {
      return true;
    }

    var {
      groupIndex,
      allDay
    } = focusedCellData;
    var {
      groupIndex: nextGroupIndex,
      allDay: nextAllDay
    } = nextFocusedCellData;
    return groupIndex === nextGroupIndex && allDay === nextAllDay;
  }

}
