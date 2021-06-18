/**
* DevExtreme (ui/tooltip.d.ts)
* Version: 21.2.0
* Build date: Fri Jun 18 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import {
    Cancelable,
    EventInfo,
    InitializedEventInfo,
    ChangedOptionInfo
} from '../events/index';

import dxPopover, {
    dxPopoverOptions
} from './popover';

/** @public */
export type ContentReadyEvent = EventInfo<dxTooltip>;

/** @public */
export type DisposingEvent = EventInfo<dxTooltip>;

/** @public */
export type HidingEvent = Cancelable & EventInfo<dxTooltip>;

/** @public */
export type HiddenEvent = EventInfo<dxTooltip>;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxTooltip>;

/** @public */
export type OptionChangedEvent = EventInfo<dxTooltip> & ChangedOptionInfo;

/** @public */
export type ShowingEvent = EventInfo<dxTooltip>;

/** @public */
export type ShownEvent = EventInfo<dxTooltip>;

/**
 * @deprecated use Properties instead
 * @namespace DevExpress.ui
 */
export interface dxTooltipOptions extends dxPopoverOptions<dxTooltip> {
}
/**
 * @docid
 * @inherits dxPopover
 * @hasTranscludedContent
 * @module ui/tooltip
 * @export default
 * @namespace DevExpress.ui
 * @public
 */
export default class dxTooltip extends dxPopover<dxTooltipOptions> { }

/** @public */
export type Properties = dxTooltipOptions;

/** @deprecated use Properties instead */
export type Options = dxTooltipOptions;

/** @deprecated use Properties instead */
export type IOptions = dxTooltipOptions;
