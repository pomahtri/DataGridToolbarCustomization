/**
* DevExtreme (esm/ui/diagram/ui.diagram.properties_toolbar.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import DiagramToolbar from './ui.diagram.toolbar';
import DiagramCommandsManager from './diagram.commands_manager';

class DiagramPropertiesToolbar extends DiagramToolbar {
  _getCommands() {
    return DiagramCommandsManager.getPropertiesToolbarCommands();
  }

}

export default DiagramPropertiesToolbar;
