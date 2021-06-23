/**
* DevExtreme (cjs/core/utils/type.js)
* Version: 21.2.0
* Build date: Wed Jun 23 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.isEvent = exports.type = exports.isDeferred = exports.isPromise = exports.isRenderer = exports.isWindow = exports.isPrimitive = exports.isPlainObject = exports.isEmptyObject = exports.isObject = exports.isNumeric = exports.isString = exports.isFunction = exports.isDefined = exports.isDate = exports.isExponential = exports.isBoolean = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var types = {
  '[object Array]': 'array',
  '[object Date]': 'date',
  '[object Object]': 'object',
  '[object String]': 'string',
  '[object Null]': 'null'
};

var type = function type(object) {
  var typeOfObject = Object.prototype.toString.call(object);
  return _typeof(object) === 'object' ? types[typeOfObject] || 'object' : _typeof(object);
};

exports.type = type;

var isBoolean = function isBoolean(object) {
  return typeof object === 'boolean';
};

exports.isBoolean = isBoolean;

var isExponential = function isExponential(value) {
  return isNumeric(value) && value.toString().indexOf('e') !== -1;
};

exports.isExponential = isExponential;

var isDate = function isDate(object) {
  return type(object) === 'date';
};

exports.isDate = isDate;

var isDefined = function isDefined(object) {
  return object !== null && object !== undefined;
};

exports.isDefined = isDefined;

var isFunction = function isFunction(object) {
  return typeof object === 'function';
};

exports.isFunction = isFunction;

var isString = function isString(object) {
  return typeof object === 'string';
};

exports.isString = isString;

var isNumeric = function isNumeric(object) {
  return typeof object === 'number' && isFinite(object) || !isNaN(object - parseFloat(object));
};

exports.isNumeric = isNumeric;

var isObject = function isObject(object) {
  return type(object) === 'object';
};

exports.isObject = isObject;

var isEmptyObject = function isEmptyObject(object) {
  var property;

  for (property in object) {
    return false;
  }

  return true;
};

exports.isEmptyObject = isEmptyObject;

var isPlainObject = function isPlainObject(object) {
  if (!object || Object.prototype.toString.call(object) !== '[object Object]') {
    return false;
  }

  var proto = Object.getPrototypeOf(object);
  var ctor = Object.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof ctor === 'function' && Object.toString.call(ctor) === Object.toString.call(Object);
};

exports.isPlainObject = isPlainObject;

var isPrimitive = function isPrimitive(value) {
  return ['object', 'array', 'function'].indexOf(type(value)) === -1;
};

exports.isPrimitive = isPrimitive;

var isWindow = function isWindow(object) {
  return object != null && object === object.window;
};

exports.isWindow = isWindow;

var isRenderer = function isRenderer(object) {
  return !!(object.jquery || object.dxRenderer);
};

exports.isRenderer = isRenderer;

var isPromise = function isPromise(object) {
  return object && isFunction(object.then);
};

exports.isPromise = isPromise;

var isDeferred = function isDeferred(object) {
  return object && isFunction(object.done) && isFunction(object.fail);
};

exports.isDeferred = isDeferred;

var isEvent = function isEvent(object) {
  return !!(object && object.preventDefault);
};

exports.isEvent = isEvent;
