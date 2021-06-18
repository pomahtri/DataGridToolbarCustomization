/**
* DevExtreme (esm/ui/scheduler/appointments/DataProvider/appointmentDataProvider.js)
* Version: 21.2.0
* Build date: Fri Jun 18 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import _extends from "@babel/runtime/helpers/esm/extends";
import { AppointmentDataSource } from './appointmentDataSource';
import { AppointmentFilterBaseStrategy, AppointmentFilterVirtualStrategy } from './appointmentFilter';
import { getResourceManager } from '../../resources/resourceManager';
import { extend } from '../../../../core/utils/extend';
import { each } from '../../../../core/utils/iterator';
var FilterStrategies = {
  virtual: 'virtual',
  standard: 'standard'
};
export class AppointmentDataProvider {
  constructor(options) {
    this.key = options.key;
    this.scheduler = options.scheduler;
    this.dataSource = options.dataSource;
    this.dataAccessors = this.combineDataAccessors(options.appointmentDataAccessors);
    this.filteredItems = [];
    this.appointmentDataSource = new AppointmentDataSource(this.dataSource);
    this.initStrategy();
  }

  get filterMaker() {
    return this.getFilterStrategy().filterMaker;
  }

  get keyName() {
    return this.appointmentDataSource.keyName;
  }

  get filterStrategyName() {
    return this.scheduler.isVirtualScrolling() ? FilterStrategies.virtual : FilterStrategies.standard;
  }

  getFilterStrategy() {
    if (!this.filterStrategy || this.filterStrategy.strategyName !== this.filterStrategyName) {
      this.initStrategy();
    }

    return this.filterStrategy;
  }

  initStrategy() {
    this.filterStrategy = this.filterStrategyName === FilterStrategies.virtual ? new AppointmentFilterVirtualStrategy(this.scheduler, this.dataSource, this.dataAccessors) : new AppointmentFilterBaseStrategy(this.scheduler, this.dataSource, this.dataAccessors);
  }

  setDataSource(dataSource) {
    this.dataSource = dataSource;
    this.initStrategy();
    this.appointmentDataSource.setDataSource(this.dataSource);
  }

  updateDataAccessors(appointmentDataAccessors) {
    this.dataAccessors = this.combineDataAccessors(appointmentDataAccessors);
    this.initStrategy();
  }

  combineDataAccessors(appointmentDataAccessors) {
    // TODO move to utils or get rid of it
    var result = extend(true, {}, appointmentDataAccessors);
    var resourceManager = getResourceManager(this.key);

    if (appointmentDataAccessors && resourceManager) {
      each(resourceManager._dataAccessors, (type, accessor) => {
        result[type].resources = accessor;
      });
    }

    return result;
  } // Filter mapping


  filter() {
    this.filteredItems = this.getFilterStrategy().filter();
  }

  filterByDate(min, max, remoteFiltering, dateSerializationFormat) {
    this.getFilterStrategy().filterByDate(min, max, remoteFiltering, dateSerializationFormat);
  }

  appointmentTakesAllDay(appointment, startDayHour, endDayHour) {
    return this.getFilterStrategy().appointmentTakesAllDay(appointment, startDayHour, endDayHour);
  }

  hasAllDayAppointments(appointments) {
    return this.getFilterStrategy().hasAllDayAppointments(appointments);
  }

  filterLoadedAppointments(filterOption, timeZoneCalculator) {
    return this.getFilterStrategy().filterLoadedAppointments(filterOption, timeZoneCalculator);
  } // From subscribe


  replaceWrongEndDate(appointment, startDate, endDate) {
    this.getFilterStrategy().replaceWrongEndDate(appointment, startDate, endDate);
  }

  calculateAppointmentEndDate(isAllDay, startDate) {
    return this.getFilterStrategy().calculateAppointmentEndDate(isAllDay, startDate);
  }

  appointmentTakesSeveralDays(appointment) {
    return this.getFilterStrategy().appointmentTakesSeveralDays(appointment);
  } // Appointment data source mappings


  cleanState() {
    this.appointmentDataSource.cleanState();
  }

  getUpdatedAppointment() {
    return this.appointmentDataSource._updatedAppointment;
  }

  getUpdatedAppointmentKeys() {
    return this.appointmentDataSource._updatedAppointmentKeys;
  }

  add(rawAppointment) {
    return this.appointmentDataSource.add(rawAppointment);
  }

  update(target, rawAppointment) {
    return this.appointmentDataSource.update(target, rawAppointment);
  }

  remove(rawAppointment) {
    return this.appointmentDataSource.remove(rawAppointment);
  }

}
var appointmentDataProviders = {};
export var createAppointmentDataProvider = (key, options) => {
  var validKey = key || 0;
  appointmentDataProviders[validKey] = new AppointmentDataProvider(_extends({
    key
  }, options));
};
export var getAppointmentDataProvider = function getAppointmentDataProvider() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return appointmentDataProviders[key];
};
export var removeAppointmentDataProvider = key => appointmentDataProviders[key] = null;
