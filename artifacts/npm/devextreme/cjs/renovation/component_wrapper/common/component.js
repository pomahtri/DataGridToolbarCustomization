/**
* DevExtreme (cjs/renovation/component_wrapper/common/component.js)
* Version: 21.2.0
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.default = void 0;

var _inferno = require("inferno");

var _infernoCreateElement = require("inferno-create-element");

var _vdom = require("@devextreme/vdom");

var _renderer = _interopRequireDefault(require("../../../core/renderer"));

var _dom_adapter = _interopRequireDefault(require("../../../core/dom_adapter"));

var _dom_component = _interopRequireDefault(require("../../../core/dom_component"));

var _extend = require("../../../core/utils/extend");

var _element = require("../../../core/element");

var _type = require("../../../core/utils/type");

var _template_wrapper = require("./template_wrapper");

var _update_props_immutable = require("../utils/update_props_immutable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var setDefaultOptionValue = function setDefaultOptionValue(options, defaultValueGetter) {
  return function (name) {
    if (Object.prototype.hasOwnProperty.call(options, name) && options[name] === undefined) {
      options[name] = defaultValueGetter(name);
    }
  };
};

var ComponentWrapper = /*#__PURE__*/function (_DOMComponent) {
  _inheritsLoose(ComponentWrapper, _DOMComponent);

  function ComponentWrapper() {
    var _this;

    _this = _DOMComponent.apply(this, arguments) || this;
    _this._shouldRaiseContentReady = false;
    return _this;
  }

  var _proto = ComponentWrapper.prototype;

  _proto._checkContentReadyOption = function _checkContentReadyOption(fullName) {
    var contentReadyOptions = this._getContentReadyOptions().reduce(function (options, name) {
      options[name] = true;
      return options;
    }, {});

    this._checkContentReadyOption = function (optionName) {
      return !!contentReadyOptions[optionName];
    };

    return this._checkContentReadyOption(fullName);
  };

  _proto._getContentReadyOptions = function _getContentReadyOptions() {
    return ["rtlEnabled"];
  };

  _proto._fireContentReady = function _fireContentReady() {
    this._actionsMap.onContentReady({});
  };

  _proto._getDefaultOptions = function _getDefaultOptions() {
    var _this2 = this;

    return (0, _extend.extend)(true, _DOMComponent.prototype._getDefaultOptions.call(this), this._viewComponent.defaultProps, this._propsInfo.twoWay.reduce(function (options, _ref) {
      var _extends2;

      var _ref2 = _slicedToArray(_ref, 3),
          name = _ref2[0],
          defaultName = _ref2[1],
          eventName = _ref2[2];

      return _extends({}, options, (_extends2 = {}, _defineProperty(_extends2, name, _this2._viewComponent.defaultProps[defaultName]), _defineProperty(_extends2, eventName, function (value) {
        return _this2.option(name, value);
      }), _extends2));
    }, {}), this._propsInfo.templates.reduce(function (options, name) {
      return _extends({}, options, _defineProperty({}, name, null));
    }, {}));
  };

  _proto._initMarkup = function _initMarkup() {
    var props = this.getProps();

    this._renderWrapper(props);
  };

  _proto._renderWrapper = function _renderWrapper(props) {
    var containerNode = this.$element()[0];
    var parentNode = containerNode.parentNode;

    if (!this._isNodeReplaced) {
      var nextNode = containerNode === null || containerNode === void 0 ? void 0 : containerNode.nextSibling;

      var rootNode = _dom_adapter.default.createElement("div");

      rootNode.appendChild(containerNode);

      var mountNode = this._documentFragment.appendChild(rootNode);

      _vdom.InfernoEffectHost.lock();

      (0, _vdom.hydrate)((0, _infernoCreateElement.createElement)(this._viewComponent, props), mountNode);
      containerNode.$V = mountNode.$V;

      if (parentNode) {
        parentNode.insertBefore(containerNode, nextNode);
      }

      this._isNodeReplaced = true;

      _vdom.InfernoEffectHost.callEffects();

      this._shouldRaiseContentReady = true;
    } else {
      (0, _inferno.render)((0, _infernoCreateElement.createElement)(this._viewComponent, props), containerNode);
    }

    if (this._shouldRaiseContentReady) {
      this._fireContentReady();

      this._shouldRaiseContentReady = false;
    }
  };

  _proto._silent = function _silent(name, value) {
    this._options.silent(name, value);
  };

  _proto._render = function _render() {};

  _proto._dispose = function _dispose() {
    var containerNode = this.$element()[0];
    var parentNode = containerNode.parentNode;

    if (parentNode) {
      parentNode.$V = containerNode.$V;
      (0, _inferno.render)(null, parentNode);
      parentNode.appendChild(containerNode);
      containerNode.innerHTML = "";
      delete parentNode.$V;
    }

    delete containerNode.$V;

    _DOMComponent.prototype._dispose.call(this);
  };

  _proto._getAdditionalActionConfigs = function _getAdditionalActionConfigs() {
    return {
      onContentReady: {
        excludeValidators: ["disabled", "readOnly"]
      }
    };
  };

  _proto._getAdditionalProps = function _getAdditionalProps() {
    return [];
  };

  _proto._patchOptionValues = function _patchOptionValues(options) {
    var _this3 = this;

    var _this$_propsInfo = this._propsInfo,
        allowNull = _this$_propsInfo.allowNull,
        elements = _this$_propsInfo.elements,
        props = _this$_propsInfo.props,
        twoWay = _this$_propsInfo.twoWay;
    var defaultProps = this._viewComponent.defaultProps;
    var children = options.children,
        onKeyboardHandled = options.onKeyboardHandled,
        ref = options.ref;
    var onKeyDown = onKeyboardHandled ? function (_, event_options) {
      onKeyboardHandled(event_options);
    } : undefined;
    var widgetProps = {
      ref: ref,
      children: children,
      onKeyDown: onKeyDown
    };
    [].concat(_toConsumableArray(props), _toConsumableArray(this._getAdditionalProps())).forEach(function (propName) {
      if (Object.prototype.hasOwnProperty.call(options, propName)) {
        widgetProps[propName] = options[propName];
      }
    });
    allowNull.forEach(setDefaultOptionValue(widgetProps, function () {
      return null;
    }));
    Object.keys(defaultProps).forEach(setDefaultOptionValue(widgetProps, function (name) {
      return defaultProps[name];
    }));
    twoWay.forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          name = _ref4[0],
          defaultName = _ref4[1];

      setDefaultOptionValue(widgetProps, function () {
        return defaultProps[defaultName];
      })(name);
    });
    elements.forEach(function (name) {
      if (name in widgetProps) {
        var value = widgetProps[name];

        if ((0, _type.isRenderer)(value)) {
          widgetProps[name] = _this3._patchElementParam(value);
        }
      }
    });
    return widgetProps;
  };

  _proto.getProps = function getProps() {
    var _this4 = this,
        _this$elementAttr$cla,
        _elementAttr$class;

    var _this$option = this.option(),
        elementAttr = _this$option.elementAttr;

    var options = this._patchOptionValues(_extends({}, this._props, {
      ref: this._viewRef,
      children: this._extractDefaultSlot()
    }));

    this._propsInfo.templates.forEach(function (template) {
      options[template] = _this4._componentTemplates[template];
    });

    return _extends({}, options, this.elementAttr, elementAttr, {
      className: [].concat(_toConsumableArray(((_this$elementAttr$cla = this.elementAttr.class) !== null && _this$elementAttr$cla !== void 0 ? _this$elementAttr$cla : "").split(" ")), _toConsumableArray(((_elementAttr$class = elementAttr === null || elementAttr === void 0 ? void 0 : elementAttr.class) !== null && _elementAttr$class !== void 0 ? _elementAttr$class : "").split(" "))).filter(function (c, i, a) {
        return c && a.indexOf(c) === i;
      }).join(" ").trim(),
      class: ""
    }, this._actionsMap);
  };

  _proto._getActionConfigs = function _getActionConfigs() {
    return {};
  };

  _proto._getActionConfigsFull = function _getActionConfigsFull() {
    return _extends({}, this._getActionConfigs(), this._getAdditionalActionConfigs());
  };

  _proto.getDefaultTemplates = function getDefaultTemplates() {
    var defaultTemplates = Object.values(this._templatesInfo);
    var result = {};
    defaultTemplates.forEach(function (template) {
      result[template] = "dx-renovation-template-mock";
    });
    return result;
  };

  _proto._optionsWithDefaultTemplates = function _optionsWithDefaultTemplates(options) {
    var templateOptions = Object.entries(this._templatesInfo).reduce(function (result, _ref5) {
      var _options$templateName;

      var _ref6 = _slicedToArray(_ref5, 2),
          templateName = _ref6[0],
          templateValue = _ref6[1];

      return _extends({}, result, _defineProperty({}, templateName, (_options$templateName = options[templateName]) !== null && _options$templateName !== void 0 ? _options$templateName : templateValue));
    }, {});
    return _extends({}, options, templateOptions);
  };

  _proto._init = function _init() {
    var _this$_templateManage,
        _this5 = this;

    _DOMComponent.prototype._init.call(this);

    this.customKeyHandlers = {};
    this.defaultKeyHandlers = {};
    (_this$_templateManage = this._templateManager) === null || _this$_templateManage === void 0 ? void 0 : _this$_templateManage.addDefaultTemplates(this.getDefaultTemplates());
    this._props = this._optionsWithDefaultTemplates(this.option());
    this._documentFragment = _dom_adapter.default.createDocumentFragment();
    this._actionsMap = {};
    this._componentTemplates = {};

    this._propsInfo.templates.forEach(function (template) {
      _this5._componentTemplates[template] = _this5._createTemplateComponent(_this5._props[template]);
    });

    Object.keys(this._getActionConfigsFull()).forEach(function (name) {
      return _this5._addAction(name);
    });
    this._viewRef = (0, _inferno.createRef)();
  };

  _proto._addAction = function _addAction(event, actionToAdd) {
    var action = actionToAdd;

    if (!action) {
      var actionByOption = this._createActionByOption(event, this._getActionConfigsFull()[event]);

      action = function action(actArgs) {
        Object.keys(actArgs).forEach(function (name) {
          if ((0, _type.isDefined)(actArgs[name]) && _dom_adapter.default.isNode(actArgs[name])) {
            actArgs[name] = (0, _element.getPublicElement)((0, _renderer.default)(actArgs[name]));
          }
        });
        return actionByOption(actArgs);
      };
    }

    this._actionsMap[event] = action;
  };

  _proto._optionChanged = function _optionChanged(option) {
    var fullName = option.fullName,
        name = option.name,
        value = option.value;
    (0, _update_props_immutable.updatePropsImmutable)(this._props, this.option(), name, fullName);

    if (this._propsInfo.templates.includes(name)) {
      this._componentTemplates[name] = this._createTemplateComponent(value);
    }

    if (name && this._getActionConfigsFull()[name]) {
      this._addAction(name);
    }

    this._shouldRaiseContentReady = this._shouldRaiseContentReady || this._checkContentReadyOption(fullName);

    _DOMComponent.prototype._optionChanged.call(this, option);

    this._invalidate();
  };

  _proto._extractDefaultSlot = function _extractDefaultSlot() {
    if (this.option("_hasAnonymousTemplateContent")) {
      return (0, _infernoCreateElement.createElement)(_template_wrapper.TemplateWrapper, {
        template: this._getTemplate(this._templateManager.anonymousTemplateName),
        transclude: true
      });
    }

    return null;
  };

  _proto._createTemplateComponent = function _createTemplateComponent(templateOption) {
    if (!templateOption) {
      return undefined;
    }

    var template = this._getTemplate(templateOption);

    if ((0, _type.isString)(template) && template === "dx-renovation-template-mock") {
      return undefined;
    }

    var templateWrapper = function templateWrapper(model) {
      return (0, _infernoCreateElement.createElement)(_template_wrapper.TemplateWrapper, {
        template: template,
        model: model
      });
    };

    return templateWrapper;
  };

  _proto._wrapKeyDownHandler = function _wrapKeyDownHandler(initialHandler) {
    var _this6 = this;

    return function (options) {
      var keyName = options.keyName,
          originalEvent = options.originalEvent,
          which = options.which;
      var keys = _this6.customKeyHandlers;
      var func = keys[keyName] || keys[which];

      if (func !== undefined) {
        var handler = func.bind(_this6);
        var result = handler(originalEvent, options);

        if (!result) {
          originalEvent.cancel = true;
          return originalEvent;
        }
      }

      return initialHandler === null || initialHandler === void 0 ? void 0 : initialHandler(originalEvent, options);
    };
  };

  _proto._toPublicElement = function _toPublicElement(element) {
    return (0, _element.getPublicElement)((0, _renderer.default)(element));
  };

  _proto._patchElementParam = function _patchElementParam(value) {
    try {
      var result = (0, _renderer.default)(value);
      var element = result === null || result === void 0 ? void 0 : result.get(0);
      return element !== null && element !== void 0 && element.nodeType ? element : value;
    } catch (error) {
      return value;
    }
  };

  _proto.repaint = function repaint() {
    this._isNodeReplaced = false;
    this._shouldRaiseContentReady = true;

    this._refresh();
  };

  _proto._supportedKeys = function _supportedKeys() {
    return _extends({}, this.defaultKeyHandlers, this.customKeyHandlers);
  };

  _proto.registerKeyHandler = function registerKeyHandler(key, handler) {
    this.customKeyHandlers[key] = handler;
  };

  _proto.setAria = function setAria(_name, _value) {
    throw new Error('"setAria" method is deprecated, use "aria" property instead');
  };

  _createClass(ComponentWrapper, [{
    key: "_propsInfo",
    get: function get() {
      return {
        allowNull: [],
        twoWay: [],
        elements: [],
        templates: [],
        props: []
      };
    }
  }, {
    key: "viewRef",
    get: function get() {
      var _this$_viewRef;

      return (_this$_viewRef = this._viewRef) === null || _this$_viewRef === void 0 ? void 0 : _this$_viewRef.current;
    }
  }, {
    key: "elementAttr",
    get: function get() {
      if (!this._elementAttr) {
        var attributes = this.$element()[0].attributes;
        this._elementAttr = _extends({}, Object.keys(attributes).reduce(function (result, key) {
          var updatedAttributes = result;

          if (attributes[key].specified) {
            updatedAttributes[attributes[key].name] = attributes[key].value;
          }

          return updatedAttributes;
        }, {}));
        this._storedClasses = this.$element()[0].getAttribute("class") || "";
      }

      var elemStyle = this.$element()[0].style;
      var style = {};

      for (var i = 0; i < elemStyle.length; i += 1) {
        style[elemStyle[i]] = elemStyle.getPropertyValue(elemStyle[i]);
      }

      this._elementAttr.style = style;
      this._elementAttr.class = this._storedClasses;
      return this._elementAttr;
    }
  }, {
    key: "_templatesInfo",
    get: function get() {
      return {};
    }
  }]);

  return ComponentWrapper;
}(_dom_component.default);

exports.default = ComponentWrapper;
ComponentWrapper.IS_RENOVATED_WIDGET = false;
ComponentWrapper.IS_RENOVATED_WIDGET = true;
module.exports = exports.default;
module.exports.default = exports.default;
