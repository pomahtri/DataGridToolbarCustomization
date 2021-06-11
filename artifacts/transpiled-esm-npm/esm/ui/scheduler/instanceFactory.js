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