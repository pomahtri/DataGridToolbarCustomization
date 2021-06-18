/**
* DevExtreme (renovation/viz/common/utils.js)
* Version: 21.2.0
* Build date: Fri Jun 18 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.getElementWidth = getElementWidth;
exports.getElementHeight = getElementHeight;
exports.getFormatValue = getFormatValue;
exports.isUpdatedFlatObject = isUpdatedFlatObject;
exports.pointInCanvas = exports.pickPositiveValue = exports.sizeIsValid = void 0;

var _format_helper = _interopRequireDefault(require("../../../format_helper"));

var _type = require("../../../core/utils/type");

var _get_computed_style = _interopRequireDefault(require("../../utils/get_computed_style"));

var _type_conversion = require("../../utils/type_conversion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getElementWidth(element) {
  var style = (0, _get_computed_style.default)(element);
  return (0, _type_conversion.toNumber)(style === null || style === void 0 ? void 0 : style.width) - (0, _type_conversion.toNumber)(style === null || style === void 0 ? void 0 : style.paddingLeft) - (0, _type_conversion.toNumber)(style === null || style === void 0 ? void 0 : style.paddingRight);
}

function getElementHeight(element) {
  var style = (0, _get_computed_style.default)(element);
  return (0, _type_conversion.toNumber)(style === null || style === void 0 ? void 0 : style.height) - (0, _type_conversion.toNumber)(style === null || style === void 0 ? void 0 : style.paddingTop) - (0, _type_conversion.toNumber)(style === null || style === void 0 ? void 0 : style.paddingBottom);
}

var sizeIsValid = function sizeIsValid(value) {
  return !!(value && value > 0);
};

exports.sizeIsValid = sizeIsValid;

var pickPositiveValue = function pickPositiveValue(values) {
  return values.reduce(function (result, value) {
    return value && value > 0 && !result ? value : result;
  }, 0);
};

exports.pickPositiveValue = pickPositiveValue;

var pointInCanvas = function pointInCanvas(canvas, x, y) {
  return x >= canvas.left && x <= canvas.right && y >= canvas.top && y <= canvas.bottom;
};

exports.pointInCanvas = pointInCanvas;

function getFormatValue(value, specialFormat, _ref) {
  var argumentFormat = _ref.argumentFormat,
      format = _ref.format;
  var option = format;

  if (specialFormat) {
    option = specialFormat === "argument" ? argumentFormat : {
      type: "percent",
      precision: format === null || format === void 0 ? void 0 : format.percentPrecision
    };
  }

  return _format_helper.default.format(value, option);
}

function isUpdatedFlatObject(newState, oldState) {
  return ((0, _type.isDefined)(newState) || (0, _type.isDefined)(oldState)) && (!(0, _type.isDefined)(newState) || !(0, _type.isDefined)(oldState) || Object.keys(newState).some(function (key) {
    return newState[key] !== oldState[key];
  }));
}
