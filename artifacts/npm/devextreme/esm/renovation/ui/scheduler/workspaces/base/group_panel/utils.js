/**
* DevExtreme (esm/renovation/ui/scheduler/workspaces/base/group_panel/utils.js)
* Version: 21.2.0
* Build date: Wed Jun 23 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import _extends from "@babel/runtime/helpers/esm/extends";

var extendGroupItemsForGroupingByDate = (groupRenderItems, columnCountPerGroup) => [...new Array(columnCountPerGroup)].reduce((currentGroupItems, _, index) => groupRenderItems.map((groupsRow, rowIndex) => {
  var currentRow = currentGroupItems[rowIndex] || [];
  return [...currentRow, ...groupsRow.map((item, columnIndex) => _extends({}, item, {
    key: "".concat(item.key, "_group_by_date_").concat(index),
    isFirstGroupCell: columnIndex === 0,
    isLastGroupCell: columnIndex === groupsRow.length - 1
  }))];
}), []);

export var getGroupsRenderData = (groups, columnCountPerGroup, groupByDate) => {
  var repeatCount = 1;
  var groupRenderItems = groups.map(group => {
    var result = [];
    var {
      data,
      items,
      name: resourceName
    } = group;

    var _loop = function _loop(iterator) {
      result.push(...items.map((_ref, index) => {
        var {
          color,
          id,
          text
        } = _ref;
        return {
          id,
          text,
          color,
          key: "".concat(iterator, "_").concat(resourceName, "_").concat(id),
          resourceName,
          data: data === null || data === void 0 ? void 0 : data[index]
        };
      }));
    };

    for (var iterator = 0; iterator < repeatCount; iterator += 1) {
      _loop(iterator);
    }

    repeatCount *= items.length;
    return result;
  });

  if (groupByDate) {
    groupRenderItems = extendGroupItemsForGroupingByDate(groupRenderItems, columnCountPerGroup);
  }

  return groupRenderItems;
};
