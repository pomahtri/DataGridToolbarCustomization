/**
* DevExtreme (cjs/ui/scheduler/workspaces/utils/week.js)
* Version: 21.2.0
* Build date: Wed Jun 23 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.calculateViewStartDate = exports.calculateStartViewDate = exports.getIntervalDuration = void 0;

var _date = _interopRequireDefault(require("../../../../core/utils/date"));

var _date2 = _interopRequireDefault(require("../../../../localization/date"));

var _base = require("./base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getIntervalDuration = function getIntervalDuration(intervalCount) {
  return _date.default.dateToMilliseconds('day') * 7 * intervalCount;
};

exports.getIntervalDuration = getIntervalDuration;

var calculateStartViewDate = function calculateStartViewDate(currentDate, startDayHour, startDate, intervalDuration, firstDayOfWeekOption) {
  var firstDayOfWeek = (0, _base.getCalculatedFirstDayOfWeek)(firstDayOfWeekOption);
  var viewStart = (0, _base.getViewStartByOptions)(startDate, currentDate, intervalDuration, startDate);

  var firstViewDate = _date.default.getFirstWeekDate(viewStart, firstDayOfWeek);

  return (0, _base.setStartDayHour)(firstViewDate, startDayHour);
};

exports.calculateStartViewDate = calculateStartViewDate;

var calculateViewStartDate = function calculateViewStartDate(startDateOption, firstDayOfWeek) {
  var validFirstDayOfWeek = firstDayOfWeek || _date2.default.firstDayOfWeekIndex();

  return _date.default.getFirstWeekDate(startDateOption, validFirstDayOfWeek);
};

exports.calculateViewStartDate = calculateViewStartDate;
