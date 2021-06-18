/**
* DevExtreme (esm/events/utils/add_namespace.js)
* Version: 21.2.0
* Build date: Fri Jun 18 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import errors from '../../core/errors';

var addNamespace = (eventNames, namespace) => {
  if (!namespace) {
    throw errors.Error('E0017');
  }

  if (Array.isArray(eventNames)) {
    return eventNames.map(eventName => addNamespace(eventName, namespace)).join(' ');
  }

  if (eventNames.indexOf(' ') !== -1) {
    return addNamespace(eventNames.split(/\s+/g), namespace);
  }

  return "".concat(eventNames, ".").concat(namespace);
};

export default addNamespace;
