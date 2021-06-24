/**
* DevExtreme (renovation/ui/common/core.d.ts)
* Version: 21.2.0
* Build date: Thu Jun 24 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
/* eslint-disable @typescript-eslint/method-signature-style */

import '../../../core/component';

declare module '../../../core/component' {
  interface Component<TProperties> { // eslint-disable-line @typescript-eslint/no-unused-vars
    _optionsByReference: Record<string, unknown>;
    _deprecatedOptions: Record<string, unknown>;
    _options: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      silent(path: any, value: any): void;
    };
    _createActionByOption(optionName: string, config: Record<string, unknown>): (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (...args: any[]) => any
    );
    _dispose(): void;
    _getDefaultOptions(): Record<string, unknown>;
    _init(): void;
    _initializeComponent(): void;
    _optionChanging(name: string, value: unknown, prevValue: unknown): void;
    _optionChanged(args: { name: string; value: unknown }): void;
    _setOptionsByReference(): void;
    _setDeprecatedOptions(): void;
  }
}
