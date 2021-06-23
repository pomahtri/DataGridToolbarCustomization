import _extends from "@babel/runtime/helpers/esm/extends";
import { BaseWidgetProps } from "../../../common/base_props";
import messageLocalization from "../../../../../localization/message";
export var DataGridColumnButton = {};
export var DataGridColumnHeaderFilter = {};
export var DataGridColumnLookup = {};
export var DataGridColumn = {};
export var DataGridEditingTexts = {};
export var DataGridEditing = {
  allowAdding: false,
  allowDeleting: false,
  allowUpdating: false,
  confirmDelete: true,
  form: {
    colCount: 2
  },
  mode: "row",
  popup: {},
  refreshMode: "full",
  selectTextOnEditStart: false,
  startEditAction: "click",
  useIcons: false,
  defaultChanges: [],
  changesChange: () => {},
  defaultEditRowKey: null,
  editRowKeyChange: () => {},
  defaultEditColumnName: null,
  editColumnNameChange: () => {}
};
export var DataGridScrolling = {};
export var DataGridSelection = {};
export var DataGridPaging = {};
export var DataGridSortByGroupSummaryInfoItem = {};
export var DataGridGroupPanel = {};
export var DataGridGrouping = {};
export var DataGridSummaryGroupItem = {};
export var DataGridSummaryTotalItem = {};
export var DataGridSummary = {};
export var DataGridPager = {};
export var DataGridMasterDetail = {};
export var DataGridRowDragging = {};
export var DataGridColumnChooser = {};
export var DataGridColumnFixing = {};
export var DataGridSearchPanel = {};
export var DataGridSorting = {};
export var DataGridStateStoring = {};
export var DataGridFilterPanel = {};
export var DataGridFilterRow = {};
export var DataGridHeaderFilter = {};
export var DataGridKeyboardNavigation = {};
export var DataGridLoadPanel = {};
export var DataGridExport = {};
export var DataGridCommonColumnSettings = {};
export var DataGridToolbar = {};
export var DataGridProps = _extends({}, BaseWidgetProps, {
  editing: {
    mode: "row",
    refreshMode: "full",
    allowAdding: false,
    allowUpdating: false,
    allowDeleting: false,
    useIcons: false,
    selectTextOnEditStart: false,
    confirmDelete: true,
    form: {
      colCount: 2
    },
    popup: {},
    startEditAction: "click",
    editRowKey: null,
    editColumnName: null,
    changes: []
  },
  groupPanel: {
    visible: false,
    emptyPanelText: messageLocalization.format("dxDataGrid-groupPanelEmptyText"),
    allowColumnDragging: true
  },
  grouping: {
    autoExpandAll: true,
    allowCollapsing: true,
    contextMenuEnabled: false,
    expandMode: "buttonClick",
    texts: {
      groupContinuesMessage: messageLocalization.format("dxDataGrid-groupContinuesMessage"),
      groupContinuedMessage: messageLocalization.format("dxDataGrid-groupContinuedMessage"),
      groupByThisColumn: messageLocalization.format("dxDataGrid-groupHeaderText"),
      ungroup: messageLocalization.format("dxDataGrid-ungroupHeaderText"),
      ungroupAll: messageLocalization.format("dxDataGrid-ungroupAllText")
    }
  },
  scrolling: {
    timeout: 300,
    updateTimeout: 300,
    minTimeout: 0,
    renderingThreshold: 100,
    removeInvisiblePages: true,
    rowPageSize: 5,
    mode: "standard",
    preloadEnabled: false,
    rowRenderingMode: "standard",
    loadTwoPagesOnStart: false,
    columnRenderingMode: "standard",
    columnPageSize: 5,
    columnRenderingThreshold: 300,
    useNative: "auto"
  },
  keyboardNavigation: {
    enabled: true,
    enterKeyAction: "startEdit",
    enterKeyDirection: "none",
    editOnKeyPress: false
  },
  loadPanel: {
    enabled: "auto",
    text: messageLocalization.format("Loading"),
    width: 200,
    height: 90,
    showIndicator: true,
    indicatorSrc: "",
    showPane: true
  },
  searchPanel: {
    visible: false,
    width: 160,
    placeholder: messageLocalization.format("dxDataGrid-searchPanelPlaceholder"),
    highlightSearchText: true,
    highlightCaseSensitive: false,
    text: "",
    searchVisibleColumnsOnly: false
  },
  sorting: {
    mode: "single",
    ascendingText: messageLocalization.format("dxDataGrid-sortingAscendingText"),
    descendingText: messageLocalization.format("dxDataGrid-sortingDescendingText"),
    clearText: messageLocalization.format("dxDataGrid-sortingClearText"),
    showSortIndexes: true
  },
  filterSyncEnabled: "auto",
  showBorders: false,
  showColumnHeaders: true,
  showColumnLines: true,
  showRowLines: false,
  loadingTimeout: 30,
  commonColumnSettings: {
    allowExporting: true,
    allowFiltering: true,
    allowHiding: true,
    allowSorting: true,
    allowEditing: true,
    encodeHtml: true,
    trueText: messageLocalization.format("dxDataGrid-trueText"),
    falseText: messageLocalization.format("dxDataGrid-falseText")
  },
  defaultFilterValue: null,
  filterValueChange: () => {},
  defaultFocusedColumnIndex: -1,
  focusedColumnIndexChange: () => {},
  defaultFocusedRowIndex: -1,
  focusedRowIndexChange: () => {},
  defaultFocusedRowKey: null,
  focusedRowKeyChange: () => {},
  defaultSelectedRowKeys: [],
  selectedRowKeysChange: () => {},
  defaultSelectionFilter: [],
  selectionFilterChange: () => {}
});