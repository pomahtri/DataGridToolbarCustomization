import _extends from "@babel/runtime/helpers/esm/extends";
import { isPlainObject } from "../../../core/utils/type";

function cloneObjectProp(value, fullNameParts) {
  var result = _extends({}, value);

  if (fullNameParts.length > 1) {
    var name = fullNameParts[0];
    result[name] = cloneObjectProp(value[name], fullNameParts.slice(1));
  }

  return result;
}

export function updatePropsImmutable(props, option, name, fullName) {
  var currentPropsValue = option[name];
  var result = props;

  if (name !== fullName) {
    if (Array.isArray(currentPropsValue)) {
      var matchIndex = /\[\s*(\d+)\s*\]/g.exec(fullName);

      if (matchIndex) {
        var newArray = [...currentPropsValue];
        var index = parseInt(matchIndex[1], 10);
        result[name] = newArray;

        if (isPlainObject(newArray[index])) {
          newArray[index] = _extends({}, currentPropsValue[index]);
        }
      }

      return;
    }
  }

  if (isPlainObject(currentPropsValue)) {
    result[name] = cloneObjectProp(currentPropsValue, fullName.split(".").slice(1));
  } else {
    result[name] = currentPropsValue;
  }
}