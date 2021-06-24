/**
* DevExtreme (cjs/ui/scheduler/appointmentPopup/form.js)
* Version: 21.2.0
* Build date: Thu Jun 24 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.AppointmentForm = exports.APPOINTMENT_FORM_GROUP_NAMES = void 0;

var _form = _interopRequireDefault(require("../../form"));

var _date_serialization = _interopRequireDefault(require("../../../core/utils/date_serialization"));

var _message = _interopRequireDefault(require("../../../localization/message"));

var _devices = _interopRequireDefault(require("../../../core/devices"));

var _data_source = _interopRequireDefault(require("../../../data/data_source"));

var _utils = _interopRequireDefault(require("../timezones/utils.timezones_data"));

var _extend = require("../../../core/utils/extend");

require("../recurrence_editor");

require("../../text_area");

require("../../tag_box");

require("../../switch");

require("../../select_box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SCREEN_SIZE_OF_SINGLE_COLUMN = 600;
var APPOINTMENT_FORM_GROUP_NAMES = {
  Main: 'mainGroup',
  Recurrence: 'recurrenceGroup'
};
exports.APPOINTMENT_FORM_GROUP_NAMES = APPOINTMENT_FORM_GROUP_NAMES;
var SchedulerAppointmentForm = {
  _appointmentForm: {},
  _lockDateShiftFlag: false,
  _validateAppointmentFormDate: function _validateAppointmentFormDate(editor, value, previousValue) {
    var isCurrentDateCorrect = value === null || !!value;
    var isPreviousDateCorrect = previousValue === null || !!previousValue;

    if (!isCurrentDateCorrect && isPreviousDateCorrect) {
      editor.option('value', previousValue);
    }
  },
  _getAllDayStartDate: function _getAllDayStartDate(startDate) {
    return new Date(new Date(startDate).setHours(0, 0, 0, 0));
  },
  _getAllDayEndDate: function _getAllDayEndDate(startDate) {
    return new Date(new Date(startDate).setDate(startDate.getDate() + 1));
  },
  _getStartDateWithStartHour: function _getStartDateWithStartHour(startDate, startDayHour) {
    return new Date(new Date(startDate).setHours(startDayHour));
  },
  create: function create(componentCreator, $container, isReadOnly, formData) {
    this._appointmentForm = componentCreator($container, _form.default, {
      items: this._editors,
      readOnly: isReadOnly,
      showValidationSummary: true,
      scrollingEnabled: true,
      colCount: 'auto',
      colCountByScreen: {
        lg: 2,
        xs: 1
      },
      formData: formData,
      showColonAfterLabel: false,
      labelLocation: 'top',
      screenByWidth: function screenByWidth(width) {
        return width < SCREEN_SIZE_OF_SINGLE_COLUMN || _devices.default.current().deviceType !== 'desktop' ? 'xs' : 'lg';
      }
    });
    return this._appointmentForm;
  },
  _dateBoxValueChanged: function _dateBoxValueChanged(args, dateExpr, isNeedCorrect) {
    this._validateAppointmentFormDate(args.component, args.value, args.previousValue);

    var value = _date_serialization.default.deserializeDate(args.value);

    var previousValue = _date_serialization.default.deserializeDate(args.previousValue);

    var dateEditor = this._appointmentForm.getEditor(dateExpr);

    var dateValue = _date_serialization.default.deserializeDate(dateEditor.option('value'));

    if (!this._appointmentForm._lockDateShiftFlag && dateValue && value && isNeedCorrect(dateValue, value)) {
      var duration = previousValue ? dateValue.getTime() - previousValue.getTime() : 0;
      dateEditor.option('value', new Date(value.getTime() + duration));
    }
  },
  _createTimezoneEditor: function _createTimezoneEditor(timeZoneExpr, secondTimeZoneExpr, visibleIndex, colSpan, isMainTimeZone) {
    var _this = this;

    var isShow = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    var noTzTitle = _message.default.format('dxScheduler-noTimezoneTitle');

    return {
      dataField: timeZoneExpr,
      editorType: 'dxSelectBox',
      visibleIndex: visibleIndex,
      colSpan: colSpan,
      label: {
        text: ' '
      },
      editorOptions: {
        displayExpr: 'title',
        valueExpr: 'id',
        placeholder: noTzTitle,
        searchEnabled: true,
        onValueChanged: function onValueChanged(args) {
          var form = _this._appointmentForm;
          var secondTimezoneEditor = form.getEditor(secondTimeZoneExpr);

          if (isMainTimeZone) {
            secondTimezoneEditor.option('value', args.value);
          }
        }
      },
      visible: isShow
    };
  },
  _createDateBoxEditor: function _createDateBoxEditor(dataExpr, colSpan, firstDayOfWeek, label, callback) {
    return {
      dataField: dataExpr,
      editorType: 'dxDateBox',
      colSpan: colSpan,
      label: {
        text: _message.default.format(label)
      },
      validationRules: [{
        type: 'required'
      }],
      editorOptions: {
        width: '100%',
        calendarOptions: {
          firstDayOfWeek: firstDayOfWeek
        },
        onValueChanged: callback
      }
    };
  },
  _createDateBoxItems: function _createDateBoxItems(dataExprs, schedulerInst, allowTimeZoneEditing) {
    var _this2 = this;

    var colSpan = allowTimeZoneEditing ? 2 : 1;
    var firstDayOfWeek = schedulerInst.option('firstDayOfWeek');
    return [this._createDateBoxEditor(dataExprs.startDateExpr, colSpan, firstDayOfWeek, 'dxScheduler-editorLabelStartDate', function (args) {
      _this2._dateBoxValueChanged(args, dataExprs.endDateExpr, function (endValue, startValue) {
        return endValue < startValue;
      });
    }), this._createTimezoneEditor(dataExprs.startDateTimeZoneExpr, dataExprs.endDateTimeZoneExpr, 1, colSpan, true, allowTimeZoneEditing), this._createDateBoxEditor(dataExprs.endDateExpr, colSpan, firstDayOfWeek, 'dxScheduler-editorLabelEndDate', function (args) {
      _this2._dateBoxValueChanged(args, dataExprs.startDateExpr, function (startValue, endValue) {
        return endValue < startValue;
      });
    }), this._createTimezoneEditor(dataExprs.endDateTimeZoneExpr, dataExprs.startDateTimeZoneExpr, 3, colSpan, false, allowTimeZoneEditing)];
  },
  _changeFormItemDateType: function _changeFormItemDateType(itemPath, isAllDay) {
    var itemEditorOptions = this._appointmentForm.itemOption(itemPath).editorOptions;

    var type = isAllDay ? 'date' : 'datetime';

    var newEditorOption = _extends({}, itemEditorOptions, {
      type: type
    });

    this._appointmentForm.itemOption(itemPath, 'editorOptions', newEditorOption);
  },
  _createMainItems: function _createMainItems(dataExprs, schedulerInst, triggerResize, changeSize, allowTimeZoneEditing) {
    var _this3 = this;

    return [{
      dataField: dataExprs.textExpr,
      editorType: 'dxTextBox',
      colSpan: 2,
      label: {
        text: _message.default.format('dxScheduler-editorLabelTitle')
      }
    }, {
      itemType: 'group',
      colSpan: 2,
      colCountByScreen: {
        lg: 2,
        xs: 1
      },
      items: this._createDateBoxItems(dataExprs, schedulerInst, allowTimeZoneEditing)
    }, {
      itemType: 'group',
      colCountByScreen: {
        lg: 3,
        xs: 3
      },
      colSpan: 2,
      items: [{
        dataField: dataExprs.allDayExpr,
        cssClass: 'dx-appointment-form-switch',
        editorType: 'dxSwitch',
        label: {
          text: _message.default.format('dxScheduler-allDay'),
          location: 'right'
        },
        editorOptions: {
          onValueChanged: function onValueChanged(args) {
            var value = args.value;

            var startDateEditor = _this3._appointmentForm.getEditor(dataExprs.startDateExpr);

            var endDateEditor = _this3._appointmentForm.getEditor(dataExprs.endDateExpr);

            var startDate = _date_serialization.default.deserializeDate(startDateEditor.option('value'));

            if (!_this3._appointmentForm._lockDateShiftFlag && startDate) {
              if (value) {
                var allDayStartDate = _this3._getAllDayStartDate(startDate);

                startDateEditor.option('value', allDayStartDate);
                endDateEditor.option('value', _this3._getAllDayEndDate(allDayStartDate));
              } else {
                var startDateWithStartHour = _this3._getStartDateWithStartHour(startDate, schedulerInst.option('startDayHour'));

                var endDate = schedulerInst._workSpace.calculateEndDate(startDateWithStartHour);

                startDateEditor.option('value', startDateWithStartHour);
                endDateEditor.option('value', endDate);
              }
            }

            var startDateItemPath = "".concat(APPOINTMENT_FORM_GROUP_NAMES.Main, ".").concat(dataExprs.startDateExpr);
            var endDateItemPath = "".concat(APPOINTMENT_FORM_GROUP_NAMES.Main, ".").concat(dataExprs.endDateExpr);

            _this3._changeFormItemDateType(startDateItemPath, value);

            _this3._changeFormItemDateType(endDateItemPath, value);
          }
        }
      }, {
        editorType: 'dxSwitch',
        dataField: 'repeat',
        cssClass: 'dx-appointment-form-switch',
        name: 'visibilityChanged',
        label: {
          text: _message.default.format('dxScheduler-editorLabelRecurrence'),
          location: 'right'
        },
        editorOptions: {
          onValueChanged: function onValueChanged(args) {
            var form = _this3._appointmentForm;
            var colSpan = args.value ? 1 : 2;
            form.itemOption(APPOINTMENT_FORM_GROUP_NAMES.Main, 'colSpan', colSpan);
            form.itemOption(APPOINTMENT_FORM_GROUP_NAMES.Recurrence, 'colSpan', colSpan);

            _this3._updateRecurrenceItemVisibility(dataExprs.recurrenceRuleExpr, args.value, form);

            changeSize(args.value);
            triggerResize();
          }
        }
      }]
    }, {
      itemType: 'empty',
      colSpan: 2
    }, {
      dataField: dataExprs.descriptionExpr,
      editorType: 'dxTextArea',
      colSpan: 2,
      label: {
        text: _message.default.format('dxScheduler-editorLabelDescription')
      }
    }, {
      itemType: 'empty',
      colSpan: 2
    }];
  },
  _updateRecurrenceItemVisibility: function _updateRecurrenceItemVisibility(recurrenceRuleExpr, value, form) {
    var _form$getEditor;

    form.itemOption(APPOINTMENT_FORM_GROUP_NAMES.Recurrence, 'visible', value);
    !value && form.updateData(recurrenceRuleExpr, '');
    (_form$getEditor = form.getEditor(recurrenceRuleExpr)) === null || _form$getEditor === void 0 ? void 0 : _form$getEditor.changeValueByVisibility(value);
  },
  prepareAppointmentFormEditors: function prepareAppointmentFormEditors(dataExprs, schedulerInst, triggerResize, changeSize, appointmentData, allowTimeZoneEditing, readOnly) {
    var recurrenceEditorVisibility = !!this.getRecurrenceRule(appointmentData, dataExprs);
    changeSize(recurrenceEditorVisibility);
    this._editors = [{
      itemType: 'group',
      name: APPOINTMENT_FORM_GROUP_NAMES.Main,
      colCountByScreen: {
        lg: 2,
        xs: 1
      },
      colSpan: recurrenceEditorVisibility ? 1 : 2,
      items: this._createMainItems(dataExprs, schedulerInst, triggerResize, changeSize, allowTimeZoneEditing)
    }, {
      itemType: 'group',
      name: APPOINTMENT_FORM_GROUP_NAMES.Recurrence,
      visible: recurrenceEditorVisibility,
      colSpan: recurrenceEditorVisibility ? 1 : 2,
      items: this._createRecurrenceEditor(dataExprs, schedulerInst, readOnly)
    }];
    return this._editors;
  },
  _createRecurrenceEditor: function _createRecurrenceEditor(dataExprs, schedulerInst, readOnly) {
    return [{
      dataField: dataExprs.recurrenceRuleExpr,
      editorType: 'dxRecurrenceEditor',
      editorOptions: {
        readOnly: readOnly,
        firstDayOfWeek: schedulerInst.option('firstDayOfWeek')
      },
      label: {
        text: ' ',
        visible: false
      }
    }];
  },
  getRecurrenceRule: function getRecurrenceRule(data, dataExprs) {
    return data[dataExprs.recurrenceRuleExpr];
  },
  concatResources: function concatResources(resources) {
    this._editors[0].items = this._editors[0].items.concat(resources);
  },
  setEditorsType: function setEditorsType(form, startDateExpr, endDateExpr, allDay) {
    var startDateItemPath = "".concat(APPOINTMENT_FORM_GROUP_NAMES.Main, ".").concat(startDateExpr);
    var endDateItemPath = "".concat(APPOINTMENT_FORM_GROUP_NAMES.Recurrence, ".").concat(endDateExpr);
    var startDateFormItem = form.itemOption(startDateItemPath);
    var endDateFormItem = form.itemOption(endDateItemPath);

    if (startDateFormItem && endDateFormItem) {
      var startDateEditorOptions = startDateFormItem.editorOptions;
      var endDateEditorOptions = endDateFormItem.editorOptions;
      startDateEditorOptions.type = endDateEditorOptions.type = allDay ? 'date' : 'datetime';
      form.itemOption(startDateItemPath, 'editorOptions', startDateEditorOptions);
      form.itemOption(endDateItemPath, 'editorOptions', endDateEditorOptions);
    }
  },
  updateTimeZoneEditorDataSource: function updateTimeZoneEditorDataSource(date, expression) {
    var timeZoneDataSource = new _data_source.default({
      store: _utils.default.getDisplayedTimeZones(date),
      paginate: true,
      pageSize: 10
    });
    var options = {
      dataSource: timeZoneDataSource
    };
    this.setEditorOptions(expression, 'Main', options);
  },
  updateRecurrenceEditorStartDate: function updateRecurrenceEditorStartDate(date, expression) {
    var options = {
      startDate: date
    };
    this.setEditorOptions(expression, 'Recurrence', options);
  },
  setEditorOptions: function setEditorOptions(name, groupName, options) {
    var editorPath = "".concat(APPOINTMENT_FORM_GROUP_NAMES.groupName, ".").concat(name);

    var editor = this._appointmentForm.itemOption(editorPath);

    editor && this._appointmentForm.itemOption(editorPath, 'editorOptions', (0, _extend.extend)({}, editor.editorOptions, options));
  },
  updateFormData: function updateFormData(appointmentForm, formData, dataExprs) {
    appointmentForm._lockDateShiftFlag = true;
    var startDate = new Date(formData[dataExprs.startDateExpr]);
    var endDate = new Date(formData[dataExprs.endDateExpr]);
    this.updateTimeZoneEditorDataSource(startDate, dataExprs.startDateTimeZoneExpr);
    this.updateTimeZoneEditorDataSource(endDate, dataExprs.endDateTimeZoneExpr);
    this.updateRecurrenceEditorStartDate(startDate, dataExprs.recurrenceRuleExpr);
    appointmentForm.option('formData', formData);
    appointmentForm._lockDateShiftFlag = false;
  }
};
exports.AppointmentForm = SchedulerAppointmentForm;
