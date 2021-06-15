/**
* DevExtreme (cjs/ui/scheduler/appointments/DataProvider/appointmentDataProvider.js)
* Version: 21.2.0
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.removeAppointmentDataProvider = exports.getAppointmentDataProvider = exports.createAppointmentDataProvider = exports.AppointmentDataProvider = void 0;

var _appointmentDataSource = require("./appointmentDataSource");

var _appointmentFilter = require("./appointmentFilter");

var _resourceManager = require("../../resources/resourceManager");

var _extend = require("../../../../core/utils/extend");

var _iterator = require("../../../../core/utils/iterator");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FilterStrategies = {
  virtual: 'virtual',
  standard: 'standard'
};

var AppointmentDataProvider = /*#__PURE__*/function () {
  function AppointmentDataProvider(options) {
    this.key = options.key;
    this.scheduler = options.scheduler;
    this.dataSource = options.dataSource;
    this.dataAccessors = this.combineDataAccessors(options.appointmentDataAccessors);
    this.filteredItems = [];
    this.appointmentDataSource = new _appointmentDataSource.AppointmentDataSource(this.dataSource);
    this.initStrategy();
  }

  var _proto = AppointmentDataProvider.prototype;

  _proto.getFilterStrategy = function getFilterStrategy() {
    if (!this.filterStrategy || this.filterStrategy.strategyName !== this.filterStrategyName) {
      this.initStrategy();
    }

    return this.filterStrategy;
  };

  _proto.initStrategy = function initStrategy() {
    this.filterStrategy = this.filterStrategyName === FilterStrategies.virtual ? new _appointmentFilter.AppointmentFilterVirtualStrategy(this.scheduler, this.dataSource, this.dataAccessors) : new _appointmentFilter.AppointmentFilterBaseStrategy(this.scheduler, this.dataSource, this.dataAccessors);
  };

  _proto.setDataSource = function setDataSource(dataSource) {
    this.dataSource = dataSource;
    this.initStrategy();
    this.appointmentDataSource.setDataSource(this.dataSource);
  };

  _proto.updateDataAccessors = function updateDataAccessors(appointmentDataAccessors) {
    this.dataAccessors = this.combineDataAccessors(appointmentDataAccessors);
    this.initStrategy();
  };

  _proto.combineDataAccessors = function combineDataAccessors(appointmentDataAccessors) {
    // TODO move to utils or get rid of it
    var result = (0, _extend.extend)(true, {}, appointmentDataAccessors);
    var resourceManager = (0, _resourceManager.getResourceManager)(this.key);

    if (appointmentDataAccessors && resourceManager) {
      (0, _iterator.each)(resourceManager._dataAccessors, function (type, accessor) {
        result[type].resources = accessor;
      });
    }

    return result;
  } // Filter mapping
  ;

  _proto.filter = function filter() {
    this.filteredItems = this.getFilterStrategy().filter();
  };

  _proto.filterByDate = function filterByDate(min, max, remoteFiltering, dateSerializationFormat) {
    this.getFilterStrategy().filterByDate(min, max, remoteFiltering, dateSerializationFormat);
  };

  _proto.appointmentTakesAllDay = function appointmentTakesAllDay(appointment, startDayHour, endDayHour) {
    return this.getFilterStrategy().appointmentTakesAllDay(appointment, startDayHour, endDayHour);
  };

  _proto.hasAllDayAppointments = function hasAllDayAppointments(appointments) {
    return this.getFilterStrategy().hasAllDayAppointments(appointments);
  };

  _proto.filterLoadedAppointments = function filterLoadedAppointments(filterOption, timeZoneCalculator) {
    return this.getFilterStrategy().filterLoadedAppointments(filterOption, timeZoneCalculator);
  } // From subscribe
  ;

  _proto.replaceWrongEndDate = function replaceWrongEndDate(appointment, startDate, endDate) {
    this.getFilterStrategy().replaceWrongEndDate(appointment, startDate, endDate);
  };

  _proto.calculateAppointmentEndDate = function calculateAppointmentEndDate(isAllDay, startDate) {
    return this.getFilterStrategy().calculateAppointmentEndDate(isAllDay, startDate);
  };

  _proto.appointmentTakesSeveralDays = function appointmentTakesSeveralDays(appointment) {
    return this.getFilterStrategy().appointmentTakesSeveralDays(appointment);
  } // Appointment data source mappings
  ;

  _proto.cleanState = function cleanState() {
    this.appointmentDataSource.cleanState();
  };

  _proto.getUpdatedAppointment = function getUpdatedAppointment() {
    return this.appointmentDataSource._updatedAppointment;
  };

  _proto.getUpdatedAppointmentKeys = function getUpdatedAppointmentKeys() {
    return this.appointmentDataSource._updatedAppointmentKeys;
  };

  _proto.add = function add(rawAppointment) {
    return this.appointmentDataSource.add(rawAppointment);
  };

  _proto.update = function update(target, rawAppointment) {
    return this.appointmentDataSource.update(target, rawAppointment);
  };

  _proto.remove = function remove(rawAppointment) {
    return this.appointmentDataSource.remove(rawAppointment);
  };

  _createClass(AppointmentDataProvider, [{
    key: "filterMaker",
    get: function get() {
      return this.getFilterStrategy().filterMaker;
    }
  }, {
    key: "keyName",
    get: function get() {
      return this.appointmentDataSource.keyName;
    }
  }, {
    key: "filterStrategyName",
    get: function get() {
      return this.scheduler.isVirtualScrolling() ? FilterStrategies.virtual : FilterStrategies.standard;
    }
  }]);

  return AppointmentDataProvider;
}();

exports.AppointmentDataProvider = AppointmentDataProvider;
var appointmentDataProviders = {};

var createAppointmentDataProvider = function createAppointmentDataProvider(key, options) {
  var validKey = key || 0;
  appointmentDataProviders[validKey] = new AppointmentDataProvider(_extends({
    key: key
  }, options));
};

exports.createAppointmentDataProvider = createAppointmentDataProvider;

var getAppointmentDataProvider = function getAppointmentDataProvider() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return appointmentDataProviders[key];
};

exports.getAppointmentDataProvider = getAppointmentDataProvider;

var removeAppointmentDataProvider = function removeAppointmentDataProvider(key) {
  return appointmentDataProviders[key] = null;
};

exports.removeAppointmentDataProvider = removeAppointmentDataProvider;
