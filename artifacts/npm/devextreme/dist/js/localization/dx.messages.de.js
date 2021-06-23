/*!
* DevExtreme (dx.messages.de.js)
* Version: 21.2.0
* Build date: Wed Jun 23 2021
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
        "de": {
            "Yes": "Ja",
            "No": "Nein",
            "Cancel": "Abbrechen",
            "Clear": "Löschen",
            "Done": "Fertig",
            "Loading": "Laden...",
            "Select": "Auswählen...",
            "Search": "Suchen...",
            "Back": "Zurück",
            "OK": "OK",
            "dxCollectionWidget-noDataText": "Keine Daten verfügbar",
            "dxDropDownEditor-selectLabel": "Auswählen",
            "validation-required": "Pflichtfeld",
            "validation-required-formatted": "{0} ist ein Pflichtfeld",
            "validation-numeric": "Der Wert muss eine Zahl sein",
            "validation-numeric-formatted": "{0} muss eine Zahl sein",
            "validation-range": "Der Wert ist nicht im gültigen Bereich",
            "validation-range-formatted": "{0} ist nicht im gültigen Bereich",
            "validation-stringLength": "Die Länge des Wertes ist nicht korrekt",
            "validation-stringLength-formatted": "Die Länge von {0} ist nicht korrekt",
            "validation-custom": "Der Wert ist ungültig",
            "validation-custom-formatted": "{0} ist ungültig",
            "validation-async": "Der Wert ist ungültig",
            "validation-async-formatted": "{0} ist ungültig",
            "validation-compare": "Der Wert ist unpassend",
            "validation-compare-formatted": "{0} ist unpassend",
            "validation-pattern": "Der Wert passt nicht zum Muster",
            "validation-pattern-formatted": "{0} passt nicht zum Muster",
            "validation-email": "Die Email-Adresse ist ungültig",
            "validation-email-formatted": "{0} ist ungültig",
            "validation-mask": "Der Wert ist ungültig",
            "dxLookup-searchPlaceholder": "Minimale Anzahl Zeichen: {0}",
            "dxList-pullingDownText": "Zum Aktualisieren nach unten ziehen",
            "dxList-pulledDownText": "Zum Aktualisieren loslassen",
            "dxList-refreshingText": "Aktualisiere...",
            "dxList-pageLoadingText": "Laden...",
            "dxList-nextButtonText": "Mehr",
            "dxList-selectAll": "Alles auswählen",
            "dxListEditDecorator-delete": "Entfernen",
            "dxListEditDecorator-more": "Mehr",
            "dxScrollView-pullingDownText": "Zum Aktualisieren nach unten ziehen",
            "dxScrollView-pulledDownText": "Zum Aktualisieren loslassen",
            "dxScrollView-refreshingText": "Aktualisiere...",
            "dxScrollView-reachBottomText": "Laden...",
            "dxDateBox-simulatedDataPickerTitleTime": "Zeit auswählen",
            "dxDateBox-simulatedDataPickerTitleDate": "Datum auswählen",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Datum und Zeit auswählen",
            "dxDateBox-validation-datetime": "Der Wert muss ein Datum oder eine Uhrzeit sein",
            "dxFileUploader-selectFile": "Datei auswählen",
            "dxFileUploader-dropFile": "oder hierher ziehen",
            "dxFileUploader-bytes": "Bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Hochladen",
            "dxFileUploader-uploaded": "Hochgeladen",
            "dxFileUploader-readyToUpload": "Bereit zum hochladen",
            "dxFileUploader-uploadAbortedMessage": "Upload abgebrochen",
            "dxFileUploader-uploadFailedMessage": "Fehler beim hochladen",
            "dxFileUploader-invalidFileExtension": "Unzulässiger Dateityp",
            "dxFileUploader-invalidMaxFileSize": "Datei ist zu groß",
            "dxFileUploader-invalidMinFileSize": "Datei ist zu klein",
            "dxRangeSlider-ariaFrom": "Von",
            "dxRangeSlider-ariaTill": "Bis",
            "dxSwitch-switchedOnText": "EIN",
            "dxSwitch-switchedOffText": "AUS",
            "dxForm-optionalMark": "optional",
            "dxForm-requiredMessage": "{0} ist ein Pflichtfeld",
            "dxNumberBox-invalidValueMessage": "Der Wert muss eine Zahl sein",
            "dxNumberBox-noDataText": "Keine Daten",
            "dxDataGrid-columnChooserTitle": "Spaltenauswahl",
            "dxDataGrid-columnChooserEmptyText": "Ziehen Sie Spalten hierhin, um sie zu verstecken",
            "dxDataGrid-groupContinuesMessage": "Weiter auf der nächsten Seite",
            "dxDataGrid-groupContinuedMessage": "Weiter von der vorherigen Seite",
            "dxDataGrid-groupHeaderText": "Nach dieser Spalte gruppieren",
            "dxDataGrid-ungroupHeaderText": "Gruppierung entfernen",
            "dxDataGrid-ungroupAllText": "Alle Gruppierungen entfernen",
            "dxDataGrid-editingEditRow": "Bearbeiten",
            "dxDataGrid-editingSaveRowChanges": "Speichern",
            "dxDataGrid-editingCancelRowChanges": "Abbrechen",
            "dxDataGrid-editingDeleteRow": "Entfernen",
            "dxDataGrid-editingUndeleteRow": "Wiederherstellen",
            "dxDataGrid-editingConfirmDeleteMessage": "Sind Sie sicher, dass Sie diesen Datensatz löschen wollen?",
            "dxDataGrid-validationCancelChanges": "Änderungen verwerfen",
            "dxDataGrid-groupPanelEmptyText": "Ziehen Sie eine Spalte hierhin, um danach zu gruppieren",
            "dxDataGrid-noDataText": "Keine Daten",
            "dxDataGrid-searchPanelPlaceholder": "Suchen...",
            "dxDataGrid-filterRowShowAllText": "(Alle)",
            "dxDataGrid-filterRowResetOperationText": "Zurücksetzen",
            "dxDataGrid-filterRowOperationEquals": "Ist gleich",
            "dxDataGrid-filterRowOperationNotEquals": "Ist nicht gleich",
            "dxDataGrid-filterRowOperationLess": "Kleiner als",
            "dxDataGrid-filterRowOperationLessOrEquals": "Kleiner oder gleich",
            "dxDataGrid-filterRowOperationGreater": "Größer als",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Größer oder gleich",
            "dxDataGrid-filterRowOperationStartsWith": "Beginnt mit",
            "dxDataGrid-filterRowOperationContains": "Enthält",
            "dxDataGrid-filterRowOperationNotContains": "Enthält nicht",
            "dxDataGrid-filterRowOperationEndsWith": "Endet mit",
            "dxDataGrid-filterRowOperationBetween": "Zwischen",
            "dxDataGrid-filterRowOperationBetweenStartText": "Anfang",
            "dxDataGrid-filterRowOperationBetweenEndText": "Ende",
            "dxDataGrid-applyFilterText": "Filter anwenden",
            "dxDataGrid-trueText": "wahr",
            "dxDataGrid-falseText": "falsch",
            "dxDataGrid-sortingAscendingText": "Aufsteigend sortieren",
            "dxDataGrid-sortingDescendingText": "Absteigend sortieren",
            "dxDataGrid-sortingClearText": "Sortierung aufheben",
            "dxDataGrid-editingSaveAllChanges": "Änderungen speichern",
            "dxDataGrid-editingCancelAllChanges": "Änderungen verwerfen",
            "dxDataGrid-editingAddRow": "Neue Zeile",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Minimum von {1} ist {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Maximum von {1} ist {0}",
            "dxDataGrid-summaryAvg": "Ø: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Durchschnitt von {1} ist {0}",
            "dxDataGrid-summarySum": "Summe: {0}",
            "dxDataGrid-summarySumOtherColumn": "Summe von {1} ist {0}",
            "dxDataGrid-summaryCount": "Anzahl: {0}",
            "dxDataGrid-columnFixingFix": "Fixieren",
            "dxDataGrid-columnFixingUnfix": "Lösen",
            "dxDataGrid-columnFixingLeftPosition": "Nach links",
            "dxDataGrid-columnFixingRightPosition": "Nach rechts",
            "dxDataGrid-exportTo": "Exportieren",
            "dxDataGrid-exportToExcel": "Exportieren als Excel-Datei",
            "dxDataGrid-exporting": "Exportieren ...",
            "dxDataGrid-excelFormat": "Excel-Datei",
            "dxDataGrid-selectedRows": "Ausgewählte Zeilen",
            "dxDataGrid-exportAll": "Alle Daten exportieren",
            "dxDataGrid-exportSelectedRows": "Ausgewählte Zeilen exportieren",
            "dxDataGrid-headerFilterEmptyValue": "(Leerwerte)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Abbrechen",
            "dxDataGrid-ariaAdaptiveCollapse": "Zusätzliche Spalten verstecken",
            "dxDataGrid-ariaAdaptiveExpand": "Zusätzliche Spalten anzeigen",
            "dxDataGrid-ariaColumn": "Spalte",
            "dxDataGrid-ariaValue": "Wert",
            "dxDataGrid-ariaFilterCell": "Filterzelle",
            "dxDataGrid-ariaCollapse": "Zusammenklappen",
            "dxDataGrid-ariaExpand": "Aufklappen",
            "dxDataGrid-ariaDataGrid": "Datentabelle",
            "dxDataGrid-ariaSearchInGrid": "Suchen in der Datentabelle",
            "dxDataGrid-ariaSelectAll": "Alle auswählen",
            "dxDataGrid-ariaSelectRow": "Zeile auswählen",
            "dxDataGrid-ariaToolbar": "Symbolleiste der Datentabelle",
            "dxDataGrid-filterBuilderPopupTitle": "Filter-Generator",
            "dxDataGrid-filterPanelCreateFilter": "Filter erzeugen",
            "dxDataGrid-filterPanelClearFilter": "Zurücksetzen",
            "dxDataGrid-filterPanelFilterEnabledHint": "Filter aktivieren",
            "dxTreeList-ariaTreeList": "Strukturliste",
            "dxTreeList-ariaSearchInGrid": "Suchen in der Strukturliste",
            "dxTreeList-ariaToolbar": "Symbolleiste der Strukturliste",
            "dxTreeList-editingAddRowToNode": "Hinzufügen",
            "dxPager-infoText": "Seite {0} von {1} ({2} Elemente)",
            "dxPager-pagesCountText": "von",
            "dxPager-pageSizesAllText": "Alle",
            "dxPivotGrid-grandTotal": "Gesamt",
            "dxPivotGrid-total": "{0} Gesamt",
            "dxPivotGrid-fieldChooserTitle": "Feldauswahl",
            "dxPivotGrid-showFieldChooser": "Feldauswahl anzeigen",
            "dxPivotGrid-expandAll": "Alle aufklappen",
            "dxPivotGrid-collapseAll": "Alle zusammenklappen",
            "dxPivotGrid-sortColumnBySummary": "\"{0}\" nach dieser Spalte sortieren",
            "dxPivotGrid-sortRowBySummary": "\"{0}\" nach dieser Zeile sortieren",
            "dxPivotGrid-removeAllSorting": "Sortierungen entfernen",
            "dxPivotGrid-dataNotAvailable": "Entf.",
            "dxPivotGrid-rowFields": "Zeilenfelder",
            "dxPivotGrid-columnFields": "Spaltenfelder",
            "dxPivotGrid-dataFields": "Datenfelder",
            "dxPivotGrid-filterFields": "Filterfelder",
            "dxPivotGrid-allFields": "Alle Felder",
            "dxPivotGrid-columnFieldArea": "Spaltenfelder hierher ziehen",
            "dxPivotGrid-dataFieldArea": "Datenfelder hierher ziehen",
            "dxPivotGrid-rowFieldArea": "Zeilenfelder hierher ziehen",
            "dxPivotGrid-filterFieldArea": "Filterfelder hierher ziehen",
            "dxScheduler-editorLabelTitle": "Betreff",
            "dxScheduler-editorLabelStartDate": "Anfangszeit",
            "dxScheduler-editorLabelEndDate": "Endzeit",
            "dxScheduler-editorLabelDescription": "Beschreibung",
            "dxScheduler-editorLabelRecurrence": "Wiederholen",
            "dxScheduler-openAppointment": "Termin öffnen",
            "dxScheduler-recurrenceNever": "Nie",
            "dxScheduler-recurrenceMinutely": "Minütlich",
            "dxScheduler-recurrenceHourly": "Stündlich",
            "dxScheduler-recurrenceDaily": "Täglich",
            "dxScheduler-recurrenceWeekly": "Wöchentlich",
            "dxScheduler-recurrenceMonthly": "Monatlich",
            "dxScheduler-recurrenceYearly": "Jährlich",
            "dxScheduler-recurrenceRepeatEvery": "Wiederholen alle",
            "dxScheduler-recurrenceRepeatOn": "Wiederholen an",
            "dxScheduler-recurrenceEnd": "Wiederholungsende",
            "dxScheduler-recurrenceAfter": "Nach",
            "dxScheduler-recurrenceOn": "Am",
            "dxScheduler-recurrenceRepeatMinutely": "Minute(n)",
            "dxScheduler-recurrenceRepeatHourly": "Stunde(n)",
            "dxScheduler-recurrenceRepeatDaily": "Tag(e)",
            "dxScheduler-recurrenceRepeatWeekly": "Woche(n)",
            "dxScheduler-recurrenceRepeatMonthly": "Monat(e)",
            "dxScheduler-recurrenceRepeatYearly": "Jahr(e)",
            "dxScheduler-switcherDay": "Tag",
            "dxScheduler-switcherWeek": "Woche",
            "dxScheduler-switcherWorkWeek": "Arbeitswoche",
            "dxScheduler-switcherMonth": "Monat",
            "dxScheduler-switcherTimelineDay": "Zeitstrahl Tag",
            "dxScheduler-switcherTimelineWeek": "Zeitstrahl Woche",
            "dxScheduler-switcherTimelineWorkWeek": "Zeitstrahl Arbeitswoche",
            "dxScheduler-switcherTimelineMonth": "Zeitstrahl Monat",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-recurrenceRepeatOnDate": "am Datum",
            "dxScheduler-recurrenceRepeatCount": "Ereignisse",
            "dxScheduler-allDay": "Ganztägig",
            "dxScheduler-confirmRecurrenceEditMessage": "Möchten Sie nur diesen Termin bearbeiten, oder die gesamte Serie?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Möchten Sie nur diesen Termin löschen, oder die gesamte Serie?",
            "dxScheduler-confirmRecurrenceEditSeries": "Serie bearbeiten",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Serie löschen",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Termin bearbeiten",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Termin löschen",
            "dxScheduler-noTimezoneTitle": "Keine Zeitzone",
            "dxScheduler-moreAppointments": "{0} weitere",
            "dxCalendar-todayButtonText": "Heute",
            "dxCalendar-ariaWidgetName": "Kalendar",
            "dxColorView-ariaRed": "Rot",
            "dxColorView-ariaGreen": "Grün",
            "dxColorView-ariaBlue": "Blau",
            "dxColorView-ariaAlpha": "Transparenz",
            "dxColorView-ariaHex": "Farbwert",
            "dxTagBox-selected": "{0} ausgewählt",
            "dxTagBox-allSelected": "Alle ausgewählt ({0})",
            "dxTagBox-moreSelected": "{0} weitere",
            "vizExport-printingButtonText": "Drucken",
            "vizExport-titleMenuText": "Export/Druck",
            "vizExport-exportButtonText": "{0}-Datei",
            "dxFilterBuilder-and": "Und",
            "dxFilterBuilder-or": "Oder",
            "dxFilterBuilder-notAnd": "Nicht Und",
            "dxFilterBuilder-notOr": "Nicht Oder",
            "dxFilterBuilder-addCondition": "Bedingung hinzufügen",
            "dxFilterBuilder-addGroup": "Gruppe hinzufügen",
            "dxFilterBuilder-enterValueText": "<Wert eingeben>",
            "dxFilterBuilder-filterOperationEquals": "Ist gleich",
            "dxFilterBuilder-filterOperationNotEquals": "Ist nicht gleich",
            "dxFilterBuilder-filterOperationLess": "Kleiner als",
            "dxFilterBuilder-filterOperationLessOrEquals": "Kleiner oder gleich",
            "dxFilterBuilder-filterOperationGreater": "Größer als",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Größer oder gleich",
            "dxFilterBuilder-filterOperationStartsWith": "Beginnt mit",
            "dxFilterBuilder-filterOperationContains": "Enthält",
            "dxFilterBuilder-filterOperationNotContains": "Enthält nicht",
            "dxFilterBuilder-filterOperationEndsWith": "Endet mit",
            "dxFilterBuilder-filterOperationIsBlank": "Ist leer",
            "dxFilterBuilder-filterOperationIsNotBlank": "Ist nicht leer",
            "dxFilterBuilder-filterOperationBetween": "Zwischen",
            "dxFilterBuilder-filterOperationAnyOf": "Ist enthalten in",
            "dxFilterBuilder-filterOperationNoneOf": "Ist nicht enthalten in",
            "dxHtmlEditor-dialogColorCaption": "Schriftfarbe ändern",
            "dxHtmlEditor-dialogBackgroundCaption": "Hintergrundfarbe ändern",
            "dxHtmlEditor-dialogLinkCaption": "Link hinzufügen",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Text",
            "dxHtmlEditor-dialogLinkTargetField": "Link in neuem Fenster öffnen",
            "dxHtmlEditor-dialogImageCaption": "Bild hinzufügen",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Alternativer Text",
            "dxHtmlEditor-dialogImageWidthField": "Breite (px)",
            "dxHtmlEditor-dialogImageHeightField": "Bildhöhe (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "Zeilen",
            "dxHtmlEditor-dialogInsertTableColumnsField": "Spalten",
            "dxHtmlEditor-dialogInsertTableCaption": "Tabelle einfügen",
            "dxHtmlEditor-heading": "Überschrift",
            "dxHtmlEditor-normalText": "Normaler Text",
            "dxHtmlEditor-background": "Hintergrundfarbe",
            "dxHtmlEditor-bold": "Fett",
            "dxHtmlEditor-color": "Schriftfarbe",
            "dxHtmlEditor-font": "Schriftart",
            "dxHtmlEditor-italic": "Kursiv",
            "dxHtmlEditor-link": "Link hinzufügen",
            "dxHtmlEditor-image": "Bild hinzufügen",
            "dxHtmlEditor-size": "Schriftgröße",
            "dxHtmlEditor-strike": "Durchgestrichen",
            "dxHtmlEditor-subscript": "Tiefgestellt",
            "dxHtmlEditor-superscript": "Hochgestellt",
            "dxHtmlEditor-underline": "Unterstrichen",
            "dxHtmlEditor-blockquote": "Blockzitat",
            "dxHtmlEditor-header": "Kopfzeile",
            "dxHtmlEditor-increaseIndent": "Einzug vergrößern",
            "dxHtmlEditor-decreaseIndent": "Einzug verkleinern",
            "dxHtmlEditor-orderedList": "Sortierte Liste",
            "dxHtmlEditor-bulletList": "Aufzählung",
            "dxHtmlEditor-alignLeft": "Linksbündig",
            "dxHtmlEditor-alignCenter": "Zentriert",
            "dxHtmlEditor-alignRight": "Rechtsbündig",
            "dxHtmlEditor-alignJustify": "Blocksatz",
            "dxHtmlEditor-codeBlock": "Codeblock",
            "dxHtmlEditor-variable": "Variable hinzufügen",
            "dxHtmlEditor-undo": "Rückgängig",
            "dxHtmlEditor-redo": "Wiederholen",
            "dxHtmlEditor-clear": "Formate löschen",
            "dxHtmlEditor-insertTable": "Tabelle einfügen",
            "dxHtmlEditor-insertRowAbove": "Spalte oberhalb einfügen",
            "dxHtmlEditor-insertRowBelow": "Spalte unterhalb einfügen",
            "dxHtmlEditor-insertColumnLeft": "Spalte links einfügen",
            "dxHtmlEditor-insertColumnRight": "Spalte rechts einfügen",
            "dxHtmlEditor-deleteColumn": "Spalte löschen",
            "dxHtmlEditor-deleteRow": "Zeile löschen",
            "dxHtmlEditor-deleteTable": "Tabelle löschen",
            "dxHtmlEditor-list": "Liste",
            "dxHtmlEditor-ordered": "Sortiert",
            "dxHtmlEditor-bullet": "Aufzählung",
            "dxHtmlEditor-align": "Ausrichten",
            "dxHtmlEditor-center": "Zentrieren",
            "dxHtmlEditor-left": "Links",
            "dxHtmlEditor-right": "Rechts",
            "dxHtmlEditor-indent": "Einzug",
            "dxHtmlEditor-justify": "Blocksatz",
            "dxFileManager-newDirectoryName": "Ohne Titel",
            "dxFileManager-rootDirectoryName": "Dateien",
            "dxFileManager-errorNoAccess": "Zugriff verweigert. Die Operation kann nicht durchgeführt werden.",
            "dxFileManager-errorDirectoryExistsFormat": "Ordner {0} existiert bereits.",
            "dxFileManager-errorFileExistsFormat": "Datei {0} existiert bereits.",
            "dxFileManager-errorFileNotFoundFormat": "Datei {0} wurde nicht gefunden.",
            "dxFileManager-errorDirectoryNotFoundFormat": "Verzeichnis '{0}' nicht gefunden.",
            "dxFileManager-errorWrongFileExtension": "Dateierweiterung ist nicht erlaubt.",
            "dxFileManager-errorMaxFileSizeExceeded": "Die Dateigröße übersteigt die maximal erlaubte Größe.",
            "dxFileManager-errorInvalidSymbols": "Der Dateiname enthält ungültige Zeichen.",
            "dxFileManager-errorDefault": "Unbekannter Fehler",
            "dxFileManager-errorDirectoryOpenFailed": "Das Verzeichnis kann nicht geöffnet werden",
            "dxFileManager-commandCreate": "Neues Verzeichnis",
            "dxFileManager-commandRename": "Umbenennen",
            "dxFileManager-commandMove": "Verschieben nach",
            "dxFileManager-commandCopy": "Kopieren nach",
            "dxFileManager-commandDelete": "Löschen",
            "dxFileManager-commandDownload": "Herunterladen",
            "dxFileManager-commandUpload": "Dateien hochladen",
            "dxFileManager-commandRefresh": "Aktualisieren",
            "dxFileManager-commandThumbnails": "Miniaturansicht",
            "dxFileManager-commandDetails": "Detailansicht",
            "dxFileManager-commandClearSelection": "Auswahl aufheben",
            "dxFileManager-commandShowNavPane": "Navigationsbereich ein-/ausschalten",
            "dxFileManager-dialogDirectoryChooserMoveTitle": "Verschieben nach",
            "dxFileManager-dialogDirectoryChooserMoveButtonText": "Verschieben",
            "dxFileManager-dialogDirectoryChooserCopyTitle": "Kopieren nach",
            "dxFileManager-dialogDirectoryChooserCopyButtonText": "Kopieren",
            "dxFileManager-dialogRenameItemTitle": "Umbenennen",
            "dxFileManager-dialogRenameItemButtonText": "Speichern",
            "dxFileManager-dialogCreateDirectoryTitle": "Neues Verzeichnis",
            "dxFileManager-dialogCreateDirectoryButtonText": "Erstellen",
            "dxFileManager-dialogDeleteItemTitle": "Löschen",
            "dxFileManager-dialogDeleteItemButtonText": "Löschen",
            "dxFileManager-dialogDeleteItemSingleItemConfirmation": "Sind Sie sicher, dass Sie {0} löschen möchten?",
            "dxFileManager-dialogDeleteItemMultipleItemsConfirmation": "Sind Sie sicher, dass Sie {0} Elemente löschen möchten?",
            "dxFileManager-dialogButtonCancel": "Abbrechen",
            "dxFileManager-editingCreateSingleItemProcessingMessage": "Ein Verzeichnis wird in {0} erstellt",
            "dxFileManager-editingCreateSingleItemSuccessMessage": "Ein Verzeichnis wurde in {0} erstellt",
            "dxFileManager-editingCreateSingleItemErrorMessage": "Verzeichnis wurde nicht erstellt",
            "dxFileManager-editingCreateCommonErrorMessage": "Verzeichnis wurde nicht erstellt",
            "dxFileManager-editingRenameSingleItemProcessingMessage": "Ein Element in {0} wird umbenannt",
            "dxFileManager-editingRenameSingleItemSuccessMessage": "Ein Element in {0} wurde umbenannt",
            "dxFileManager-editingRenameSingleItemErrorMessage": "Element wurde nicht umbenannt",
            "dxFileManager-editingRenameCommonErrorMessage": "Element wurde nicht umbenannt",
            "dxFileManager-editingDeleteSingleItemProcessingMessage": "Ein Element aus {0} wird gelöscht",
            "dxFileManager-editingDeleteMultipleItemsProcessingMessage": "{0} Elemente aus {1} werden gelöscht",
            "dxFileManager-editingDeleteSingleItemSuccessMessage": "Ein Element aus {0} wurde gelöscht",
            "dxFileManager-editingDeleteMultipleItemsSuccessMessage": "{0} Elemente aus {1} wurden gelöscht",
            "dxFileManager-editingDeleteSingleItemErrorMessage": "Element wurde nicht gelöscht",
            "dxFileManager-editingDeleteMultipleItemsErrorMessage": "{0} Elemente wurden nicht gelöscht",
            "dxFileManager-editingDeleteCommonErrorMessage": "Einige Elemente wurden nicht gelöscht",
            "dxFileManager-editingMoveSingleItemProcessingMessage": "Ein Element wird nach {0} verschoben",
            "dxFileManager-editingMoveMultipleItemsProcessingMessage": "{0} Elemente werden nach {1} verschoben",
            "dxFileManager-editingMoveSingleItemSuccessMessage": "Ein Element wurde nach {0} verschoben",
            "dxFileManager-editingMoveMultipleItemsSuccessMessage": "{0} Elemente wurden nach {1} verschoben",
            "dxFileManager-editingMoveSingleItemErrorMessage": "Element wurde nicht verschoben",
            "dxFileManager-editingMoveMultipleItemsErrorMessage": "{0} Elemente wurden nicht verschoben",
            "dxFileManager-editingMoveCommonErrorMessage": "Einige Elemente wurden nicht verschoben",
            "dxFileManager-editingCopySingleItemProcessingMessage": "Ein Element wird nach {0} kopiert",
            "dxFileManager-editingCopyMultipleItemsProcessingMessage": "{0} Elemente werden nach {1} kopiert",
            "dxFileManager-editingCopySingleItemSuccessMessage": "Ein Element wurde nach {0} kopiert",
            "dxFileManager-editingCopyMultipleItemsSuccessMessage": "{0} Elemente wurden nach {1} kopiert",
            "dxFileManager-editingCopySingleItemErrorMessage": "Element wurde nicht kopiert",
            "dxFileManager-editingCopyMultipleItemsErrorMessage": "{0} Elemente wurden nicht kopiert",
            "dxFileManager-editingCopyCommonErrorMessage": "Einige Elemente wurden nicht kopiert",
            "dxFileManager-editingUploadSingleItemProcessingMessage": "Ein Element wird nach {0} hochgeladen",
            "dxFileManager-editingUploadMultipleItemsProcessingMessage": "{0} Elemente werden nach {1} hochgeladen",
            "dxFileManager-editingUploadSingleItemSuccessMessage": "Ein Element wurde nach {0} hochgeladen",
            "dxFileManager-editingUploadMultipleItemsSuccessMessage": "{0} Elemente wurden nach {1} hochgeladen",
            "dxFileManager-editingUploadSingleItemErrorMessage": "Element wurde nicht hochgeladen",
            "dxFileManager-editingUploadMultipleItemsErrorMessage": "{0} Elemente wurden nicht hochgeladen",
            "dxFileManager-editingUploadCanceledMessage": "Abgebrochen",
            "dxFileManager-listDetailsColumnCaptionName": "Name",
            "dxFileManager-listDetailsColumnCaptionDateModified": "Zuletzt geändert am",
            "dxFileManager-listDetailsColumnCaptionFileSize": "Dateigröße",
            "dxFileManager-listThumbnailsTooltipTextSize": "Größe",
            "dxFileManager-listThumbnailsTooltipTextDateModified": "Zuletzt geändert am",
            "dxFileManager-notificationProgressPanelTitle": "Fortschritt",
            "dxFileManager-notificationProgressPanelEmptyListText": "Keine Vorgänge",
            "dxFileManager-notificationProgressPanelOperationCanceled": "Abgebrochen",
            "dxDiagram-categoryGeneral": "Allgemein",
            "dxDiagram-categoryFlowchart": "Flussdiagramm",
            "dxDiagram-categoryOrgChart": "Organisationsdiagramm",
            "dxDiagram-categoryContainers": "Container",
            "dxDiagram-categoryCustom": "Benutzerdefiniert",
            "dxDiagram-commandExportToSvg": "Export als SVG",
            "dxDiagram-commandExportToPng": "Export als PNG",
            "dxDiagram-commandExportToJpg": "Export als JPEG",
            "dxDiagram-commandUndo": "Rückgängig",
            "dxDiagram-commandRedo": "Wiederherstellen",
            "dxDiagram-commandFontName": "Schriftartname",
            "dxDiagram-commandFontSize": "Schriftgröße",
            "dxDiagram-commandBold": "Fett",
            "dxDiagram-commandItalic": "Kursiv",
            "dxDiagram-commandUnderline": "Unterstrichen",
            "dxDiagram-commandTextColor": "Textfarbe",
            "dxDiagram-commandLineColor": "Linienfarbe",
            "dxDiagram-commandLineWidth": "Linienstärke",
            "dxDiagram-commandLineStyle": "Linienart",
            "dxDiagram-commandLineStyleSolid": "Durchgezogen",
            "dxDiagram-commandLineStyleDotted": "Gepunktet",
            "dxDiagram-commandLineStyleDashed": "Gestrichelt",
            "dxDiagram-commandFillColor": "Füllfarbe",
            "dxDiagram-commandAlignLeft": "Linksbündig",
            "dxDiagram-commandAlignCenter": "Zentriert",
            "dxDiagram-commandAlignRight": "Rechtsbündig",
            "dxDiagram-commandConnectorLineType": "Konnektor Linienart",
            "dxDiagram-commandConnectorLineStraight": "Gerade",
            "dxDiagram-commandConnectorLineOrthogonal": "Rechtwinklig",
            "dxDiagram-commandConnectorLineStart": "Konnektor Linienanfang",
            "dxDiagram-commandConnectorLineEnd": "Konnektor Linienende",
            "dxDiagram-commandConnectorLineNone": "Keine",
            "dxDiagram-commandConnectorLineArrow": "Pfeil",
            "dxDiagram-commandFullscreen": "Vollbild",
            "dxDiagram-commandUnits": "Einheiten",
            "dxDiagram-commandPageSize": "Seitengröße",
            "dxDiagram-commandPageOrientation": "Seitenausrichtung",
            "dxDiagram-commandPageOrientationLandscape": "Querformat",
            "dxDiagram-commandPageOrientationPortrait": "Hochformat",
            "dxDiagram-commandPageColor": "Seitenfarbe",
            "dxDiagram-commandShowGrid": "Raster anzeigen",
            "dxDiagram-commandSnapToGrid": "Am Raster ausrichten",
            "dxDiagram-commandGridSize": "Rastergröße",
            "dxDiagram-commandZoomLevel": "Vergrößerungsstufe",
            "dxDiagram-commandAutoZoom": "Automatische Vergrößerung",
            "dxDiagram-commandFitToContent": "An Inhalt anpassen",
            "dxDiagram-commandFitToWidth": "An Breite anpassen",
            "dxDiagram-commandAutoZoomByContent": "Automatisch an Inhalt anpassen",
            "dxDiagram-commandAutoZoomByWidth": "Automatisch an Breite anpassen",
            "dxDiagram-commandSimpleView": "Einfache Ansicht",
            "dxDiagram-commandCut": "Ausschneiden",
            "dxDiagram-commandCopy": "Kopieren",
            "dxDiagram-commandPaste": "Einfügen",
            "dxDiagram-commandSelectAll": "Alles auswählen",
            "dxDiagram-commandDelete": "Löschen",
            "dxDiagram-commandBringToFront": "In den Vordergrund",
            "dxDiagram-commandSendToBack": "In den Hintergrund",
            "dxDiagram-commandLock": "Sperren",
            "dxDiagram-commandUnlock": "Entsperren",
            "dxDiagram-commandInsertShapeImage": "Bild einfügen...",
            "dxDiagram-commandEditShapeImage": "Bild bearbeiten...",
            "dxDiagram-commandDeleteShapeImage": "Bild löschen",
            "dxDiagram-commandLayoutLeftToRight": "Von links nach rechts",
            "dxDiagram-commandLayoutRightToLeft": "Von rechts nach links",
            "dxDiagram-commandLayoutTopToBottom": "Von oben nach unten",
            "dxDiagram-commandLayoutBottomToTop": "Von unten nach oben",
            "dxDiagram-unitIn": "in",
            "dxDiagram-unitCm": "cm",
            "dxDiagram-unitPx": "px",
            "dxDiagram-dialogButtonOK": "OK",
            "dxDiagram-dialogButtonCancel": "Abbrechen",
            "dxDiagram-dialogInsertShapeImageTitle": "Bild einfügen",
            "dxDiagram-dialogEditShapeImageTitle": "Bild bearbeiten",
            "dxDiagram-dialogEditShapeImageSelectButton": "Bild auswählen",
            "dxDiagram-dialogEditShapeImageLabelText": "oder Datei hier ablegen",
            "dxDiagram-uiExport": "Export",
            "dxDiagram-uiProperties": "Eigenschaften",
            "dxDiagram-uiSettings": "Einstellungen",
            "dxDiagram-uiShowToolbox": "Toolbox anzeigen",
            "dxDiagram-uiSearch": "Suchen",
            "dxDiagram-uiStyle": "Stil",
            "dxDiagram-uiLayout": "Layout",
            "dxDiagram-uiLayoutTree": "Baum",
            "dxDiagram-uiLayoutLayered": "Mehrschichtig",
            "dxDiagram-uiDiagram": "Diagramm",
            "dxDiagram-uiText": "Text",
            "dxDiagram-uiObject": "Objekt",
            "dxDiagram-uiConnector": "Verbindung",
            "dxDiagram-uiPage": "Seite",
            "dxDiagram-shapeText": "Text",
            "dxDiagram-shapeRectangle": "Rechteck",
            "dxDiagram-shapeEllipse": "Ellipse",
            "dxDiagram-shapeCross": "Kreuz",
            "dxDiagram-shapeTriangle": "Dreieck",
            "dxDiagram-shapeDiamond": "Raute",
            "dxDiagram-shapeHeart": "Herz",
            "dxDiagram-shapePentagon": "Fünfeck",
            "dxDiagram-shapeHexagon": "Sechseck",
            "dxDiagram-shapeOctagon": "Achteck",
            "dxDiagram-shapeStar": "Stern",
            "dxDiagram-shapeArrowLeft": "Pfeil nach links",
            "dxDiagram-shapeArrowUp": "Pfeil nach oben",
            "dxDiagram-shapeArrowRight": "Pfeil nach rechts",
            "dxDiagram-shapeArrowDown": "Pfeil nach unten",
            "dxDiagram-shapeArrowUpDown": "Pfeil nach oben und unten",
            "dxDiagram-shapeArrowLeftRight": "Pfeil nach links und rechts",
            "dxDiagram-shapeProcess": "Prozess",
            "dxDiagram-shapeDecision": "Entscheidung",
            "dxDiagram-shapeTerminator": "Abschluss",
            "dxDiagram-shapePredefinedProcess": "Vordefinierter Prozess",
            "dxDiagram-shapeDocument": "Dokument",
            "dxDiagram-shapeMultipleDocuments": "Mehrere Dokumente",
            "dxDiagram-shapeManualInput": "Manuelle Eingabe",
            "dxDiagram-shapePreparation": "Vorbereitung",
            "dxDiagram-shapeData": "Daten",
            "dxDiagram-shapeDatabase": "Datenbank",
            "dxDiagram-shapeHardDisk": "Festplatte",
            "dxDiagram-shapeInternalStorage": "Lokaler Speicher",
            "dxDiagram-shapePaperTape": "Lochstreifen",
            "dxDiagram-shapeManualOperation": "Manuelle Verarbeitung",
            "dxDiagram-shapeDelay": "Verzögerung",
            "dxDiagram-shapeStoredData": "Gespeicherte Daten",
            "dxDiagram-shapeDisplay": "Anzeige",
            "dxDiagram-shapeMerge": "Zusammenführen",
            "dxDiagram-shapeConnector": "Verbinder",
            "dxDiagram-shapeOr": "Oder",
            "dxDiagram-shapeSummingJunction": "Summierungsknoten",
            "dxDiagram-shapeContainerDefaultText": "Container",
            "dxDiagram-shapeVerticalContainer": "Vertikaler Container",
            "dxDiagram-shapeHorizontalContainer": "Horizontaler Container",
            "dxDiagram-shapeCardDefaultText": "Name der Person",
            "dxDiagram-shapeCardWithImageOnLeft": "Karte mit Bild links",
            "dxDiagram-shapeCardWithImageOnTop": "Karte mit Bild oben",
            "dxDiagram-shapeCardWithImageOnRight": "Karte mit Bild rechts",
            "dxGantt-dialogTitle": "Titel",
            "dxGantt-dialogStartTitle": "Beginn",
            "dxGantt-dialogEndTitle": "Ende",
            "dxGantt-dialogProgressTitle": "Fortschritt",
            "dxGantt-dialogResourcesTitle": "Ressourcen",
            "dxGantt-dialogResourceManagerTitle": "Ressourcen-Manager",
            "dxGantt-dialogTaskDetailsTitle": "Aufgabendetails",
            "dxGantt-dialogEditResourceListHint": "Ressourcenliste bearbeiten",
            "dxGantt-dialogEditNoResources": "Keine Ressourcen",
            "dxGantt-dialogButtonAdd": "Hinzufügen",
            "dxGantt-contextMenuNewTask": "Neue Aufgabe",
            "dxGantt-contextMenuNewSubtask": "Neue Teilaufgabe",
            "dxGantt-contextMenuDeleteTask": "Aufgabe löschen",
            "dxGantt-contextMenuDeleteDependency": "Abhängigkeit entfernen",
            "dxGantt-dialogTaskDeleteConfirmation": "Abhängigkeiten und Teilaufgaben werden zusammen mit dieser Aufgabe gelöscht. Möchten Sie diese Aufgabe löschen?",
            "dxGantt-dialogDependencyDeleteConfirmation": "Möchten Sie die Abhängigkeit von der Aufgabe entfernen?",
            "dxGantt-dialogResourcesDeleteConfirmation": "Wenn Sie diese Ressource löschen, wird sie von allen Aufgaben entfernt. Möchten Sie die Ressource löschen? Ressource: {0}",
            "dxGantt-dialogConstraintCriticalViolationMessage": "Die Aufgabe, die Sie verschieben möchten, ist mit einer zweiten Aufgabe durch eine Abhängigkeit verbunden. Die Änderung würde gegen Abhängigkeitsregeln verstossen. Wie möchten Sie fortfahren?",
            "dxGantt-dialogConstraintViolationMessage": "Die Aufgabe, die Sie verschieben möchten, ist mit einer zweiten Aufgabe durch eine Abhängigkeit verbunden. Wie möchten Sie fortfahren?",
            "dxGantt-dialogCancelOperationMessage": "Vorgang abbrechen",
            "dxGantt-dialogDeleteDependencyMessage": "Abhängigkeit löschen",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "Aufgabe verschieben und Abhängigkeit beibehalten",
            "dxGantt-undo": "Rückgängig",
            "dxGantt-redo": "Wiederherstellen",
            "dxGantt-expandAll": "Alle erweitern",
            "dxGantt-collapseAll": "Alle reduzieren",
            "dxGantt-addNewTask": "Neue Aufgabe hinzufügen",
            "dxGantt-deleteSelectedTask": "Ausgewählte Aufgabe löschen",
            "dxGantt-zoomIn": "Vergrößern",
            "dxGantt-zoomOut": "Verkleinern",
            "dxGantt-fullScreen": "Vollbildmodus",
            "dxGantt-quarter": "Q{0}"
        }
    });
}));
