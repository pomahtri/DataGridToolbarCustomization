"use strict";

exports.updatePropsImmutable = updatePropsImmutable;

var _type = require("../../../core/utils/type");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function cloneObjectProp(value, fullNameParts) {
  var result = _extends({}, value);

  if (fullNameParts.length > 1) {
    var name = fullNameParts[0];
    result[name] = cloneObjectProp(value[name], fullNameParts.slice(1));
  }

  return result;
}

function updatePropsImmutable(props, option, name, fullName) {
  var currentPropsValue = option[name];
  var result = props;

  if (name !== fullName) {
    if (Array.isArray(currentPropsValue)) {
      var matchIndex = /\[\s*(\d+)\s*\]/g.exec(fullName);

      if (matchIndex) {
        var newArray = _toConsumableArray(currentPropsValue);

        var index = parseInt(matchIndex[1], 10);
        result[name] = newArray;

        if ((0, _type.isPlainObject)(newArray[index])) {
          newArray[index] = _extends({}, currentPropsValue[index]);
        }
      }

      return;
    }
  }

  if ((0, _type.isPlainObject)(currentPropsValue)) {
    result[name] = cloneObjectProp(currentPropsValue, fullName.split(".").slice(1));
  } else {
    result[name] = currentPropsValue;
  }
}