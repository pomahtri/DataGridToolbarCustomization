/*!
* DevExtreme (dx.messages.nl.js)
* Version: 21.2.0
* Build date: Thu Jun 24 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

(function(root, factory) {
    if(typeof define === 'function' && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"));
        });
    } else if(typeof module === "object" && module.exports) {
        factory(require("devextreme/localization"));
    } else {
        factory(DevExpress.localization);
    }
}(this, function(localization) {
    localization.loadMessages({
        "nl": {
            "Yes": "Ja",
            "No": "Nee",
            "Cancel": "Annuleren",
            "Clear": "Wissen",
            "Done": "Klaar",
            "Loading": "Laden...",
            "Select": "Kiezen...",
            "Search": "Zoeken",
            "Back": "Terug",
            "OK": "OK",
            "dxCollectionWidget-noDataText": "Geen gegevens om te tonen",
            "dxDropDownEditor-selectLabel": "Kiezen",
            "validation-required": "Verplicht",
            "validation-required-formatted": "{0} is verplicht",
            "validation-numeric": "Waarde moet numeriek zijn",
            "validation-numeric-formatted": "{0} moet numeriek zijn",
            "validation-range": "Waarde is niet binnen het bereik",
            "validation-range-formatted": "{0} is niet binnen het bereik",
            "validation-stringLength": "De lengte van de waarde is niet correct",
            "validation-stringLength-formatted": "De lengte van {0}  is niet correct",
            "validation-custom": "Waarde is ongeldig",
            "validation-custom-formatted": "{0} is ongeldig",
            "validation-async": "Waarde is ongeldig",
            "validation-async-formatted": "{0} is ongeldig",
            "validation-compare": "Waardes komen niet overeen",
            "validation-compare-formatted": "{0} komen niet overeen",
            "validation-pattern": "Waarde komt niet overeen met het patroon",
            "validation-pattern-formatted": "{0} komt niet overeen met het patroon",
            "validation-email": "Email is niet geldig",
            "validation-email-formatted": "{0} is niet geldig",
            "validation-mask": "Waarde is niet geldig",
            "dxLookup-searchPlaceholder": "Minimum aantal karakters: {0}",
            "dxList-pullingDownText": "Trek naar beneden om te vernieuwen...",
            "dxList-pulledDownText": "Laat los om te vernieuwen...",
            "dxList-refreshingText": "Vernieuwen...",
            "dxList-pageLoadingText": "Laden...",
            "dxList-nextButtonText": "Meer",
            "dxList-selectAll": "Selecteer Alles",
            "dxListEditDecorator-delete": "Verwijderen",
            "dxListEditDecorator-more": "Meer",
            "dxScrollView-pullingDownText": "Trek naar beneden om te vernieuwen...",
            "dxScrollView-pulledDownText": "Laat los om te vernieuwen...",
            "dxScrollView-refreshingText": "Vernieuwen...",
            "dxScrollView-reachBottomText": "Laden...",
            "dxDateBox-simulatedDataPickerTitleTime": "Selecteer tijd",
            "dxDateBox-simulatedDataPickerTitleDate": "Selecteer datum",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Selecteer datum and tijd",
            "dxDateBox-validation-datetime": "Waarde moet een datum of tijd zijn",
            "dxFileUploader-selectFile": "Selecteer bestand",
            "dxFileUploader-dropFile": "of sleep bestand hier",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Uploaden",
            "dxFileUploader-uploaded": "Geüpload",
            "dxFileUploader-readyToUpload": "Klaar om te uploaden",
            "dxFileUploader-uploadAbortedMessage": "TODO",
            "dxFileUploader-uploadFailedMessage": "Uploaden is mislukt",
            "dxFileUploader-invalidFileExtension": "Dit bestandstype is niet toegestaan",
            "dxFileUploader-invalidMaxFileSize": "Het bestand is te groot",
            "dxFileUploader-invalidMinFileSize": "Het bestand is te klein",
            "dxRangeSlider-ariaFrom": "Van",
            "dxRangeSlider-ariaTill": "Tot",
            "dxSwitch-switchedOnText": "AAN",
            "dxSwitch-switchedOffText": "UIT",
            "dxForm-optionalMark": "optioneel",
            "dxForm-requiredMessage": "{0} is verplicht",
            "dxNumberBox-invalidValueMessage": "Waarde moet een nummer zijn",
            "dxNumberBox-noDataText": "Geen gegevens",
            "dxDataGrid-columnChooserTitle": "Kolom Kiezer",
            "dxDataGrid-columnChooserEmptyText": "Sleep hier een kolomkop om hem te verbergen",
            "dxDataGrid-groupContinuesMessage": "Gaat verder op de volgende pagina",
            "dxDataGrid-groupContinuedMessage": "Vervolg van de vorige pagina",
            "dxDataGrid-groupHeaderText": "Groepeer op deze kolom",
            "dxDataGrid-ungroupHeaderText": "Degroeperen",
            "dxDataGrid-ungroupAllText": "Alle Degroeperen",
            "dxDataGrid-editingEditRow": "Wijzigen",
            "dxDataGrid-editingSaveRowChanges": "Opslaan",
            "dxDataGrid-editingCancelRowChanges": "Annuleren",
            "dxDataGrid-editingDeleteRow": "Verwijderen",
            "dxDataGrid-editingUndeleteRow": "Ongedaan maken",
            "dxDataGrid-editingConfirmDeleteMessage": "Moet dit record verwijderd worden?",
            "dxDataGrid-validationCancelChanges": "Wijzigingen annuleren",
            "dxDataGrid-groupPanelEmptyText": "Sleep hier een kolomkop om er op te groeperen",
            "dxDataGrid-noDataText": "Geen gegevens",
            "dxDataGrid-searchPanelPlaceholder": "Zoeken...",
            "dxDataGrid-filterRowShowAllText": "(Alle)",
            "dxDataGrid-filterRowResetOperationText": "Reset",
            "dxDataGrid-filterRowOperationEquals": "Gelijk aan",
            "dxDataGrid-filterRowOperationNotEquals": "Niet gelijk aan",
            "dxDataGrid-filterRowOperationLess": "Kleiner dan",
            "dxDataGrid-filterRowOperationLessOrEquals": "Kleiner dan of gelijk aan",
            "dxDataGrid-filterRowOperationGreater": "Groter dan",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Groter dan of gelijk aan",
            "dxDataGrid-filterRowOperationStartsWith": "Begint met",
            "dxDataGrid-filterRowOperationContains": "Bevat",
            "dxDataGrid-filterRowOperationNotContains": "Bevat niet",
            "dxDataGrid-filterRowOperationEndsWith": "Eindigt met",
            "dxDataGrid-filterRowOperationBetween": "Tussen",
            "dxDataGrid-filterRowOperationBetweenStartText": "Begin",
            "dxDataGrid-filterRowOperationBetweenEndText": "Einde",
            "dxDataGrid-applyFilterText": "Filter toepassen",
            "dxDataGrid-trueText": "waar",
            "dxDataGrid-falseText": "niet waar",
            "dxDataGrid-sortingAscendingText": "Sorteer Oplopend",
            "dxDataGrid-sortingDescendingText": "Sorteer Aflopend",
            "dxDataGrid-sortingClearText": "Sortering wissen",
            "dxDataGrid-editingSaveAllChanges": "Wijzigingen opslaan",
            "dxDataGrid-editingCancelAllChanges": "Wijzigingen annuleren",
            "dxDataGrid-editingAddRow": "Rij toevoegen",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min van {1} is {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Max van {1} is {0}",
            "dxDataGrid-summaryAvg": "Gem: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Gem van {1} is {0}",
            "dxDataGrid-summarySum": "Som: {0}",
            "dxDataGrid-summarySumOtherColumn": "Som van {1} is {0}",
            "dxDataGrid-summaryCount": "Aantal: {0}",
            "dxDataGrid-columnFixingFix": "Blokkeren",
            "dxDataGrid-columnFixingUnfix": "Blokkering opheffen",
            "dxDataGrid-columnFixingLeftPosition": "Naar links",
            "dxDataGrid-columnFixingRightPosition": "Naar rechts",
            "dxDataGrid-exportTo": "Exporteren",
            "dxDataGrid-exportToExcel": "Exporteer naar Excel bestand",
            "dxDataGrid-exporting": "Exporteren...",
            "dxDataGrid-excelFormat": "Excel bestand",
            "dxDataGrid-selectedRows": "Geselecteerde rijen",
            "dxDataGrid-exportSelectedRows": "Exporteer geselecteerde rijen",
            "dxDataGrid-exportAll": "Exporteer alle gegevens",
            "dxDataGrid-headerFilterEmptyValue": "(Leeg)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Annuleren",
            "dxDataGrid-ariaColumn": "Kolom",
            "dxDataGrid-ariaValue": "Waarde",
            "dxDataGrid-ariaFilterCell": "Filter cel",
            "dxDataGrid-ariaCollapse": "Inklappen",
            "dxDataGrid-ariaExpand": "Uitklappen",
            "dxDataGrid-ariaDataGrid": "Gegevenstabel",
            "dxDataGrid-ariaSearchInGrid": "Zoeken in gegevenstabel",
            "dxDataGrid-ariaSelectAll": "Selecteer alle",
            "dxDataGrid-ariaSelectRow": "Selecteer rij",
            "dxDataGrid-filterBuilderPopupTitle": "Filterbouwer",
            "dxDataGrid-filterPanelCreateFilter": "Maak Filter",
            "dxDataGrid-filterPanelClearFilter": "Wissen",
            "dxDataGrid-filterPanelFilterEnabledHint": "Filter activeren",
            "dxTreeList-ariaTreeList": "Boomstructuur",
            "dxTreeList-editingAddRowToNode": "Toevoegen",
            "dxPager-infoText": "Pagina {0} van {1} ({2} items)",
            "dxPager-pagesCountText": "van",
            "dxPager-pageSizesAllText": "Alle",
            "dxPivotGrid-grandTotal": "Eindtotaal",
            "dxPivotGrid-total": "{0} Totaal",
            "dxPivotGrid-fieldChooserTitle": "Veldenkiezer",
            "dxPivotGrid-showFieldChooser": "Toon Veldenkiezer",
            "dxPivotGrid-expandAll": "Alle Uitklappen",
            "dxPivotGrid-collapseAll": "Alle Inklappen",
            "dxPivotGrid-sortColumnBySummary": "Sorteer \"{0}\" op Deze Kolom",
            "dxPivotGrid-sortRowBySummary": "Sorteer \"{0}\" op Deze Rij",
            "dxPivotGrid-removeAllSorting": "Verwijderen Alle Sorteringen",
            "dxPivotGrid-dataNotAvailable": "N/B",
            "dxPivotGrid-rowFields": "Rijvelden",
            "dxPivotGrid-columnFields": "Kolomvelden",
            "dxPivotGrid-dataFields": "Gegevensvelden",
            "dxPivotGrid-filterFields": "Filtervelden",
            "dxPivotGrid-allFields": "Alle Velden",
            "dxPivotGrid-columnFieldArea": "Sleep Kolomvelden Hier",
            "dxPivotGrid-dataFieldArea": "Sleep Gegevensvelden Hier",
            "dxPivotGrid-rowFieldArea": "Sleep Rijvelden Hier",
            "dxPivotGrid-filterFieldArea": "Sleep Filtervelden Hier",
            "dxScheduler-editorLabelTitle": "Onderwerp",
            "dxScheduler-editorLabelStartDate": "Startdatum",
            "dxScheduler-editorLabelEndDate": "Einddatum",
            "dxScheduler-editorLabelDescription": "Omschrijving",
            "dxScheduler-editorLabelRecurrence": "Herhalen",
            "dxScheduler-openAppointment": "Afspraak openen",
            "dxScheduler-recurrenceNever": "Nooit",
            "dxScheduler-recurrenceMinutely": "Minutely",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "Dagelijks",
            "dxScheduler-recurrenceWeekly": "Wekelijks",
            "dxScheduler-recurrenceMonthly": "Maandelijks",
            "dxScheduler-recurrenceYearly": "Jaarlijks",
            "dxScheduler-recurrenceRepeatEvery": "Elke",
            "dxScheduler-recurrenceRepeatOn": "Repeat On",
            "dxScheduler-recurrenceEnd": "Einde herhaling",
            "dxScheduler-recurrenceAfter": "Na",
            "dxScheduler-recurrenceOn": "Op",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "dag(en)",
            "dxScheduler-recurrenceRepeatWeekly": "week/weken",
            "dxScheduler-recurrenceRepeatMonthly": "maand(en)",
            "dxScheduler-recurrenceRepeatYearly": "jaar/jaren",
            "dxScheduler-switcherDay": "Dag",
            "dxScheduler-switcherWeek": "Week",
            "dxScheduler-switcherWorkWeek": "Werkweek",
            "dxScheduler-switcherMonth": "Maand",
            "dxScheduler-switcherAgenda": "Planningsweergave",
            "dxScheduler-switcherTimelineDay": "Tijdslijn Dag",
            "dxScheduler-switcherTimelineWeek": "Tijdslijn Week",
            "dxScheduler-switcherTimelineWorkWeek": "Tijdslijn Werkweek",
            "dxScheduler-switcherTimelineMonth": "Tijdslijn Maand",
            "dxScheduler-recurrenceRepeatOnDate": "op datum",
            "dxScheduler-recurrenceRepeatCount": "keer",
            "dxScheduler-allDay": "Duurt hele dag",
            "dxScheduler-confirmRecurrenceEditMessage": "Alleen deze afspraak of de hele serie wijzigen?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Alleen deze afspraak of de volledige serie verwijderen?",
            "dxScheduler-confirmRecurrenceEditSeries": "Serie wijzigen",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Serie verwijderen",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Afspraak wijzigen",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Afspraak verwijderen",
            "dxScheduler-noTimezoneTitle": "Geen tijdszone",
            "dxScheduler-moreAppointments": "Nog {0}",
            "dxCalendar-todayButtonText": "Vandaag",
            "dxCalendar-ariaWidgetName": "Kalender",
            "dxColorView-ariaRed": "Rood",
            "dxColorView-ariaGreen": "Groen",
            "dxColorView-ariaBlue": "Blauw",
            "dxColorView-ariaAlpha": "Doorzichtigheid",
            "dxColorView-ariaHex": "Kleurcode",
            "dxTagBox-selected": "{0} geselecteerd",
            "dxTagBox-allSelected": "Alles geselecteerd ({0})",
            "dxTagBox-moreSelected": "Nog {0}",
            "vizExport-printingButtonText": "Afdrukken",
            "vizExport-titleMenuText": "Exporteren/Afdrukken",
            "vizExport-exportButtonText": "{0} bestand",
            "dxFilterBuilder-and": "En",
            "dxFilterBuilder-or": "Of",
            "dxFilterBuilder-notAnd": "En niet",
            "dxFilterBuilder-notOr": "Of niet",
            "dxFilterBuilder-addCondition": "Regel toevoegen",
            "dxFilterBuilder-addGroup": "Groep toevoegen",
            "dxFilterBuilder-enterValueText": "<vul waarde in>",
            "dxFilterBuilder-filterOperationEquals": "Gelijk aan",
            "dxFilterBuilder-filterOperationNotEquals": "Niet gelijk aan",
            "dxFilterBuilder-filterOperationLess": "Is kleiner dan",
            "dxFilterBuilder-filterOperationLessOrEquals": "Is kleiner dan of gelijk aan",
            "dxFilterBuilder-filterOperationGreater": "Is groter dan",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Is groter dan of gelijk aan",
            "dxFilterBuilder-filterOperationStartsWith": "Begint met",
            "dxFilterBuilder-filterOperationContains": "Bevat",
            "dxFilterBuilder-filterOperationNotContains": "Bevat niet",
            "dxFilterBuilder-filterOperationEndsWith": "Eindigt met",
            "dxFilterBuilder-filterOperationIsBlank": "Is leeg",
            "dxFilterBuilder-filterOperationIsNotBlank": "Is niet leeg",
            "dxFilterBuilder-filterOperationBetween": "Is tussen",
            "dxFilterBuilder-filterOperationAnyOf": "Is een van",
            "dxFilterBuilder-filterOperationNoneOf": "Is geen van",
            "dxHtmlEditor-dialogColorCaption": "Tekstkleur",
            "dxHtmlEditor-dialogBackgroundCaption": "Achtergrondkleur",
            "dxHtmlEditor-dialogLinkCaption": "Link",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Tekst",
            "dxHtmlEditor-dialogLinkTargetField": "Open link in een nieuw venster",
            "dxHtmlEditor-dialogImageCaption": "Afbeelding",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Alternatieve tekst",
            "dxHtmlEditor-dialogImageWidthField": "Breedte (px)",
            "dxHtmlEditor-dialogImageHeightField": "Hoogte (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableColumnsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableCaption": "!TODO",
            "dxHtmlEditor-heading": "Titel",
            "dxHtmlEditor-normalText": "Normale tekst",
            "dxHtmlEditor-background": "TODO",
            "dxHtmlEditor-bold": "TODO",
            "dxHtmlEditor-color": "TODO",
            "dxHtmlEditor-font": "TODO",
            "dxHtmlEditor-italic": "TODO",
            "dxHtmlEditor-link": "TODO",
            "dxHtmlEditor-image": "TODO",
            "dxHtmlEditor-size": "TODO",
            "dxHtmlEditor-strike": "TODO",
            "dxHtmlEditor-subscript": "TODO",
            "dxHtmlEditor-superscript": "TODO",
            "dxHtmlEditor-underline": "TODO",
            "dxHtmlEditor-blockquote": "TODO",
            "dxHtmlEditor-header": "TODO",
            "dxHtmlEditor-increaseIndent": "TODO",
            "dxHtmlEditor-decreaseIndent": "TODO",
            "dxHtmlEditor-orderedList": "TODO",
            "dxHtmlEditor-bulletList": "TODO",
            "dxHtmlEditor-alignLeft": "TODO",
            "dxHtmlEditor-alignCenter": "TODO",
            "dxHtmlEditor-alignRight": "TODO",
            "dxHtmlEditor-alignJustify": "TODO",
            "dxHtmlEditor-codeBlock": "TODO",
            "dxHtmlEditor-variable": "TODO",
            "dxHtmlEditor-undo": "TODO",
            "dxHtmlEditor-redo": "TODO",
            "dxHtmlEditor-clear": "TODO",
            "dxHtmlEditor-insertTable": "TODO",
            "dxHtmlEditor-insertRowAbove": "TODO",
            "dxHtmlEditor-insertRowBelow": "TODO",
            "dxHtmlEditor-insertColumnLeft": "TODO",
            "dxHtmlEditor-insertColumnRight": "TODO",
            "dxHtmlEditor-deleteColumn": "TODO",
            "dxHtmlEditor-deleteRow": "TODO",
            "dxHtmlEditor-deleteTable": "TODO",
            "dxHtmlEditor-list": "TODO",
            "dxHtmlEditor-ordered": "TODO",
            "dxHtmlEditor-bullet": "TODO",
            "dxHtmlEditor-align": "TODO",
            "dxHtmlEditor-center": "TODO",
            "dxHtmlEditor-left": "TODO",
            "dxHtmlEditor-right": "TODO",
            "dxHtmlEditor-indent": "TODO",
            "dxHtmlEditor-justify": "TODO",
            "dxFileManager-newDirectoryName": "TODO",
            "dxFileManager-rootDirectoryName": "TODO",
            "dxFileManager-errorNoAccess": "TODO",
            "dxFileManager-errorDirectoryExistsFormat": "TODO",
            "dxFileManager-errorFileExistsFormat": "TODO",
            "dxFileManager-errorFileNotFoundFormat": "TODO",
            "dxFileManager-errorDirectoryNotFoundFormat": "TODO",
            "dxFileManager-errorWrongFileExtension": "TODO",
            "dxFileManager-errorMaxFileSizeExceeded": "TODO",
            "dxFileManager-errorInvalidSymbols": "TODO",
            "dxFileManager-errorDefault": "TODO",
            "dxFileManager-errorDirectoryOpenFailed": "TODO",
            "dxDiagram-categoryGeneral": "TODO",
            "dxDiagram-categoryFlowchart": "TODO",
            "dxDiagram-categoryOrgChart": "TODO",
            "dxDiagram-categoryContainers": "TODO",
            "dxDiagram-categoryCustom": "TODO",
            "dxDiagram-commandExportToSvg": "TODO",
            "dxDiagram-commandExportToPng": "TODO",
            "dxDiagram-commandExportToJpg": "TODO",
            "dxDiagram-commandUndo": "TODO",
            "dxDiagram-commandRedo": "TODO",
            "dxDiagram-commandFontName": "TODO",
            "dxDiagram-commandFontSize": "TODO",
            "dxDiagram-commandBold": "TODO",
            "dxDiagram-commandItalic": "TODO",
            "dxDiagram-commandUnderline": "TODO",
            "dxDiagram-commandTextColor": "TODO",
            "dxDiagram-commandLineColor": "TODO",
            "dxDiagram-commandLineWidth": "TODO",
            "dxDiagram-commandLineStyle": "TODO",
            "dxDiagram-commandLineStyleSolid": "TODO",
            "dxDiagram-commandLineStyleDotted": "TODO",
            "dxDiagram-commandLineStyleDashed": "TODO",
            "dxDiagram-commandFillColor": "TODO",
            "dxDiagram-commandAlignLeft": "TODO",
            "dxDiagram-commandAlignCenter": "TODO",
            "dxDiagram-commandAlignRight": "TODO",
            "dxDiagram-commandConnectorLineType": "TODO",
            "dxDiagram-commandConnectorLineStraight": "TODO",
            "dxDiagram-commandConnectorLineOrthogonal": "TODO",
            "dxDiagram-commandConnectorLineStart": "TODO",
            "dxDiagram-commandConnectorLineEnd": "TODO",
            "dxDiagram-commandConnectorLineNone": "TODO",
            "dxDiagram-commandConnectorLineArrow": "TODO",
            "dxDiagram-commandFullscreen": "TODO",
            "dxDiagram-commandUnits": "TODO",
            "dxDiagram-commandPageSize": "TODO",
            "dxDiagram-commandPageOrientation": "TODO",
            "dxDiagram-commandPageOrientationLandscape": "TODO",
            "dxDiagram-commandPageOrientationPortrait": "TODO",
            "dxDiagram-commandPageColor": "TODO",
            "dxDiagram-commandShowGrid": "TODO",
            "dxDiagram-commandSnapToGrid": "TODO",
            "dxDiagram-commandGridSize": "TODO",
            "dxDiagram-commandZoomLevel": "TODO",
            "dxDiagram-commandAutoZoom": "TODO",
            "dxDiagram-commandFitToContent": "TODO",
            "dxDiagram-commandFitToWidth": "TODO",
            "dxDiagram-commandAutoZoomByContent": "TODO",
            "dxDiagram-commandAutoZoomByWidth": "TODO",
            "dxDiagram-commandSimpleView": "TODO",
            "dxDiagram-commandCut": "TODO",
            "dxDiagram-commandCopy": "TODO",
            "dxDiagram-commandPaste": "TODO",
            "dxDiagram-commandSelectAll": "TODO",
            "dxDiagram-commandDelete": "TODO",
            "dxDiagram-commandBringToFront": "TODO",
            "dxDiagram-commandSendToBack": "TODO",
            "dxDiagram-commandLock": "TODO",
            "dxDiagram-commandUnlock": "TODO",
            "dxDiagram-commandInsertShapeImage": "TODO",
            "dxDiagram-commandEditShapeImage": "TODO",
            "dxDiagram-commandDeleteShapeImage": "TODO",
            "dxDiagram-commandLayoutLeftToRight": "TODO",
            "dxDiagram-commandLayoutRightToLeft": "TODO",
            "dxDiagram-commandLayoutTopToBottom": "TODO",
            "dxDiagram-commandLayoutBottomToTop": "TODO",
            "dxDiagram-unitIn": "TODO",
            "dxDiagram-unitCm": "TODO",
            "dxDiagram-unitPx": "TODO",
            "dxDiagram-dialogButtonOK": "TODO",
            "dxDiagram-dialogButtonCancel": "TODO",
            "dxDiagram-dialogInsertShapeImageTitle": "TODO",
            "dxDiagram-dialogEditShapeImageTitle": "TODO",
            "dxDiagram-dialogEditShapeImageSelectButton": "TODO",
            "dxDiagram-dialogEditShapeImageLabelText": "TODO",
            "dxDiagram-uiExport": "TODO",
            "dxDiagram-uiProperties": "TODO",
            "dxDiagram-uiSettings": "TODO",
            "dxDiagram-uiShowToolbox": "TODO",
            "dxDiagram-uiSearch": "TODO",
            "dxDiagram-uiStyle": "TODO",
            "dxDiagram-uiLayout": "TODO",
            "dxDiagram-uiLayoutTree": "TODO",
            "dxDiagram-uiLayoutLayered": "TODO",
            "dxDiagram-uiDiagram": "TODO",
            "dxDiagram-uiText": "TODO",
            "dxDiagram-uiObject": "TODO",
            "dxDiagram-uiConnector": "TODO",
            "dxDiagram-uiPage": "TODO",
            "dxDiagram-shapeText": "TODO",
            "dxDiagram-shapeRectangle": "TODO",
            "dxDiagram-shapeEllipse": "TODO",
            "dxDiagram-shapeCross": "TODO",
            "dxDiagram-shapeTriangle": "TODO",
            "dxDiagram-shapeDiamond": "TODO",
            "dxDiagram-shapeHeart": "TODO",
            "dxDiagram-shapePentagon": "TODO",
            "dxDiagram-shapeHexagon": "TODO",
            "dxDiagram-shapeOctagon": "TODO",
            "dxDiagram-shapeStar": "TODO",
            "dxDiagram-shapeArrowLeft": "TODO",
            "dxDiagram-shapeArrowUp": "TODO",
            "dxDiagram-shapeArrowRight": "TODO",
            "dxDiagram-shapeArrowDown": "TODO",
            "dxDiagram-shapeArrowUpDown": "TODO",
            "dxDiagram-shapeArrowLeftRight": "TODO",
            "dxDiagram-shapeProcess": "TODO",
            "dxDiagram-shapeDecision": "TODO",
            "dxDiagram-shapeTerminator": "TODO",
            "dxDiagram-shapePredefinedProcess": "TODO",
            "dxDiagram-shapeDocument": "TODO",
            "dxDiagram-shapeMultipleDocuments": "TODO",
            "dxDiagram-shapeManualInput": "TODO",
            "dxDiagram-shapePreparation": "TODO",
            "dxDiagram-shapeData": "TODO",
            "dxDiagram-shapeDatabase": "TODO",
            "dxDiagram-shapeHardDisk": "TODO",
            "dxDiagram-shapeInternalStorage": "TODO",
            "dxDiagram-shapePaperTape": "TODO",
            "dxDiagram-shapeManualOperation": "TODO",
            "dxDiagram-shapeDelay": "TODO",
            "dxDiagram-shapeStoredData": "TODO",
            "dxDiagram-shapeDisplay": "TODO",
            "dxDiagram-shapeMerge": "TODO",
            "dxDiagram-shapeConnector": "TODO",
            "dxDiagram-shapeOr": "TODO",
            "dxDiagram-shapeSummingJunction": "TODO",
            "dxDiagram-shapeContainerDefaultText": "TODO",
            "dxDiagram-shapeVerticalContainer": "TODO",
            "dxDiagram-shapeHorizontalContainer": "TODO",
            "dxDiagram-shapeCardDefaultText": "TODO",
            "dxDiagram-shapeCardWithImageOnLeft": "TODO",
            "dxDiagram-shapeCardWithImageOnTop": "TODO",
            "dxDiagram-shapeCardWithImageOnRight": "TODO",
            "dxGantt-dialogTitle": "TODO",
            "dxGantt-dialogStartTitle": "TODO",
            "dxGantt-dialogEndTitle": "TODO",
            "dxGantt-dialogProgressTitle": "TODO",
            "dxGantt-dialogResourcesTitle": "TODO",
            "dxGantt-dialogResourceManagerTitle": "TODO",
            "dxGantt-dialogTaskDetailsTitle": "TODO",
            "dxGantt-dialogEditResourceListHint": "TODO",
            "dxGantt-dialogEditNoResources": "TODO",
            "dxGantt-dialogButtonAdd": "TODO",
            "dxGantt-contextMenuNewTask": "TODO",
            "dxGantt-contextMenuNewSubtask": "TODO",
            "dxGantt-contextMenuDeleteTask": "TODO",
            "dxGantt-contextMenuDeleteDependency": "TODO",
            "dxGantt-dialogTaskDeleteConfirmation": "TODO",
            "dxGantt-dialogDependencyDeleteConfirmation": "TODO",
            "dxGantt-dialogResourcesDeleteConfirmation": "TODO",
            "dxGantt-dialogConstraintCriticalViolationMessage": "TODO",
            "dxGantt-dialogConstraintViolationMessage": "TODO",
            "dxGantt-dialogCancelOperationMessage": "TODO",
            "dxGantt-dialogDeleteDependencyMessage": "TODO",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "TODO",
            "dxGantt-undo": "TODO",
            "dxGantt-redo": "TODO",
            "dxGantt-expandAll": "TODO",
            "dxGantt-collapseAll": "TODO",
            "dxGantt-addNewTask": "TODO",
            "dxGantt-deleteSelectedTask": "TODO",
            "dxGantt-zoomIn": "TODO",
            "dxGantt-zoomOut": "TODO",
            "dxGantt-fullScreen": "TODO",
            "dxGantt-quarter": "TODO"
        }
    });
}));
