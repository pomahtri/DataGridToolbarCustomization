import _extends from "@babel/runtime/helpers/esm/extends";
import Component from "./common/component";
import gridCore from "../../ui/data_grid/ui.data_grid.core";
import { updatePropsImmutable } from "./utils/update_props_immutable";
export default class DataGridWrapper extends Component {
  constructor() {
    super(...arguments);
    this._skipInvalidate = false;
  }

  state(state) {
    var internalInstance = this._getInternalInstance();

    if (internalInstance) {
      if (state === undefined) {
        return internalInstance.state();
      }

      internalInstance.state(state);
    }

    return undefined;
  }

  getController(name) {
    var _this$_getInternalIns;

    return (_this$_getInternalIns = this._getInternalInstance()) === null || _this$_getInternalIns === void 0 ? void 0 : _this$_getInternalIns.getController(name);
  }

  getView(name) {
    var _this$_getInternalIns2;

    return (_this$_getInternalIns2 = this._getInternalInstance()) === null || _this$_getInternalIns2 === void 0 ? void 0 : _this$_getInternalIns2.getView(name);
  }

  beginUpdate() {
    var _this$_getInternalIns3;

    super.beginUpdate();
    (_this$_getInternalIns3 = this._getInternalInstance()) === null || _this$_getInternalIns3 === void 0 ? void 0 : _this$_getInternalIns3.beginUpdate();
  }

  endUpdate() {
    var _this$_getInternalIns4;

    super.endUpdate();
    (_this$_getInternalIns4 = this._getInternalInstance()) === null || _this$_getInternalIns4 === void 0 ? void 0 : _this$_getInternalIns4.endUpdate();
  }

  isReady() {
    var _this$_getInternalIns5;

    return (_this$_getInternalIns5 = this._getInternalInstance()) === null || _this$_getInternalIns5 === void 0 ? void 0 : _this$_getInternalIns5.isReady();
  }

  _getInternalInstance() {
    var _this$viewRef;

    return (_this$viewRef = this.viewRef) === null || _this$viewRef === void 0 ? void 0 : _this$viewRef.getComponentInstance();
  }

  _fireContentReady() {}

  _wrapKeyDownHandler(handler) {
    return handler;
  }

  _optionChanging(fullName, prevValue, value) {
    super._optionChanging(fullName, prevValue, value);

    if (this.viewRef && prevValue !== value) {
      var name = fullName.split(/[.[]/)[0];

      var prevProps = _extends({}, this.viewRef.prevProps);

      updatePropsImmutable(prevProps, this.option(), name, fullName);
      this.viewRef.prevProps = prevProps;
    }
  }

  _optionChanged(e) {
    var _this$viewRef2, _this$viewRef2$getCom;

    var gridInstance = (_this$viewRef2 = this.viewRef) === null || _this$viewRef2 === void 0 ? void 0 : (_this$viewRef2$getCom = _this$viewRef2.getComponentInstance) === null || _this$viewRef2$getCom === void 0 ? void 0 : _this$viewRef2$getCom.call(_this$viewRef2);

    if (e.fullName === "dataSource" && e.value === (gridInstance === null || gridInstance === void 0 ? void 0 : gridInstance.option("dataSource"))) {
      gridInstance === null || gridInstance === void 0 ? void 0 : gridInstance.option("dataSource", e.value);
    }

    super._optionChanged(e);
  }

  _createTemplateComponent(templateOption) {
    return templateOption;
  }

  _initializeComponent() {
    var options = this.option();
    this._onInitialized = options.onInitialized;
    options.onInitialized = null;

    super._initializeComponent();
  }

  _patchOptionValues(options) {
    options.onInitialized = this._onInitialized;
    return super._patchOptionValues(options);
  }

  _renderWrapper(props) {
    var isFirstRender = !this._isNodeReplaced;

    super._renderWrapper(props);

    if (isFirstRender) {
      this._getInternalInstance().on("optionChanged", this._internalOptionChangedHandler.bind(this));
    }
  }

  _internalOptionChangedHandler(e) {
    var isSecondLevelOption = e.name !== e.fullName;

    if (isSecondLevelOption && e.value !== e.previousValue) {
      if (e.fullName.startsWith("columns[")) {
        if (this.option(e.fullName) !== e.value) {
          this._skipInvalidate = true;

          this._notifyOptionChanged(e.fullName, e.value, e.previousValue);

          this._skipInvalidate = false;
        }
      } else {
        this._skipInvalidate = true;

        this._options.silent(e.fullName, e.previousValue);

        this.option(e.fullName, e.value);
        this._skipInvalidate = false;
      }
    }
  }

  _invalidate() {
    if (this._skipInvalidate) return;

    super._invalidate();
  }

  _setOptionsByReference() {
    super._setOptionsByReference();

    this._optionsByReference["focusedRowKey"] = true;
    this._optionsByReference["editing.editRowKey"] = true;
    this._optionsByReference["editing.changes"] = true;
  }

  _setDeprecatedOptions() {
    super._setDeprecatedOptions();

    this._deprecatedOptions["useKeyboard"] = {
      since: "19.2",
      alias: "keyboardNavigation.enabled"
    };
  }

  _getAdditionalProps() {
    return super._getAdditionalProps().concat(["onInitialized", "onColumnsChanging", "integrationOptions", "adaptColumnWidthByRatio", "useLegacyKeyboardNavigation", "templatesRenderAsynchronously", "forceApplyBindings", "nestedComponentOptions"]);
  }

}
DataGridWrapper.registerModule = gridCore.registerModule.bind(gridCore);