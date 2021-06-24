/**
* DevExtreme (cjs/renovation/ui/scroll_view/common/consts.js)
* Version: 21.2.0
* Build date: Thu Jun 24 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.HIDE_SCROLLBAR_TIMEOUT = exports.VALIDATE_WHEEL_TIMEOUT = exports.KEY_CODES = exports.TopPocketState = exports.SCROLLVIEW_REACHBOTTOM_TEXT_CLASS = exports.SCROLLVIEW_REACHBOTTOM_INDICATOR_CLASS = exports.SCROLLVIEW_REACHBOTTOM_CLASS = exports.SCROLLVIEW_BOTTOM_POCKET_CLASS = exports.PULLDOWN_ICON_CLASS = exports.SCROLLVIEW_PULLDOWN_VISIBLE_TEXT_CLASS = exports.SCROLLVIEW_PULLDOWN_TEXT_CLASS = exports.SCROLLVIEW_PULLDOWN_INDICATOR_CLASS = exports.SCROLLVIEW_PULLDOWN_IMAGE_CLASS = exports.SCROLLVIEW_PULLDOWN_READY_CLASS = exports.SCROLLVIEW_PULLDOWN_LOADING_CLASS = exports.SCROLLVIEW_PULLDOWN = exports.SCROLLVIEW_TOP_POCKET_CLASS = exports.SCROLLVIEW_CONTENT_CLASS = exports.HOVER_ENABLED_STATE = exports.SCROLLABLE_SCROLL_CONTENT_CLASS = exports.SCROLLABLE_SCROLL_CLASS = exports.SCROLLABLE_SCROLLBAR_ACTIVE_CLASS = exports.SCROLLABLE_SCROLLBAR_CLASS = exports.SCROLLABLE_SCROLLBARS_ALWAYSVISIBLE = exports.SCROLLABLE_SCROLLBARS_HIDDEN = exports.SCROLLABLE_SCROLLBAR_SIMULATED = exports.SCROLLABLE_DISABLED_CLASS = exports.SCROLLABLE_CONTAINER_CLASS = exports.SCROLLABLE_WRAPPER_CLASS = exports.SCROLLABLE_CONTENT_CLASS = exports.SCROLLABLE_SIMULATED_CLASS = exports.DIRECTION_BOTH = exports.DIRECTION_HORIZONTAL = exports.DIRECTION_VERTICAL = exports.SCROLL_LINE_HEIGHT = void 0;
var SCROLL_LINE_HEIGHT = 40;
exports.SCROLL_LINE_HEIGHT = SCROLL_LINE_HEIGHT;
var DIRECTION_VERTICAL = "vertical";
exports.DIRECTION_VERTICAL = DIRECTION_VERTICAL;
var DIRECTION_HORIZONTAL = "horizontal";
exports.DIRECTION_HORIZONTAL = DIRECTION_HORIZONTAL;
var DIRECTION_BOTH = "both";
exports.DIRECTION_BOTH = DIRECTION_BOTH;
var SCROLLABLE_SIMULATED_CLASS = "dx-scrollable-simulated";
exports.SCROLLABLE_SIMULATED_CLASS = SCROLLABLE_SIMULATED_CLASS;
var SCROLLABLE_CONTENT_CLASS = "dx-scrollable-content";
exports.SCROLLABLE_CONTENT_CLASS = SCROLLABLE_CONTENT_CLASS;
var SCROLLABLE_WRAPPER_CLASS = "dx-scrollable-wrapper";
exports.SCROLLABLE_WRAPPER_CLASS = SCROLLABLE_WRAPPER_CLASS;
var SCROLLABLE_CONTAINER_CLASS = "dx-scrollable-container";
exports.SCROLLABLE_CONTAINER_CLASS = SCROLLABLE_CONTAINER_CLASS;
var SCROLLABLE_DISABLED_CLASS = "dx-scrollable-disabled";
exports.SCROLLABLE_DISABLED_CLASS = SCROLLABLE_DISABLED_CLASS;
var SCROLLABLE_SCROLLBAR_SIMULATED = "dx-scrollable-scrollbar-simulated";
exports.SCROLLABLE_SCROLLBAR_SIMULATED = SCROLLABLE_SCROLLBAR_SIMULATED;
var SCROLLABLE_SCROLLBARS_HIDDEN = "dx-scrollable-scrollbars-hidden";
exports.SCROLLABLE_SCROLLBARS_HIDDEN = SCROLLABLE_SCROLLBARS_HIDDEN;
var SCROLLABLE_SCROLLBARS_ALWAYSVISIBLE = "dx-scrollable-scrollbars-alwaysvisible";
exports.SCROLLABLE_SCROLLBARS_ALWAYSVISIBLE = SCROLLABLE_SCROLLBARS_ALWAYSVISIBLE;
var SCROLLABLE_SCROLLBAR_CLASS = "dx-scrollable-scrollbar";
exports.SCROLLABLE_SCROLLBAR_CLASS = SCROLLABLE_SCROLLBAR_CLASS;
var SCROLLABLE_SCROLLBAR_ACTIVE_CLASS = "dx-scrollable-scrollbar-active";
exports.SCROLLABLE_SCROLLBAR_ACTIVE_CLASS = SCROLLABLE_SCROLLBAR_ACTIVE_CLASS;
var SCROLLABLE_SCROLL_CLASS = "dx-scrollable-scroll";
exports.SCROLLABLE_SCROLL_CLASS = SCROLLABLE_SCROLL_CLASS;
var SCROLLABLE_SCROLL_CONTENT_CLASS = "dx-scrollable-scroll-content";
exports.SCROLLABLE_SCROLL_CONTENT_CLASS = SCROLLABLE_SCROLL_CONTENT_CLASS;
var HOVER_ENABLED_STATE = "dx-scrollbar-hoverable";
exports.HOVER_ENABLED_STATE = HOVER_ENABLED_STATE;
var SCROLLVIEW_CONTENT_CLASS = "dx-scrollview-content";
exports.SCROLLVIEW_CONTENT_CLASS = SCROLLVIEW_CONTENT_CLASS;
var SCROLLVIEW_TOP_POCKET_CLASS = "dx-scrollview-top-pocket";
exports.SCROLLVIEW_TOP_POCKET_CLASS = SCROLLVIEW_TOP_POCKET_CLASS;
var SCROLLVIEW_PULLDOWN = "dx-scrollview-pull-down";
exports.SCROLLVIEW_PULLDOWN = SCROLLVIEW_PULLDOWN;
var SCROLLVIEW_PULLDOWN_LOADING_CLASS = "dx-scrollview-pull-down-loading";
exports.SCROLLVIEW_PULLDOWN_LOADING_CLASS = SCROLLVIEW_PULLDOWN_LOADING_CLASS;
var SCROLLVIEW_PULLDOWN_READY_CLASS = "dx-scrollview-pull-down-ready";
exports.SCROLLVIEW_PULLDOWN_READY_CLASS = SCROLLVIEW_PULLDOWN_READY_CLASS;
var SCROLLVIEW_PULLDOWN_IMAGE_CLASS = "dx-scrollview-pull-down-image";
exports.SCROLLVIEW_PULLDOWN_IMAGE_CLASS = SCROLLVIEW_PULLDOWN_IMAGE_CLASS;
var SCROLLVIEW_PULLDOWN_INDICATOR_CLASS = "dx-scrollview-pull-down-indicator";
exports.SCROLLVIEW_PULLDOWN_INDICATOR_CLASS = SCROLLVIEW_PULLDOWN_INDICATOR_CLASS;
var SCROLLVIEW_PULLDOWN_TEXT_CLASS = "dx-scrollview-pull-down-text";
exports.SCROLLVIEW_PULLDOWN_TEXT_CLASS = SCROLLVIEW_PULLDOWN_TEXT_CLASS;
var SCROLLVIEW_PULLDOWN_VISIBLE_TEXT_CLASS = "dx-scrollview-pull-down-text-visible";
exports.SCROLLVIEW_PULLDOWN_VISIBLE_TEXT_CLASS = SCROLLVIEW_PULLDOWN_VISIBLE_TEXT_CLASS;
var PULLDOWN_ICON_CLASS = "dx-icon-pulldown";
exports.PULLDOWN_ICON_CLASS = PULLDOWN_ICON_CLASS;
var SCROLLVIEW_BOTTOM_POCKET_CLASS = "dx-scrollview-bottom-pocket";
exports.SCROLLVIEW_BOTTOM_POCKET_CLASS = SCROLLVIEW_BOTTOM_POCKET_CLASS;
var SCROLLVIEW_REACHBOTTOM_CLASS = "dx-scrollview-scrollbottom";
exports.SCROLLVIEW_REACHBOTTOM_CLASS = SCROLLVIEW_REACHBOTTOM_CLASS;
var SCROLLVIEW_REACHBOTTOM_INDICATOR_CLASS = "dx-scrollview-scrollbottom-indicator";
exports.SCROLLVIEW_REACHBOTTOM_INDICATOR_CLASS = SCROLLVIEW_REACHBOTTOM_INDICATOR_CLASS;
var SCROLLVIEW_REACHBOTTOM_TEXT_CLASS = "dx-scrollview-scrollbottom-text";
exports.SCROLLVIEW_REACHBOTTOM_TEXT_CLASS = SCROLLVIEW_REACHBOTTOM_TEXT_CLASS;
var TopPocketState = {
  STATE_RELEASED: 0,
  STATE_READY: 1,
  STATE_REFRESHING: 2,
  STATE_LOADING: 3,
  STATE_TOUCHED: 4,
  STATE_PULLED: 5
};
exports.TopPocketState = TopPocketState;
var KEY_CODES = {
  PAGE_UP: "pageUp",
  PAGE_DOWN: "pageDown",
  END: "end",
  HOME: "home",
  LEFT: "leftArrow",
  UP: "upArrow",
  RIGHT: "rightArrow",
  DOWN: "downArrow",
  TAB: "tab"
};
exports.KEY_CODES = KEY_CODES;
var VALIDATE_WHEEL_TIMEOUT = 500;
exports.VALIDATE_WHEEL_TIMEOUT = VALIDATE_WHEEL_TIMEOUT;
var HIDE_SCROLLBAR_TIMEOUT = 500;
exports.HIDE_SCROLLBAR_TIMEOUT = HIDE_SCROLLBAR_TIMEOUT;
