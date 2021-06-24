/**
* DevExtreme (renovation/ui/scheduler/workspaces/base/header_panel/date_header/cell.js)
* Version: 21.2.0
* Build date: Thu Jun 24 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.DateHeaderCell = exports.DateHeaderCellProps = exports.viewFunction = void 0;

var _inferno = require("inferno");

var _vdom = require("@devextreme/vdom");

var _cell = require("../../cell");

var _combine_classes = require("../../../../../../utils/combine_classes");

var _utils = require("../../../utils");

var _excluded = ["allDay", "ariaLabel", "children", "className", "colSpan", "contentTemplate", "contentTemplateProps", "dateCellTemplate", "endDate", "groupIndex", "groups", "index", "isFirstGroupCell", "isLastGroupCell", "isTimeCellTemplate", "isWeekDayCell", "startDate", "text", "timeCellTemplate", "today"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var viewFunction = function viewFunction(_ref) {
  var classes = _ref.classes,
      _ref$props = _ref.props,
      colSpan = _ref$props.colSpan,
      DateCellTemplate = _ref$props.dateCellTemplate,
      groupIndex = _ref$props.groupIndex,
      groups = _ref$props.groups,
      index = _ref$props.index,
      isTimeCellTemplate = _ref$props.isTimeCellTemplate,
      startDate = _ref$props.startDate,
      text = _ref$props.text,
      TimeCellTemplate = _ref$props.timeCellTemplate,
      useTemplate = _ref.useTemplate;
  return (0, _inferno.createVNode)(1, "th", classes, useTemplate ? (0, _inferno.createFragment)([isTimeCellTemplate && TimeCellTemplate && TimeCellTemplate({
    data: {
      date: startDate,
      text: text,
      groups: groups,
      groupIndex: groupIndex
    },
    index: index
  }), !isTimeCellTemplate && DateCellTemplate && DateCellTemplate({
    data: {
      date: startDate,
      text: text,
      groups: groups,
      groupIndex: groupIndex
    },
    index: index
  })], 0) : text, 0, {
    "colSpan": colSpan,
    "title": text
  });
};

exports.viewFunction = viewFunction;

var DateHeaderCellProps = _extends({}, _cell.CellBaseProps, {
  today: false,
  colSpan: 1,
  isWeekDayCell: false,
  isTimeCellTemplate: false
});

exports.DateHeaderCellProps = DateHeaderCellProps;

var getTemplate = function getTemplate(TemplateProp) {
  return TemplateProp && (TemplateProp.defaultProps ? function (props) {
    return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, TemplateProp, _extends({}, props)));
  } : TemplateProp);
};

var DateHeaderCell = /*#__PURE__*/function (_BaseInfernoComponent) {
  _inheritsLoose(DateHeaderCell, _BaseInfernoComponent);

  function DateHeaderCell(props) {
    var _this;

    _this = _BaseInfernoComponent.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = DateHeaderCell.prototype;

  _proto.render = function render() {
    var props = this.props;
    return viewFunction({
      props: _extends({}, props, {
        timeCellTemplate: getTemplate(props.timeCellTemplate),
        dateCellTemplate: getTemplate(props.dateCellTemplate),
        contentTemplate: getTemplate(props.contentTemplate)
      }),
      classes: this.classes,
      useTemplate: this.useTemplate,
      restAttributes: this.restAttributes
    });
  };

  _createClass(DateHeaderCell, [{
    key: "classes",
    get: function get() {
      var _this$props = this.props,
          className = _this$props.className,
          isFirstGroupCell = _this$props.isFirstGroupCell,
          isLastGroupCell = _this$props.isLastGroupCell,
          isWeekDayCell = _this$props.isWeekDayCell,
          today = _this$props.today;
      var cellClasses = (0, _combine_classes.combineClasses)(_defineProperty({
        "dx-scheduler-header-panel-cell": true,
        "dx-scheduler-cell-sizes-horizontal": true,
        "dx-scheduler-header-panel-current-time-cell": today,
        "dx-scheduler-header-panel-week-cell": isWeekDayCell
      }, className, !!className));
      return (0, _utils.getGroupCellClasses)(isFirstGroupCell, isLastGroupCell, cellClasses);
    }
  }, {
    key: "useTemplate",
    get: function get() {
      var _this$props2 = this.props,
          dateCellTemplate = _this$props2.dateCellTemplate,
          isTimeCellTemplate = _this$props2.isTimeCellTemplate,
          timeCellTemplate = _this$props2.timeCellTemplate;
      return !isTimeCellTemplate && !!dateCellTemplate || isTimeCellTemplate && !!timeCellTemplate;
    }
  }, {
    key: "restAttributes",
    get: function get() {
      var _this$props3 = this.props,
          allDay = _this$props3.allDay,
          ariaLabel = _this$props3.ariaLabel,
          children = _this$props3.children,
          className = _this$props3.className,
          colSpan = _this$props3.colSpan,
          contentTemplate = _this$props3.contentTemplate,
          contentTemplateProps = _this$props3.contentTemplateProps,
          dateCellTemplate = _this$props3.dateCellTemplate,
          endDate = _this$props3.endDate,
          groupIndex = _this$props3.groupIndex,
          groups = _this$props3.groups,
          index = _this$props3.index,
          isFirstGroupCell = _this$props3.isFirstGroupCell,
          isLastGroupCell = _this$props3.isLastGroupCell,
          isTimeCellTemplate = _this$props3.isTimeCellTemplate,
          isWeekDayCell = _this$props3.isWeekDayCell,
          startDate = _this$props3.startDate,
          text = _this$props3.text,
          timeCellTemplate = _this$props3.timeCellTemplate,
          today = _this$props3.today,
          restProps = _objectWithoutProperties(_this$props3, _excluded);

      return restProps;
    }
  }]);

  return DateHeaderCell;
}(_vdom.BaseInfernoComponent);

exports.DateHeaderCell = DateHeaderCell;
DateHeaderCell.defaultProps = _extends({}, DateHeaderCellProps);
