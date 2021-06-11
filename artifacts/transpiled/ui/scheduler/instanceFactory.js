"use strict";

exports.disposeFactoryInstances = exports.createFactoryInstances = void 0;

var _resourceManager = require("./resources/resourceManager");

var _appointmentDataProvider = require("./appointments/DataProvider/appointmentDataProvider");

var tailIndex = -1;

var createFactoryInstances = function createFactoryInstances(options) {
  ++tailIndex;
  (0, _resourceManager.createResourceManager)(tailIndex, options.resources);
  (0, _appointmentDataProvider.createAppointmentDataProvider)(tailIndex, options);
  return tailIndex;
};

exports.createFactoryInstances = createFactoryInstances;

var disposeFactoryInstances = function disposeFactoryInstances(key) {
  (0, _resourceManager.removeResourceManager)(key);
  (0, _appointmentDataProvider.removeAppointmentDataProvider)(key);
};

exports.disposeFactoryInstances = disposeFactoryInstances;