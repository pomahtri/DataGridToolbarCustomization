/**
* DevExtreme (cjs/viz/pie_chart.js)
* Version: 21.2.0
* Build date: Thu Jun 24 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.default = void 0;

var _consts = _interopRequireDefault(require("./components/consts"));

var _utils = require("./core/utils");

var _extend2 = require("../core/utils/extend");

var _type = require("../core/utils/type");

var _iterator = require("../core/utils/iterator");

var _range = require("./translators/range");

var _component_registrator = _interopRequireDefault(require("../core/component_registrator"));

var _base_chart = require("./chart_components/base_chart");

var _common = require("../core/utils/common");

var _translator1d = require("./translators/translator1d");

var _annotations = require("./core/annotations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var states = _consts.default.states;
var seriesSpacing = _consts.default.pieSeriesSpacing;
var OPTIONS_FOR_REFRESH_SERIES = ['startAngle', 'innerRadius', 'segmentsDirection', 'type'];
var NORMAL_STATE = states.normalMark;
var HOVER_STATE = states.hoverMark;
var SELECTED_STATE = states.selectedMark;
var MAX_RESOLVE_ITERATION_COUNT = 5;
var LEGEND_ACTIONS = [states.resetItem, states.applyHover, states.applySelected, states.applySelected];

function getLegendItemAction(points) {
  var state = NORMAL_STATE;
  points.forEach(function (point) {
    var _point$series;

    var seriesOptions = (_point$series = point.series) === null || _point$series === void 0 ? void 0 : _point$series.getOptions();
    var pointState = point.fullState;

    if ((seriesOptions === null || seriesOptions === void 0 ? void 0 : seriesOptions.hoverMode) === 'none') {
      pointState &= ~HOVER_STATE;
    }

    if ((seriesOptions === null || seriesOptions === void 0 ? void 0 : seriesOptions.selectionMode) === 'none') {
      pointState &= ~SELECTED_STATE;
    }

    state = state | pointState;
  });
  return LEGEND_ACTIONS[state];
}

function correctPercentValue(value) {
  if ((0, _type.isNumeric)(value)) {
    if (value > 1) {
      value = 1;
    } else if (value < 0) {
      value = 0;
    }
  } else {
    value = undefined;
  }

  return value;
}

var pieSizeEqualizer = function () {
  function equalize(group, allPies) {
    var pies = allPies.filter(function (p) {
      return p._isVisible() && p.getSizeGroup() === group;
    });
    var minRadius = Math.min.apply(null, pies.map(function (p) {
      return p.getSizeGroupLayout().radius;
    }));
    var minPie = pies.filter(function (p) {
      return p.getSizeGroupLayout().radius === minRadius;
    });
    pies.forEach(function (p) {
      return p.render({
        force: true,
        sizeGroupLayout: minPie.length ? minPie[0].getSizeGroupLayout() : {}
      });
    });
  }

  function removeFromList(list, item) {
    return list.filter(function (li) {
      return li !== item;
    });
  }

  function addToList(list, item) {
    return removeFromList(list, item).concat(item);
  }

  var pies = [];
  var timers = {};
  return {
    queue: function queue(pie) {
      var group = pie.getSizeGroup();
      pies = addToList(pies, pie);
      clearTimeout(timers[group]);
      timers[group] = setTimeout(function () {
        equalize(group, pies);
      });
    },
    remove: function remove(pie) {
      pies = removeFromList(pies, pie);

      if (!pies.length) {
        timers = {};
      }
    }
  };
}();

var dxPieChart = _base_chart.BaseChart.inherit({
  _themeSection: 'pie',
  _layoutManagerOptions: function _layoutManagerOptions() {
    return (0, _extend2.extend)(true, {}, this.callBase(), {
      piePercentage: correctPercentValue(this._themeManager.getOptions('diameter')),
      minPiePercentage: correctPercentValue(this._themeManager.getOptions('minDiameter'))
    });
  },
  _optionChangesOrder: ['CENTER_TEMPLATE'],
  _optionChangesMap: {
    diameter: 'REINIT',
    minDiameter: 'REINIT',
    sizeGroup: 'REINIT',
    centerTemplate: 'CENTER_TEMPLATE'
  },
  _change_CENTER_TEMPLATE: function _change_CENTER_TEMPLATE() {
    this._renderExtraElements();
  },
  _disposeCore: function _disposeCore() {
    pieSizeEqualizer.remove(this);
    this.callBase();

    this._centerTemplateGroup.linkOff().dispose();
  },
  _groupSeries: function _groupSeries() {
    var series = this.series;
    this._groupsData = {
      groups: [{
        series: series,
        valueOptions: {
          valueType: 'numeric'
        }
      }],
      argumentOptions: series[0] && series[0].getOptions()
    };
  },
  getArgumentAxis: function getArgumentAxis() {
    return null;
  },
  _getValueAxis: function _getValueAxis() {
    var translator = new _translator1d.Translator1D().setCodomain(360, 0);
    return {
      getTranslator: function getTranslator() {
        return translator;
      },
      setBusinessRange: function setBusinessRange(range) {
        translator.setDomain(range.min, range.max);
      }
    };
  },
  _populateBusinessRange: function _populateBusinessRange() {
    this.series.map(function (series) {
      var range = new _range.Range();
      range.addRange(series.getRangeData().val);
      series.getValueAxis().setBusinessRange(range);
      return range;
    });
  },
  _specialProcessSeries: function _specialProcessSeries() {
    (0, _iterator.each)(this.series, function (_, singleSeries) {
      singleSeries.arrangePoints();
    });
  },
  _checkPaneName: function _checkPaneName() {
    return true;
  },
  _processSingleSeries: function _processSingleSeries(singleSeries) {
    this.callBase(singleSeries);
    singleSeries.arrangePoints();
  },
  _handleSeriesDataUpdated: function _handleSeriesDataUpdated() {
    var maxPointCount = 0;
    this.series.forEach(function (s) {
      maxPointCount = Math.max(s.getPointsCount(), maxPointCount);
    });
    this.series.forEach(function (s) {
      s.setMaxPointsCount(maxPointCount);
    });
    this.callBase();
  },
  _getLegendOptions: function _getLegendOptions(item) {
    var legendItem = this.callBase(item);
    var legendData = legendItem.legendData;
    legendData.argument = item.argument;
    legendData.argumentIndex = item.argumentIndex;
    legendData.points = [item];
    return legendItem;
  },
  _getLegendTargets: function _getLegendTargets() {
    var that = this;
    var itemsByArgument = {};
    (that.series || []).forEach(function (series) {
      series.getPoints().forEach(function (point) {
        var argument = point.argument.valueOf();
        var index = series.getPointsByArg(argument).indexOf(point);
        var key = argument.valueOf().toString() + index;
        itemsByArgument[key] = itemsByArgument[key] || [];
        var argumentCount = itemsByArgument[key].push(point);
        point.index = itemsByArgument[key][argumentCount - 2] ? itemsByArgument[key][argumentCount - 2].index : Object.keys(itemsByArgument).length - 1;
        point.argumentIndex = index;
      });
    });
    var items = [];
    (0, _iterator.each)(itemsByArgument, function (_, points) {
      points.forEach(function (point, index) {
        if (index === 0) {
          items.push(that._getLegendOptions(point));
          return;
        }

        var item = items[items.length - 1];
        item.legendData.points.push(point);

        if (!item.visible) {
          item.visible = point.isVisible();
        }
      });
    });
    return items;
  },
  _getLayoutTargets: function _getLayoutTargets() {
    return [{
      canvas: this._canvas
    }];
  },
  _getLayoutSeries: function _getLayoutSeries(series, drawOptions) {
    var that = this;
    var layout;
    var canvas = that._canvas;
    var drawnLabels = false;
    layout = that.layoutManager.applyPieChartSeriesLayout(canvas, series, true);
    series.forEach(function (singleSeries) {
      singleSeries.correctPosition(layout, canvas);
      drawnLabels = singleSeries.drawLabelsWOPoints() || drawnLabels;
    });

    if (drawnLabels) {
      layout = that.layoutManager.applyPieChartSeriesLayout(canvas, series, drawOptions.hideLayoutLabels);
    }

    series.forEach(function (singleSeries) {
      singleSeries.hideLabels();
    });
    that._sizeGroupLayout = {
      x: layout.centerX,
      y: layout.centerY,
      radius: layout.radiusOuter,
      drawOptions: drawOptions
    };
    return layout;
  },
  _getLayoutSeriesForEqualPies: function _getLayoutSeriesForEqualPies(series, sizeGroupLayout) {
    var canvas = this._canvas;
    var layout = this.layoutManager.applyEqualPieChartLayout(series, sizeGroupLayout);
    series.forEach(function (s) {
      s.correctPosition(layout, canvas);
      s.drawLabelsWOPoints();
    });
    this.layoutManager.correctPieLabelRadius(series, layout, canvas);
    return layout;
  },
  _updateSeriesDimensions: function _updateSeriesDimensions(drawOptions) {
    var that = this;

    var visibleSeries = that._getVisibleSeries();

    var lengthVisibleSeries = visibleSeries.length;
    var innerRad;
    var delta;
    var layout;
    var sizeGroupLayout = drawOptions.sizeGroupLayout;

    if (lengthVisibleSeries) {
      layout = sizeGroupLayout ? that._getLayoutSeriesForEqualPies(visibleSeries, sizeGroupLayout) : that._getLayoutSeries(visibleSeries, drawOptions);
      delta = (layout.radiusOuter - layout.radiusInner - seriesSpacing * (lengthVisibleSeries - 1)) / lengthVisibleSeries;
      innerRad = layout.radiusInner;

      that._setGeometry(layout);

      visibleSeries.forEach(function (singleSeries) {
        singleSeries.correctRadius({
          radiusInner: innerRad,
          radiusOuter: innerRad + delta
        });
        innerRad += delta + seriesSpacing;
      });
    }
  },
  _renderSeries: function _renderSeries(drawOptions, isRotated, isLegendInside) {
    this._calculateSeriesLayout(drawOptions, isRotated);

    if (!drawOptions.sizeGroupLayout && this.getSizeGroup()) {
      pieSizeEqualizer.queue(this);

      this._clearCanvas();

      return;
    }

    this._renderSeriesElements(drawOptions, isLegendInside);
  },
  _createHtmlStructure: function _createHtmlStructure() {
    this.callBase();
    this._centerTemplateGroup = this._renderer.g().attr({
      class: 'dxc-hole-template'
    }).linkOn(this._renderer.root, 'center-template').css((0, _utils.patchFontOptions)(this._themeManager._font)).linkAppend();
  },
  _renderExtraElements: function _renderExtraElements() {
    var _this = this;

    var template = this.option('centerTemplate');

    var centerTemplateGroup = this._centerTemplateGroup.clear();

    if (!template) {
      return;
    }

    centerTemplateGroup.attr({
      visibility: 'hidden'
    });
    template = this._getTemplate(template);
    template.render({
      model: this,
      container: centerTemplateGroup.element,
      onRendered: function onRendered() {
        var group = centerTemplateGroup;
        var bBox = group.getBBox();
        group.move(_this._center.x - (bBox.x + bBox.width / 2), _this._center.y - (bBox.y + bBox.height / 2));
        group.attr({
          visibility: 'visible'
        });
      }
    });
  },
  getInnerRadius: function getInnerRadius() {
    return this._innerRadius;
  },
  _getLegendCallBack: function _getLegendCallBack() {
    var that = this;
    var legend = this._legend;

    var items = this._getLegendTargets().map(function (i) {
      return i.legendData;
    });

    return function (target) {
      items.forEach(function (data) {
        var points = [];
        var callback = legend.getActionCallback({
          index: data.id
        });
        that.series.forEach(function (series) {
          var seriesPoints = series.getPointsByKeys(data.argument, data.argumentIndex);
          points.push.apply(points, seriesPoints);
        });

        if (target && target.argument === data.argument && target.argumentIndex === data.argumentIndex) {
          points.push(target);
        }

        callback(getLegendItemAction(points));
      });
    };
  },
  _locateLabels: function _locateLabels(resolveLabelOverlapping) {
    var iterationCount = 0;
    var labelsWereOverlapped;
    var wordWrapApplied;

    do {
      wordWrapApplied = this._adjustSeriesLabels(resolveLabelOverlapping === 'shift');
      labelsWereOverlapped = this._resolveLabelOverlapping(resolveLabelOverlapping);
    } while ((labelsWereOverlapped || wordWrapApplied) && ++iterationCount < MAX_RESOLVE_ITERATION_COUNT);
  },
  _adjustSeriesLabels: function _adjustSeriesLabels(moveLabelsFromCenter) {
    return this.series.reduce(function (r, s) {
      return s.adjustLabels(moveLabelsFromCenter) || r;
    }, false);
  },
  _applyExtraSettings: _common.noop,
  _resolveLabelOverlappingShift: function _resolveLabelOverlappingShift() {
    var that = this;
    var inverseDirection = that.option('segmentsDirection') === 'anticlockwise';
    var seriesByPosition = that.series.reduce(function (r, s) {
      (r[s.getOptions().label.position] || r.outside).push(s);
      return r;
    }, {
      inside: [],
      columns: [],
      outside: []
    });
    var labelsOverlapped = false;

    if (seriesByPosition.inside.length > 0) {
      labelsOverlapped = resolve(seriesByPosition.inside.reduce(function (r, singleSeries) {
        return singleSeries.getVisiblePoints().reduce(function (r, point) {
          r.left.push(point);
          return r;
        }, r);
      }, {
        left: [],
        right: []
      }), shiftInColumnFunction) || labelsOverlapped;
    }

    labelsOverlapped = seriesByPosition.columns.reduce(function (r, singleSeries) {
      return resolve(dividePoints(singleSeries), shiftInColumnFunction) || r;
    }, labelsOverlapped);

    if (seriesByPosition.outside.length > 0) {
      labelsOverlapped = resolve(seriesByPosition.outside.reduce(function (r, singleSeries) {
        return dividePoints(singleSeries, r);
      }, null), shiftFunction) || labelsOverlapped;
    }

    return labelsOverlapped;

    function dividePoints(series, points) {
      return series.getVisiblePoints().reduce(function (r, point) {
        var angle = (0, _utils.normalizeAngle)(point.middleAngle);
        (angle <= 90 || angle >= 270 ? r.right : r.left).push(point);
        return r;
      }, points || {
        left: [],
        right: []
      });
    }

    function resolve(points, shiftCallback) {
      var overlapped = false;

      if (inverseDirection) {
        points.left.reverse();
        points.right.reverse();
      }

      overlapped = _base_chart.overlapping.resolveLabelOverlappingInOneDirection(points.left, that._canvas, false, shiftCallback);
      return _base_chart.overlapping.resolveLabelOverlappingInOneDirection(points.right, that._canvas, false, shiftCallback) || overlapped;
    }

    function shiftFunction(box, length) {
      return (0, _utils.getVerticallyShiftedAngularCoords)(box, -length, that._center);
    }

    function shiftInColumnFunction(box, length) {
      return {
        x: box.x,
        y: box.y - length
      };
    }
  },
  _setGeometry: function _setGeometry(_ref) {
    var x = _ref.centerX,
        y = _ref.centerY,
        radiusInner = _ref.radiusInner;
    this._center = {
      x: x,
      y: y
    };
    this._innerRadius = radiusInner;
  },
  _disposeSeries: function _disposeSeries(seriesIndex) {
    this.callBase.apply(this, arguments);
    this._abstractSeries = null;
  },
  _legendDataField: 'point',
  _legendItemTextField: 'argument',
  _applyPointMarkersAutoHiding: _common.noop,
  _renderTrackers: _common.noop,
  _trackerType: 'PieTracker',
  _createScrollBar: _common.noop,
  _updateAxesLayout: _common.noop,
  _applyClipRects: _common.noop,
  _appendAdditionalSeriesGroups: _common.noop,
  _prepareToRender: _common.noop,
  _isLegendInside: _common.noop,
  _renderAxes: _common.noop,
  _shrinkAxes: _common.noop,
  _isRotated: _common.noop,
  _seriesPopulatedHandlerCore: _common.noop,
  _reinitAxes: _common.noop,
  _correctAxes: _common.noop,
  _getExtraOptions: function _getExtraOptions() {
    var that = this;
    return {
      startAngle: that.option('startAngle'),
      innerRadius: that.option('innerRadius'),
      segmentsDirection: that.option('segmentsDirection'),
      type: that.option('type')
    };
  },
  getSizeGroup: function getSizeGroup() {
    return this._themeManager.getOptions('sizeGroup');
  },
  getSizeGroupLayout: function getSizeGroupLayout() {
    return this._sizeGroupLayout || {};
  }
});

(0, _iterator.each)(OPTIONS_FOR_REFRESH_SERIES, function (_, name) {
  dxPieChart.prototype._optionChangesMap[name] = 'REFRESH_SERIES_DATA_INIT';
});
dxPieChart.addPlugin(_annotations.plugins.core);
dxPieChart.addPlugin(_annotations.plugins.pieChart);
(0, _component_registrator.default)('dxPieChart', dxPieChart);
var _default = dxPieChart;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
