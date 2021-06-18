/**
* DevExtreme (renovation/ui/pager/page_size/small.js)
* Version: 21.2.0
* Build date: Fri Jun 18 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.PageSizeSmall = exports.PageSizeSmallProps = exports.viewFunction = void 0;

var _inferno = require("inferno");

var _vdom = require("@devextreme/vdom");

var _select_box = require("../../editors/drop_down_editors/select_box");

var _calculate_values_fitted_width = require("../utils/calculate_values_fitted_width");

var _get_element_width = require("../utils/get_element_width");

var _pager_props = require("../common/pager_props");

var _excluded = ["defaultPageSize", "pageSize", "pageSizeChange", "pageSizes", "parentRef"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var viewFunction = function viewFunction(_ref) {
  var _ref$props = _ref.props,
      pageSize = _ref$props.pageSize,
      pageSizeChange = _ref$props.pageSizeChange,
      pageSizes = _ref$props.pageSizes,
      width = _ref.width;
  return (0, _inferno.createComponentVNode)(2, _select_box.SelectBox, {
    "displayExpr": "text",
    "valueExpr": "value",
    "dataSource": pageSizes,
    "value": pageSize,
    "valueChange": pageSizeChange,
    "width": width
  });
};

exports.viewFunction = viewFunction;
var PageSizeSmallProps = {};
exports.PageSizeSmallProps = PageSizeSmallProps;
var PageSizeSmallPropsType = {
  defaultPageSize: _pager_props.PagerProps.pageSize
};

var PageSizeSmall = /*#__PURE__*/function (_InfernoComponent) {
  _inheritsLoose(PageSizeSmall, _InfernoComponent);

  function PageSizeSmall(props) {
    var _this;

    _this = _InfernoComponent.call(this, props) || this;
    _this.state = {
      minWidth: 10,
      pageSize: _this.props.pageSize !== undefined ? _this.props.pageSize : _this.props.defaultPageSize
    };
    _this.updateWidth = _this.updateWidth.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = PageSizeSmall.prototype;

  _proto.createEffects = function createEffects() {
    return [new _vdom.InfernoEffect(this.updateWidth, [this.state.minWidth, this.state.pageSize, this.props.pageSize, this.props.pageSizeChange, this.props.pageSizes, this.props.defaultPageSize])];
  };

  _proto.updateEffects = function updateEffects() {
    var _this$_effects$;

    (_this$_effects$ = this._effects[0]) === null || _this$_effects$ === void 0 ? void 0 : _this$_effects$.update([this.state.minWidth, this.state.pageSize, this.props.pageSize, this.props.pageSizeChange, this.props.pageSizes, this.props.defaultPageSize]);
  };

  _proto.updateWidth = function updateWidth() {
    var _this2 = this;

    this.setState(function (state) {
      return _extends({}, state, {
        minWidth: (0, _get_element_width.getElementMinWidth)(_this2.props.parentRef.current) || state.minWidth
      });
    });
  };

  _proto.render = function render() {
    var props = this.props;
    return viewFunction({
      props: _extends({}, props, {
        pageSize: this.props.pageSize !== undefined ? this.props.pageSize : this.state.pageSize
      }),
      width: this.width,
      restAttributes: this.restAttributes
    });
  };

  _createClass(PageSizeSmall, [{
    key: "width",
    get: function get() {
      return (0, _calculate_values_fitted_width.calculateValuesFittedWidth)(this.state.minWidth, this.props.pageSizes.map(function (p) {
        return p.value;
      }));
    }
  }, {
    key: "restAttributes",
    get: function get() {
      var _this$props$pageSize = _extends({}, this.props, {
        pageSize: this.props.pageSize !== undefined ? this.props.pageSize : this.state.pageSize
      }),
          defaultPageSize = _this$props$pageSize.defaultPageSize,
          pageSize = _this$props$pageSize.pageSize,
          pageSizeChange = _this$props$pageSize.pageSizeChange,
          pageSizes = _this$props$pageSize.pageSizes,
          parentRef = _this$props$pageSize.parentRef,
          restProps = _objectWithoutProperties(_this$props$pageSize, _excluded);

      return restProps;
    }
  }]);

  return PageSizeSmall;
}(_vdom.InfernoComponent);

exports.PageSizeSmall = PageSizeSmall;
PageSizeSmall.defaultProps = _extends({}, PageSizeSmallPropsType);
