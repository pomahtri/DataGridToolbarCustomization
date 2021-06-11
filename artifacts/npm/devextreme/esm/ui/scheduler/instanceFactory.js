/**
* DevExtreme (esm/ui/scheduler/instanceFactory.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import { createResourceManager, removeResourceManager } from './resources/resourceManager';
import { createAppointmentDataProvider, removeAppointmentDataProvider } from './appointments/DataProvider/appointmentDataProvider';
var tailIndex = -1;
export var createFactoryInstances = options => {
  ++tailIndex;
  createResourceManager(tailIndex, options.resources);
  createAppointmentDataProvider(tailIndex, options);
  return tailIndex;
};
export var disposeFactoryInstances = key => {
  removeResourceManager(key);
  removeAppointmentDataProvider(key);
};
