/**
* DevExtreme (esm/ui/toolbar/ui.toolbar.strategy.action_sheet.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import ToolbarStrategy from './ui.toolbar.strategy';
import { extend } from '../../core/utils/extend';
import ActionSheet from '../action_sheet';
var ActionSheetStrategy = ToolbarStrategy.inherit({
  NAME: 'actionSheet',
  _getMenuItemTemplate: function _getMenuItemTemplate() {
    return this._toolbar._getTemplate('actionSheetItem');
  },
  render: function render() {
    if (!this._hasVisibleMenuItems()) {
      return;
    }

    this.callBase();
  },
  _menuWidgetClass: function _menuWidgetClass() {
    return ActionSheet;
  },
  _menuContainer: function _menuContainer() {
    return this._toolbar.$element();
  },
  _widgetOptions: function _widgetOptions() {
    return extend({}, this.callBase(), {
      target: this._$button,
      showTitle: false
    });
  },
  _menuButtonOptions: function _menuButtonOptions() {
    return extend({}, this.callBase(), {
      icon: 'overflow'
    });
  },
  _toggleMenu: function _toggleMenu() {
    this.callBase.apply(this, arguments);

    this._menu.toggle(this._menuShown);

    this._menuShown = false;
  }
});
export default ActionSheetStrategy;
