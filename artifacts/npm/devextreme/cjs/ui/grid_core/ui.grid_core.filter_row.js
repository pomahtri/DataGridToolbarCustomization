/**
* DevExtreme (cjs/ui/grid_core/ui.grid_core.filter_row.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.filterRowModule = void 0;

var _renderer = _interopRequireDefault(require("../../core/renderer"));

var _events_engine = _interopRequireDefault(require("../../events/core/events_engine"));

var _type = require("../../core/utils/type");

var _extend = require("../../core/utils/extend");

var _index = require("../../events/utils/index");

var _iterator = require("../../core/utils/iterator");

var _uiGrid_core = _interopRequireDefault(require("./ui.grid_core.modules"));

var _uiGrid_core2 = _interopRequireDefault(require("./ui.grid_core.utils"));

var _message = _interopRequireDefault(require("../../localization/message"));

var _editor = _interopRequireDefault(require("../editor/editor"));

var _ui = _interopRequireDefault(require("../overlay/ui.overlay"));

var _menu = _interopRequireDefault(require("../menu"));

var _accessibility = require("../shared/accessibility");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OPERATION_ICONS = {
  '=': 'filter-operation-equals',
  '<>': 'filter-operation-not-equals',
  '<': 'filter-operation-less',
  '<=': 'filter-operation-less-equal',
  '>': 'filter-operation-greater',
  '>=': 'filter-operation-greater-equal',
  'default': 'filter-operation-default',
  'notcontains': 'filter-operation-not-contains',
  'contains': 'filter-operation-contains',
  'startswith': 'filter-operation-starts-with',
  'endswith': 'filter-operation-ends-with',
  'between': 'filter-operation-between'
};
var OPERATION_DESCRIPTORS = {
  '=': 'equal',
  '<>': 'notEqual',
  '<': 'lessThan',
  '<=': 'lessThanOrEqual',
  '>': 'greaterThan',
  '>=': 'greaterThanOrEqual',
  'startswith': 'startsWith',
  'contains': 'contains',
  'notcontains': 'notContains',
  'endswith': 'endsWith',
  'between': 'between'
};
var FILTERING_TIMEOUT = 700;
var CORRECT_FILTER_RANGE_OVERLAY_WIDTH = 1;
var FILTER_ROW_CLASS = 'filter-row';
var FILTER_RANGE_OVERLAY_CLASS = 'filter-range-overlay';
var FILTER_RANGE_START_CLASS = 'filter-range-start';
var FILTER_RANGE_END_CLASS = 'filter-range-end';
var MENU_CLASS = 'dx-menu';
var EDITOR_WITH_MENU_CLASS = 'dx-editor-with-menu';
var EDITOR_CONTAINER_CLASS = 'dx-editor-container';
var EDITOR_CELL_CLASS = 'dx-editor-cell';
var FILTER_MENU = 'dx-filter-menu';
var APPLY_BUTTON_CLASS = 'dx-apply-button';
var HIGHLIGHT_OUTLINE_CLASS = 'dx-highlight-outline';
var FOCUSED_CLASS = 'dx-focused';
var CELL_FOCUS_DISABLED_CLASS = 'dx-cell-focus-disabled';
var FILTER_RANGE_CONTENT_CLASS = 'dx-filter-range-content';
var FILTER_MODIFIED_CLASS = 'dx-filter-modified';
var EDITORS_INPUT_SELECTOR = 'input:not([type=\'hidden\'])';
var BETWEEN_OPERATION_DATA_TYPES = ['date', 'datetime', 'number'];

function isOnClickApplyFilterMode(that) {
  return that.option('filterRow.applyFilter') === 'onClick';
}

var ColumnHeadersViewFilterRowExtender = function () {
  var getEditorInstance = function getEditorInstance($editorContainer) {
    var $editor = $editorContainer && $editorContainer.children();
    var componentNames = $editor && $editor.data('dxComponents');
    var editor = componentNames && componentNames.length && $editor.data(componentNames[0]);

    if (editor instanceof _editor.default) {
      return editor;
    }
  };

  var getRangeTextByFilterValue = function getRangeTextByFilterValue(that, column) {
    var result = '';
    var rangeEnd = '';
    var filterValue = getColumnFilterValue(that, column);

    var formatOptions = _uiGrid_core2.default.getFormatOptionsByColumn(column, 'filterRow');

    if (Array.isArray(filterValue)) {
      result = _uiGrid_core2.default.formatValue(filterValue[0], formatOptions);
      rangeEnd = _uiGrid_core2.default.formatValue(filterValue[1], formatOptions);

      if (rangeEnd !== '') {
        result += ' - ' + rangeEnd;
      }
    } else if ((0, _type.isDefined)(filterValue)) {
      result = _uiGrid_core2.default.formatValue(filterValue, formatOptions);
    }

    return result;
  };

  function getColumnFilterValue(that, column) {
    if (column) {
      return isOnClickApplyFilterMode(that) && column.bufferedFilterValue !== undefined ? column.bufferedFilterValue : column.filterValue;
    }
  }

  var getColumnSelectedFilterOperation = function getColumnSelectedFilterOperation(that, column) {
    if (column) {
      return isOnClickApplyFilterMode(that) && column.bufferedSelectedFilterOperation !== undefined ? column.bufferedSelectedFilterOperation : column.selectedFilterOperation;
    }
  };

  var isValidFilterValue = function isValidFilterValue(filterValue, column) {
    if (column && BETWEEN_OPERATION_DATA_TYPES.indexOf(column.dataType) >= 0 && Array.isArray(filterValue)) {
      return false;
    }

    return filterValue !== undefined;
  };

  var getFilterValue = function getFilterValue(that, columnIndex, $editorContainer) {
    var column = that._columnsController.columnOption(columnIndex);

    var filterValue = getColumnFilterValue(that, column);
    var isFilterRange = $editorContainer.closest('.' + that.addWidgetPrefix(FILTER_RANGE_OVERLAY_CLASS)).length;
    var isRangeStart = $editorContainer.hasClass(that.addWidgetPrefix(FILTER_RANGE_START_CLASS));

    if (filterValue && Array.isArray(filterValue) && getColumnSelectedFilterOperation(that, column) === 'between') {
      if (isRangeStart) {
        return filterValue[0];
      } else {
        return filterValue[1];
      }
    }

    return !isFilterRange && isValidFilterValue(filterValue, column) ? filterValue : null;
  };

  var normalizeFilterValue = function normalizeFilterValue(that, filterValue, column, $editorContainer) {
    if (getColumnSelectedFilterOperation(that, column) === 'between') {
      var columnFilterValue = getColumnFilterValue(that, column);

      if ($editorContainer.hasClass(that.addWidgetPrefix(FILTER_RANGE_START_CLASS))) {
        return [filterValue, Array.isArray(columnFilterValue) ? columnFilterValue[1] : undefined];
      } else {
        return [Array.isArray(columnFilterValue) ? columnFilterValue[0] : columnFilterValue, filterValue];
      }
    }

    return filterValue;
  };

  var updateFilterValue = function updateFilterValue(that, options) {
    var value = options.value === '' ? null : options.value;
    var $editorContainer = options.container;

    var column = that._columnsController.columnOption(options.column.index);

    var filterValue = getFilterValue(that, column.index, $editorContainer);
    if (!(0, _type.isDefined)(filterValue) && !(0, _type.isDefined)(value)) return;

    that._applyFilterViewController.setHighLight($editorContainer, filterValue !== value);

    that._columnsController.columnOption(column.index, isOnClickApplyFilterMode(that) ? 'bufferedFilterValue' : 'filterValue', normalizeFilterValue(that, value, column, $editorContainer), options.notFireEvent);
  };

  return {
    _updateEditorValue: function _updateEditorValue(column, $editorContainer) {
      var that = this;
      var editor = getEditorInstance($editorContainer);
      editor && editor.option('value', getFilterValue(that, column.index, $editorContainer));
    },
    _columnOptionChanged: function _columnOptionChanged(e) {
      var that = this;
      var optionNames = e.optionNames;
      var $cell;
      var $editorContainer;
      var $editorRangeElements;
      var $menu;

      if (_uiGrid_core2.default.checkChanges(optionNames, ['filterValue', 'bufferedFilterValue', 'selectedFilterOperation', 'bufferedSelectedFilterOperation']) && e.columnIndex !== undefined) {
        var visibleIndex = that._columnsController.getVisibleIndex(e.columnIndex);

        var column = that._columnsController.columnOption(e.columnIndex);

        $cell = that._getCellElement(that.element().find('.' + that.addWidgetPrefix(FILTER_ROW_CLASS)).index(), visibleIndex) || (0, _renderer.default)();
        $editorContainer = $cell.find('.' + EDITOR_CONTAINER_CLASS).first();

        if (optionNames.filterValue || optionNames.bufferedFilterValue) {
          that._updateEditorValue(column, $editorContainer);

          var overlayInstance = $cell.find('.' + that.addWidgetPrefix(FILTER_RANGE_OVERLAY_CLASS)).data('dxOverlay');

          if (overlayInstance) {
            $editorRangeElements = overlayInstance.$content().find('.' + EDITOR_CONTAINER_CLASS);

            that._updateEditorValue(column, $editorRangeElements.first());

            that._updateEditorValue(column, $editorRangeElements.last());
          }

          if (!overlayInstance || !overlayInstance.option('visible')) {
            that._updateFilterRangeContent($cell, getRangeTextByFilterValue(that, column));
          }
        }

        if (optionNames.selectedFilterOperation || optionNames.bufferedSelectedFilterOperation) {
          if (visibleIndex >= 0 && column) {
            $menu = $cell.find('.' + MENU_CLASS);

            if ($menu.length) {
              that._updateFilterOperationChooser($menu, column, $editorContainer);

              if (getColumnSelectedFilterOperation(that, column) === 'between') {
                that._renderFilterRangeContent($cell, column);
              } else if ($editorContainer.find('.' + FILTER_RANGE_CONTENT_CLASS).length) {
                that._renderEditor($editorContainer, that._getEditorOptions($editorContainer, column));

                that._hideFilterRange();
              }
            }
          }
        }

        return;
      }

      that.callBase(e);
    },
    _renderCore: function _renderCore() {
      this._filterRangeOverlayInstance = null;
      this.callBase.apply(this, arguments);
    },
    _resizeCore: function _resizeCore() {
      this.callBase.apply(this, arguments);
      this._filterRangeOverlayInstance && this._filterRangeOverlayInstance.repaint();
    },
    isFilterRowVisible: function isFilterRowVisible() {
      return this._isElementVisible(this.option('filterRow'));
    },
    isVisible: function isVisible() {
      return this.callBase() || this.isFilterRowVisible();
    },
    init: function init() {
      this.callBase();
      this._applyFilterViewController = this.getController('applyFilter');
    },
    _initFilterRangeOverlay: function _initFilterRangeOverlay($cell, column) {
      var that = this;
      var sharedData = {};
      var $editorContainer = $cell.find('.dx-editor-container');
      var $overlay = (0, _renderer.default)('<div>').addClass(that.addWidgetPrefix(FILTER_RANGE_OVERLAY_CLASS)).appendTo($cell);
      return that._createComponent($overlay, _ui.default, {
        height: 'auto',
        shading: false,
        showTitle: false,
        focusStateEnabled: false,
        closeOnTargetScroll: false,
        closeOnOutsideClick: true,
        animation: false,
        position: {
          my: 'top',
          at: 'top',
          of: $editorContainer.length && $editorContainer || $cell,
          offset: '0 -1'
        },
        contentTemplate: function contentTemplate(contentElement) {
          var editorOptions;
          var $editor = (0, _renderer.default)('<div>').addClass(EDITOR_CONTAINER_CLASS + ' ' + that.addWidgetPrefix(FILTER_RANGE_START_CLASS)).appendTo(contentElement);
          column = that._columnsController.columnOption(column.index);
          editorOptions = that._getEditorOptions($editor, column);
          editorOptions.sharedData = sharedData;

          that._renderEditor($editor, editorOptions);

          _events_engine.default.on($editor.find(EDITORS_INPUT_SELECTOR), 'keydown', function (e) {
            var $prevElement = $cell.find('[tabindex]').not(e.target).first();

            if ((0, _index.normalizeKeyName)(e) === 'tab' && e.shiftKey) {
              e.preventDefault();

              that._hideFilterRange();

              if (!$prevElement.length) {
                $prevElement = $cell.prev().find('[tabindex]').last();
              }

              _events_engine.default.trigger($prevElement, 'focus');
            }
          });

          $editor = (0, _renderer.default)('<div>').addClass(EDITOR_CONTAINER_CLASS + ' ' + that.addWidgetPrefix(FILTER_RANGE_END_CLASS)).appendTo(contentElement);
          editorOptions = that._getEditorOptions($editor, column);
          editorOptions.sharedData = sharedData;

          that._renderEditor($editor, editorOptions);

          _events_engine.default.on($editor.find(EDITORS_INPUT_SELECTOR), 'keydown', function (e) {
            if ((0, _index.normalizeKeyName)(e) === 'tab' && !e.shiftKey) {
              e.preventDefault();

              that._hideFilterRange();

              _events_engine.default.trigger($cell.next().find('[tabindex]').first(), 'focus');
            }
          });

          return (0, _renderer.default)(contentElement).addClass(that.getWidgetContainerClass());
        },
        onShown: function onShown(e) {
          var $editor = e.component.$content().find('.' + EDITOR_CONTAINER_CLASS).first();

          _events_engine.default.trigger($editor.find(EDITORS_INPUT_SELECTOR), 'focus');
        },
        onHidden: function onHidden() {
          column = that._columnsController.columnOption(column.index);
          $cell.find('.' + MENU_CLASS).parent().addClass(EDITOR_WITH_MENU_CLASS);

          if (getColumnSelectedFilterOperation(that, column) === 'between') {
            that._updateFilterRangeContent($cell, getRangeTextByFilterValue(that, column));

            that.component.updateDimensions();
          }
        }
      });
    },
    _updateFilterRangeOverlay: function _updateFilterRangeOverlay(options) {
      var overlayInstance = this._filterRangeOverlayInstance;
      overlayInstance && overlayInstance.option(options);
    },
    _showFilterRange: function _showFilterRange($cell, column) {
      var that = this;
      var $overlay = $cell.children('.' + that.addWidgetPrefix(FILTER_RANGE_OVERLAY_CLASS));
      var overlayInstance = $overlay.length && $overlay.data('dxOverlay');

      if (!overlayInstance && column) {
        overlayInstance = that._initFilterRangeOverlay($cell, column);
      }

      if (!overlayInstance.option('visible')) {
        that._filterRangeOverlayInstance && that._filterRangeOverlayInstance.hide();
        that._filterRangeOverlayInstance = overlayInstance;

        that._updateFilterRangeOverlay({
          width: $cell.outerWidth(true) + CORRECT_FILTER_RANGE_OVERLAY_WIDTH
        });

        that._filterRangeOverlayInstance && that._filterRangeOverlayInstance.show();
      }
    },
    _hideFilterRange: function _hideFilterRange() {
      var overlayInstance = this._filterRangeOverlayInstance;
      overlayInstance && overlayInstance.hide();
    },
    getFilterRangeOverlayInstance: function getFilterRangeOverlayInstance() {
      return this._filterRangeOverlayInstance;
    },
    _createRow: function _createRow(row) {
      var _this = this;

      var $row = this.callBase(row);

      if (row.rowType === 'filter') {
        $row.addClass(this.addWidgetPrefix(FILTER_ROW_CLASS));

        if (!this.option('useLegacyKeyboardNavigation')) {
          _events_engine.default.on($row, 'keydown', function (event) {
            return (0, _accessibility.selectView)('filterRow', _this, event);
          });
        }
      }

      return $row;
    },
    _getRows: function _getRows() {
      var result = this.callBase();

      if (this.isFilterRowVisible()) {
        result.push({
          rowType: 'filter'
        });
      }

      return result;
    },
    _renderFilterCell: function _renderFilterCell(cell, options) {
      var that = this;
      var column = options.column;
      var $cell = (0, _renderer.default)(cell);

      if (that.component.option('showColumnHeaders')) {
        that.setAria('describedby', column.headerId, $cell);
      }

      that.setAria('label', _message.default.format('dxDataGrid-ariaFilterCell'), $cell);
      $cell.addClass(EDITOR_CELL_CLASS);
      var $container = (0, _renderer.default)('<div>').appendTo($cell);
      var $editorContainer = (0, _renderer.default)('<div>').addClass(EDITOR_CONTAINER_CLASS).appendTo($container);

      if (getColumnSelectedFilterOperation(that, column) === 'between') {
        that._renderFilterRangeContent($cell, column);
      } else {
        var editorOptions = that._getEditorOptions($editorContainer, column);

        that._renderEditor($editorContainer, editorOptions);
      }

      var alignment = column.alignment;

      if (alignment && alignment !== 'center') {
        $cell.find(EDITORS_INPUT_SELECTOR).first().css('textAlign', column.alignment);
      }

      if (column.filterOperations && column.filterOperations.length) {
        that._renderFilterOperationChooser($container, column, $editorContainer);
      }
    },
    _renderCellContent: function _renderCellContent($cell, options) {
      // TODO _getCellTemplate
      var that = this;
      var column = options.column;

      if (options.rowType === 'filter') {
        if (column.command) {
          $cell.html('&nbsp;');
        } else if (column.allowFiltering) {
          that.renderTemplate($cell, that._renderFilterCell.bind(that), options).done(function () {
            that._updateCell($cell, options);
          });
          return;
        }
      }

      that.callBase($cell, options);
    },
    _getEditorOptions: function _getEditorOptions($editorContainer, column) {
      var that = this;
      var accessibilityOptions = {
        editorOptions: {
          inputAttr: that._getFilterInputAccessibilityAttributes(column)
        }
      };
      var result = (0, _extend.extend)(accessibilityOptions, column, {
        value: getFilterValue(that, column.index, $editorContainer),
        parentType: 'filterRow',
        showAllText: that.option('filterRow.showAllText'),
        updateValueTimeout: that.option('filterRow.applyFilter') === 'onClick' ? 0 : FILTERING_TIMEOUT,
        width: null,
        setValue: function setValue(value, notFireEvent) {
          updateFilterValue(that, {
            column: column,
            value: value,
            container: $editorContainer,
            notFireEvent: notFireEvent
          });
        }
      });

      if (getColumnSelectedFilterOperation(that, column) === 'between') {
        if ($editorContainer.hasClass(that.addWidgetPrefix(FILTER_RANGE_START_CLASS))) {
          result.placeholder = that.option('filterRow.betweenStartText');
        } else {
          result.placeholder = that.option('filterRow.betweenEndText');
        }
      }

      return result;
    },
    _getFilterInputAccessibilityAttributes: function _getFilterInputAccessibilityAttributes(column) {
      var columnAriaLabel = _message.default.format('dxDataGrid-ariaFilterCell');

      if (this.component.option('showColumnHeaders')) {
        return {
          'aria-label': columnAriaLabel,
          'aria-describedby': column.headerId
        };
      }

      return {
        'aria-label': columnAriaLabel
      };
    },
    _renderEditor: function _renderEditor($editorContainer, options) {
      $editorContainer.empty();
      return this.getController('editorFactory').createEditor((0, _renderer.default)('<div>').appendTo($editorContainer), options);
    },
    _renderFilterRangeContent: function _renderFilterRangeContent($cell, column) {
      var that = this;
      var $editorContainer = $cell.find('.' + EDITOR_CONTAINER_CLASS).first();
      $editorContainer.empty();
      var $filterRangeContent = (0, _renderer.default)('<div>').addClass(FILTER_RANGE_CONTENT_CLASS).attr('tabindex', this.option('tabIndex'));

      _events_engine.default.on($filterRangeContent, 'focusin', function () {
        that._showFilterRange($cell, column);
      });

      $filterRangeContent.appendTo($editorContainer);

      that._updateFilterRangeContent($cell, getRangeTextByFilterValue(that, column));
    },
    _updateFilterRangeContent: function _updateFilterRangeContent($cell, value) {
      var $filterRangeContent = $cell.find('.' + FILTER_RANGE_CONTENT_CLASS);

      if ($filterRangeContent.length) {
        if (value === '') {
          $filterRangeContent.html('&nbsp;');
        } else {
          $filterRangeContent.text(value);
        }
      }
    },
    _updateFilterOperationChooser: function _updateFilterOperationChooser($menu, column, $editorContainer) {
      var that = this;
      var isCellWasFocused;

      var restoreFocus = function restoreFocus() {
        var menu = _menu.default.getInstance($menu);

        menu && menu.option('focusedElement', null);
        isCellWasFocused && that._focusEditor($editorContainer);
      };

      that._createComponent($menu, _menu.default, {
        integrationOptions: {},
        activeStateEnabled: false,
        selectionMode: 'single',
        cssClass: that.getWidgetContainerClass() + ' ' + CELL_FOCUS_DISABLED_CLASS + ' ' + FILTER_MENU,
        showFirstSubmenuMode: 'onHover',
        hideSubmenuOnMouseLeave: true,
        items: [{
          disabled: column.filterOperations && column.filterOperations.length ? false : true,
          icon: OPERATION_ICONS[getColumnSelectedFilterOperation(that, column) || 'default'],
          selectable: false,
          items: that._getFilterOperationMenuItems(column)
        }],
        onItemClick: function onItemClick(properties) {
          var selectedFilterOperation = properties.itemData.name;
          var columnSelectedFilterOperation = getColumnSelectedFilterOperation(that, column);
          var notFocusEditor = false;
          var isOnClickMode = isOnClickApplyFilterMode(that);
          var options = {};

          if (properties.itemData.items || selectedFilterOperation && selectedFilterOperation === columnSelectedFilterOperation) {
            return;
          }

          if (selectedFilterOperation) {
            options[isOnClickMode ? 'bufferedSelectedFilterOperation' : 'selectedFilterOperation'] = selectedFilterOperation;

            if (selectedFilterOperation === 'between' || columnSelectedFilterOperation === 'between') {
              notFocusEditor = selectedFilterOperation === 'between';
              options[isOnClickMode ? 'bufferedFilterValue' : 'filterValue'] = null;
            }
          } else {
            options[isOnClickMode ? 'bufferedFilterValue' : 'filterValue'] = null;
            options[isOnClickMode ? 'bufferedSelectedFilterOperation' : 'selectedFilterOperation'] = column.defaultSelectedFilterOperation || null;
          }

          that._columnsController.columnOption(column.index, options);

          that._applyFilterViewController.setHighLight($editorContainer, true);

          if (!selectedFilterOperation) {
            var editor = getEditorInstance($editorContainer);

            if (editor && editor.NAME === 'dxDateBox' && !editor.option('isValid')) {
              editor.reset();
              editor.option('isValid', true);
            }
          }

          if (!notFocusEditor) {
            that._focusEditor($editorContainer);
          } else {
            that._showFilterRange($editorContainer.closest('.' + EDITOR_CELL_CLASS), column);
          }
        },
        onSubmenuShown: function onSubmenuShown() {
          isCellWasFocused = that._isEditorFocused($editorContainer);
          that.getController('editorFactory').loseFocus();
        },
        onSubmenuHiding: function onSubmenuHiding() {
          _events_engine.default.trigger($menu, 'blur');

          restoreFocus();
        },
        onContentReady: function onContentReady(e) {
          _events_engine.default.on($menu, 'blur', function () {
            var menu = e.component;

            menu._hideSubmenu(menu._visibleSubmenu);

            restoreFocus();
          });
        },
        rtlEnabled: that.option('rtlEnabled')
      });
    },
    _isEditorFocused: function _isEditorFocused($container) {
      return $container.hasClass(FOCUSED_CLASS) || $container.parents('.' + FOCUSED_CLASS).length;
    },
    _focusEditor: function _focusEditor($container) {
      this.getController('editorFactory').focus($container);

      _events_engine.default.trigger($container.find(EDITORS_INPUT_SELECTOR), 'focus');
    },
    _renderFilterOperationChooser: function _renderFilterOperationChooser($container, column, $editorContainer) {
      var that = this;
      var $menu;

      if (that.option('filterRow.showOperationChooser')) {
        $container.addClass(EDITOR_WITH_MENU_CLASS);
        $menu = (0, _renderer.default)('<div>').prependTo($container);

        that._updateFilterOperationChooser($menu, column, $editorContainer);
      }
    },
    _getFilterOperationMenuItems: function _getFilterOperationMenuItems(column) {
      var that = this;
      var result = [{}];
      var filterRowOptions = that.option('filterRow');
      var operationDescriptions = filterRowOptions && filterRowOptions.operationDescriptions || {};

      if (column.filterOperations && column.filterOperations.length) {
        var availableFilterOperations = column.filterOperations.filter(function (value) {
          return (0, _type.isDefined)(OPERATION_DESCRIPTORS[value]);
        });
        result = (0, _iterator.map)(availableFilterOperations, function (value) {
          var descriptionName = OPERATION_DESCRIPTORS[value];
          return {
            name: value,
            selected: (getColumnSelectedFilterOperation(that, column) || column.defaultFilterOperation) === value,
            text: operationDescriptions[descriptionName],
            icon: OPERATION_ICONS[value]
          };
        });
        result.push({
          name: null,
          text: filterRowOptions && filterRowOptions.resetOperationText,
          icon: OPERATION_ICONS['default']
        });
      }

      return result;
    },
    optionChanged: function optionChanged(args) {
      var that = this;

      switch (args.name) {
        case 'filterRow':
        case 'showColumnLines':
          this._invalidate(true, true);

          args.handled = true;
          break;

        default:
          that.callBase(args);
          break;
      }
    }
  };
}();

var DataControllerFilterRowExtender = {
  skipCalculateColumnFilters: function skipCalculateColumnFilters() {
    return false;
  },
  _calculateAdditionalFilter: function _calculateAdditionalFilter() {
    if (this.skipCalculateColumnFilters()) {
      return this.callBase();
    }

    var filters = [this.callBase()];

    var columns = this._columnsController.getVisibleColumns(null, true);

    (0, _iterator.each)(columns, function () {
      if (this.allowFiltering && this.calculateFilterExpression && (0, _type.isDefined)(this.filterValue)) {
        var filter = this.createFilterExpression(this.filterValue, this.selectedFilterOperation || this.defaultFilterOperation, 'filterRow');
        filters.push(filter);
      }
    });
    return _uiGrid_core2.default.combineFilters(filters);
  }
};

var ApplyFilterViewController = _uiGrid_core.default.ViewController.inherit({
  _getHeaderPanel: function _getHeaderPanel() {
    if (!this._headerPanel) {
      this._headerPanel = this.getView('headerPanel');
    }

    return this._headerPanel;
  },
  setHighLight: function setHighLight($element, value) {
    if (isOnClickApplyFilterMode(this)) {
      $element && $element.toggleClass(HIGHLIGHT_OUTLINE_CLASS, value) && $element.closest('.' + EDITOR_CELL_CLASS).toggleClass(FILTER_MODIFIED_CLASS, value);

      this._getHeaderPanel().enableApplyButton(value);
    }
  },
  applyFilter: function applyFilter() {
    var columnsController = this.getController('columns');
    var columns = columnsController.getColumns();
    columnsController.beginUpdate();

    for (var i = 0; i < columns.length; i++) {
      var column = columns[i];

      if (column.bufferedFilterValue !== undefined) {
        columnsController.columnOption(i, 'filterValue', column.bufferedFilterValue);
        column.bufferedFilterValue = undefined;
      }

      if (column.bufferedSelectedFilterOperation !== undefined) {
        columnsController.columnOption(i, 'selectedFilterOperation', column.bufferedSelectedFilterOperation);
        column.bufferedSelectedFilterOperation = undefined;
      }
    }

    columnsController.endUpdate();
    this.removeHighLights();
  },
  removeHighLights: function removeHighLights() {
    if (isOnClickApplyFilterMode(this)) {
      var columnHeadersViewElement = this.getView('columnHeadersView').element();
      columnHeadersViewElement.find('.' + this.addWidgetPrefix(FILTER_ROW_CLASS) + ' .' + HIGHLIGHT_OUTLINE_CLASS).removeClass(HIGHLIGHT_OUTLINE_CLASS);
      columnHeadersViewElement.find('.' + this.addWidgetPrefix(FILTER_ROW_CLASS) + ' .' + FILTER_MODIFIED_CLASS).removeClass(FILTER_MODIFIED_CLASS);

      this._getHeaderPanel().enableApplyButton(false);
    }
  }
});

var filterRowModule = {
  defaultOptions: function defaultOptions() {
    return {
      filterRow: {
        visible: false,
        showOperationChooser: true,
        showAllText: _message.default.format('dxDataGrid-filterRowShowAllText'),
        resetOperationText: _message.default.format('dxDataGrid-filterRowResetOperationText'),
        applyFilter: 'auto',
        applyFilterText: _message.default.format('dxDataGrid-applyFilterText'),
        operationDescriptions: {
          equal: _message.default.format('dxDataGrid-filterRowOperationEquals'),
          notEqual: _message.default.format('dxDataGrid-filterRowOperationNotEquals'),
          lessThan: _message.default.format('dxDataGrid-filterRowOperationLess'),
          lessThanOrEqual: _message.default.format('dxDataGrid-filterRowOperationLessOrEquals'),
          greaterThan: _message.default.format('dxDataGrid-filterRowOperationGreater'),
          greaterThanOrEqual: _message.default.format('dxDataGrid-filterRowOperationGreaterOrEquals'),
          startsWith: _message.default.format('dxDataGrid-filterRowOperationStartsWith'),
          contains: _message.default.format('dxDataGrid-filterRowOperationContains'),
          notContains: _message.default.format('dxDataGrid-filterRowOperationNotContains'),
          endsWith: _message.default.format('dxDataGrid-filterRowOperationEndsWith'),
          between: _message.default.format('dxDataGrid-filterRowOperationBetween'),
          isBlank: _message.default.format('dxFilterBuilder-filterOperationIsBlank'),
          isNotBlank: _message.default.format('dxFilterBuilder-filterOperationIsNotBlank')
        },
        betweenStartText: _message.default.format('dxDataGrid-filterRowOperationBetweenStartText'),
        betweenEndText: _message.default.format('dxDataGrid-filterRowOperationBetweenEndText')
      }
    };
  },
  controllers: {
    applyFilter: ApplyFilterViewController
  },
  extenders: {
    controllers: {
      data: DataControllerFilterRowExtender,
      columnsResizer: {
        _startResizing: function _startResizing() {
          var that = this;
          that.callBase.apply(that, arguments);

          if (that.isResizing()) {
            var overlayInstance = that._columnHeadersView.getFilterRangeOverlayInstance();

            if (overlayInstance) {
              var cellIndex = overlayInstance.$element().closest('td').index();

              if (cellIndex === that._targetPoint.columnIndex || cellIndex === that._targetPoint.columnIndex + 1) {
                overlayInstance.$content().hide();
              }
            }
          }
        },
        _endResizing: function _endResizing() {
          var that = this;
          var $cell;

          if (that.isResizing()) {
            var overlayInstance = that._columnHeadersView.getFilterRangeOverlayInstance();

            if (overlayInstance) {
              $cell = overlayInstance.$element().closest('td');

              that._columnHeadersView._updateFilterRangeOverlay({
                width: $cell.outerWidth(true) + CORRECT_FILTER_RANGE_OVERLAY_WIDTH
              });

              overlayInstance.$content().show();
            }
          }

          that.callBase.apply(that, arguments);
        }
      }
    },
    views: {
      columnHeadersView: ColumnHeadersViewFilterRowExtender,
      headerPanel: {
        _getToolbarItems: function _getToolbarItems() {
          var items = this.callBase();

          var filterItem = this._prepareFilterItem(items);

          return filterItem.concat(items);
        },
        _prepareFilterItem: function _prepareFilterItem() {
          var that = this;
          var filterItem = [];

          if (that._isShowApplyFilterButton()) {
            var hintText = that.option('filterRow.applyFilterText');

            var columns = that._columnsController.getColumns();

            var disabled = !columns.filter(function (column) {
              return column.bufferedFilterValue !== undefined;
            }).length;

            var onInitialized = function onInitialized(e) {
              (0, _renderer.default)(e.element).addClass(that._getToolbarButtonClass(APPLY_BUTTON_CLASS));
            };

            var onClickHandler = function onClickHandler() {
              that._applyFilterViewController.applyFilter();
            };

            var toolbarItem = {
              widget: 'dxButton',
              options: {
                icon: 'apply-filter',
                disabled: disabled,
                onClick: onClickHandler,
                hint: hintText,
                text: hintText,
                onInitialized: onInitialized
              },
              showText: 'inMenu',
              name: 'applyFilterButton',
              location: 'after',
              locateInMenu: 'auto',
              sortIndex: 10
            };
            filterItem.push(toolbarItem);
          }

          return filterItem;
        },
        _isShowApplyFilterButton: function _isShowApplyFilterButton() {
          var filterRowOptions = this.option('filterRow');
          return filterRowOptions && filterRowOptions.visible && filterRowOptions.applyFilter === 'onClick';
        },
        init: function init() {
          this.callBase();
          this._dataController = this.getController('data');
          this._applyFilterViewController = this.getController('applyFilter');
        },
        enableApplyButton: function enableApplyButton(value) {
          this.setToolbarItemDisabled('applyFilterButton', !value);
        },
        isVisible: function isVisible() {
          return this.callBase() || this._isShowApplyFilterButton();
        },
        optionChanged: function optionChanged(args) {
          if (args.name === 'filterRow') {
            this._invalidate();

            args.handled = true;
          } else {
            this.callBase(args);
          }
        }
      }
    }
  }
};
exports.filterRowModule = filterRowModule;
