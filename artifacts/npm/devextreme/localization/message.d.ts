/**
* DevExtreme (localization/message.d.ts)
* Version: 21.2.0
* Build date: Fri Jun 18 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
type messageLocalizationType = {
    getFormatter:(name: string) => () => string
    format: (name: string) => string
};
declare const messageLocalization: messageLocalizationType;
export default messageLocalization;
