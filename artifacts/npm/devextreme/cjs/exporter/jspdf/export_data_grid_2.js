/**
* DevExtreme (cjs/exporter/jspdf/export_data_grid_2.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.exportDataGrid = exportDataGrid;

var _type = require("../../core/utils/type");

var _extend = require("../../core/utils/extend");

var _pdf_grid = require("./pdf_grid");

function _getFullOptions(options) {
  var fullOptions = (0, _extend.extend)({}, options);

  if (!(0, _type.isDefined)(fullOptions.topLeft)) {
    throw 'options.topLeft is required';
  }

  if (!(0, _type.isDefined)(fullOptions.indent)) {
    fullOptions.indent = 10;
  }

  return fullOptions;
}

function exportDataGrid(doc, dataGrid, options) {
  options = (0, _extend.extend)({}, _getFullOptions(options));
  var dataProvider = dataGrid.getDataProvider();
  return new Promise(function (resolve) {
    dataProvider.ready().done(function () {
      var columns = dataProvider.getColumns();
      var pdfGrid = new _pdf_grid.PdfGrid(options.splitToTablesByColumns, options.columnWidths);
      var rowsIndents = [];
      pdfGrid.startNewTable(options.drawTableBorder, options.topLeft);
      var dataRowsCount = dataProvider.getRowsCount();

      for (var rowIndex = 0; rowIndex < dataRowsCount; rowIndex++) {
        var rowType = dataProvider.getCellData(rowIndex, 0, true).cellSourceData.rowType;
        var groupLevel = rowType !== 'header' ? dataProvider.getGroupLevel(rowIndex) : 0;
        var currentRow = [];

        for (var cellIndex = 0; cellIndex < columns.length; cellIndex++) {
          var cellData = dataProvider.getCellData(rowIndex, cellIndex, true);
          var pdfCell = {
            text: cellData.value
          };

          if (rowType === 'header') {
            var cellMerging = dataProvider.getCellMerging(rowIndex, cellIndex);

            if (cellMerging && cellMerging.rowspan > 0) {
              pdfCell.rowSpan = cellMerging.rowspan;
            }

            if (cellMerging && cellMerging.colspan > 0) {
              pdfCell.colSpan = cellMerging.colspan;
            }
          } else if (rowType === 'group') {
            pdfCell.colSpan = columns.length - 1;
          }

          if (options.onCellExporting) {
            options.onCellExporting({
              gridCell: {
                value: cellData.value
              },
              pdfCell: pdfCell
            });
          }

          currentRow.push(pdfCell);
        }

        rowsIndents.push(groupLevel * options.indent);
        var startNewTableWithIndent = rowsIndents.length >= 2 && rowsIndents[rowsIndents.length - 1] !== rowsIndents[rowsIndents.length - 2];

        if (startNewTableWithIndent) {
          var indent = rowsIndents[rowsIndents.length - 1];
          var prevTable = pdfGrid._currentHorizontalTables[0];
          var firstColumnWidth = options.columnWidths[0] - indent;
          var tableTopLeft = {
            x: options.topLeft.x + indent,
            y: prevTable.rect.y + prevTable.rect.h
          };
          pdfGrid.startNewTable(options.drawTableBorder, tableTopLeft, null, null, firstColumnWidth);
        }

        var rowHeight = null; // TODO: Default Value

        if (options.onRowExporting) {
          var args = {
            drawNewTableFromThisRow: {},
            rowCells: currentRow
          };
          options.onRowExporting(args);
          var _args$drawNewTableFro = args.drawNewTableFromThisRow,
              startNewTable = _args$drawNewTableFro.startNewTable,
              addPage = _args$drawNewTableFro.addPage,
              _tableTopLeft = _args$drawNewTableFro.tableTopLeft,
              splitToTablesByColumns = _args$drawNewTableFro.splitToTablesByColumns;

          if (startNewTable === true) {
            pdfGrid.startNewTable(options.drawTableBorder, _tableTopLeft, addPage === true, splitToTablesByColumns);
          }

          if ((0, _type.isDefined)(args.rowHeight)) {
            rowHeight = args.rowHeight;
          }
        }

        pdfGrid.addRow(currentRow, rowHeight);
      }

      pdfGrid.mergeCellsBySpanAttributes();
      pdfGrid.drawTo(doc);
      resolve();
    });
  });
}
