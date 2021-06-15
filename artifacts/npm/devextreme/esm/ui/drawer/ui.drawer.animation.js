/**
* DevExtreme (esm/ui/drawer/ui.drawer.animation.js)
* Version: 21.2.0
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import fx from '../../animation/fx';
import { camelize } from '../../core/utils/inflector';
export var animation = {
  moveTo(config) {
    var $element = config.$element;
    var position = config.position;
    var direction = config.direction || 'left';
    var toConfig = {};
    var animationType;

    switch (direction) {
      case 'right':
        toConfig['transform'] = 'translate(' + position + 'px, 0px)';
        animationType = 'custom';
        break;

      case 'left':
        toConfig['left'] = position;
        animationType = 'slide';
        break;

      case 'top':
      case 'bottom':
        toConfig['top'] = position;
        animationType = 'slide';
    }

    fx.animate($element, {
      type: animationType,
      to: toConfig,
      duration: config.duration,
      complete: config.complete
    });
  },

  margin(config) {
    var $element = config.$element;
    var margin = config.margin;
    var direction = config.direction || 'left';
    var toConfig = {};
    toConfig['margin' + camelize(direction, true)] = margin;
    fx.animate($element, {
      to: toConfig,
      duration: config.duration,
      complete: config.complete
    });
  },

  fade($element, config, duration, completeAction) {
    fx.animate($element, {
      type: 'fade',
      to: config.to,
      from: config.from,
      duration,
      complete: completeAction
    });
  },

  size(config) {
    var $element = config.$element;
    var size = config.size;
    var direction = config.direction || 'left';
    var marginTop = config.marginTop || 0;
    var duration = config.duration;
    var toConfig = {};

    if (direction === 'right' || direction === 'left') {
      toConfig['width'] = size;
    } else {
      toConfig['height'] = size;
    }

    if (direction === 'bottom') {
      toConfig['marginTop'] = marginTop;
    }

    fx.animate($element, {
      to: toConfig,
      duration,
      complete: config.complete
    });
  },

  complete($element) {
    fx.stop($element, true);
  }

};
