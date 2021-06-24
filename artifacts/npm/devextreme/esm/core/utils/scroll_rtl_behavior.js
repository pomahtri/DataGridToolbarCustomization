/**
* DevExtreme (esm/core/utils/scroll_rtl_behavior.js)
* Version: 21.2.0
* Build date: Thu Jun 24 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import domAdapter from '../dom_adapter';
import callOnce from './call_once';
var getScrollRtlBehavior = callOnce(function () {
  var document = domAdapter.getDocument();
  /* Append a RTL scrollable 1px square containing a 2px-wide child and check
     the initial scrollLeft and whether it's possible to set a negative one.*/

  document.body.insertAdjacentHTML('beforeend', "<div style='direction: rtl;\n       position: absolute; left: 0; top: -1; overflow: hidden; width: 1px;\n       height: 1px;'><div style='width: 2px; height: 1px;'></div></div>");
  var scroller = document.body.lastElementChild;
  var initiallyPositive = scroller.scrollLeft > 0;
  scroller.scrollLeft = -1;
  var hasNegative = scroller.scrollLeft < 0;
  var result = {
    'decreasing': hasNegative || initiallyPositive,
    'positive': !hasNegative
  };
  document.body.removeChild(scroller);
  return result;
});
export default getScrollRtlBehavior;
