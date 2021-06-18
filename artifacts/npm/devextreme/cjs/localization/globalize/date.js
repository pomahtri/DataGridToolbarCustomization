/**
* DevExtreme (cjs/localization/globalize/date.js)
* Version: 21.2.0
* Build date: Fri Jun 18 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("./core");

require("./number");

require("globalize/date");

var _globalize = _interopRequireDefault(require("globalize"));

var _date2 = _interopRequireDefault(require("../date"));

var _type = require("../../core/utils/type");

var _array = require("../../core/utils/array");

var iteratorUtils = _interopRequireWildcard(require("../../core/utils/iterator"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-restricted-imports
var timeData = {
  'supplemental': {
    'version': {
      '_cldrVersion': '28',
      '_unicodeVersion': '8.0.0',
      '_number': '$Revision: 11969 $'
    },
    'timeData': {
      '001': {
        '_allowed': 'H h',
        '_preferred': 'H'
      },
      'DE': {
        '_allowed': 'H',
        '_preferred': 'H'
      },
      'JP': {
        '_allowed': 'H K h',
        '_preferred': 'H'
      },
      'RU': {
        '_allowed': 'H',
        '_preferred': 'H'
      },
      'US': {
        '_allowed': 'H h',
        '_preferred': 'h'
      }
    }
  }
};
var enCaGregorian = {
  'main': {
    'en': {
      'identity': {
        'version': {
          '_cldrVersion': '28',
          '_number': '$Revision: 11972 $'
        },
        'language': 'en'
      },
      'dates': {
        'calendars': {
          'gregorian': {
            'months': {
              'format': {
                'abbreviated': {
                  '1': 'Jan',
                  '2': 'Feb',
                  '3': 'Mar',
                  '4': 'Apr',
                  '5': 'May',
                  '6': 'Jun',
                  '7': 'Jul',
                  '8': 'Aug',
                  '9': 'Sep',
                  '10': 'Oct',
                  '11': 'Nov',
                  '12': 'Dec'
                },
                'narrow': {
                  '1': 'J',
                  '2': 'F',
                  '3': 'M',
                  '4': 'A',
                  '5': 'M',
                  '6': 'J',
                  '7': 'J',
                  '8': 'A',
                  '9': 'S',
                  '10': 'O',
                  '11': 'N',
                  '12': 'D'
                },
                'wide': {
                  '1': 'January',
                  '2': 'February',
                  '3': 'March',
                  '4': 'April',
                  '5': 'May',
                  '6': 'June',
                  '7': 'July',
                  '8': 'August',
                  '9': 'September',
                  '10': 'October',
                  '11': 'November',
                  '12': 'December'
                }
              },
              'stand-alone': {
                'abbreviated': {
                  '1': 'Jan',
                  '2': 'Feb',
                  '3': 'Mar',
                  '4': 'Apr',
                  '5': 'May',
                  '6': 'Jun',
                  '7': 'Jul',
                  '8': 'Aug',
                  '9': 'Sep',
                  '10': 'Oct',
                  '11': 'Nov',
                  '12': 'Dec'
                },
                'narrow': {
                  '1': 'J',
                  '2': 'F',
                  '3': 'M',
                  '4': 'A',
                  '5': 'M',
                  '6': 'J',
                  '7': 'J',
                  '8': 'A',
                  '9': 'S',
                  '10': 'O',
                  '11': 'N',
                  '12': 'D'
                },
                'wide': {
                  '1': 'January',
                  '2': 'February',
                  '3': 'March',
                  '4': 'April',
                  '5': 'May',
                  '6': 'June',
                  '7': 'July',
                  '8': 'August',
                  '9': 'September',
                  '10': 'October',
                  '11': 'November',
                  '12': 'December'
                }
              }
            },
            'days': {
              'format': {
                'abbreviated': {
                  'sun': 'Sun',
                  'mon': 'Mon',
                  'tue': 'Tue',
                  'wed': 'Wed',
                  'thu': 'Thu',
                  'fri': 'Fri',
                  'sat': 'Sat'
                },
                'narrow': {
                  'sun': 'S',
                  'mon': 'M',
                  'tue': 'T',
                  'wed': 'W',
                  'thu': 'T',
                  'fri': 'F',
                  'sat': 'S'
                },
                'short': {
                  'sun': 'Su',
                  'mon': 'Mo',
                  'tue': 'Tu',
                  'wed': 'We',
                  'thu': 'Th',
                  'fri': 'Fr',
                  'sat': 'Sa'
                },
                'wide': {
                  'sun': 'Sunday',
                  'mon': 'Monday',
                  'tue': 'Tuesday',
                  'wed': 'Wednesday',
                  'thu': 'Thursday',
                  'fri': 'Friday',
                  'sat': 'Saturday'
                }
              },
              'stand-alone': {
                'abbreviated': {
                  'sun': 'Sun',
                  'mon': 'Mon',
                  'tue': 'Tue',
                  'wed': 'Wed',
                  'thu': 'Thu',
                  'fri': 'Fri',
                  'sat': 'Sat'
                },
                'narrow': {
                  'sun': 'S',
                  'mon': 'M',
                  'tue': 'T',
                  'wed': 'W',
                  'thu': 'T',
                  'fri': 'F',
                  'sat': 'S'
                },
                'short': {
                  'sun': 'Su',
                  'mon': 'Mo',
                  'tue': 'Tu',
                  'wed': 'We',
                  'thu': 'Th',
                  'fri': 'Fr',
                  'sat': 'Sa'
                },
                'wide': {
                  'sun': 'Sunday',
                  'mon': 'Monday',
                  'tue': 'Tuesday',
                  'wed': 'Wednesday',
                  'thu': 'Thursday',
                  'fri': 'Friday',
                  'sat': 'Saturday'
                }
              }
            },
            'quarters': {
              'format': {
                'abbreviated': {
                  '1': 'Q1',
                  '2': 'Q2',
                  '3': 'Q3',
                  '4': 'Q4'
                },
                'narrow': {
                  '1': '1',
                  '2': '2',
                  '3': '3',
                  '4': '4'
                },
                'wide': {
                  '1': '1st quarter',
                  '2': '2nd quarter',
                  '3': '3rd quarter',
                  '4': '4th quarter'
                }
              },
              'stand-alone': {
                'abbreviated': {
                  '1': 'Q1',
                  '2': 'Q2',
                  '3': 'Q3',
                  '4': 'Q4'
                },
                'narrow': {
                  '1': '1',
                  '2': '2',
                  '3': '3',
                  '4': '4'
                },
                'wide': {
                  '1': '1st quarter',
                  '2': '2nd quarter',
                  '3': '3rd quarter',
                  '4': '4th quarter'
                }
              }
            },
            'dayPeriods': {
              'format': {
                'abbreviated': {
                  'midnight': 'midnight',
                  'am': 'AM',
                  'am-alt-variant': 'am',
                  'noon': 'noon',
                  'pm': 'PM',
                  'pm-alt-variant': 'pm',
                  'morning1': 'in the morning',
                  'afternoon1': 'in the afternoon',
                  'evening1': 'in the evening',
                  'night1': 'at night'
                },
                'narrow': {
                  'midnight': 'mi',
                  'am': 'a',
                  'am-alt-variant': 'am',
                  'noon': 'n',
                  'pm': 'p',
                  'pm-alt-variant': 'pm',
                  'morning1': 'in the morning',
                  'afternoon1': 'in the afternoon',
                  'evening1': 'in the evening',
                  'night1': 'at night'
                },
                'wide': {
                  'midnight': 'midnight',
                  'am': 'AM',
                  'am-alt-variant': 'am',
                  'noon': 'noon',
                  'pm': 'PM',
                  'pm-alt-variant': 'pm',
                  'morning1': 'in the morning',
                  'afternoon1': 'in the afternoon',
                  'evening1': 'in the evening',
                  'night1': 'at night'
                }
              },
              'stand-alone': {
                'abbreviated': {
                  'midnight': 'midnight',
                  'am': 'AM',
                  'am-alt-variant': 'am',
                  'noon': 'noon',
                  'pm': 'PM',
                  'pm-alt-variant': 'pm',
                  'morning1': 'in the morning',
                  'afternoon1': 'in the afternoon',
                  'evening1': 'in the evening',
                  'night1': 'at night'
                },
                'narrow': {
                  'midnight': 'midnight',
                  'am': 'AM',
                  'am-alt-variant': 'am',
                  'noon': 'noon',
                  'pm': 'PM',
                  'pm-alt-variant': 'pm',
                  'morning1': 'in the morning',
                  'afternoon1': 'in the afternoon',
                  'evening1': 'in the evening',
                  'night1': 'at night'
                },
                'wide': {
                  'midnight': 'midnight',
                  'am': 'AM',
                  'am-alt-variant': 'am',
                  'noon': 'noon',
                  'pm': 'PM',
                  'pm-alt-variant': 'pm',
                  'morning1': 'morning',
                  'afternoon1': 'afternoon',
                  'evening1': 'evening',
                  'night1': 'night'
                }
              }
            },
            'eras': {
              'eraNames': {
                '0': 'Before Christ',
                '0-alt-variant': 'Before Common Era',
                '1': 'Anno Domini',
                '1-alt-variant': 'Common Era'
              },
              'eraAbbr': {
                '0': 'BC',
                '0-alt-variant': 'BCE',
                '1': 'AD',
                '1-alt-variant': 'CE'
              },
              'eraNarrow': {
                '0': 'B',
                '0-alt-variant': 'BCE',
                '1': 'A',
                '1-alt-variant': 'CE'
              }
            },
            'dateFormats': {
              'full': 'EEEE, MMMM d, y',
              'long': 'MMMM d, y',
              'medium': 'MMM d, y',
              'short': 'M/d/yy'
            },
            'timeFormats': {
              'full': 'h:mm:ss a zzzz',
              'long': 'h:mm:ss a z',
              'medium': 'h:mm:ss a',
              'short': 'h:mm a'
            },
            'dateTimeFormats': {
              'full': '{1} \'at\' {0}',
              'long': '{1} \'at\' {0}',
              'medium': '{1}, {0}',
              'short': '{1}, {0}',
              'availableFormats': {
                'd': 'd',
                'E': 'ccc',
                'Ed': 'd E',
                'Ehm': 'E h:mm a',
                'EHm': 'E HH:mm',
                'Ehms': 'E h:mm:ss a',
                'EHms': 'E HH:mm:ss',
                'Gy': 'y G',
                'GyMMM': 'MMM y G',
                'GyMMMd': 'MMM d, y G',
                'GyMMMEd': 'E, MMM d, y G',
                'h': 'h a',
                'H': 'HH',
                'hm': 'h:mm a',
                'Hm': 'HH:mm',
                'hms': 'h:mm:ss a',
                'Hms': 'HH:mm:ss',
                'hmsv': 'h:mm:ss a v',
                'Hmsv': 'HH:mm:ss v',
                'hmv': 'h:mm a v',
                'Hmv': 'HH:mm v',
                'M': 'L',
                'Md': 'M/d',
                'MEd': 'E, M/d',
                'MMM': 'LLL',
                'MMMd': 'MMM d',
                'MMMEd': 'E, MMM d',
                'MMMMd': 'MMMM d',
                'ms': 'mm:ss',
                'y': 'y',
                'yM': 'M/y',
                'yMd': 'M/d/y',
                'yMEd': 'E, M/d/y',
                'yMMM': 'MMM y',
                'yMMMd': 'MMM d, y',
                'yMMMEd': 'E, MMM d, y',
                'yMMMM': 'MMMM y',
                'yQQQ': 'QQQ y',
                'yQQQQ': 'QQQQ y'
              },
              'appendItems': {
                'Day': '{0} ({2}: {1})',
                'Day-Of-Week': '{0} {1}',
                'Era': '{0} {1}',
                'Hour': '{0} ({2}: {1})',
                'Minute': '{0} ({2}: {1})',
                'Month': '{0} ({2}: {1})',
                'Quarter': '{0} ({2}: {1})',
                'Second': '{0} ({2}: {1})',
                'Timezone': '{0} {1}',
                'Week': '{0} ({2}: {1})',
                'Year': '{0} {1}'
              },
              'intervalFormats': {
                'intervalFormatFallback': '{0} – {1}',
                'd': {
                  'd': 'd – d'
                },
                'h': {
                  'a': 'h a – h a',
                  'h': 'h – h a'
                },
                'H': {
                  'H': 'HH – HH'
                },
                'hm': {
                  'a': 'h:mm a – h:mm a',
                  'h': 'h:mm – h:mm a',
                  'm': 'h:mm – h:mm a'
                },
                'Hm': {
                  'H': 'HH:mm – HH:mm',
                  'm': 'HH:mm – HH:mm'
                },
                'hmv': {
                  'a': 'h:mm a – h:mm a v',
                  'h': 'h:mm – h:mm a v',
                  'm': 'h:mm – h:mm a v'
                },
                'Hmv': {
                  'H': 'HH:mm – HH:mm v',
                  'm': 'HH:mm – HH:mm v'
                },
                'hv': {
                  'a': 'h a – h a v',
                  'h': 'h – h a v'
                },
                'Hv': {
                  'H': 'HH – HH v'
                },
                'M': {
                  'M': 'M – M'
                },
                'Md': {
                  'd': 'M/d – M/d',
                  'M': 'M/d – M/d'
                },
                'MEd': {
                  'd': 'E, M/d – E, M/d',
                  'M': 'E, M/d – E, M/d'
                },
                'MMM': {
                  'M': 'MMM – MMM'
                },
                'MMMd': {
                  'd': 'MMM d – d',
                  'M': 'MMM d – MMM d'
                },
                'MMMEd': {
                  'd': 'E, MMM d – E, MMM d',
                  'M': 'E, MMM d – E, MMM d'
                },
                'y': {
                  'y': 'y – y'
                },
                'yM': {
                  'M': 'M/y – M/y',
                  'y': 'M/y – M/y'
                },
                'yMd': {
                  'd': 'M/d/y – M/d/y',
                  'M': 'M/d/y – M/d/y',
                  'y': 'M/d/y – M/d/y'
                },
                'yMEd': {
                  'd': 'E, M/d/y – E, M/d/y',
                  'M': 'E, M/d/y – E, M/d/y',
                  'y': 'E, M/d/y – E, M/d/y'
                },
                'yMMM': {
                  'M': 'MMM – MMM y',
                  'y': 'MMM y – MMM y'
                },
                'yMMMd': {
                  'd': 'MMM d – d, y',
                  'M': 'MMM d – MMM d, y',
                  'y': 'MMM d, y – MMM d, y'
                },
                'yMMMEd': {
                  'd': 'E, MMM d – E, MMM d, y',
                  'M': 'E, MMM d – E, MMM d, y',
                  'y': 'E, MMM d, y – E, MMM d, y'
                },
                'yMMMM': {
                  'M': 'MMMM – MMMM y',
                  'y': 'MMMM y – MMMM y'
                }
              }
            }
          }
        }
      }
    }
  }
};
var weekData = {
  'supplemental': {
    'version': {
      '_cldrVersion': '28',
      '_unicodeVersion': '8.0.0',
      '_number': '$Revision: 11969 $'
    },
    'weekData': {
      'minDays': {
        '001': '1',
        'US': '1',
        'DE': '4'
      },
      'firstDay': {
        '001': 'mon',
        'DE': 'mon',
        'RU': 'mon',
        'JP': 'sun',
        'US': 'sun'
      },
      'weekendStart': {
        '001': 'sat'
      },
      'weekendEnd': {
        '001': 'sun'
      }
    }
  }
};
var ACCEPTABLE_JSON_FORMAT_PROPERTIES = ['skeleton', 'date', 'time', 'datetime', 'raw'];
var RTL_MARKS_REGEX = /[\u200E\u200F]/g; // eslint-disable-next-line no-restricted-imports

if (_globalize.default && _globalize.default.formatDate) {
  if (_globalize.default.locale().locale === 'en') {
    _globalize.default.load(weekData, timeData, enCaGregorian);

    _globalize.default.locale('en');
  }

  var formattersCache = {};
  var FORMATS_TO_GLOBALIZE_MAP = {
    'shortdate': {
      path: 'dateTimeFormats/availableFormats/yMd'
    },
    'shorttime': {
      path: 'timeFormats/short'
    },
    'longdate': {
      path: 'dateFormats/full'
    },
    'longtime': {
      path: 'timeFormats/medium'
    },
    'monthandday': {
      path: 'dateTimeFormats/availableFormats/MMMMd'
    },
    'monthandyear': {
      path: 'dateTimeFormats/availableFormats/yMMMM'
    },
    'quarterandyear': {
      path: 'dateTimeFormats/availableFormats/yQQQ'
    },
    'day': {
      path: 'dateTimeFormats/availableFormats/d'
    },
    'year': {
      path: 'dateTimeFormats/availableFormats/y'
    },
    'shortdateshorttime': {
      path: 'dateTimeFormats/short',
      parts: ['shorttime', 'shortdate']
    },
    'longdatelongtime': {
      path: 'dateTimeFormats/medium',
      parts: ['longtime', 'longdate']
    },
    'month': {
      pattern: 'LLLL'
    },
    'shortyear': {
      pattern: 'yy'
    },
    'dayofweek': {
      pattern: 'EEEE'
    },
    'quarter': {
      pattern: 'QQQ'
    },
    'millisecond': {
      pattern: 'SSS'
    },
    'hour': {
      pattern: 'HH'
    },
    'minute': {
      pattern: 'mm'
    },
    'second': {
      pattern: 'ss'
    }
  };
  var globalizeDateLocalization = {
    engine: function engine() {
      return 'globalize';
    },
    _getPatternByFormat: function _getPatternByFormat(format) {
      var that = this;
      var lowerFormat = format.toLowerCase();
      var globalizeFormat = FORMATS_TO_GLOBALIZE_MAP[lowerFormat];

      if (lowerFormat === 'datetime-local') {
        return 'yyyy-MM-ddTHH\':\'mm\':\'ss';
      }

      if (!globalizeFormat) {
        return;
      }

      var result = globalizeFormat.path && that._getFormatStringByPath(globalizeFormat.path) || globalizeFormat.pattern;

      if (globalizeFormat.parts) {
        iteratorUtils.each(globalizeFormat.parts, function (index, part) {
          result = result.replace('{' + index + '}', that._getPatternByFormat(part));
        });
      }

      return result;
    },
    _getFormatStringByPath: function _getFormatStringByPath(path) {
      return _globalize.default.locale().main('dates/calendars/gregorian/' + path);
    },
    getPeriodNames: function getPeriodNames() {
      var json = _globalize.default.locale().main('dates/calendars/gregorian/dayPeriods/stand-alone/wide');

      return [json['am'], json['pm']];
    },
    getMonthNames: function getMonthNames(format, type) {
      var months = _globalize.default.locale().main('dates/calendars/gregorian/months/' + (type === 'format' ? type : 'stand-alone') + '/' + (format || 'wide'));

      return iteratorUtils.map(months, function (month) {
        return month;
      });
    },
    getDayNames: function getDayNames(format) {
      var days = _globalize.default.locale().main('dates/calendars/gregorian/days/stand-alone/' + (format || 'wide'));

      return iteratorUtils.map(days, function (day) {
        return day;
      });
    },
    getTimeSeparator: function getTimeSeparator() {
      return _globalize.default.locale().main('numbers/symbols-numberSystem-latn/timeSeparator');
    },
    removeRtlMarks: function removeRtlMarks(text) {
      return text.replace(RTL_MARKS_REGEX, '');
    },
    format: function format(date, _format) {
      if (!date) {
        return;
      }

      if (!_format) {
        return date;
      }

      var formatter;
      var formatCacheKey;

      if (typeof _format === 'function') {
        return _format(date);
      }

      if (_format.formatter) {
        return _format.formatter(date);
      }

      _format = _format.type || _format;

      if (typeof _format === 'string') {
        formatCacheKey = _globalize.default.locale().locale + ':' + _format;
        formatter = formattersCache[formatCacheKey];

        if (!formatter) {
          _format = {
            raw: this._getPatternByFormat(_format) || _format
          };
          formatter = formattersCache[formatCacheKey] = _globalize.default.dateFormatter(_format);
        }
      } else {
        if (!this._isAcceptableFormat(_format)) {
          return;
        }

        formatter = _globalize.default.dateFormatter(_format);
      }

      return this.removeRtlMarks(formatter(date));
    },
    parse: function parse(text, format) {
      if (!text) {
        return;
      }

      if (!format || typeof format === 'function' || (0, _type.isObject)(format) && !this._isAcceptableFormat(format)) {
        if (format) {
          var parsedValue = this.callBase(text, format);

          if (parsedValue) {
            return parsedValue;
          }
        }

        return _globalize.default.parseDate(text);
      }

      if (format.parser) {
        return format.parser(text);
      }

      if (typeof format === 'string') {
        format = {
          raw: this._getPatternByFormat(format) || format
        };
      }

      return _globalize.default.parseDate(text, format);
    },
    _isAcceptableFormat: function _isAcceptableFormat(format) {
      if (format.parser) {
        return true;
      }

      for (var i = 0; i < ACCEPTABLE_JSON_FORMAT_PROPERTIES.length; i++) {
        if (Object.prototype.hasOwnProperty.call(format, ACCEPTABLE_JSON_FORMAT_PROPERTIES[i])) {
          return true;
        }
      }
    },
    firstDayOfWeekIndex: function firstDayOfWeekIndex() {
      var firstDay = _globalize.default.locale().supplemental.weekData.firstDay();

      return (0, _array.inArray)(firstDay, this._getDayKeys());
    },
    _getDayKeys: function _getDayKeys() {
      var days = _globalize.default.locale().main('dates/calendars/gregorian/days/format/short');

      return iteratorUtils.map(days, function (day, key) {
        return key;
      });
    }
  };

  _date2.default.resetInjection();

  _date2.default.inject(globalizeDateLocalization);
}
