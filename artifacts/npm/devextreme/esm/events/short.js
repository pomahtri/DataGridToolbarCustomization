/**
* DevExtreme (esm/events/short.js)
* Version: 21.2.0
* Build date: Wed Jun 23 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import domAdapter from '../core/dom_adapter';
import eventsEngine from './core/events_engine';
import KeyboardProcessor from './core/keyboard_processor';
import { addNamespace as pureAddNamespace } from './utils/index';
import pointerEvents from './pointer';

function addNamespace(event, namespace) {
  return namespace ? pureAddNamespace(event, namespace) : event;
}

function executeAction(action, args) {
  return typeof action === 'function' ? action(args) : action.execute(args);
}

export var active = {
  on: ($el, active, inactive, opts) => {
    var {
      selector,
      showTimeout,
      hideTimeout,
      namespace
    } = opts;
    eventsEngine.on($el, addNamespace('dxactive', namespace), selector, {
      timeout: showTimeout
    }, event => executeAction(active, {
      event,
      element: event.currentTarget
    }));
    eventsEngine.on($el, addNamespace('dxinactive', namespace), selector, {
      timeout: hideTimeout
    }, event => executeAction(inactive, {
      event,
      element: event.currentTarget
    }));
  },
  off: ($el, _ref) => {
    var {
      namespace,
      selector
    } = _ref;
    eventsEngine.off($el, addNamespace('dxactive', namespace), selector);
    eventsEngine.off($el, addNamespace('dxinactive', namespace), selector);
  }
};
export var resize = {
  on: function on($el, resize) {
    var {
      namespace
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    eventsEngine.on($el, addNamespace('dxresize', namespace), resize);
  },
  off: function off($el) {
    var {
      namespace
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    eventsEngine.off($el, addNamespace('dxresize', namespace));
  }
};
export var hover = {
  on: ($el, start, end, _ref2) => {
    var {
      selector,
      namespace
    } = _ref2;
    eventsEngine.on($el, addNamespace('dxhoverend', namespace), selector, event => end(event));
    eventsEngine.on($el, addNamespace('dxhoverstart', namespace), selector, event => executeAction(start, {
      element: event.target,
      event
    }));
  },
  off: ($el, _ref3) => {
    var {
      selector,
      namespace
    } = _ref3;
    eventsEngine.off($el, addNamespace('dxhoverstart', namespace), selector);
    eventsEngine.off($el, addNamespace('dxhoverend', namespace), selector);
  }
};
export var visibility = {
  on: ($el, shown, hiding, _ref4) => {
    var {
      namespace
    } = _ref4;
    eventsEngine.on($el, addNamespace('dxhiding', namespace), hiding);
    eventsEngine.on($el, addNamespace('dxshown', namespace), shown);
  },
  off: ($el, _ref5) => {
    var {
      namespace
    } = _ref5;
    eventsEngine.off($el, addNamespace('dxhiding', namespace));
    eventsEngine.off($el, addNamespace('dxshown', namespace));
  }
};
export var focus = {
  on: ($el, focusIn, focusOut, _ref6) => {
    var {
      namespace,
      isFocusable
    } = _ref6;
    eventsEngine.on($el, addNamespace('focusin', namespace), focusIn);
    eventsEngine.on($el, addNamespace('focusout', namespace), focusOut);

    if (domAdapter.hasDocumentProperty('onbeforeactivate')) {
      eventsEngine.on($el, addNamespace('beforeactivate', namespace), e => isFocusable(null, e.target) || e.preventDefault());
    }
  },
  off: ($el, _ref7) => {
    var {
      namespace
    } = _ref7;
    eventsEngine.off($el, addNamespace('focusin', namespace));
    eventsEngine.off($el, addNamespace('focusout', namespace));

    if (domAdapter.hasDocumentProperty('onbeforeactivate')) {
      eventsEngine.off($el, addNamespace('beforeactivate', namespace));
    }
  },
  trigger: $el => eventsEngine.trigger($el, 'focus')
};
export var dxClick = {
  on: function on($el, click) {
    var {
      namespace
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    eventsEngine.on($el, addNamespace('dxclick', namespace), click);
  },
  off: function off($el) {
    var {
      namespace
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    eventsEngine.off($el, addNamespace('dxclick', namespace));
  }
};
export var click = {
  on: function on($el, click) {
    var {
      namespace
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    eventsEngine.on($el, addNamespace('click', namespace), click);
  },
  off: function off($el) {
    var {
      namespace
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    eventsEngine.off($el, addNamespace('click', namespace));
  }
};
export var dxScrollInit = {
  on: function on($el, onInit, eventData) {
    var {
      namespace
    } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    eventsEngine.on($el, addNamespace('dxscrollinit', namespace), eventData, onInit);
  },
  off: function off($el) {
    var {
      namespace
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    eventsEngine.off($el, addNamespace('dxscrollinit', namespace));
  }
};
export var dxScrollStart = {
  on: function on($el, onStart) {
    var {
      namespace
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    eventsEngine.on($el, addNamespace('dxscrollstart', namespace), onStart);
  },
  off: function off($el) {
    var {
      namespace
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    eventsEngine.off($el, addNamespace('dxscrollstart', namespace));
  }
};
export var dxScrollMove = {
  on: function on($el, onScroll) {
    var {
      namespace
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    eventsEngine.on($el, addNamespace('dxscroll', namespace), onScroll);
  },
  off: function off($el) {
    var {
      namespace
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    eventsEngine.off($el, addNamespace('dxscroll', namespace));
  }
};
export var dxScrollEnd = {
  on: function on($el, onEnd) {
    var {
      namespace
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    eventsEngine.on($el, addNamespace('dxscrollend', namespace), onEnd);
  },
  off: function off($el) {
    var {
      namespace
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    eventsEngine.off($el, addNamespace('dxscrollend', namespace));
  }
};
export var dxScrollStop = {
  on: function on($el, onStop) {
    var {
      namespace
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    eventsEngine.on($el, addNamespace('dxscrollstop', namespace), onStop);
  },
  off: function off($el) {
    var {
      namespace
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    eventsEngine.off($el, addNamespace('dxscrollstop', namespace));
  }
};
export var dxScrollCancel = {
  on: function on($el, onCancel) {
    var {
      namespace
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    eventsEngine.on($el, addNamespace('dxscrollcancel', namespace), onCancel);
  },
  off: function off($el) {
    var {
      namespace
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    eventsEngine.off($el, addNamespace('dxscrollcancel', namespace));
  }
};
export var keyDown = {
  on: function on($el, onKeyDown) {
    var {
      namespace
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    eventsEngine.on($el, addNamespace('keydown', namespace), onKeyDown);
  },
  off: function off($el) {
    var {
      namespace
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    eventsEngine.off($el, addNamespace('keydown', namespace));
  }
};
export var dxPointerDown = {
  on: function on($el, onPointerDown) {
    var {
      namespace
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    eventsEngine.on($el, addNamespace(pointerEvents.down, namespace), onPointerDown);
  },
  off: function off($el) {
    var {
      namespace
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    eventsEngine.off($el, addNamespace(pointerEvents.down, namespace));
  }
};
export var dxPointerUp = {
  on: function on($el, onPointerUp) {
    var {
      namespace
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    eventsEngine.on($el, addNamespace(pointerEvents.up, namespace), onPointerUp);
  },
  off: function off($el) {
    var {
      namespace
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    eventsEngine.off($el, addNamespace(pointerEvents.up, namespace));
  }
};
var index = 0;
var keyboardProcessors = {};

var generateListenerId = () => "keyboardProcessorId".concat(index++);

export var keyboard = {
  on: (element, focusTarget, handler) => {
    var listenerId = generateListenerId();
    keyboardProcessors[listenerId] = new KeyboardProcessor({
      element,
      focusTarget,
      handler
    });
    return listenerId;
  },
  off: listenerId => {
    if (listenerId && keyboardProcessors[listenerId]) {
      keyboardProcessors[listenerId].dispose();
      delete keyboardProcessors[listenerId];
    }
  },
  // NOTE: For tests
  _getProcessor: listenerId => keyboardProcessors[listenerId]
};
