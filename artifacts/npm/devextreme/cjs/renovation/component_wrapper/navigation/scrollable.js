/**
* DevExtreme (cjs/renovation/component_wrapper/navigation/scrollable.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.ScrollableWrapper = void 0;

var _component = _interopRequireDefault(require("../common/component"));

var _deferred = require("../../../core/utils/deferred");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ScrollableWrapper = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ScrollableWrapper, _Component);

  function ScrollableWrapper() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ScrollableWrapper.prototype;

  _proto.handleMove = function handleMove(event) {
    this.viewRef.scrollableRef.handleMove(event);
  };

  _proto.update = function update() {
    this.viewRef.update();
    return new _deferred.Deferred().resolve();
  };

  _proto._visibilityChanged = function _visibilityChanged() {
    _Component.prototype.repaint.call(this);
  };

  _proto._container = function _container() {
    return this.$element().find(".dx-scrollable-container").eq(0);
  };

  _proto.$content = function $content() {
    return this.$element().find(".dx-scrollable-content").eq(0);
  };

  _proto._moveIsAllowed = function _moveIsAllowed(event) {
    return this.viewRef.scrollableRef.moveIsAllowed(event);
  };

  _proto._prepareDirections = function _prepareDirections(value) {
    this.viewRef.scrollableRef.prepareDirections(value);
  };

  _proto._optionChanged = function _optionChanged(option) {
    var name = option.name;

    if (name === "useNative") {
      this._isNodeReplaced = false;
    }

    _Component.prototype._optionChanged.call(this, option);
  };

  return ScrollableWrapper;
}(_component.default);

exports.ScrollableWrapper = ScrollableWrapper;
