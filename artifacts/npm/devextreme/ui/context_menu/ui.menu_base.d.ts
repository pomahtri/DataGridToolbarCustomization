/**
* DevExtreme (ui/context_menu/ui.menu_base.d.ts)
* Version: 21.2.0
* Build date: Wed Jun 23 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import {
    animationConfig
} from '../../animation/fx';

import DataSource, {
    DataSourceOptions
} from '../../data/data_source';

import Store from '../../data/abstract_store';

import HierarchicalCollectionWidget, {
    HierarchicalCollectionWidgetOptions
} from '../hierarchical_collection/ui.hierarchical_collection_widget';

import {
    dxMenuBaseItem
} from '../menu';

/** @namespace DevExpress.ui */
export interface dxMenuBaseOptions<TComponent> extends HierarchicalCollectionWidgetOptions<TComponent> {
    /**
     * @docid
     * @default true
     * @public
     */
    activeStateEnabled?: boolean;
    /**
     * @docid
     * @default { show: { type: "fade", from: 0, to: 1, duration: 100 }, hide: { type: "fade", from: 1, to: 0, duration: 100 } }
     * @ref
     * @public
     */
    animation?: {
      /**
       * @docid
       * @default { type: "fade", from: 1, to: 0, duration: 100 }
       */
      hide?: animationConfig,
      /**
       * @docid
       * @default { type: "fade", from: 0, to: 1, duration: 100 }
       */
      show?: animationConfig
    };
    /**
     * @docid
     * @default ""
     * @public
     */
    cssClass?: string;
    /**
     * @docid
     * @default null
     * @public
     */
    dataSource?: string | Array<dxMenuBaseItem> | Store | DataSource | DataSourceOptions;
    /**
     * @docid
     * @public
     */
    items?: Array<dxMenuBaseItem>;
    /**
     * @docid
     * @default false
     * @public
     */
    selectByClick?: boolean;
    /**
     * @docid
     * @type Enums.MenuSelectionMode
     * @default none
     * @public
     */
    selectionMode?: 'none' | 'single';
    /**
     * @docid
     * @type Object|Enums.ShowSubmenuMode
     * @default { name: "onHover", delay: { show: 50, hide: 300 } }
     * @public
     */
    showSubmenuMode?: {
      /**
       * @docid
       * @default { show: 50, hide: 300 }
       */
      delay?: {
        /**
         * @docid
         * @default 300
         */
        hide?: number,
        /**
         * @docid
         * @default 50
         */
        show?: number
      } | number,
      /**
       * @docid
       * @type Enums.ShowSubmenuMode
       * @default "onHover"
       */
      name?: 'onClick' | 'onHover'
    } | 'onClick' | 'onHover';
}
/**
 * @docid
 * @inherits HierarchicalCollectionWidget
 * @hidden
 * @namespace DevExpress.ui
 */
export default class dxMenuBase<TProperties> extends HierarchicalCollectionWidget<TProperties> {
    /**
     * @docid
     * @publicName selectItem(itemElement)
     * @param1 itemElement:Element
     * @public
     */
    selectItem(itemElement: Element): void;
    /**
     * @docid
     * @publicName unselectItem(itemElement)
     * @param1 itemElement:Element
     * @public
     */
    unselectItem(itemElement: Element): void;
}
