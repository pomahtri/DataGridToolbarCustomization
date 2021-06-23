/**
* DevExtreme (cjs/ui/data_grid/ui.data_grid.column_headers.js)
* Version: 21.2.0
* Build date: Wed Jun 23 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.ColumnHeadersView = void 0;

var _uiData_grid = _interopRequireDefault(require("./ui.data_grid.core"));

var _uiGrid_core = require("../grid_core/ui.grid_core.column_headers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColumnHeadersView = _uiGrid_core.columnHeadersModule.views.columnHeadersView;
exports.ColumnHeadersView = ColumnHeadersView;

_uiData_grid.default.registerModule('columnHeaders', _uiGrid_core.columnHeadersModule);
