/**
* DevExtreme (renovation/ui/scroll_view/utils/get_scroll_left_max.js)
* Version: 21.2.0
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.getScrollLeftMax = getScrollLeftMax;

function getScrollLeftMax(element) {
  return element.scrollWidth - element.clientWidth;
}
