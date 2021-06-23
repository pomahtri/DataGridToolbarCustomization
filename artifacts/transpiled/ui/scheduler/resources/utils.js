"use strict";

exports.getGroupCount = exports.getCellGroups = exports.getPathToLeaf = exports.createResourcesTree = exports.getWrappedDataSource = exports.getFieldExpr = exports.getDisplayExpr = exports.getValueExpr = void 0;

var _utils = require("../../../data/data_source/utils");

var _data_source = require("../../../data/data_source/data_source");

var getValueExpr = function getValueExpr(resource) {
  return resource.valueExpr || 'id';
};

exports.getValueExpr = getValueExpr;

var getDisplayExpr = function getDisplayExpr(resource) {
  return resource.displayExpr || 'text';
};

exports.getDisplayExpr = getDisplayExpr;

var getFieldExpr = function getFieldExpr(resource) {
  return resource.fieldExpr || resource.field;
};

exports.getFieldExpr = getFieldExpr;

var getWrappedDataSource = function getWrappedDataSource(dataSource) {
  if (dataSource instanceof _data_source.DataSource) {
    return dataSource;
  }

  var result = {
    store: (0, _utils.normalizeDataSourceOptions)(dataSource).store,
    pageSize: 0
  };

  if (!Array.isArray(dataSource)) {
    result.filter = dataSource.filter;
  }

  return new _data_source.DataSource(result);
};

exports.getWrappedDataSource = getWrappedDataSource;

var createResourcesTree = function createResourcesTree(groups) {
  var leafIndex = 0;

  var make = function make(group, groupIndex, result, parent) {
    result = result || [];

    for (var itemIndex = 0; itemIndex < group.items.length; itemIndex++) {
      var _group$data;

      var currentGroupItem = group.items[itemIndex];
      var resultItem = {
        name: group.name,
        value: currentGroupItem.id,
        title: currentGroupItem.text,
        data: (_group$data = group.data) === null || _group$data === void 0 ? void 0 : _group$data[itemIndex],
        children: [],
        parent: parent || null
      };
      var nextGroupIndex = groupIndex + 1;

      if (groups[nextGroupIndex]) {
        make(groups[nextGroupIndex], nextGroupIndex, resultItem.children, resultItem);
      }

      if (!resultItem.children.length) {
        resultItem.leafIndex = leafIndex;
        leafIndex++;
      }

      result.push(resultItem);
    }

    return result;
  };

  return make(groups[0], 0);
};

exports.createResourcesTree = createResourcesTree;

var getPathToLeaf = function getPathToLeaf(leafIndex, groups) {
  var tree = createResourcesTree(groups);

  var findLeafByIndex = function findLeafByIndex(data, index) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].leafIndex === index) {
        return data[i];
      } else {
        var _leaf = findLeafByIndex(data[i].children, index);

        if (_leaf) {
          return _leaf;
        }
      }
    }
  };

  var makeBranch = function makeBranch(leaf, result) {
    result = result || [];
    result.push(leaf.value);

    if (leaf.parent) {
      makeBranch(leaf.parent, result);
    }

    return result;
  };

  var leaf = findLeafByIndex(tree, leafIndex);
  return makeBranch(leaf).reverse();
}; // TODO rework


exports.getPathToLeaf = getPathToLeaf;

var getCellGroups = function getCellGroups(groupIndex, groups) {
  var result = [];

  if (getGroupCount(groups)) {
    if (groupIndex < 0) {
      return;
    }

    var path = getPathToLeaf(groupIndex, groups);

    for (var i = 0; i < groups.length; i++) {
      result.push({
        name: groups[i].name,
        id: path[i]
      });
    }
  }

  return result;
};

exports.getCellGroups = getCellGroups;

var getGroupCount = function getGroupCount(groups) {
  // TODO replace with viewDataProvider method
  var result = 0;

  for (var i = 0, len = groups.length; i < len; i++) {
    if (!i) {
      result = groups[i].items.length;
    } else {
      result *= groups[i].items.length;
    }
  }

  return result;
};

exports.getGroupCount = getGroupCount;