/**
* DevExtreme (cjs/core/utils/call_once.js)
* Version: 21.2.0
* Build date: Thu Jun 24 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.default = void 0;

var callOnce = function callOnce(handler) {
  var result;

  var _wrappedHandler = function wrappedHandler() {
    result = handler.apply(this, arguments);

    _wrappedHandler = function wrappedHandler() {
      return result;
    };

    return result;
  };

  return function () {
    return _wrappedHandler.apply(this, arguments);
  };
};

var _default = callOnce;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
