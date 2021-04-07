'use strict';

import {MTAFunction, ScriptSide} from "./defs";

import { GuiFunctionDefinitions } from "./client/gui";
import { DxFunctionDefinitions } from "./client/dx";
import { EngineFunctionDefinitions } from "./client/engine";
import { VehicleFunctionDefinitions } from "./client/vehicle";
import { PedFunctionDefinitions } from "./client/ped";

export var ClientDefinitions = new Array<MTAFunction>();

for(let i in GuiFunctionDefinitions)
    ClientDefinitions.push(GuiFunctionDefinitions[i]);
for(let i in DxFunctionDefinitions)
    ClientDefinitions.push(DxFunctionDefinitions[i]);
for(let i in EngineFunctionDefinitions)
    ClientDefinitions.push(EngineFunctionDefinitions[i]);
for(let i in VehicleFunctionDefinitions)
    ClientDefinitions.push(VehicleFunctionDefinitions[i]);
for(let i in PedFunctionDefinitions)
    ClientDefinitions.push(PedFunctionDefinitions[i]);

let tmpDef : MTAFunction;

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetProperty";
tmpDef.description = "This function sets the value of a specific property of a DGS element. For a list of properties and their meaning, see the  DGS properties page.";
tmpDef.returnType = "If the function succeeds, it returns true, false otherwise.";
tmpDef.args = [' element/table dgsElement', ' string property', ' mixed value [', ' mixed arg1', ' mixed arg2 ... ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetProperties";
tmpDef.description = "This function sets the values of specific properties of a DGS element. For a list of properties and their meaning, see the  DGS properties page.";
tmpDef.returnType = "";
tmpDef.args = [' element/table dgsElement', ' table properties'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetPosition";
tmpDef.description = "Returns floats representing the x and y position of the element, or false if the position could not be retrieved.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement', ' bool relative [', ' bool includeParent = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetPosition";
tmpDef.description = "This function sets the position of a DGS element.";
tmpDef.returnType = "Returns true if the position has been successfully set, false otherwise.";
tmpDef.args = [' element theElement', ' float x', ' float y', ' bool relative [', ' bool isCenterPosition = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetParent";
tmpDef.description = "This function is used for setting a DGS element as the parent of another DGS element.";
tmpDef.returnType = "Returns true if both elements are valid, false otherwise.";
tmpDef.args = [' element theElement', ' element parent  '];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetParent";
tmpDef.description = "This function is used to determine the parent of a DGS element.";
tmpDef.returnType = "This returns the parent as a DGS element. It returns false if theElement is invalid, or false (You can think of it as the screen or root).";
tmpDef.args = [' element theElement  '];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetChild";
tmpDef.description = "Returns the requested dgs element if it exists, or false if it doesn't.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsParent', ' int index '];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetChildren";
tmpDef.description = "Returns a table includes the child dgs elements of the parent, or false if it doesn't.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsParent '];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetSize";
tmpDef.description = "This function gets the size of a DGS element.";
tmpDef.returnType = "Returns the DGS element size x and y if the function has been successful, false otherwise.";
tmpDef.args = [' element theElement', ' bool relative'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetSize";
tmpDef.description = "This function sets the dimensions (size) of a DGS element. It refers to the bounding box size for DGS elements. It does not make DGS elements smaller or larger in appearance.";
tmpDef.returnType = "Returns true if the dgs element's size was set successfully, false otherwise.";
tmpDef.args = [' element dgsElement', ' float width', ' float height', ' bool relative'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetType";
tmpDef.description = "This function is used to retrieve the type of a dgs element, an element even a string/number/bool value.";
tmpDef.returnType = "Returns a string containing the type, false if invalid arguments were passed.";
tmpDef.args = [' mixed theMixed  '];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetLayer";
tmpDef.description = "This function only have effect on a non-parent dgs element unless the forceDetatch is enabled.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element dgsElement', ' string layer [', ' bool forceDetatch = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetLayer";
tmpDef.description = "Returns a string if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetCurrentLayerIndex";
tmpDef.description = "This function will only act on the parent layer.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement', ' integer index'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetCurrentLayerIndex";
tmpDef.description = "Returns an integer if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetLayerElements";
tmpDef.description = "Returns a table including dgs elements if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' string layer'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetProperty";
tmpDef.description = "This function gets the value of a specific property of a DGS element. For a list of properties and their meaning, see the  DGS properties page.";
tmpDef.returnType = "If the function succeeds, it returns a value of the property. An error will occur if failed.";
tmpDef.args = [' element dgsElement', ' string property'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetProperty";
tmpDef.description = "This function sets the value of a specific property of a DGS element. For a list of properties and their meaning, see the  DGS properties page.";
tmpDef.returnType = "If the function succeeds, it returns true, false otherwise.";
tmpDef.args = [' element/table dgsElement', ' string property', ' mixed value [', ' mixed arg1', ' mixed arg2 ... ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetPropertyInherit";
tmpDef.description = "This function sets the value of a specific property of a DGS element and affects its children. For a list of properties and their meaning, see the  DGS properties page.";
tmpDef.returnType = "If the function succeeds, it returns true, false otherwise.";
tmpDef.args = [' element/table dgsElement', ' string property', ' mixed value [', ' mixed arg1', ' mixed arg2 ... ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetProperties";
tmpDef.description = "This function gets the values of secific properties or all the properties of a DGS element. For a list of properties and their meaning, see the  DGS properties page.";
tmpDef.returnType = "returns a table stores property name and value if succeeds, false otherwise.";
tmpDef.args = [' element dgsElement [', ' table properties ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetProperties";
tmpDef.description = "This function sets the values of specific properties of a DGS element. For a list of properties and their meaning, see the  DGS properties page.";
tmpDef.returnType = "";
tmpDef.args = [' element/table dgsElement', ' table properties'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetVisible";
tmpDef.description = "This function determines if a DGS element is visible.";
tmpDef.returnType = "Returns true if the element is visible, false otherwise.";
tmpDef.args = [' element guiElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetVisible";
tmpDef.description = "This function changes the visibility state of a DGS element.";
tmpDef.returnType = "Returns true if the element's visibility could be changed, false otherwise.";
tmpDef.args = [' element dgsElement', ' bool state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetEnabled";
tmpDef.description = "This function determines if a DGS element is enabled.";
tmpDef.returnType = "Returns true if the element is enabled, false otherwise.";
tmpDef.args = [' element guiElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetEnabled";
tmpDef.description = "This function enables/disables a DGS element. A disabled DGS element can't be used, gets a gray aspect and doesn't receive any events.";
tmpDef.returnType = "If the function succeeds it returns true, if it fails it returns false.";
tmpDef.args = [' element dgsElement', ' bool enabled'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetPositionAlignment";
tmpDef.description = "This function to get the alignment of position from a specific DGS element";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetPositionAlignment";
tmpDef.description = "This function to set the alignment of position of a specific DGS element";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement [', ' string horizontalAlignment', ' string verticalAlignment ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetAlpha";
tmpDef.description = "Alpha represents the transparency of a dgs element. This function allows retrieval of a dgs element's current alpha.";
tmpDef.returnType = "This function returns a positive integer in between 0 and 1 of the dgs element's current alpha, or false if it could not be retrieved.";
tmpDef.args = [' element dgsElement [', ' bool isAbsolute = false', ' bool includeParent = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetAlpha";
tmpDef.description = "This changes the alpha level (the visibleness/transparency) of a DGS element";
tmpDef.returnType = "Returns true if the dgs element's alpha was successfully changed, false otherwise.";
tmpDef.args = [' element guielement', ' float alpha'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetFont";
tmpDef.description = "This function is used to get the current font that is used to draw text in DGS elements.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetFont";
tmpDef.description = "This function sets the font of a dgs element to be used when drawing text. a dgs font can be affected by dgsSetSystemFont";
tmpDef.returnType = "Returns true if the font has been successfully set on the dgs element, false otherwise.";
tmpDef.args = [' element dgsElement', ' mixed font'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetText";
tmpDef.description = "This function is used to get the text of DGS elements like edit boxes, labels, buttons etc.";
tmpDef.returnType = "Returns a string containing the requested element's text, or false if the dgs element passed to the function is invalid.";
tmpDef.args = [' element guiElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetText";
tmpDef.description = "This function sets the text of a DGS element.";
tmpDef.returnType = "Returns true if text has been successfully set on the dgs element, false otherwise.";
tmpDef.args = [' element DGS element', ' string text'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetPostGUI";
tmpDef.description = "This function gets the post gui state of a dgs element.";
tmpDef.returnType = "Returns true if the dgs element is postGUI, false otherwise.";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetPostGUI";
tmpDef.description = "This function sets the post gui state of a dgs element.";
tmpDef.returnType = "Returns true if successful, false otherwise";
tmpDef.args = [' element dgsElement', ' bool postGUI'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetInputEnabled";
tmpDef.description = "Returns true if input is focused on GUI, false if it's focused on the game.";
tmpDef.returnType = "";
tmpDef.args = [' bool enabled'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetInputEnabled";
tmpDef.description = "Returns true if input mode could be changed, false if invalid parameters are passed.";
tmpDef.returnType = "";
tmpDef.args = [' bool enabled'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetInputMode";
tmpDef.description = "Returns a string defining the current input mode, potential values are:";
tmpDef.returnType = "";
tmpDef.args = [''];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetInputMode";
tmpDef.description = "Returns true if input mode could be changed, false if invalid parameters are passed.";
tmpDef.returnType = "";
tmpDef.args = [' string mode'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsAttachToAutoDestroy";
tmpDef.description = "Returns true if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element sourceElement', ' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsDetachFromAutoDestroy";
tmpDef.description = "Returns true if successful, false otherwise";
tmpDef.returnType = "";
tmpDef.args = [' element sourceElement', ' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsFocus";
tmpDef.description = "This function focuses a defocused DGS element. Used primarily for edit fields, memos, browser etc.";
tmpDef.returnType = "Returns true if the function was successful, false otherwise.";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsBlur";
tmpDef.description = "This function defocuses a focused DGS element. Used primarily for edit fields, memos, browser etc.";
tmpDef.returnType = "Returns true if the function was successful, false otherwise.";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateFont";
tmpDef.description = "This function creates a dx font element that can be used in dgsSetFont and stored in dgs.";
tmpDef.returnType = "";
tmpDef.args = [' string filepath [', ' int size=9', ' bool bold=false', ' string quality="proof" ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsBringToFront";
tmpDef.description = "This function bring a dgs element to front.";
tmpDef.returnType = "Returns true if the function was successful, false otherwise.";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMoveToBack";
tmpDef.description = "This function moves a DGS element to the very back of all other DGS elements.";
tmpDef.returnType = "Returns true if the function was successful, false otherwise.";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetScreenSize";
tmpDef.description = "This returns two floats representing the player's screen resolution, width and height.";
tmpDef.returnType = "";
tmpDef.args = [''];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetCursorPosition";
tmpDef.description = "This function gets the position of the cursor and can be relative to a dgs element.";
tmpDef.returnType = "Returns two numbers indicates x and y coordinate if successful, false otherwise.";
tmpDef.args = [' [ element dgsElement', ' bool relative ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetMouseEnterGUI";
tmpDef.description = "Returns a DGS element if the cursor is hovering on a clickable DGS element, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [''];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetMouseLeaveGUI";
tmpDef.description = "Returns an existing DGS element that the the cursor has just left from, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [''];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsIsMouseWithinGUI";
tmpDef.description = "This function returns whether the mouse is in a specific dgs element.";
tmpDef.returnType = "Returns true if mouse is within the specific dgs element, false otherwise.";
tmpDef.args = [' element withinElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetSystemFont";
tmpDef.description = "This function creates a dx font element as default font stored in dgs.";
tmpDef.returnType = "";
tmpDef.args = [' string filepath [', ' int size=9', ' bool bold=false', ' string quality="proof" ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetSystemFont";
tmpDef.description = "This function gets the default dx font element in dgs.";
tmpDef.returnType = "";
tmpDef.args = [''];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetDxGUINoParent";
tmpDef.description = "This function gets the dgs dx guis which don't have parents.";
tmpDef.returnType = "";
tmpDef.args = [''];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetDxGUIFromResource";
tmpDef.description = "This function is used to get DGS elements which were created by other resources.";
tmpDef.returnType = "";
tmpDef.args = [' [ resource res ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetFocusedGUI";
tmpDef.description = "This function gets a dgs element that is focused at present.";
tmpDef.returnType = "";
tmpDef.args = [''];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetExportedFunctionName";
tmpDef.description = "This function is used to get a specific exported function name or all exported function names";
tmpDef.returnType = "Returns a table contains the exported function name or a exported function name.";
tmpDef.args = [' [ string name ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsImportFunction";
tmpDef.description = "This function allows developers to import functions into his script.";
tmpDef.returnType = "";
tmpDef.args = ['0', '0', '1', '1', '"DGS"', 'true)'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsImportOOPClass";
tmpDef.description = "This function allows developers to import DGS OOP Class into his script.";
tmpDef.returnType = "";
tmpDef.args = ['0', '0', '1', '1', '"DGS"', 'true)'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsG2DLoadHooker";
tmpDef.description = "This function allows developers to load G2D hooker in script.";
tmpDef.returnType = "";
tmpDef.args = [''];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetRenderSetting";
tmpDef.description = "This function allows developers to change DGS render settings.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' string settingName', ' mixed value'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetRenderSetting";
tmpDef.description = "This function allows developers to get DGS render settings.";
tmpDef.returnType = "Returns the value of the setting.";
tmpDef.args = [' string settingName'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSimulateClick";
tmpDef.description = "This function simulates a click without mouse clicking.";
tmpDef.returnType = "Returns true if succeed, false otherwise";
tmpDef.args = [' element dgsElement', ' string button'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetRootElement";
tmpDef.description = "This function gets the resource root element of dgs, just like guiRoot.";
tmpDef.returnType = "";
tmpDef.args = [''];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsAddMoveHandler";
tmpDef.description = "This function can make dgs element movable like a window.";
tmpDef.returnType = "Returns true if succeed, false otherwise";
tmpDef.args = [' element dgsElement [', ' float x = 0', 'float y = 0', ' float width = 1', ' float height = 1', ' bool relativeX = true', ' bool relativeY = true', ' bool relativeW = true', ' bool relativeH = true ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRemoveMoveHandler";
tmpDef.description = "This function removes move handler from dgs element.";
tmpDef.returnType = "Returns true if succeed, false otherwise";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsIsMoveHandled";
tmpDef.description = "This function checks whether the move handler is added to the dgs element.";
tmpDef.returnType = "Returns true if the dgs element has already had a move handler, false otherwise";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsAddSizeHandler";
tmpDef.description = "This function can make dgs element sizable like a window.";
tmpDef.returnType = "Returns true if succeed, false otherwise";
tmpDef.args = [' element dgsElement [', ' float left = 0', 'float right = 0', ' float top = 0', ' float bottom = 0', ' bool relativeLeft = true', ' bool relativeRight = true', ' bool relativeTop = true', ' bool relativeBottom = true ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRemoveSizeHandler";
tmpDef.description = "This function removes size handler from dgs element.";
tmpDef.returnType = "Returns true if succeed, false otherwise";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsIsSizeHandled";
tmpDef.description = "This function checks whether the size handler is added to the dgs element.";
tmpDef.returnType = "Returns true if the dgs element has already had a size handler, false otherwise";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsAttachElements";
tmpDef.description = "Returns true if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement', ' element attachTo', ' int/float offsetX', ' int/float offsetY', ' int/float offsetW', ' int/float offsetH [', ' bool relativePos = false', ' bool relativeSize = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsDetachElements";
tmpDef.description = "Returns true if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsElementIsAttached";
tmpDef.description = "Returns true if is attached, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetMultiClickInterval";
tmpDef.description = "This function sets the interval among (n) times clicks.";
tmpDef.returnType = "Returns true if successful, false otherwise";
tmpDef.args = [' int interval'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetMultiClickInterval";
tmpDef.description = "This function gets the interval among (n) times clicks.";
tmpDef.returnType = "Returns a integer indicates the click interval (ms).";
tmpDef.args = [''];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCenterElement";
tmpDef.description = "NOTE: When using optional arguments, you might need to supply all arguments before the one you wish to use. For more information on optional arguments, see optional arguments.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement [', ' bool remainX', ' bool remainY ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsAttachToGridList";
tmpDef.description = "Returns true if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement', ' element gridList', ' int rowIndex', ' int columnIndex'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsDetachFromGridList";
tmpDef.description = "Returns true if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetCustomCursorEnabled";
tmpDef.description = "Returns true if successful, false otherwise";
tmpDef.returnType = "";
tmpDef.args = [' bool state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetCustomCursorEnabled";
tmpDef.description = "Returns true if custom cursor is enabled, false otherwise";
tmpDef.returnType = "";
tmpDef.args = [')'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetCustomCursorImage";
tmpDef.description = "Returns true if successful, false otherwise";
tmpDef.returnType = "";
tmpDef.args = [' [ string cursorType = nil', ' material image = nil', ' float rotation = 0.0', ' table rotationCenter = { 0', ' 0 }', ' table offset = { 0', ' 0 }', ' float scale = 0.0 ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetCustomCursorImage";
tmpDef.description = "Returns a material element if there is an image that is used in the specific cursor type, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' string cursorType'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetCustomCursorSize";
tmpDef.description = "Returns true if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' float size'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetCustomCursorSize";
tmpDef.description = "Returns a float indicates the size of the curstom cursor if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [''];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetCustomCursorType";
tmpDef.description = "Available cursor type are as follows:";
tmpDef.returnType = "Returns a string indicates the type of the curstom cursor if successful, false otherwise.";
tmpDef.args = [''];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetCustomCursorColor";
tmpDef.description = "Returns true if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' int color'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetCustomCursorColor";
tmpDef.description = "Returns an integer indicates the color of the curstom cursor if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [''];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsTranslationTableExists";
tmpDef.description = "This function checks whether translation table exists";
tmpDef.returnType = "Returns true if exists, false otherwise.";
tmpDef.args = [' string name'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetTranslationTable";
tmpDef.description = "This function sets translation table.";
tmpDef.returnType = "Returns true if succeed, false otherwise";
tmpDef.args = [' string name', ' table translationTable'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsAttachToTranslation";
tmpDef.description = "This function attaches a single dgs element to a specfic translation table.";
tmpDef.returnType = "Returns a string if succeed, false otherwise.";
tmpDef.args = [' element dgsElement', ' string name'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsDetachFromTranslation";
tmpDef.description = "This function detaches dgs element from translation table.";
tmpDef.returnType = "Returns a string if succeed, false otherwise.";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetAttachTranslation";
tmpDef.description = "This function allows following dgs element to attach to translation table when creating in the same resource.";
tmpDef.returnType = "";
tmpDef.args = [' string name'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetTranslationName";
tmpDef.description = "This function gets translation table name that the dgs element use.";
tmpDef.returnType = "Returns a string if succeed, false/nil otherwise";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsAnimTo";
tmpDef.description = "Change any property of dgs elements with animation effect.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element dgsElement', ' string propertyName', ' mixed value', ' string easing = "Linear"', ' int duration [', ' int delay = 0', ' function callBack = nil', ' bool reverseProgress = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsIsAniming";
tmpDef.description = "Returns a table with animation data if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsStopAniming";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMoveTo";
tmpDef.description = "Change position of dgs elements with animation effect.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element dgsElement', ' float x', ' float y', ' bool relative', ' bool movetype', ' string easing = "Linear"', ' float torvx [', ' float vy = torvx', ' int delay = 0', ' table settings ])'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsIsMoving";
tmpDef.description = "Returns a table with animation data if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsStopMoving";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSizeTo";
tmpDef.description = "Change size of dgs elements with animation effect.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element dgsElement', ' float w', ' float h', ' bool relative', ' bool movetype', ' string easing = "Linear"', ' float torvx [', ' float vy = torvx', ' int delay = 0', ' table settings ])'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsIsSizing";
tmpDef.description = "Returns a table with animation data if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsStopSizing";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsAlphaTo";
tmpDef.description = "Change alpha of dgs elements with animation effect.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element dgsElement', ' float targetAlpha', ' bool movetype', ' string easing = "Linear"', ' float torv [', ' int delay = 0', ' table settings ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsIsAlphaing";
tmpDef.description = "Returns a table with animation data if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsStopAlphaing";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsAddEasingFunction";
tmpDef.description = "Returns a true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' string name', ' string functionStr'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRemoveEasingFunction";
tmpDef.description = "Returns a true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' string name'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEasingFunctionExists";
tmpDef.description = "Returns a true if the easing function exists, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' string name'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreate3DInterface";
tmpDef.description = "Where the 3d interface faces to can be adjusted by normal vector.";
tmpDef.returnType = "Returns a 3d interface if it was successfully created, false otherwise.";
tmpDef.args = [' float x', ' float y', ' float z', ' float width', ' float height', ' int resolutionX', ' int resolutionY [', ' int color = 0xFFFFFFFF', ' float faceX = cameraX', ' float faceY = cameraY', ' float faceZ = cameraZ', ' float distance = 100', ' float rotation = 0 ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceGetBlendMode";
tmpDef.description = "Returns the current blend mode, which can be one of:";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceSetBlendMode";
tmpDef.description = "Returns true if successful, or false if invalid arguments were passed to the function.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement', ' string blendMode'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceSetDimension";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element interface3D', ' int dimension'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceGetDimension";
tmpDef.description = "Returns an int if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element interface3D'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceGetFaceTo";
tmpDef.description = "Returns 3 float and 1 string, indicates the x,y,z that DGS 3D interface faces to and the relativity option.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceSetFaceTo";
tmpDef.description = ">>>Note: If the DGS 3D interface is attached to an element, please use dgs3DInterfaceSetAttachedOffsets instead<<<";
tmpDef.returnType = "Returns true if successful, false otherwise";
tmpDef.args = [' element dgsElement [', ' float x', ' float y', ' float z', ' string relativeTo = "self" ] '];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceGetPosition";
tmpDef.description = "Returns x, y, z of the 3D interface in the world.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceSetPosition";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement', ' float x', ' float y', ' float z'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceGetResolution";
tmpDef.description = "Returns width and height of the render target of 3D interface.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceSetResolution";
tmpDef.description = ">>>Warning: Higher resolution takes more video memory!<<<";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element dgsElement', ' int width', ' int height'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceSetRotation";
tmpDef.description = "Returns true if successfully, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement', ' float rollRotation'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceGetRotation";
tmpDef.description = "Returns a float of the roll rotation of dgs 3d interface.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceGetSize";
tmpDef.description = "Returns width and height of the 3D interface in the world.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceSetSize";
tmpDef.description = "Returns true if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement', ' float width', ' float height'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceIsAttached";
tmpDef.description = "Returns true if it is attached, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceAttachToElement";
tmpDef.description = "Returns true if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement', ' element targetElement [', ' float offX = offX', ' float offY = offY', ' float offZ = offZ', ' float offFaceX = offFaceX', ' float offFaceY = offFaceY', ' float offFaceZ = offFaceZ ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceDetachFromElement";
tmpDef.description = "Returns true if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceSetAttachedOffsets";
tmpDef.description = "Returns true if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement [', ' float offX = offX', ' float offY = offY', ' float offZ = offZ', ' float offFaceX = offFaceX', ' float offFaceY = offFaceY', ' float offFaceZ = offFaceZ ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DInterfaceGetAttachedOffsets";
tmpDef.description = "This function gets the attached offsets of the attached dgs 3d interface.";
tmpDef.returnType = "Returns 6 floats indicates offset x,y,z and face to x,y,z if successful, false otherwise.";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreate3DLine";
tmpDef.description = "Returns a DGS 3D Line if it was successfully created, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float z [', ' float rx = 0', ' float ry = 0', ' float rz = 0', ' float color = 0xFFFFFFFF', ' float width = 1 ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreate3DImage";
tmpDef.description = "Returns a dgs-3dimage element if it was successfully created, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float z', ' string/texture/nil image[', ' int color = 0xFFFFFFFF', ' float scaleX = 1', ' float scaleY = 1', ' float maxDistance = 80 ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreate3DText";
tmpDef.description = "Returns a dgs-3dtext element if it was successfully created, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float z', ' string text [', ' int color = 0xFFFFFFFF', ' dx-font/string font = nil', ' float scaleX = 1', ' float scaleY = 1', ' float maxDistance = 80', ' bool = colorcoded = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DTextGetDimension";
tmpDef.description = "Returns an int if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element text3D'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DTextSetDimension";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element text3D', ' int dimension'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DTextGetInterior";
tmpDef.description = "Returns an int if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element text3D'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DTextSetInterior";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element text3D', ' int interior'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DTextSetPosition";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element text3D', ' float x', ' float y', ' float z'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DTextGetPosition";
tmpDef.description = "Returns a float if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element text3D'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DTextIsAttached";
tmpDef.description = "Returns true if the DGS 3D Text is attached, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element text3D'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DTextAttachToElement";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element text3D', ' element targetElement [', ' float offsetX = 0', ' float offsetY = 0', ' float offsetZ = 0 ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DTextDetachFromElement";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element text3D'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DTextSetAttachedOffsets";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element text3D [', ' float offsetX = 0', ' float offsetY = 0', ' float offsetZ = 0 ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgs3DTextGetAttachedOffsets";
tmpDef.description = "Returns 3 floats indicates the offsets(X,Y,Z) of the DGS 3D Text if the DGS 3D Text is attached, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element text3D'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateBrowser";
tmpDef.description = "All of the functions of browser are available.";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' bool relative [', ' element parent = nil', ' bool isLocal = false', ' bool isTransparent = false', ' float resolutionX = width', ' float resolutionY = height', ' int color = 0xFFFFFFFF ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateButton";
tmpDef.description = "Notice: This is a function exported by DGS!";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' string text', ' bool relative [', ' element parent = nil', ' int textColor = 0xFFFFFFFF', ' float scaleX = 1', ' float scaleY = 1', ' element normalImage = nil', ' element hoveringImage = nil', ' element clickedImage = nil', ' int normalColor = 0xC80078C8', ' int hoveringColor = 0xC8005AFF', ' int clickedColor = 0xC8325A]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateCheckBox";
tmpDef.description = "Note: DGS Dx Check Box have 3 states.(checked: true; unchecked: false; indeterminate: nil)";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' string text', ' bool selected', ' bool relative [', ' element parent = nil', ' int textColor', ' float scaleX = 1.0', ' float scaleY = 1.0', ' element normalUncheckedImage = nil', ' element hoveringUncheckedImage = nil', ' element clickedUnCheckedImage = nil', ' int normalUnCheckedColor = 0xFFFFFFFF', ' int hoveringUnCheckedColor = 0xFFFFFFFF', ' int clickedUnCheckedColor = 0xFFB4B4B4', ' element normalCheckedImage = nil', ' element  hoveringCheckedImage = nil', ' element clickedCheckedImage = nil', ' int normalCheckedColor = 0xFFFFFFFF', ' int hoveringCheckedColor = 0xFFFFFFFF', 'int clickedCheckedColor = 0xFFB4B4B4', ' element normalIndeterminateImage = nil', ' element  hoveringIndeterminateImage = nil', ' element clickedIndeterminateImage = nil', ' int normalIndeterminateColor = 0xFFFFFFFF', ' int hoveringIndeterminateColor = 0xFFFFFFFF', 'int clickedIndeterminateColor = 0xFFB4B4B4 ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCheckBoxGetSelected";
tmpDef.description = "This function gets a checkbox's selection state.";
tmpDef.returnType = "Returns true if the checkbox is selected, false if it is not.";
tmpDef.args = [' element theCheckbox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCheckBoxSetSelected";
tmpDef.description = "This function selects (ticks) or unselects a checkbox.";
tmpDef.returnType = "Returns true if the checkbox's selection state was successfully set, false otherwise.";
tmpDef.args = [' element theCheckbox', ' bool state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCheckBoxSetHorizontalAlign";
tmpDef.description = "This function sets the horizontal alignment of the text of a dgs check box.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element checkBox', ' string align'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCheckBoxGetHorizontalAlign";
tmpDef.description = "This function gets the horizontal alignment of a dgs check box. Valid alignment types are:";
tmpDef.returnType = "Returns a string if successful, false otherwise.";
tmpDef.args = [' element checkBox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCheckBoxSetVerticalAlign";
tmpDef.description = "This function sets the vertical alignment of the text of a dgs check box.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element checkBox', ' string align'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCheckBoxGetVerticalAlign";
tmpDef.description = "This function gets the vertical alignment of a dgs check box. Valid alignment types are:";
tmpDef.returnType = "Returns a string if successful, false otherwise.";
tmpDef.args = [' element checkBox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateComboBox";
tmpDef.description = "This function allows creation of a DGS ComboBox .";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' string caption', ' bool relative [', ' element parent = nil', ' element itemHeight = 20', ' int textColor = 0xFF000000', ' float scaleX = 1', ' float scaleY = 1', ' element normalImage = nil', ' element hoveringImage = nil', ' element clickedImage = nil', ' int normalColor = 0x0078C8C8', ' int hoveringColor = 0xC8005AFF', ' int clickedColor = 0xC8325AFA]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxAddItem";
tmpDef.description = "Adds an item to a combobox.";
tmpDef.returnType = "Returns the item ID if it has been created, false otherwise.";
tmpDef.args = [' element comboBox', ' string value'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxRemoveItem";
tmpDef.description = "This function removes an item from a dgs combobox.";
tmpDef.returnType = "Returns true if the item was removes successfully, false otherwise.";
tmpDef.args = [' element comboBox', ' int itemId'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxSetItemText";
tmpDef.description = "This function changes the text of a dgs combobox item.";
tmpDef.returnType = "Returns true if the text was set successfully, false otherwise.";
tmpDef.args = [' element comboBox', ' int itemId', ' string/number text'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxGetItemText";
tmpDef.description = "This function retrieves the text from a specific dgs combobox item.";
tmpDef.returnType = "Returns the text of the item if the arguments are right, false otherwise.";
tmpDef.args = [' element comboBox', ' int itemId'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxGetItemCount";
tmpDef.description = "Returns the number of items if the function is successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element comboBox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxClear";
tmpDef.description = "This function removes all the items from a dgs combobox.";
tmpDef.returnType = "Returns true if the dgs combobox element is valid and has been cleared successfully, false otherwise.";
tmpDef.args = [' element comboBox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxSetSelectedItem";
tmpDef.description = "This function sets the selected item from a dgs combobox.";
tmpDef.returnType = "Returns true if the selected item has been changed successfully, false otherwise.";
tmpDef.args = [' element comboBox', ' int itemIndex'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxGetSelectedItem";
tmpDef.description = "This function returns the index of the selected dgs combobox item.";
tmpDef.returnType = "Returns the index of the selected item if the specified dgs combobox is valid and has a selected item, -1 if no item is selected, false or nil otherwise.";
tmpDef.args = [' element comboBox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxSetItemColor";
tmpDef.description = "This function changes the color of a comboBox item.";
tmpDef.returnType = "Returns true if the item color was set successfully, false otherwise.";
tmpDef.args = [' element comboBox', ' int item', ' int color)'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxGetItemColor";
tmpDef.description = "This function get the color of a comboBox item.";
tmpDef.returnType = "Returns number if the item color was got successfully, false otherwise.";
tmpDef.args = [' element comboBox', ' int item'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxGetState";
tmpDef.description = "This function gets the state of combo box ( true:Drop Down; false:Take Back ).";
tmpDef.returnType = "Returns a bool if the state of combo box has been got successfully.";
tmpDef.args = [' element comboBox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxSetState";
tmpDef.description = "This function sets the state of combo box (true:Drop Down; false:Take Back).";
tmpDef.returnType = "Returns true if the state of combo box has been changed successfully, false otherwise.";
tmpDef.args = [' element comboBox', ' bool state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxGetBoxHeight";
tmpDef.description = "This function gets the height of the drop-down box of combo box.";
tmpDef.returnType = "Returns a float value if succeed, false otherwise.";
tmpDef.args = [' element comboBox', ' bool relative'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxSetBoxHeight";
tmpDef.description = "This function sets the height of the drop-down box of combo box.";
tmpDef.returnType = "Returns true if the height of drop-down menu box of combo box has been changed successfully, false otherwise.";
tmpDef.args = [' element comboBox', ' float height', ' bool relative'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxSetViewCount";
tmpDef.description = "This function sets how many items will be viewed on the drop-down box of combo box.";
tmpDef.returnType = "Returns true if view count of drop-down menu box of combo box has been changed successfully, false otherwise.";
tmpDef.args = [' element comboBox [', ' int viewCount ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxGetViewCount";
tmpDef.description = "This function gets the viewed items count of the drop-down box of combo box.";
tmpDef.returnType = "Returns the numbers of viewed items count if dgsComboBoxSetViewCount has been used, false otherwise.";
tmpDef.args = [' element comboBox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxGetScrollBar";
tmpDef.description = "This function gets the scroll bar of dgs combo box.";
tmpDef.returnType = "Returns a dgs-dxscrollbar if successful, false otherwise.";
tmpDef.args = [' element comboBox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxSetScrollPosition";
tmpDef.description = "This function set scroll position of dgs combo box.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element comboBox [', ' float vertical = nil ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxGetScrollPosition";
tmpDef.description = "This function get scroll position of dgs combo box.";
tmpDef.returnType = "Returns a float value indicate vertical scroll position, false otherwise";
tmpDef.args = [' element comboBox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxSetCaptionText";
tmpDef.description = "This function allows to change the caption of a DGS ComboBox.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element combobox', ' string captain'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxGetCaptionText";
tmpDef.description = "This function allows to get the caption of a DGS ComboBox.";
tmpDef.returnType = "Returns a string if succeed, false otherwise.";
tmpDef.args = [' element combobox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxSetEditEnabled";
tmpDef.description = "Returns true if successfully, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element comboBox', ' bool enabled'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxGetEditEnabled";
tmpDef.description = "Returns true if combo box field is editable, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element comboBox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsComboBoxGetText";
tmpDef.description = "This function gets the text from combo box.";
tmpDef.returnType = "Returns a string of the combo box, false otherwise.";
tmpDef.args = [' element comboBox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateCustomRenderer";
tmpDef.description = "Returns a dgs-dxcustomrenderer element if successfully, false otherwise";
tmpDef.returnType = "";
tmpDef.args = [' [ string renderFunction ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCustomRendererSetFunction";
tmpDef.description = "Returns true if successfully, false otherwise";
tmpDef.returnType = "";
tmpDef.args = [' element customRenderer', ' string renderFunction'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateEdit";
tmpDef.description = "This function is for creating a new DGS edit box.  This is a text box in which the user can input text. Edit boxes only allow a single line of text. If you want to allow multiple lines of text create a memo box using dgsCreateMemo.";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' string text', ' bool relative [', ' element parent = nil', ' int textColor = FF000000', ' float scaleX = 1', ' float scaleY = 1', 'element bgImage = nil', ' int bgColor = 0xFFC8C8C8', ' bool selectMode = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditMoveCaret";
tmpDef.description = "Returns true if the index was successfully set, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement', ' int indexoffset [', ' bool selectText = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditGetCaretPosition";
tmpDef.description = "Returns an integer indicating the index of the caret.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditSetCaretPosition";
tmpDef.description = "Returns true if the index was successfully set, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement', ' int index [', ' bool selectText = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditSetCaretStyle";
tmpDef.description = "This function is to set the caret style of dgs edit ( 0 is '|'; 1 is '_' ).";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement', ' int style'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditGetCaretStyle";
tmpDef.description = "This function is to get the caret style of dgs edit ( 0 is '|''; 1 is '_' ).";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditSetWhiteList";
tmpDef.description = "This function sets the white list of edit text. White List in edit means every character of the text should meet the requirement of the white list, or the characters will be cut.";
tmpDef.returnType = "Returns true if succeeded, false otherwise.";
tmpDef.args = [' element edit', ' string whitelist'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditGetMaxLength";
tmpDef.description = "Returns an integer if the max length was get successfully, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditSetMaxLength";
tmpDef.description = "Returns true if the max length was set successfully, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement', ' int length'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditSetMasked";
tmpDef.description = "This function sets or removes masking (covering up the text being typed) for password text fields.";
tmpDef.returnType = "Returns true if the function is successful, false otherwise.";
tmpDef.args = [' element theElement', ' bool status'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditGetMasked";
tmpDef.description = "This function get the state of edit box masking (covering up the text being typed).";
tmpDef.returnType = "Returns true if the edit box is masked, false if the edit box is not masked.";
tmpDef.args = [' element theElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditSetUnderlined";
tmpDef.description = "This function sets underline to edit text.";
tmpDef.returnType = "Returns true if successfully, false otherwise.";
tmpDef.args = [' element edit', ' bool state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditGetUnderlined";
tmpDef.description = "This function get whether the underline of edit is enabled or not.";
tmpDef.returnType = "Returns true if successfully, false otherwise.";
tmpDef.args = [' element edit'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditSetHorizontalAlign";
tmpDef.description = "This function sets the horizontal alignment of a dgs edit.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element theEdit', ' string align'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditSetVerticalAlign";
tmpDef.description = "This function sets the vertical alignment of a dgs edit.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element theEdit', ' string align'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditGetHorizontalAlign";
tmpDef.description = "This function gets the horizontal alignment of a dgs edit. Valid alignment types are:";
tmpDef.returnType = "Returns a string if successful, false otherwise.";
tmpDef.args = [' element theEdit'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditGetVerticalAlign";
tmpDef.description = "This function gets the vertical alignment of a dgs edit. Valid alignment types are:";
tmpDef.returnType = "Returns a string if successful, false otherwise.";
tmpDef.args = [' element theEdit'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditSetAlignment";
tmpDef.description = "This function sets both vertical and horizontal alignment of a dgs edit.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element theEdit [', ' string horizontalAlignment', ' string verticalAlignment ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditGetAlignment";
tmpDef.description = "This function gets both vertical and horizontal alignment of a dgs edit.";
tmpDef.returnType = "";
tmpDef.args = [' element theEdit'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditInsertText";
tmpDef.description = "Returns true if the text is inserted into the edit successfully, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement', ' int index', ' string text'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditDeleteText";
tmpDef.description = "Returns true if the text was successfully deleted, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement', ' int startIndex', ' int endIndex [', ' bool noAffectCaret = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditGetPartOfText";
tmpDef.description = "Returns a string of the selected text if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement [', ' int startIndex = 0', ' int endIndex', ' bool deleteText = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditClearText";
tmpDef.description = "Returns true if the text was successfully cleared, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditReplaceText";
tmpDef.description = "Returns true if the text was successfully replaced, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement', ' int startIndex', ' int endIndex', ' string text [', ' bool noAffectCaret = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditSetTypingSound";
tmpDef.description = "This function applies a typing sound to a dgs edit.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element dxEdit', ' string soundPath'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditGetTypingSound";
tmpDef.description = "This function gets the typing sound that has already been applied.";
tmpDef.returnType = "Returns a string if there is a typing sound applied, false otherwise.";
tmpDef.args = [' element dxEdit'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditSetPlaceHolder";
tmpDef.description = "This function sets the place holder of a dgs edit.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element theEdit', ' string placeHolder'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditGetPlaceHolder";
tmpDef.description = "This function gets the place holder of a dgs edit.";
tmpDef.returnType = "Returns a string if successful, false otherwise.";
tmpDef.args = [' element theEdit'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditAddAutoComplete";
tmpDef.description = "Returns true if successfully, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' bool editBox', ' string str [', ' bool isSensitive]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditRemoveAutoComplete";
tmpDef.description = "This function removes the specific auto complete string from the dgs edit.";
tmpDef.returnType = "Returns true if successfully, false otherwise.";
tmpDef.args = [' element edit', ' string autoCompleteText'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditSetAutoComplete";
tmpDef.description = "This function sets auto complete table to the dgs edit.";
tmpDef.returnType = "Returns true if successfully, false otherwise.";
tmpDef.args = [' element edit', ' table autoCompleteTable'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEditGetAutoComplete";
tmpDef.description = "This function gets auto complete table from the dgs edit.";
tmpDef.returnType = "Returns a table of the auto complete list, false otherwise.";
tmpDef.args = [' element edit'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateDetectArea";
tmpDef.description = "DGS Detect Area Tutorial: https://www.youtube.com/watch?v=9kxKI1epzWI";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' bool relative [', ' element parent = nil ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsDetectAreaSetFunction";
tmpDef.description = "For texture detecting function:";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element da', ' string/texture detectingFnc'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsDetectAreaSetDebugModeEnabled";
tmpDef.description = "For using non-texture based detecting function, it will generate the debug view itself.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element da', ' bool state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsDetectAreaGetDebugModeEnabled";
tmpDef.description = "Returns true if debug mode is enabled, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element da'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateGridList";
tmpDef.description = "This function creates a grid list DGS element.";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' bool relative [', ' element parent = nil', ' float columnHeight = 20', ' int bgColor = 0xFFD2D2D2', ' int columnTextColor = 0xFF000000', ' int columnColor = 0xFFDCDCDC', ' int normalRowColor = 0xFFC8C8C8', ' int hoveringRowColor = 0xFF969696', ' int selectedRowColor = 0xFF00ACF2', ' element bgImage = nil', ' element columnImage = nil', ' element normalRowImage = nil', ' element hoveringRowImage = nil', ' element selectedRowImage = nil]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListClear";
tmpDef.description = "This function clears all the data from a dgs grid list.";
tmpDef.returnType = "Returns true if the grid list element is valid and has been cleared successfully, false otherwise.";
tmpDef.args = [' element gridList [', ' bool clearRow = true', ' bool clearColumn = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetScrollBar";
tmpDef.description = "This function gets two scroll bars of dgs grid list.";
tmpDef.returnType = "Returns a table which includes two scroll bars if scroll bars are got successfully, false otherwise.";
tmpDef.args = [' element gridList'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetScrollPosition";
tmpDef.description = "This function set scroll position of dgs grid list.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element gridList[', ' float vertical = nil', ' float horizontal = nil ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetScrollPosition";
tmpDef.description = "This function get scroll position of dgs grid list.";
tmpDef.returnType = "Returns two float values indicate vertical and horizontal scroll position, false otherwise";
tmpDef.args = [' element gridList'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetHorizontalScrollPosition";
tmpDef.description = "OOP Syntax Help! I don't understand this!";
tmpDef.returnType = "Returns true if the horizontal scroll position was set, or false otherwise.";
tmpDef.args = [' element dgsGridList', ' float position'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetHorizontalScrollPosition";
tmpDef.description = "OOP Syntax Help! I don't understand this!";
tmpDef.returnType = "Returns a float indicating the horizontal scroll position, or false otherwise.";
tmpDef.args = [' element dgsGridList)'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetVerticalScrollPosition";
tmpDef.description = "Returns true if the vertical scroll position was set, or false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsGridList', ' float position'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetVerticalScrollPosition";
tmpDef.description = "OOP Syntax Help! I don't understand this!";
tmpDef.returnType = "Returns a float indicating the vertical scroll position, or false otherwise";
tmpDef.args = [' element dgsGridList'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListResetScrollBarPosition";
tmpDef.description = "This function reset the position of vertical and horizontal scroll bars.";
tmpDef.returnType = "Returns true if succeeded, false otherwise.";
tmpDef.args = [' element gridList [', ' bool remainVertical = false', ' bool remainHorizontal = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetColumnRelative";
tmpDef.description = "This function set whether the columns' length are relative .";
tmpDef.returnType = "Returns true if succeeded, false otherwise.";
tmpDef.args = [' element gridList [', ' bool relative = false', ' bool transformColumn = true ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetColumnRelative";
tmpDef.description = "This function get whether the columns' length are relative .";
tmpDef.returnType = "Returns true if the columns' length are relative, false otherwise.";
tmpDef.args = [' element gridList'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListAddColumn";
tmpDef.description = "This function is used to create columns in grid lists.";
tmpDef.returnType = "Returns the column id if it was created, false otherwise.";
tmpDef.args = [' element gridList', ' string title', ' float width [', ' int insertPosition = nil', ' string horizontalAlign = "left" ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListRemoveColumn";
tmpDef.description = "This allows you to delete columns that exist in grid lists.";
tmpDef.returnType = "Returns true if the dgs grid list column was successfully removed, false otherwise.";
tmpDef.args = [' element gridList', ' int columnIndex'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListClearColumn";
tmpDef.description = "This function clears all the column data from a dgs grid list and doesn't remove row.";
tmpDef.returnType = "Returns true if the grid list element is valid and its columns have been cleared successfully, false otherwise.";
tmpDef.args = [' element gridList', ' bool notResetSelectedItem', ' bool notResetScrollBar'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetColumnCount";
tmpDef.description = "This function returns the number of columns in a dgs grid list.";
tmpDef.returnType = "Returns the number of columns if the function is successful, false otherwise.";
tmpDef.args = [' element gridList'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetColumnAllWidth";
tmpDef.description = "Returns a float if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsGridlist', ' int columnIndex [', ' bool relative = false', ' bool fastFind = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetColumnHeight";
tmpDef.description = "Returns a integer if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsGridlist'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetColumnHeight";
tmpDef.description = "Returns true if successful, false otherwise";
tmpDef.returnType = "";
tmpDef.args = [' element dgsGridlist', ' int height'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetColumnWidth";
tmpDef.description = "Returns a float if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsGridlist', ' int columnIndex [', ' bool relative = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetColumnWidth";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsGridlist', ' int columnIndex', ' float/int width [', ' bool relative = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListAutoSizeColumn";
tmpDef.description = "This allows you to automatically size a column to display everything in it correctly, with the most minimal width.";
tmpDef.returnType = "Returns true if the column was auto-sized, false otherwise.";
tmpDef.args = [' element gridList', ' int columnIndex'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetColumnTitle";
tmpDef.description = "Returns a string containing the column title, or false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsGridlist', ' int columnIndex'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetColumnTitle";
tmpDef.description = "Returns true if the new title was set, or false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsGridlist', ' int columnIndex', ' string title'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetColumnFont";
tmpDef.description = "Returns a dx-font element or a string if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsGridlist', ' int columnIndex'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetColumnFont";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsGridlist', ' int columnIndex', ' dx-font/string font [', ' affectRow = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetSortColumn";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element gridlist', ' int sortedColumn'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetSortColumn";
tmpDef.description = "Returns an integer if exists, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element gridlist'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetEnterColumn";
tmpDef.description = "This function gets the column that the mouse hits from the specific grid list.";
tmpDef.returnType = "Returns the column id if the the mouse stays above the column, false otherwise.";
tmpDef.args = [' element gridList'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListAddRow";
tmpDef.description = "Returns the row id if it has been created, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element gridList [', 'int pos', ' int/string itemText1', ' int/string itemText2', ' ...]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListRemoveRow";
tmpDef.description = "This allows you to delete rows that exist in grid lists.";
tmpDef.returnType = "Returns true if the grid list row was successfully removed, false otherwise.";
tmpDef.args = [' element gridList', ' int rowIndex'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListClearRow";
tmpDef.description = "This function clears all the row data from a dgs grid list.";
tmpDef.returnType = "Returns true if the grid list element is valid and its rows have been cleared successfully, false otherwise.";
tmpDef.args = [' element gridList', ' bool notResetSelectedItem', ' bool notResetScrollBar'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetRowCount";
tmpDef.description = "This function returns the number of rows in a dgs grid list.";
tmpDef.returnType = "Returns the number of rows if the function is successful, false otherwise.";
tmpDef.args = [' element gridList'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetRowBackGroundImage";
tmpDef.description = "This function gets the row background image from the grid list.";
tmpDef.returnType = "Returns 3 textures if exist are imageDefault, imageHoving, imageSelected correspondingly if get successfully, false if one of the arguments was invalid.";
tmpDef.args = [' element gridList', ' int rowIndex'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetRowBackGroundImage";
tmpDef.description = "This function sets the row background texture of the grid list.";
tmpDef.returnType = "Returns true if set successfully, false if one of the arguments was invalid.";
tmpDef.args = [' element gridList', ' int rowIndex', ' texture imageDefault', ' texture imageHoving', ' texture imageSelected'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetRowBackGroundColor";
tmpDef.description = "This function sets the row background color of the grid list.";
tmpDef.returnType = "Returns true if set successfully, false if one of the arguments was invalid.";
tmpDef.args = [' element gridList', ' int rowIndex', ' int colorDefault', ' int colorHoving', ' int colorSelected'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetRowBackGroundColor";
tmpDef.description = "This function gets the row background color from the grid list.";
tmpDef.returnType = "Returns 3 integer are colorDefault, colorHoving, colorSelected correspondingly if get successfully, false if one of the arguments was invalid.";
tmpDef.args = [' element gridList', ' int rowIndex'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetRowAsSection";
tmpDef.description = "This function sets whether the row is section.";
tmpDef.returnType = "Returns true if succeed, false otherwise";
tmpDef.args = [' element gridlist', ' int row [', ' bool enable = false', ' bool enableClickAndSelect = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetRowSelectable";
tmpDef.description = "This function gets whether the row is selectable.";
tmpDef.returnType = "Returns true if the row is selected, false otherwise";
tmpDef.args = [' element gridlist', ' int row'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetRowSelectable";
tmpDef.description = "This function sets whether the row is selectable, which has higer priority than dgsGridListSetItemSelectable.";
tmpDef.returnType = "Returns true if successful, false otherwise";
tmpDef.args = [' element gridlist', ' int row', ' boolean state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetRowHoverable";
tmpDef.description = "This function returns whether the row is hoverable.";
tmpDef.returnType = "Returns true if the row is hoverable, false otherwise.";
tmpDef.args = [' element gridlist', ' int row'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetRowHoverable";
tmpDef.description = "This function sets whether the row is hoverable, which has higer priority than dgsGridListSetItemHoverable.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element gridlist', ' int row', ' boolean state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetItemColor";
tmpDef.description = "This function changes the color of a gridlist item.";
tmpDef.returnType = "Returns true if the item color was set successfully, false otherwise.";
tmpDef.args = [' element gridList', ' int rowIndex', ' int columnIndex', ' int/table color'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetItemColor";
tmpDef.description = "This function get the color of a gridlist item.";
tmpDef.returnType = "Returns an integer of the color value if the item color was get successfully, and if notSplitColor sets to true, returns four int values representing the amount of red, green, blue and alpha , false otherwise.";
tmpDef.args = [' element gridList', ' int rowIndex', ' int columnIndex [', ' bool notSplitColor = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetItemText";
tmpDef.description = "This function changes the text of a gridlist item.";
tmpDef.returnType = "Returns true if the item text was set successfully, false otherwise.";
tmpDef.args = [' element gridList', ' int rowIndex', ' int columnIndex', ' string text [', ' bool isSection ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetItemText";
tmpDef.description = "This function retrieves the text from a specific grid list item.";
tmpDef.returnType = "Returns the text of the item if the arguments are right, false otherwise.";
tmpDef.args = [' element gridList', ' int rowIndex', ' int columnIndex'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetItemData";
tmpDef.description = "This function sets a Item Data associated to a grid list item.";
tmpDef.returnType = "Returns true if set successfully, false if one of the arguments was invalid.";
tmpDef.args = [' element gridList', ' int rowIndex', ' int columnIndex', ' var data'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetItemData";
tmpDef.description = "With this function you can retrieve the string data associated with an item in a dgs grid list. This is not the text that is displayed on the item, but an internal string that you can use to hold extra information about the item.";
tmpDef.returnType = "Returns the item data of the specified item if successful, false if one of the arguments was invalid.";
tmpDef.args = [' element gridList', ' int rowIndex', ' int columnIndex'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetItemImage";
tmpDef.description = "This function sets the image on a grid list item.";
tmpDef.returnType = "Returns true if set successfully, false if one of the arguments was invalid.";
tmpDef.args = [' element gridList', ' int rowIndex', ' int columnIndex', ' element texture [', ' int color = 0xFFFFFFFF', ' float offsetX = 0', ' float offsetY = 0', ' float width', ' float height', ' bool relative ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetItemImage";
tmpDef.description = "This function gets the image from a grid list item.";
tmpDef.returnType = "Returns texture, Color, PosX, PosY, Width, Height if success , false otherwise.";
tmpDef.args = [' element gridList', ' int rowIndex', ' int columnIndex'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListRemoveItemImage";
tmpDef.description = "This function remove the image from the grid list item.";
tmpDef.returnType = "Returns true if set successfully, false if one of the arguments was invalid.";
tmpDef.args = [' element gridList', ' int rowIndex', ' int columnIndex'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSelectItem";
tmpDef.description = "This function is used to select single item by state.";
tmpDef.returnType = "Returns true if succeeded, false otherwise.";
tmpDef.args = [' element gridList', ' int row', ' int column', ' bool state '];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListItemIsSelected";
tmpDef.description = "This function returns a bool value indicates whether the item is selected.(Different from dgsGridListGetSelectedItem, this function is always used in multi-selecting mode)";
tmpDef.returnType = "Returns true if specific item is selected, false otherwise.";
tmpDef.args = [' element gridList', ' int row', ' int column'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetSelectedCount";
tmpDef.description = "This function returns the amount of options selected in the specified dgs grid list.";
tmpDef.returnType = "Returns an integer representing the amount of selected options if everything was successful or false if invalid arguments were passed.";
tmpDef.args = [' element gridList [', ' int inRow = -1', ' int inColumn = -1 ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetSelectedItem";
tmpDef.description = "This function returns the row and colum indexes of the selected item in a grid list.";
tmpDef.returnType = "Returns the row of the selected item if the specified grid list is valid and has a selected item, (-1) if no item is selected, false otherwise.";
tmpDef.args = [' element gridList'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetSelectedItem";
tmpDef.description = "This function selects an item from a grid list.";
tmpDef.returnType = "Returns true if succeeded, false otherwise.";
tmpDef.args = [' element gridList', ' int rowID'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetSelectedItems";
tmpDef.description = "This function returns the items selected in the specified dgs grid list.";
tmpDef.returnType = "";
tmpDef.args = [' element gridList'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetSelectedItems";
tmpDef.description = "This function selects multipile items in the specific dgs grid list.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element gridList ', ' table items'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetItemSelectable";
tmpDef.description = "This function gets whether the item is selectable.";
tmpDef.returnType = "Returns true if the item is selected, false otherwise";
tmpDef.args = [' element gridlist', ' int row', ' int column'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetItemSelectable";
tmpDef.description = "This function sets whether the item is selectable, which has a lower priority than dgsGridListSetRowSelectable.";
tmpDef.returnType = "Returns true if successful, false otherwise";
tmpDef.args = [' element gridlist', ' int row', ' int column', ' boolean state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetItemHoverable";
tmpDef.description = "This function returns whether the item is hoverable.";
tmpDef.returnType = "Returns true if the column is hoverable, false otherwise.";
tmpDef.args = [' element gridlist', ' int row', ' int column'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetItemHoverable";
tmpDef.description = "This function sets whether the item is hoverable, which has a lower priority than dgsGridListSetRowHoverable.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element gridlist', ' int row', ' int column', ' boolean state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetSelectionMode";
tmpDef.description = "Returns true if the selection mode was successfully set, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element gridlist', ' int mode'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetSelectionMode";
tmpDef.description = "Returns an int if the selection mode was successfully set, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element gridlist'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetNavigationEnabled";
tmpDef.description = "This function set the state of navigation of dgs grid list.";
tmpDef.returnType = "";
tmpDef.args = [' element gridList', ' bool state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetNavigationEnabled";
tmpDef.description = "This function get the state of navigation of dgs grid list.";
tmpDef.returnType = "";
tmpDef.args = [' element gridList'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetMultiSelectionEnabled";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element gridlist', ' bool state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetMultiSelectionEnabled";
tmpDef.description = "Returns a bool value indicates whether the multi-selecting mode is enabled, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element gridlist'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetAutoSortEnabled";
tmpDef.description = "Auto Sorting means when the grid list have target sorting column and sorting function, grid list will start do sorting at the next frame.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element gridlist', ' bool state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetAutoSortEnabled";
tmpDef.description = "Auto Sorting means when the grid list have target sorting column and sorting function, grid list will start do sorting at the next frame.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element gridlist'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetSortFunction";
tmpDef.description = "Returns true if sorting function set and loaded successfully, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' dgsElement gridlist', ' string func'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSetSortEnabled";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element gridlist', ' bool state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListGetSortEnabled";
tmpDef.description = "Returns true if sort enabled, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element gridlist'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGridListSort";
tmpDef.description = "Returns true if succeed in carrying out sorting, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' delement gridlist'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateImage";
tmpDef.description = "Note:";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' element/string image = nil', ' bool relative [', ' element parent = nil', ' int color = 0xFFFFFFFF ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsImageSetImage";
tmpDef.description = "This function allows you to change the image in DGS image element to another one.";
tmpDef.returnType = "Returns true if the the image in the image element was successfully changed, false otherwise.";
tmpDef.args = [' element theElement', ' element/string texture'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsImageGetImage";
tmpDef.description = "This function allows you to get the image from dgs image element.";
tmpDef.returnType = "Returns a texture element if there is an image loaded, false otherwise.";
tmpDef.args = [' element theElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsImageSetUVSize";
tmpDef.description = "This function sets the UV size of a DGS image (Only available when there is a texture loaded in DGS image).";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element theElement', ' float UPos', ' float VPos', ' bool relative'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsImageGetUVSize";
tmpDef.description = "This function gets the UV size of a DGS image (Only available when there is a texture loaded in DGS image).";
tmpDef.returnType = "Returns the DGS image size U and V if the function has been successful, false otherwise.";
tmpDef.args = [' element theElement', ' bool relative'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsImageSetUVPosition";
tmpDef.description = "Returns true if succeed, false otherwise";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement', ' float UPos', ' float VPos', ' bool relative'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsImageGetUVPosition";
tmpDef.description = "Returns floats representing the U and V position of the image, or false if the position could not be retrieved.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement', ' bool relative'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateMemo";
tmpDef.description = "NOTE: When using optional arguments, you might need to supply all arguments before the one you wish to use. For more information on optional arguments, see optional arguments.";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' string text', ' bool relative [', ' element parent = nil', ' int textColor = 0x000000FF', ' int scaleX = 1', ' int scaleY = 1', ' element bgImage = nil', ' int bgColor = 0xFFFFFFFF ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoMoveCaret";
tmpDef.description = "Returns true if the index was successfully set, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement', ' int indexoffset [', ' int lineoffset = 0', ' bool selectText = false', ' bool noChangeLine = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoSeekPosition";
tmpDef.description = "This function transform the position (index and line) correctly of the text in memo.";
tmpDef.returnType = "";
tmpDef.args = [' element dxMemo', ' int index', ' int line [', ' bool transformLine = true ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoGetScrollBar";
tmpDef.description = "This function gets two scroll bars of dgs memo.";
tmpDef.returnType = "Returns a table which includes two scroll bars if scroll bars are got successfully, false otherwise.";
tmpDef.args = [' element memo'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoSetScrollPosition";
tmpDef.description = "This function set scroll position of dgs memo.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element memo [', ' float vertical = nil', ' float horizontal = nil ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoGetScrollPosition";
tmpDef.description = "This function get scroll position of dgs memo.";
tmpDef.returnType = "Returns two float values indicate vertical and horizontal scroll position, false otherwise";
tmpDef.args = [' element memo '];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoSetHorizontalScrollPosition";
tmpDef.description = "OOP Syntax Help! I don't understand this!";
tmpDef.returnType = "Returns true if the horizontal scroll position was set, or false otherwise.";
tmpDef.args = [' element dgsMemo', ' float position'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoGetHorizontalScrollPosition";
tmpDef.description = "OOP Syntax Help! I don't understand this!";
tmpDef.returnType = "Returns a float ranging between 0 and 100, or false otherwise.";
tmpDef.args = [' element dgsMemo'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoSetVerticalScrollPosition";
tmpDef.description = "OOP Syntax Help! I don't understand this!";
tmpDef.returnType = "Returns true if the vertical scroll position was set, or false otherwise.";
tmpDef.args = [' element dgsMemo', ' float position'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoGetVerticalScrollPosition";
tmpDef.description = "Returns a float ranging between 0 and 100, or false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsMemo'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoSetCaretPosition";
tmpDef.description = "This function sets the current position of the caret (the text cursor) within the memo.";
tmpDef.returnType = "Returns true if the index was successfully set, false otherwise.";
tmpDef.args = [' element theElement', ' int index [', ' int line = 0', ' bool selectText = false', ' bool noChangeLine = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoGetCaretPosition";
tmpDef.description = "Returns two integers indicating the position of the caret, index and line respectively.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoSetCaretStyle";
tmpDef.description = "This function is to set the caret style of dgs memo ( 0 is '|'; 1 is '_' ).";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement', ' int style'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoGetCaretStyle";
tmpDef.description = "This function is to get the caret style of dgs memo ( 0 is '|'; 1 is '_' ).";
tmpDef.returnType = "";
tmpDef.args = [' element dgsElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoGetPartOfText";
tmpDef.description = "Returns a string of the selected text if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement [', ' int startIndex = 0', ' int startLine = 1', ' int endIndex', ' int endLine', ' bool deleteText = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoAppendText";
tmpDef.description = "Returns true if the text is appended successfully, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element memo', ' string text'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoDeleteText";
tmpDef.description = "Returns true if the text was successfully deleted, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement', ' int fromindex', ' int fromline', ' int toindex', ' int toline [', ' bool noAffectCaret = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoInsertText";
tmpDef.description = "Returns true if the text is inserted into the memo successfully, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement', ' int index', ' int line', ' string text'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoClearText";
tmpDef.description = "Returns true if the text was successfully cleared, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoGetTextBoundingBox";
tmpDef.description = "This function gets the bounding box of the text inside DGS Memo.";
tmpDef.returnType = "Returns two floats represent for width and height in absolute size of the text bounding box if succeed, false otherwise.";
tmpDef.args = [' element dgsMemo', ' bool excludePadding'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoSetTypingSound";
tmpDef.description = "This function applies a typing sound to a dgs memo.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element dxMemo', ' string soundPath'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoGetTypingSound";
tmpDef.description = "This function gets the typing sound that has already been applied.";
tmpDef.returnType = "Returns a string if there is a typing sound applied, false otherwise.";
tmpDef.args = [' element dxMemo'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoGetLineCount";
tmpDef.description = "This function gets how many lines in the dgs memo";
tmpDef.returnType = "Returns an integer if succeed, false otherwise.";
tmpDef.args = [' element memo [', ' bool forceStrongLine = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoSetWordWrapState";
tmpDef.description = "This function sets the word wrap state of dgs memo";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element memo', ' int/bool state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoGetWordWrapState";
tmpDef.description = "This function gets the word wrap state of dgs memo";
tmpDef.returnType = "Returns 1 indicates being splited by characters, 2 indicates being splited by words if succeed, false otherwise.";
tmpDef.args = [' element memo'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoSetScrollBarState";
tmpDef.description = "This function force the scroll bar of the memo to be enabled/disabled.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element memo [', ' bool/nil verticalState = nil', ' bool/nil horizontalState = nil ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoGetScrollBarState";
tmpDef.description = "This function get the force state of the scroll bar of the memo";
tmpDef.returnType = "Returns two bool/nil indicate the state of scroll bar of the memo.";
tmpDef.args = [' element memo'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoSetMaxLength";
tmpDef.description = "Returns true if the max length was set successfully, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement', ' int length'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMemoGetMaxLength";
tmpDef.description = "Returns an integer if the max length was get successfully, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateLabel";
tmpDef.description = "This function is for creating a new DGS label.  A label is simply a piece of text that cannot be edited by the user.";
tmpDef.returnType = "";
tmpDef.args = ['label', '"textSize"', '{scaleX', 'scaleY})'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsLabelSetColor";
tmpDef.description = "This function allows you to set the color of a DGS label.";
tmpDef.returnType = "Returns true if the the color of the dgs label was successfully changed, false otherwise.";
tmpDef.args = [' element theElement', ' int red', ' int green', ' int blue', ' int alpha'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsLabelGetColor";
tmpDef.description = "This function gets the color of a label.";
tmpDef.returnType = "If argument 'notSplit' passed is true, returns one int value, representing the color of the label if successful. false otherwise.";
tmpDef.args = [' element theLabel [', ' bool notSplit = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsLabelSetHorizontalAlign";
tmpDef.description = "This function sets the horizontal alignment of a dgs text label.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element theLabel', ' string align [', ' bool wordwrap = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsLabelGetHorizontalAlign";
tmpDef.description = "This function gets the horizontal alignment of a dgs text label. Valid alignment types are:";
tmpDef.returnType = "Returns a string if successful, false otherwise.";
tmpDef.args = [' element theLabel'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsLabelSetVerticalAlign";
tmpDef.description = "This function sets the vertical alignment of a dgs text label.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element theLabel', ' string align'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsLabelGetVerticalAlign";
tmpDef.description = "This function gets the vertical alignment of a dgs text label. Valid alignment types are:";
tmpDef.returnType = "Returns a string if successful, false otherwise.";
tmpDef.args = [' element theLabel'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsLabelGetTextExtent";
tmpDef.description = "This function returns the extent, or width, of the current text inside a DGS text label.";
tmpDef.returnType = "Returns the absolute width of the current text inside the text label if the function is successful, false otherwise.";
tmpDef.args = [' element theLabel'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsLabelGetFontHeight";
tmpDef.description = "This function returns the height of the font currently used in a DGS text label.";
tmpDef.returnType = "Returns the absolute height of the font currently used in the text label if the function is successful, false otherwise.";
tmpDef.args = [' element theLabel'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateProgressBar";
tmpDef.description = "This function creates a progress bar.";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' bool relative [', ' element parent = nil', ' texture bgImage = nil', ' int bgColor = nil', ' texture indicatorImage = nil', ' int indicatorColor = nil', ' bool indicatorMode = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsProgressBarGetProgress";
tmpDef.description = "This function gets the progress of a progress bar as a percentage.";
tmpDef.returnType = "Returns a float ranging between 0 and 100.";
tmpDef.args = [' progressBar theProgressbar'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsProgressBarSetProgress";
tmpDef.description = "This function sets the progress of a progress bar as a percentage.";
tmpDef.returnType = "Returns true if the progress was set, false otherwise.";
tmpDef.args = [' progressBar theProgressbar', ' float progress'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsProgressBarGetMode";
tmpDef.description = "This function gets bar image showing mode.";
tmpDef.returnType = "Returns true if the mode state is true, false otherwise.";
tmpDef.args = [' element progressBar'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsProgressBarSetMode";
tmpDef.description = "This function sets bar image showing mode.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element progressBar', ' bool mode'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsProgressBarGetStyle";
tmpDef.description = "This function get style name from a progress bar.";
tmpDef.returnType = "Returns a string indicates the style name of the progress bar if successfully, false otherwise.";
tmpDef.args = [' element progressbar'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsProgressBarSetStyle";
tmpDef.description = "This function changes the style of a dgs progress bar.";
tmpDef.returnType = "";
tmpDef.args = [' element progressbar', ' string style [', ' table settingTable ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsProgressBarGetStyleProperty";
tmpDef.description = "This function returna property name from a progress bar.";
tmpDef.returnType = "Returns a the value of the style property of the progress bar if successfully, false otherwise.";
tmpDef.args = [' element progressbar', ' string propertyName)'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsProgressBarGetStyleProperties";
tmpDef.description = "This function returns properies from a progress bar.";
tmpDef.returnType = "";
tmpDef.args = [' element progressbar)'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsProgressBarSetStyleProperty";
tmpDef.description = "This function sets the style property of a progress bar.";
tmpDef.returnType = "";
tmpDef.args = [' element progressbar', ' string propertyName', ' mixed value'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateRadioButton";
tmpDef.description = "This function creates a radio button.";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' string text', ' bool relative [', ' element parent = nil', ' int textcolor', ' float scaleX = 1.0', ' float scaleY = 1.0', ' element normalUncheckedImage = nil', ' element hoveringUncheckedImage = nil', ' element clickedUnCheckedImage = nil', ' int normalUnCheckedColor = 0xFFFFFFFF', ' int hoveringUnCheckedColor = 0xFFFFFFFF', ' int clickedUnCheckedColor = 0xFFB4B4B4', ' element normalCheckedImage = nil', ' element  hoveringCheckedImage = nil', ' element clickedCheckedImage = nil', ' int normalCheckedColor = 0xFFFFFFFF', ' int hoveringCheckedColor = 0xFFFFFFFF', 'int clickedCheckedColor = 0xFFB4B4B4 ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRadioButtonGetSelected";
tmpDef.description = "This function gets a radio button's selection state.";
tmpDef.returnType = "Returns true if the radio button is selected, false if it is not.";
tmpDef.args = [' element RadioButton)'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRadioButtonSetSelected";
tmpDef.description = "This function selects or unselects a radio button.";
tmpDef.returnType = "Returns true if the radio button's selection state was successfully set, false otherwise.";
tmpDef.args = [' element RadioButton', ' bool state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRadioButtonSetHorizontalAlign";
tmpDef.description = "This function sets the horizontal alignment of the text of a dgs radio button.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element radioButton', ' string align'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRadioButtonGetHorizontalAlign";
tmpDef.description = "This function gets the horizontal alignment of a dgs radio button. Valid alignment types are:";
tmpDef.returnType = "Returns a string if successful, false otherwise.";
tmpDef.args = [' element radioButton'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRadioButtonSetVerticalAlign";
tmpDef.description = "This function sets the vertical alignment of the text of a dgs radio button.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element radioButton', ' string align'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRadioButtonGetVerticalAlign";
tmpDef.description = "This function gets the vertical alignment of a dgs radio button. Valid alignment types are:";
tmpDef.returnType = "Returns a string if successful, false otherwise.";
tmpDef.args = [' element radioButton'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateScrollBar";
tmpDef.description = "This function allows creation of a DGS Scroll Bar.";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' bool isHorizontal', ' bool relative [', ' element parent = nil', ' element arrowImage = nil', ' element troughImage = nil', ' element cursorImage = nil', ' int normalArrowColor = 0xAARRGGBB ', ' int hoveringArrowColor = 0xAARRGGBB', ' int clickedArrowColor = 0xAARRGGBB', ' int troughColor = 0xAARRGGBB', ' int normalCursorColor = 0xAARRGGBB', ' int hoveringCursorColor = 0xAARRGGBB', ' int clickedCursorColor = 0xAARRGGBB ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollBarSetScrollPosition";
tmpDef.description = "Returns true if the scroll position was successfully set, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theScrollBar', ' float amount [', ' bool isGrade = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollBarGetScrollPosition";
tmpDef.description = "Returns a float ranging between 0 and 100 when isGrade is  false, representing the amount the dgs scrollbar has been scrolled.";
tmpDef.returnType = "";
tmpDef.args = [' element theScrollBar [', ' bool isGrade = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollBarGetCursorLength";
tmpDef.description = "Returns an int or a float indicates the length of the cursor of the scroll bar, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element scrollBar [', ' bool relative ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollBarSetGrades";
tmpDef.description = "This example move scroll bar by 40";
tmpDef.returnType = "";
tmpDef.args = [' element scrollBar', ' int grades [', ' bool remainMultipler = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollBarGetGrades";
tmpDef.description = "Returns an int indicates the grade of the cursor of the scroll bar, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element scrollBar'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollBarSetLocked";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theScrollBar', ' bool state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollBarGetLocked";
tmpDef.description = "Returns true if the scroll bar is locked, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element theScrollBar'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollBarSetCursorWidth";
tmpDef.description = "Returns true if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element scrollBar', ' float width [', ' bool relative ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateScrollPane";
tmpDef.description = "This creates a DGS scroll pane.";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' bool relative [', ' element parent = nil ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollPaneGetScrollBar";
tmpDef.description = "This function gets two scroll bars of dgs scroll pane.";
tmpDef.returnType = "Returns a table which includes two scroll bars {vertical,horizontal} if scroll bars are got successfully, false otherwise.";
tmpDef.args = [' element scrollPane'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollPaneSetScrollPosition";
tmpDef.description = "This function set scroll position of dgs scroll pane.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element scrollPane[', ' float vertical = nil', ' float horizontal = nil ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollPaneGetScrollPosition";
tmpDef.description = "This function get scroll position of dgs scroll pane.";
tmpDef.returnType = "Returns two float values indicate vertical and horizontal scroll position, false otherwise";
tmpDef.args = [' element scrollPane'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollPaneSetHorizontalScrollPosition";
tmpDef.description = "Returns true if the position was set, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsScrollPane', ' float position'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollPaneGetHorizontalScrollPosition";
tmpDef.description = "Returns a float ranging between 0 and 100, or false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsScrollPane'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollPaneSetVerticalScrollPosition";
tmpDef.description = "Returns true if the position was set, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsScrollPane', ' float position'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollPaneGetVerticalScrollPosition";
tmpDef.description = "Returns a float ranging between 0 and 100, or false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element dgsScrollPane'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollPaneSetScrollBarState";
tmpDef.description = "This function force the scroll bar of the scroll pane to be enabled/disabled.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element scrollPane [', ' bool/nil verticalState = nil', ' bool/nil horizontalState = nil ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsScrollPaneGetScrollBarState";
tmpDef.description = "This function get the force state of the scroll bar of the scroll pane";
tmpDef.returnType = "Returns two bool/nil indicate the state of scroll bar of the scroll pane.";
tmpDef.args = [' element scrollPane'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateSelector";
tmpDef.description = "This function allows creation of a DGS Selector.";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' bool relative [', ' element parent = nil', ' int textColor = 0xFFFFFFFF', ' float scaleX = 1', ' float scaleY = 1', ' float shadowOffsetX = nil', ' float shadowOffsetY = nil', ' int shadowColor = nil ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSelectorAddItem";
tmpDef.description = "Adds an item to a selector.";
tmpDef.returnType = "Returns the item ID if it has been created, false otherwise.";
tmpDef.args = [' element selector [', ' string text ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSelectorRemoveItem";
tmpDef.description = "This function removes the selected item from a dgs selector.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element selector', ' int item'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSelectorSetSelectedItem";
tmpDef.description = "This function sets the selected item from a dgs selector.";
tmpDef.returnType = "Returns true if the selected item has been changed successfully, false otherwise.";
tmpDef.args = [' element selector', ' int item'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSelectorGetSelectedItem";
tmpDef.description = "This function returns the index of the selected dgs selector item.";
tmpDef.returnType = "Returns the index of the selected item if the specified dgs selector is valid and has a selected item, -1 if no item is selected, false or nil otherwise.";
tmpDef.args = [' element selector'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSelectorGetItemText";
tmpDef.description = "This function retrieves the text from a specific selector item.";
tmpDef.returnType = "Returns the text of the item if the arguments are correct, false otherwise.";
tmpDef.args = [' element selector', ' int item'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSelectorSetItemText";
tmpDef.description = "This function changes the text of a dgs selector item.";
tmpDef.returnType = "Returns true if the text was set successfully, false otherwise.";
tmpDef.args = [' element selector', ' int itemId', ' string/number text'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateSwitchButton";
tmpDef.description = "NOTE: When using optional arguments, you might need to supply all arguments before the one you wish to use. For more information on optional arguments, see optional arguments.";
tmpDef.returnType = "Returns an element of the created Switch Button if it was successfully created, false otherwise.";
tmpDef.args = [' float x', ' float y', ' float width', ' float height [', ' string textOn = ""', ' string textOff = ""', ' bool state = false', ' bool relative = false', ' element parent = nil', ' int textColorOn = 0x5AA0E6FF', ' int textColorOff = 0x3C3C3CFF', ' float scaleX = 1', ' float scaleY = 1 ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSwitchButtonGetState";
tmpDef.description = "This function gets the state of switch button.";
tmpDef.returnType = "";
tmpDef.args = [' element switchButton'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSwitchButtonSetState";
tmpDef.description = "This function sets the state of switch button.";
tmpDef.returnType = "Returns true if the state of switch button has been changed successfully, false otherwise.";
tmpDef.args = [' element switchButton', ' bool state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSwitchButtonSetText";
tmpDef.description = "This function sets the text of switch button.";
tmpDef.returnType = "Returns true if text has been changed successfully, false otherwise.";
tmpDef.args = [' element switchbutton', ' string textOn', ' string textOff'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSwitchButtonGetText";
tmpDef.description = "This function gets the text of switch button.";
tmpDef.returnType = "Returns two string indicate the text of ON and OFF of the Switch Button.";
tmpDef.args = [' element switchButton'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateTabPanel";
tmpDef.description = "This function allows creation of a DGS Tab Panel.";
tmpDef.returnType = "";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' bool relative [', ' element parent = nil', ' int tabHeight = 20', ' element bgImage = nil', ' int bgColor = 0xB4000000 ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateTab";
tmpDef.description = "Returns a dgs-dxtab element if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' string text', ' element parent [', 'int scaleX = 1', ' int scaleY = 1', ' int textColor = 0xFFFFFFFF', ' element bgImage = nil', ' int bgColor = 0x000000C8', ' element normalImage = nil', ' element hoveringImage = nil', ' element clickedImage = nil', ' int normalColor = 282828B4', ' int hoveringColor = 0x505050BE', ' int clickedColor = 0X000000C8])'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetSelectedTab";
tmpDef.description = "This function returns the currently selected tab in the specified dgs tab panel.";
tmpDef.returnType = "Returns a dgsElement of the dgs-dxtab if a tab was selected or nil if no tab was selected. If passed arguments were invalid or something went wrong, the function will return false.";
tmpDef.args = [' dgsElement tabPanel'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsSetSelectedTab";
tmpDef.description = "This function is used to change the currently selected tab in the specified dgs tab panel.";
tmpDef.returnType = "Returns true if the selected tab was changed to a new one successfully, false otherwise.";
tmpDef.args = [' dgsElement tabPanel', ' dgsElement tab'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsTabPanelGetTabFromID";
tmpDef.description = "Returns a dgs-dxtab if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element tabpanel', ' int ID'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsTabPanelMoveTab";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element tabpanel', ' int from', ' int to'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsTabPanelGetTabID";
tmpDef.description = "Returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element tab'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsDeleteTab";
tmpDef.description = "Returns true the tab was successfully deleted, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element tabToDelete'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateWindow";
tmpDef.description = "NOTE: When using optional arguments, you might need to supply all arguments before the one you wish to use. For more information on optional arguments, see optional arguments.";
tmpDef.returnType = "Returns a dgs window element if it was created successfully, false otherwise.";
tmpDef.args = [' float x', ' float y', ' float width', ' float height', ' string text', ' bool relative[', ' int textColor = 0xFFFFFFFF', ' float titleHeight = 25', ' element titleImage = nil', ' int titleColor = 0xC8141414', ' element image = nil', ' int color = 0x96141414', ' float borderSize = 5', ' bool noCloseButton = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsWindowSetSizable";
tmpDef.description = "This function enables or disables user resizing of a DGS window.";
tmpDef.returnType = "Returns true if the function is successful, false otherwise.";
tmpDef.args = [' element theElement', ' bool status'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsWindowSetMovable";
tmpDef.description = "This function allows you to specify whether or not a user can move a DGS window.";
tmpDef.returnType = "Returns true if the function is successful, false otherwise.";
tmpDef.args = [' element theElement', ' bool status'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsWindowGetSizable";
tmpDef.description = "This function allows you to check if a window is sizable.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element dgsWindow'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsWindowGetMovable";
tmpDef.description = "This function allows you to check if a window is movable.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element dgsWindow'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCloseWindow";
tmpDef.description = "This function allows you to close a DGS window.";
tmpDef.returnType = "Returns true if the window was closed, false otherwise.";
tmpDef.args = [' element theElement'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsWindowSetCloseButtonEnabled";
tmpDef.description = "This function enables/disables the window close button( show or hide ).";
tmpDef.returnType = "If the function succeeds it returns true, if it fails it returns false.";
tmpDef.args = [' element window', ' bool enabled'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsWindowGetCloseButtonEnabled";
tmpDef.description = "This function gets whether the window close button is enabled or not.";
tmpDef.returnType = "Returns true if the the close button is enabled, false otherwise.";
tmpDef.args = [' element window'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsWindowSetCloseButtonSize";
tmpDef.description = "This functions sets the dgs-dxwindow close(off) button size.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element dgsElement', ' int width', ' int height[', ' bool relative]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsWindowGetCloseButtonSize";
tmpDef.description = "This functions gets the size of dgs-dxwindow close(off) button.";
tmpDef.returnType = "Returns two floats, which indicate the length and height of the close button";
tmpDef.args = [' element dgsElement [', ' bool relative ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsWindowGetCloseButton";
tmpDef.description = "This function allows you get the close button of window";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element dgsWindow)'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateBlurBox";
tmpDef.description = "This function creates a blur box.";
tmpDef.returnType = "Returns a dgs-dxblurbox element (DGS Plugin Type)[ shader (Element Type) ] if succeed, false otherwise";
tmpDef.args = [' int resolutionX', ' int resolutionY [', ' texture sourceTexture = nil ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsBlurBoxSetTexture";
tmpDef.description = "This function sets the source texture of dgs blur box that will be blurred.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element blurbox [', ' texture sourceTexture ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsBlurBoxGetTexture";
tmpDef.description = "This function gets the texture that is used in blur box.";
tmpDef.returnType = "Returns a texture there is a texture used in blur box, false otherwise.";
tmpDef.args = [' element blurbox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsBlurBoxSetResolution";
tmpDef.description = "This function changes blur box resolution.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element blurBox', ' int width', ' int height)'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsBlurBoxSetIntensity";
tmpDef.description = "This function sets blur box intensity.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element blurBox', ' float intensity'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsBlurBoxSetLevel";
tmpDef.description = "This function sets blur box level.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element blurBox', ' int level'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsBlurBoxGetResolution";
tmpDef.description = "This function gets resolution of a blur box.";
tmpDef.returnType = "Returns two integer stand for the resolution of blur box if successful, false otherwise.";
tmpDef.args = [' element blurBox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsBlurBoxGetLevel";
tmpDef.description = "This function gets level of a blur box.";
tmpDef.returnType = "Returns integer stand for the level of blur box if successful, false otherwise.";
tmpDef.args = [' element blurBox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsBlurBoxGetIntensity";
tmpDef.description = "This function gets intensity of a blur box.";
tmpDef.returnType = "Returns a float if successful, false otherwise.";
tmpDef.args = [' element blurBox'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateColorPicker";
tmpDef.description = "This function creates a dgs color picker plugin with RGB, HSL, HSV color mode.";
tmpDef.returnType = "Returns a dgs-dximage (Plugin Type: dgs-dxcolorpicker) if successful, false otherwise.";
tmpDef.args = [' string style', ' float x', ' float y', ' float w', ' float h', ' bool relative [', ' element parent = nil ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsColorPickerSetColor";
tmpDef.description = "This function sets the color of the color picker.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element colorPicker [', ' int color1', ' int color2', ' int color3', ' int alpha', ' string colorType = "RGB" ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsColorPickerGetColor";
tmpDef.description = "This function gets the color from the color picker.";
tmpDef.returnType = "Returns four integers depends on color type if successful, false otherwise.";
tmpDef.args = [' element colorPicker [', ' string colorType = "RGB" ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsBindToColorPicker";
tmpDef.description = "This function allows the possibility to bind a dgs edit/label/component selector/scrollbar to a dgs color picker. The value will be automatically syncronized without writing a lot of code.";
tmpDef.returnType = "Returns true if successful, false otherwise";
tmpDef.args = [' element boundSource', ' element targetColorPicker', ' string colorType', ' string colorAttribute [', ' bool isStatic = false', ' bool isReversed = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsUnbindFromColorPicker";
tmpDef.description = "This function allows the possibility to unbind a dgs edit/label/component selector/scrollbar from a dgs color picker.";
tmpDef.returnType = "Returns true if successful, false otherwise";
tmpDef.args = [' element boundSource'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsColorPickerCreateComponentSelector";
tmpDef.description = "This function creates a dgs color picker component selector.";
tmpDef.returnType = "Returns a dgs-dximage (Plugin Type: dgs-dxcomponentselector) if successful, false otherwise.";
tmpDef.args = [' float x', ' float y', ' float w', ' float h', ' bool isHorizontal', ' bool relative [', ' element parent ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsColorPickerGetComponentSelectorValue";
tmpDef.description = "This function gets the value in component selector ranges from 0 to 100.";
tmpDef.returnType = "Returns a float ranges from 0 to 100 if successful, false otherwise";
tmpDef.args = [' element componentSelector'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsColorPickerSetComponentSelectorValue";
tmpDef.description = "This function sets the value in component selector ranges from 0 to 100.";
tmpDef.returnType = "Returns a bool if successful, false otherwise";
tmpDef.args = [' element componentSelector', ' float value'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateCanvas";
tmpDef.description = "This function creates a canvas that is used to draw multiple shaders.";
tmpDef.returnType = "Returns a dgs-dxcanvas element (DGS Plugin Type)[ render target (Element Type) ] if succeed, false otherwise";
tmpDef.args = [' element renderSource', ' int width', ' int height [', ' int color ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateEffect3D";
tmpDef.description = "This function creates a 3d effect for scroll pane.";
tmpDef.returnType = "Returns a dgs-dxeffect3d element (DGS Plugin Type)[ shader (Element Type) ] if succeed, false otherwise";
tmpDef.args = [' float rotateFactor'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEffect3DApplyToScrollPane";
tmpDef.description = "This function applies dgs effect 3d to a scroll pane.";
tmpDef.returnType = "Returns true if successful, false otherwise";
tmpDef.args = [' element effect3d', ' element scrollpane'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsEffect3DRemoveFromScrollPane";
tmpDef.description = "This function removes dgs effect 3d from a scroll pane if existing.";
tmpDef.returnType = "Returns true if successfull, false otherwise";
tmpDef.args = [' element scrollpane'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateMediaBrowser";
tmpDef.description = "Only Local Mode Available.";
tmpDef.returnType = "";
tmpDef.args = [' int width', ' int height', ' bool transparent'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMediaLoadMedia";
tmpDef.description = "Available Media Format:";
tmpDef.returnType = "";
tmpDef.args = [' element media', ' string path', ' string theType'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMediaGetMediaPath";
tmpDef.description = "Returns file path of the loaded media of media browser element, false if there's no media.";
tmpDef.returnType = "";
tmpDef.args = [' element media'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMediaClearMedia";
tmpDef.description = "Returns true if success, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element media'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMediaIsStreamMedia";
tmpDef.description = "Returns true if the the media browser has already loaded a media source, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element media'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMediaPlay";
tmpDef.description = "returns true if succeed, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element multiMediaBrowser'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMediaPause";
tmpDef.description = "Available types:";
tmpDef.returnType = "returns true if succeed, false otherwise.";
tmpDef.args = [' element multiMediaBrowser'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMediaStop";
tmpDef.description = "Available types:";
tmpDef.returnType = "returns true if succeed, false otherwise.";
tmpDef.args = [' element multiMediaBrowser'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMediaGetDuration";
tmpDef.description = "returns an integer if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element multiMediaBrowser'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMediaGetCurrentPosition";
tmpDef.description = "Returns a float representing the current time in seconds of the media, or false if the position could not be retrieved.";
tmpDef.returnType = "";
tmpDef.args = [' element multiMediaBrowser'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMediaGetLooped";
tmpDef.description = "Only Video/Audio support loop option.";
tmpDef.returnType = "returns true if succeed, false otherwise.";
tmpDef.args = [' element multiMediaBrowser'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMediaSetLooped";
tmpDef.description = "Only Video/Audio support loop option.";
tmpDef.returnType = "returns true if succeed, false otherwise.";
tmpDef.args = [' element multiMediaBrowser', ' bool state'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateMask";
tmpDef.description = "This function creates a DGS mask.";
tmpDef.returnType = "Returns a dgs-dxmask element (DGS Plugin Type)[ shader (Element Type) ] if succeed, false otherwise";
tmpDef.args = [' texture sourceTexture', ' texture/shader/string mask [', ' table settings ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMaskGetTexture";
tmpDef.description = "Returns a texture if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element mask'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMaskSetTexture";
tmpDef.description = "Returns true if successful, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element mask', ' element texture'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMaskCenterTexturePosition";
tmpDef.description = "This function center the source texture of DGS mask.";
tmpDef.returnType = "Returns true if successful, false otherwise";
tmpDef.args = [' element mask', ' int w', ' int h'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsMaskAdaptTextureSize";
tmpDef.description = "This function adapt the size of the source texture of DGS mask.";
tmpDef.returnType = "Returns true if successful, false otherwise";
tmpDef.args = [' element mask', ' int w', ' int h'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateNineSlice";
tmpDef.description = "This function creates a nine-slice scaler.";
tmpDef.returnType = "Returns a dgs-dxnineslice (DGS Plugin Type)[ dgs-dxcustomrenderer(Element Type) ] if succeed, false otherwise";
tmpDef.args = [' element texture', ' float gridXLeft', ' float gridXRight', ' float gridYTop', ' float gridYBottom [', ' bool relative = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsNineSliceSetGrid";
tmpDef.description = "This function changes the grid position of DGS nine slice plugin.";
tmpDef.returnType = "Returns true if successful, false otherwise";
tmpDef.args = [' element nineSlice [', ' float gridXLeft', ' float gridXRight', ' float gridYTop', ' float gridYBottom', ' bool relative = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsNineSliceGetGrid";
tmpDef.description = "This function gets the grid position of DGS nine slice plugin.";
tmpDef.returnType = "Returns 4 float indifates the Left Grid,Right Grid,Top Grid and Bottom Grid.";
tmpDef.args = [' element nineSlice [', ' relative = false ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateObjectPreviewHandle";
tmpDef.description = ">>>Warning: This feature requires resource Object Preview with 1 line modification<<<";
tmpDef.returnType = "";
tmpDef.args = ['exports.dgs:dgsConfigureObjectPreview'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsLocateObjectPreviewResource";
tmpDef.description = "This function locates the object preview resource for DGS. Object Preview should be running.";
tmpDef.returnType = "Returns true if success, false otherwise.";
tmpDef.args = [' string name'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsAttachObjectPreviewToImage";
tmpDef.description = "This function applies the object preview element to dgs image.";
tmpDef.returnType = "Returns true if success, false otherwise.";
tmpDef.args = [' element SOVElement', ' element dgsImage'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRemoveObjectPreviewFromImage";
tmpDef.description = "This function removes the object preview element from dgs image.";
tmpDef.returnType = "Returns true if success, false otherwise.";
tmpDef.args = [' element dgsImage'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsObjectPreviewGetHandleByID";
tmpDef.description = "This function gets the DGS handled object prreview element by element ID.";
tmpDef.returnType = "Returns an DGS handled SOVElement if success, false otherwise.";
tmpDef.args = [' string elementID'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsConfigureObjectPreview";
tmpDef.description = "You need to insert this line into line 340 in 'c_main.lua of Object Preview:";
tmpDef.returnType = "Returns a string of Required API By DGS that should be loaded into Object Preview resource.";
tmpDef.args = ['exports.dgs:dgsConfigureObjectPreview'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRequestQRCode";
tmpDef.description = "This function uses the API from api.qrserver.com to create a QRCode and handled by DGS.";
tmpDef.returnType = "Returns a dgs-dxqrcode element (DGS Plugin Type)[ texture (Element Type) ] if succeed, false otherwise";
tmpDef.args = [' string dataString [', ' int width = 128', ' int height = 128 ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetQRCodeLoaded";
tmpDef.description = "Returns true if the QRCode is loaded, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element QRCode'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateRemoteImage";
tmpDef.description = "This function creates a texture from URL, that can be used for dgsCreateImage.";
tmpDef.returnType = "Returns an dgs-dxremoteimage (DGS Plugin Type)[shader(element type)] if successful, false otherwise.";
tmpDef.args = [' string URL'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRemoteImageRequest";
tmpDef.description = "This function loads image from a URL with existing dgs remote image.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element remoteImage', ' string URL'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRemoteImageAbort";
tmpDef.description = "This function aborts the request of remote image when it is downloading.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element remoteImage'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRemoteImageGetTexture";
tmpDef.description = "Returns true if the remote image is valid and loaded, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element remoteImage'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsGetRemoteImageLoadState";
tmpDef.description = "Returns true if the remote image is loaded, false otherwise.";
tmpDef.returnType = "";
tmpDef.args = [' element imageTexture'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsCreateRoundRect";
tmpDef.description = "This function creates a rounded rectangle shader that can be used for dgs elements.";
tmpDef.returnType = "";
tmpDef.args = [' float radius', ' bool relative [', ' int color = 0xFFFFFFFF', ' texture background = nil', ' bool colorOverwritten = true', ' bool isBorderOnly', ' float borderHorizontalThickness', ' float borderVerticalThickness ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRoundRectSetTexture";
tmpDef.description = "This function sets the source texture of dgs rounded rectangle that will be cut into rounded rectangle.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element rndRect', ' texture sourceTexture'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRoundRectGetTexture";
tmpDef.description = "This function gets the texture that is used in rounded rectangle.";
tmpDef.returnType = "Returns a texture there is a texture used in rounded rectangle, false otherwise.";
tmpDef.args = [' element rndRect'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRoundRectSetRadius";
tmpDef.description = "This function sets the radius of the corner of the dgs rounded rectangle.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element rndRect', ' float radius [', ' bool isRelative = true]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRoundRectGetRadius";
tmpDef.description = "This function gets the radius of the corner of the dgs rounded rectangle.";
tmpDef.returnType = "Returns a float value if succeed, false otherwise.";
tmpDef.args = [' element rndRect'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRoundRectSetColor";
tmpDef.description = "This function sets the color of the dgs rounded rectangle.";
tmpDef.returnType = "Returns true if succeed, false otherwise.";
tmpDef.args = [' element rndRect', ' int color)'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRoundRectGetColor";
tmpDef.description = "This function gets the color of the dgs rounded rectangle.";
tmpDef.returnType = "Returns an int value of the color if succeed, false otherwise.";
tmpDef.args = [' element rndRect'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRoundRectSetColorOverwritten";
tmpDef.description = "This function sets whether the color of round rectangle will overwrite the color of dx functions.";
tmpDef.returnType = "Returns true if successful, false otherwise.";
tmpDef.args = [' element rndRect', ' bool isOverwritten'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRoundRectGetColorOverwritten";
tmpDef.description = "This function gets whether the color of round rectangle will overwrite the color of dx functions.";
tmpDef.returnType = "Returns true if the round rectangle was set to overwritten, false otherwise.";
tmpDef.args = [' element rndRect'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRoundRectSetBorderThickness";
tmpDef.description = "This function sets border thickness of an unfilled round rectangle.";
tmpDef.returnType = "";
tmpDef.args = [' element rndRect', ' float horizontal [', ' float vertical = horizontal ]'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dgsRoundRectGetBorderThickness";
tmpDef.description = "This function gets border thickness of an unfilled round rectangle.";
tmpDef.returnType = "Returns a float if successful, false otherwise.";
tmpDef.args = [' element rndRect'];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

// MTA itself functions


tmpDef = new MTAFunction;
tmpDef.label = "setWindowFlashing";
tmpDef.description = "This function allows the window to flash in the Windows taskbar.";
tmpDef.returnType = "bool";
tmpDef.args = [" bool shouldFlash", "[int count = 10]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "canBrowserNavigateBack";
tmpDef.description = "This function checks if the browser can return to the previous page.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "navigateBrowserBack";
tmpDef.description = "Returns the browser to the previous page.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "navigateBrowserForward";
tmpDef.description = "This function takes the browser to the next page.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "reloadBrowserPage";
tmpDef.description = "This function reloads the current browser's page.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resizeBrowser";
tmpDef.description = "Allows resizing of CEF browsers at runtime.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "float width", "float height"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createTrayNotification";
tmpDef.description = "This functions creates a notification ballon on the desktop.";
tmpDef.returnType = "";
tmpDef.args = ["string notificationText", "[string iconType = \"default\"", "bool useSound = true]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isTrayNotificationEnabled";
tmpDef.description = "This function returns a boolean value whether the client has enabled tray notifications in his settings or not.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWorldSpecialPropertyEnabled";
tmpDef.description = "Enables or disables a special world property.";
tmpDef.returnType = "bool";
tmpDef.args = ["string propertyName", "bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundEffects";
tmpDef.description = "Returns the states of all effects of a sound.";
tmpDef.returnType = "table";
tmpDef.args = ["element sound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getRadioChannel";
tmpDef.description = "This function retrieves the ID of the currently active radio channel.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundLevelData";
tmpDef.description = "This function gets the left/right level from a sound element.If the element is a player, this function will use the players voice.";
tmpDef.returnType = "int, int";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerMapVisible";
tmpDef.description = "This function checks if the local player has their map showing";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundMetaTags";
tmpDef.description = "Used to get the meta tags attached to a sound. These provide information about the sound, for instance the title or the artist.";
tmpDef.returnType = "table";
tmpDef.args = ["element sound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createProjectile";
tmpDef.description = "This function creates a projectile of the specified type on the specified coordinates.";
tmpDef.returnType = "projectile";
tmpDef.args = ["element creator", "int weaponType [", "float posX", "float posY", "float posZ", "float force = 1.0", "element target = nil", "float rotX", "float rotY", "float rotZ", "float velX", "float velY", "float velZ", "int model ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundFFTData";
tmpDef.description = "This function gets the fast fourier transform data for an audio stream which is a table of floats representing the current audio frame.This allows things like visualisations.";
tmpDef.returnType = "table";
tmpDef.args = ["element sound", "int iSamples [", "int iBands = 0 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundBPM";
tmpDef.description = "This function gets the beats per minute of a specific sound element.";
tmpDef.returnType = "int";
tmpDef.args = ["element sound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundMaxDistance";
tmpDef.description = "Gets a custom sound max distance at which the sound stops.";
tmpDef.returnType = "int";
tmpDef.args = ["element sound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCursorPosition";
tmpDef.description = "This function gets the current position of the mouse cursor. Note that for performance reasons, the world position returned is always 300 units away. If you want the exact world point (similar to onClientClick), use processLineOfSight between the camera position and the worldX/Y/Z result of this function.";
tmpDef.returnType = "float float float float float";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundLength";
tmpDef.description = "This function is used to return the playback length of the specified sound element.If the element is a player, this function will use the players voice.";
tmpDef.returnType = "float";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSFXStatus";
tmpDef.description = "This function checks if a big sound container is available to use or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["string audioContainer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getRadioChannelName";
tmpDef.description = "This function gets the given radio channel name.";
tmpDef.returnType = "string";
tmpDef.args = ["int id"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundWaveData";
tmpDef.description = "This function gets the wave form data for an audio stream which is a table of floats representing the current audio frame as a wave.This allows things like visualisations.";
tmpDef.returnType = "table";
tmpDef.args = ["element sound", "int iSamples"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundSpeed";
tmpDef.description = "This function is used to return the playback speed of the specified sound element.";
tmpDef.returnType = "float";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isSoundPaused";
tmpDef.description = "This function is used to return the current pause state of the specified sound element.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundVolume";
tmpDef.description = "This function is used to return the volume level of the specified sound element.If the element is a player, this function will use the players voice.";
tmpDef.returnType = "float";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "playSound";
tmpDef.description = "Creates a sound element and plays it immediately after creation for the local player. Note: The only supported audio formats are MP3, WAV, OGG, RIFF, MOD, XM, IT, S3M and PLS(e.g. Webstream).";
tmpDef.returnType = "element";
tmpDef.args = ["string soundPath", "[ bool looped = false", "bool throttled = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundPan";
tmpDef.description = "This function is used to get the pan level of the specified sound element.";
tmpDef.returnType = "float";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeBrowserJavascript";
tmpDef.description = "This function executes a Javascript string to the specified browser. Works only with local browsers.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "string jsCode"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundProperties";
tmpDef.description = "This function gets the properties of a specific sound.";
tmpDef.returnType = "float, float, float, bool";
tmpDef.args = ["element sound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "focusBrowser";
tmpDef.description = "This function will attempt to focus the browser or unfocus all browsers. The browser that is focused will retrieve keyboard input.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCamera";
tmpDef.description = "This function returns an element that corresponds to the game camera";
tmpDef.returnType = "element";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementDistanceFromCentreOfMassToBaseOfModel";
tmpDef.description = "This function is used to retrieve the distance between a element's centre of mass to the base of the model. This can be used to calculate the position the element has to be set to, to have it on ground level.";
tmpDef.returnType = "float";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedTargetingMarkerEnabled";
tmpDef.description = "This function checks whether health target markers are drawn as set by setPedTargetingMarkerEnabled or not.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundSpeed";
tmpDef.description = "This function can be used to change the playback speed of the specified sound element.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound", "float speed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "playSound3D";
tmpDef.description = "Creates a sound element in the GTA world and plays it immediately after creation for the local player. setElementPosition can be used to move the sound element around after it has been created. Remember to use setElementDimension after creating the sound to play it outside of dimension 0.";
tmpDef.returnType = "element";
tmpDef.args = ["string soundPath", "float x", "float y", "float z", "[ bool looped = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isSoundPanningEnabled";
tmpDef.description = "This function checks whether panning is enabled in a sound element or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundMaxDistance";
tmpDef.description = "Sets a custom sound max distance at which the sound stops.";
tmpDef.returnType = "bool";
tmpDef.args = ["element sound", "int distance"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundMinDistance";
tmpDef.description = "Gets a custom sound Minimum distance at which the sound stops getting louder.";
tmpDef.returnType = "int";
tmpDef.args = ["element sound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "playSFX";
tmpDef.description = "This function plays a sound from GTA's big sound containers.";
tmpDef.returnType = "element";
tmpDef.args = ["string containerName", "int bankId", "int soundId [", "bool looped = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundPosition";
tmpDef.description = "This function is used to return the current seek position of the specified sound element.If the element is a player, this function will use the players voice.";
tmpDef.returnType = "float";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "playSFX3D";
tmpDef.description = "This function plays a sound in the GTA world from GTA's big sound containers.";
tmpDef.returnType = "element";
tmpDef.args = ["string containerName", "int bankId", "int soundId", "float x", "float y", "float z [", "bool looped = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundPanningEnabled";
tmpDef.description = "This function toggles the panning of a sound (hearing it closer to the left or right side of the speakers due to the camera position). By default a sound has its panning enabled.";
tmpDef.returnType = "bool";
tmpDef.args = ["element sound", "bool enable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundPosition";
tmpDef.description = "This function is used to change the seek position of the specified sound element.Use a player element to control a players voice with this function.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound", "float pos"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundPaused";
tmpDef.description = "This function is used to either pause or unpause the playback of the specified sound element.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound", "bool paused"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "stopSound";
tmpDef.description = "Stops the sound playback for specified sound element. The sound element is also destroyed.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundMinDistance";
tmpDef.description = "Sets a custom sound Minimum distance at which the sound stops getting louder.";
tmpDef.returnType = "bool";
tmpDef.args = ["element sound", "int distance"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundPan";
tmpDef.description = "This function is used to change the pan level of the specified sound element. ";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound", "float pan"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddBulletImpact";
tmpDef.description = "Creates a bullet impact particle effect, consisting of a small smoke cloud and a number of sparks.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ", "[int smokeSize=1", "int sparkCount=1", "float smokeIntensity=1.0]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundEffectEnabled";
tmpDef.description = "Used to enable or disable specific sound effects.Use a player element to control a players voice with this function.";
tmpDef.returnType = "bool";
tmpDef.args = ["element sound", "string effectName", "bool bEnable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddDebris";
tmpDef.description = "Creates a debris particle effect (e.g. bits that fly off a car when ramming a wall).";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "[int colorR=255", "int colorG=0", "int colorB=0", "int colorA=255", "float scale=1.0", "int count=1]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundVolume";
tmpDef.description = "This function is used to change the volume level of the specified sound element.Use a player element to control a players voice with this function.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound", "float volume"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddTankFire";
tmpDef.description = "This function creates a tank firing particle effect";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddFootSplash";
tmpDef.description = "This function creates a foot splash particle effect, normally created when walking into water.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddBulletSplash";
tmpDef.description = "This function creates a bullet splash particle effect, normally created when shooting into water.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundProperties";
tmpDef.description = "This function edit's the properties of a specific sound.";
tmpDef.returnType = "bool";
tmpDef.args = ["element sound", "float fSampleRate", "float fTempo", "float fPitch", "bool bReverse"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddSparks";
tmpDef.description = "Creates a number of sparks originating from a point or along a line.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ", "[float force=1", "int count=1", "float acrossLineX=0", "float acrossLineY=0", "float acrossLineZ=0", "bool blur=false", "float spread=1", "float life=1]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerMapBoundingBox";
tmpDef.description = "This function gets the GUI bounding box of the radar map texture.";
tmpDef.returnType = "int, int, int, int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementLocal";
tmpDef.description = "This function checks whether a clientside element is local to the client (doesn't exist in the server) or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementSyncer";
tmpDef.description = "This function checks whether an element is synced by the local player or not. Accepted elements are peds and vehicles.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddTyreBurst";
tmpDef.description = "Creates a tyre burst particle effect (a small white smoke puff).";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCursorPosition";
tmpDef.description = "This function sets the current position of the mouse cursor.";
tmpDef.returnType = "bool";
tmpDef.args = ["int cursorX", "int cursorY"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddWaterHydrant";
tmpDef.description = "This function creates a water hydrant particle effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getEffectDensity";
tmpDef.description = "This function gets the density of certain effect.";
tmpDef.returnType = "float";
tmpDef.args = ["effect theEffect"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddGlass";
tmpDef.description = "This function creates a glass particle effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "[int colorR=255", "int colorG=0", "int colorB=0", "int colorA=255", "float scale=1.0", "int count=1]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementBoundingBox";
tmpDef.description = "This function returns the minimum and maximum coordinates of an element's bounding box.";
tmpDef.returnType = "float float float float float float";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createBrowser";
tmpDef.description = "This function creates a new web browser element.";
tmpDef.returnType = "element";
tmpDef.args = ["int width", "int height", "bool isLocal [", "bool transparent = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddWood";
tmpDef.description = "Creates a wood splinter particle effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ", "[int count=1", "float brightness=1.0]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddGunshot";
tmpDef.description = "This function creates a gunshot particle effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ", "[bool includeSparks=true]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddBlood";
tmpDef.description = "Creates a blood splatter particle effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ", "[int count=1", "float brightness=1.0]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddWaterSplash";
tmpDef.description = "This function creates a water splash particle effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createFire";
tmpDef.description = "Creates a patch of fire that will spread a bit and die out after a while.";
tmpDef.returnType = "bool";
tmpDef.args = ["float x", "float y", "float z [", "float size = 1.8 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddPunchImpact";
tmpDef.description = "Creates a punch impact particle effect (a small dust cloud).";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setEffectSpeed";
tmpDef.description = "This function sets the speed of a specified effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["effect theEffect", "float speed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createEffect";
tmpDef.description = "Creates an effect on specified position.";
tmpDef.returnType = "effect";
tmpDef.args = ["string name", "float x", "float y", "float z [", "float rX", "float rY", "float rZ", "float drawDistance = 0", "soundEnabled = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getObjectMass";
tmpDef.description = "This function returns the mass of a specified object.";
tmpDef.returnType = "float";
tmpDef.args = ["object theObject"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getGroundPosition";
tmpDef.description = "This function gets the Z level of the highest ground below a point.";
tmpDef.returnType = "float";
tmpDef.args = ["float x", "float y", "float z"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setProjectileCounter";
tmpDef.description = "This function changes the projectile counter timer which depending on the projectile type will do different things.";
tmpDef.returnType = "bool";
tmpDef.args = ["projectile projectile", "int timeToDetonate"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getGarageBoundingBox";
tmpDef.description = "This function outputs the bounding box of a garage. Checks if the player is inside the bounding box of the garage and outputs the result to the chat";
tmpDef.returnType = "float, float, float, float";
tmpDef.args = ["int garageID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementCollidableWith";
tmpDef.description = "This function can be used to set an element to collide with another element. An element with collisions disabled does not interact physically with the other element.Note: You can only use this function with the element types listed below.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "element withElement", "bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementRadius";
tmpDef.description = "This function gets the radius of an element. Normally, sphere or circle-shaped elements tend to return a more accurate and expected radius than others with another shapes.";
tmpDef.returnType = "float";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedFootBloodEnabled";
tmpDef.description = "This function makes a players foot prints bloody.";
tmpDef.returnType = "bool";
tmpDef.args = ["element thePlayer", "bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementStreamedIn";
tmpDef.description = "This function checks whether an element is currently streamed in (not virtualized) and are actual GTA objects in the world. You can force an element to be streamed in using setElementStreamable.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setEffectDensity";
tmpDef.description = "This function sets the density of a specified effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["effect theEffect", "float density"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getEffectSpeed";
tmpDef.description = "This function gets the speed of a specified effect.";
tmpDef.returnType = "float";
tmpDef.args = ["effect theEffect"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementWaitingForGroundToLoad";
tmpDef.description = "The next code snippet outputs a message when a vehicle respawns far away from players, above an object.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "triggerServerEvent";
tmpDef.description = "This function triggers an event previously registered on the server. This is the primary means of passing information between the client and the server. Servers have a similar triggerClientEvent function that can do the reverse. You can treat this function as if it was an asynchronous function call, using triggerClientEvent to pass back any returned information if necessary.";
tmpDef.returnType = "bool";
tmpDef.args = ["string event", "element theElement", "[arguments...]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setLightRadius";
tmpDef.description = "This function sets the radius for a light element.";
tmpDef.returnType = "bool";
tmpDef.args = ["Light theLight", "float radius"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementStreamable";
tmpDef.description = "This function checks whether an element is streamable as set by setElementStreamable or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "localPlayer";
tmpDef.description = "returns the player element of the local player.";
tmpDef.returnType = "player";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementCollidableWith";
tmpDef.description = "This function can be used to check whether specified element is collidable with another element.Note: You can only use this function with the element types listed below.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "element withElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSearchLightEndPosition";
tmpDef.description = " This function gets the end position of a searchlight element.";
tmpDef.returnType = "float float float";
tmpDef.args = ["searchlight theSearchLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setAnalogControlState";
tmpDef.description = "This sets the analog control state of a control for the local player.";
tmpDef.returnType = "bool";
tmpDef.args = ["string controlName [", "float state]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSearchLightEndRadius";
tmpDef.description = " This function gets the end radius of a searchlight element.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["searchlight theSearchLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getProjectileTarget";
tmpDef.description = "This function returns the target of the specified projectile.";
tmpDef.returnType = "element";
tmpDef.args = ["projectile theProjectile"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "toggleObjectRespawn";
tmpDef.description = "This function is used to toggle if an object should respawn after it got destroyed";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject", "bool respawn"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "triggerLatentServerEvent";
tmpDef.description = "This function is the same as triggerServerEvent except the transmission rate of the data contained in the arguments can be limited and other network traffic is not blocked while the data is being transferred.";
tmpDef.returnType = "bool";
tmpDef.args = ["string event", "[int bandwidth=5000", "bool persist=false,] element theElement", "[arguments...]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementStreamable";
tmpDef.description = "This function can be used to disable streaming for an element. This will make sure the element is not virtualized (streamed out from GTA) when the player moves far away from it. This function only works in elements with a physical representation in the world (entities), such as players, peds, vehicles and objects.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "bool streamable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setObjectMass";
tmpDef.description = "This function sets the mass of a specified object. Changing the mass leads to a different movement behavior for especially dynamic objects.";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject", "float mass"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementOnScreen";
tmpDef.description = "This function will check if an element is on the screen. Elements behind objects but still in the camera view count as being on screen.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSearchLightStartPosition";
tmpDef.description = "This function sets the start position of a searchlight element.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["searchlight theSearchLight", "float startX", "float startY", "float startZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getProjectileType";
tmpDef.description = "This function returns the type of the specified projectile.";
tmpDef.returnType = "int";
tmpDef.args = ["projectile theProjectile"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerHudComponentVisible";
tmpDef.description = "This function can be used to check whether an hud component is visable or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["string component"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getInteriorFurnitureEnabled";
tmpDef.description = "This function will tell you if interior furniture are enabled or disabled in a specified room ID.";
tmpDef.returnType = "bool";
tmpDef.args = ["int roomID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setLightDirection";
tmpDef.description = "This function sets the direction for a light element.";
tmpDef.returnType = "bool";
tmpDef.args = ["light theLight", "float x", "float y", "float z"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBirdsEnabled";
tmpDef.description = "This function will tell you if the birds are enabled or disabled.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getInteriorSoundsEnabled";
tmpDef.description = "This function checks to see if the music played by default in clubs is disabled or not.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getGaragePosition";
tmpDef.description = "This function outputs X, Y and Z position of given garage.This element has to create a blip at the nearest garage and removes it in 10 seconds.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["int garageID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getChatboxLayout";
tmpDef.description = "Returns information about how the chatbox looks.";
tmpDef.returnType = "bool/int/table";
tmpDef.args = ["[ string CVar ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createSWATRope";
tmpDef.description = "Creates a SWAT rope like that of the rope in single player used by SWAT Teams abseiling from the Police Maverick.";
tmpDef.returnType = "bool";
tmpDef.args = ["float fx", "float fy", "float fZ", "int duration"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getGarageSize";
tmpDef.description = "This function outputs the size of garage.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["int garageID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBoundKeys";
tmpDef.description = "Returns a list of key names that are bound to the specified game control or console command.";
tmpDef.returnType = "table";
tmpDef.args = ["string command/control"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getKeyState";
tmpDef.description = "This function determines if a certain key is pressed or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["string keyName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setLightColor";
tmpDef.description = "This function sets the color for a light element.";
tmpDef.returnType = "bool";
tmpDef.args = ["light theLight", "float r", "float g", "float b"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createLight";
tmpDef.description = "This function creates a 3D light in the world.";
tmpDef.returnType = "light";
tmpDef.args = ["int lightType", "float posX", "float posY", "float posZ [", "float radius = 3", "int r = 255", "int g = 0", "int b = 0", "float dirX = 0", "float dirY = 0", "float dirZ = 0", "bool createsShadow = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isChatBoxInputActive";
tmpDef.description = "This function returns whether the ingame chatbox is being used (accepting chatbox input) or not.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getProjectileCreator";
tmpDef.description = "This function returns the creator of the specified projectile.";
tmpDef.returnType = "element";
tmpDef.args = ["projectile theProjectile"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setDebugViewActive";
tmpDef.description = "This function enables or disables the debug window.";
tmpDef.returnType = "bool";
tmpDef.args = ["bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getLightType";
tmpDef.description = "This function returns the type for a light element.";
tmpDef.returnType = "int";
tmpDef.args = ["light theLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getLightDirection";
tmpDef.description = "This function returns the direction for a light element.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["light theLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getLightRadius";
tmpDef.description = "This function returns the radius for a light element.";
tmpDef.returnType = "float";
tmpDef.args = ["light theLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getLightColor";
tmpDef.description = "This function returns the color for a light element.";
tmpDef.returnType = "int, int, int";
tmpDef.args = ["light theLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isMTAWindowActive";
tmpDef.description = "This function returns whether any system windows that take focus are active. This includes:";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSearchLightEndPosition";
tmpDef.description = "This function sets the end position of a searchlight element.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["searchlight theSearchLight", "float endX", "float endY", "float endZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSearchLightStartRadius";
tmpDef.description = "This function gets the start radius of a searchlight element.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["searchlight theSearchLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSearchLightStartRadius";
tmpDef.description = "This function sets the start radius of a searchlight element.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["searchlight theSearchlight", "float startRadius"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isConsoleActive";
tmpDef.description = "This function returns whether the ingame console window is visible or not.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isMainMenuActive";
tmpDef.description = "This function returns whether the user is in the mainmenu or not.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createSearchLight";
tmpDef.description = "This function creates a searchlight. A searchlight is a spotlight which looks like the one available in the Police Maverick.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["float startX", "float startY", "float startZ", "float endX", "float endY", "float endZ", "float startRadius", "float endRadius [", "bool renderSpot = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isDebugViewActive";
tmpDef.description = "This function returns whether the ingame debug window is visible or not. This is the debugwindow visible using the \"debugscript <level>\" command.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSearchLightEndRadius";
tmpDef.description = "This function sets the end radius of a searchlight element.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["searchlight theSearchlight", "float endRadius"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getProjectileCounter";
tmpDef.description = "Get the time left before a projectile detonates.";
tmpDef.returnType = "int";
tmpDef.args = ["projectile projectile"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getProjectileForce";
tmpDef.description = "This function returns the force of the specified projectile.";
tmpDef.returnType = "float";
tmpDef.args = ["projectile theProjectile"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSearchLightStartPosition";
tmpDef.description = " This function gets the start position of a searchlight element.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["searchlight theSearchLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isTransferBoxActive";
tmpDef.description = "This function returns whether the file downloading dialog box is active or not. This appears when a resource is started and the client doesn't have all the files that resource requires the client to have.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setObjectBreakable";
tmpDef.description = "This function sets an object to be breakable/unbreakable.";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject", "bool breakable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "breakObject";
tmpDef.description = "This function breaks a specific object.";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isObjectBreakable";
tmpDef.description = "This function checks if an object is breakable.";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "respawnObject";
tmpDef.description = "This function respawns a specific object.";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isBrowserDomainBlocked";
tmpDef.description = "This function checks if the specified URL is blocked from being loaded.";
tmpDef.returnType = "bool";
tmpDef.args = ["string address [", "bool isURL = false]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isBrowserFocused";
tmpDef.description = "This function checks if a browser is focused.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isBrowserLoading";
tmpDef.description = "This function checks if a browser is currently loading a website.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBrowserProperty";
tmpDef.description = "This function gets a given property of a specified browser.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser theBrowser", "string key"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBrowserSettings";
tmpDef.description = "This function returns a table containing the browser settings.";
tmpDef.returnType = "table";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBrowserTitle";
tmpDef.description = "This function returns the title of the passed browser.";
tmpDef.returnType = "string";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBrowserURL";
tmpDef.description = "This function returns the URL of the specified browser.";
tmpDef.returnType = "string";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "injectBrowserMouseDown";
tmpDef.description = "This function injects a mouse click (state: down).";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "string mouseButton"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "injectBrowserMouseMove";
tmpDef.description = "This function injects a mouse movement.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "int posX", "int posY"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "injectBrowserMouseUp";
tmpDef.description = "This function injects a mouse click (state: up).";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "string mouseButton"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "injectBrowserMouseWheel";
tmpDef.description = "This function injects mouse wheel events.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "int verticalScroll", "int horizontalScroll"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "loadBrowserURL";
tmpDef.description = "This function loads the specified URL.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "string url [", "string postData = \"\"", "bool urlEncoded = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "canBrowserNavigateForward";
tmpDef.description = "This function checks if the browser can go to the next page.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBrowserProperty";
tmpDef.description = "This function sets a given property of a specified browser.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser theBrowser", "string key", "string value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBrowserRenderingPaused";
tmpDef.description = "This function sets the rendering state of a browser.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "bool paused"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBrowserVolume";
tmpDef.description = "This function sets either a specific browser's volume, or the overall volume for browsers.";
tmpDef.returnType = "bool";
tmpDef.args = ["[browser webBrowser]", "float volume"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "requestBrowserDomains";
tmpDef.description = "This function opens a request window in order to accept the requested remote URLs.";
tmpDef.returnType = "bool";
tmpDef.args = ["table pages [", "bool parseAsURL = false", "function callback ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBrowserAjaxHandler";
tmpDef.description = "This function provides a requestable ajax resource for Lua/Javascript communication for a browser.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "string url [", "function handler]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBrowserSource";
tmpDef.description = "This function can be used to retrieve the source code of a website (asynchronously). The size of the source code is limited to 2 MiB (remaining bytes are cut).";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "function callback"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "toggleBrowserDevTools";
tmpDef.description = "This function toggles the visibility of the developer tools pane.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "bool visible"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraClip";
tmpDef.description = "This function checks if the camera will \"collide\" with any objects or vehicles in its way. Read more about this here.";
tmpDef.returnType = "bool, bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraGoggleEffect";
tmpDef.description = "This function returns what goggle effect is currently affecting the camera.";
tmpDef.returnType = "string";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraViewMode";
tmpDef.description = "This function allows you to get the camera's view mode. This indicates at what distance the camera will follow the player.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraFieldOfView";
tmpDef.description = "This function returns the field of view of the dynamic camera as set by setCameraFieldOfView.";
tmpDef.returnType = "float";
tmpDef.args = ["string cameraMode"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraShakeLevel";
tmpDef.description = "This function gets the camera shake level set by setCameraShakeLevel.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraClip";
tmpDef.description = "This function sets if the camera will \"collide\" with any objects or vehicles in its way. This means that if object clip is enabled an object is in the way of where the camera actually wants to be, the camera will try to be in front of it. This function can disable that.";
tmpDef.returnType = "bool";
tmpDef.args = ["[ bool objects = true", "bool vehicles = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraViewMode";
tmpDef.description = "This function allows you to set the camera's view mode if you are inside a vehicle. This indicates at what distance the camera will follow the player.";
tmpDef.returnType = "bool";
tmpDef.args = ["int viewMode"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraFieldOfView";
tmpDef.description = "This function sets the field of view of the dynamic camera - this is the field of view of the non-fixed camera - yes, the camera that the user can control whilst on foot or in a vehicle. The higher the field of view angle, the more you will be able to see to your sides.";
tmpDef.returnType = "bool";
tmpDef.args = ["string cameraMode", "float fieldOfView"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraShakeLevel";
tmpDef.description = "This function sets the camera shake level (as seen on the Are you going to San Fierro? singleplayer mission).";
tmpDef.returnType = "bool";
tmpDef.args = ["int shakeLevel"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCursorAlpha";
tmpDef.description = "This function is used to change alpha (transparency) from the client's cursor.";
tmpDef.returnType = "bool";
tmpDef.args = ["int alpha"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCursorAlpha";
tmpDef.description = "This function is used to get alpha (transparency) from the client's cursor.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCommandsBoundToKey";
tmpDef.description = "Gets the commands bound to a key.";
tmpDef.returnType = "table";
tmpDef.args = ["string theKey", "string keyState"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getKeyBoundToCommand";
tmpDef.description = "This function allow you get first key bound to command.";
tmpDef.returnType = "string";
tmpDef.args = ["string command"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAnalogControlState";
tmpDef.description = "This retrieves the analog control state of a control.  This is useful for detecting sensitive controls, such as those used on a joypad.";
tmpDef.returnType = "float";
tmpDef.args = ["string control"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isChatVisible";
tmpDef.description = "This function checks if player's chat is visible.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceGUIElement";
tmpDef.description = "This function retrieves a resource's GUI element. The resource's GUI element is the element in the element tree which is the default parent of all GUI elements that belong to a particular resource. It has a predefined variable called guiRoot, and each resource has one of these. You can attach event handlers to this element to easily capture events that originate from your resource (and global events that originate from the root element).";
tmpDef.returnType = "element";
tmpDef.args = ["[ resource theResource = getThisResource("];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getLocalization";
tmpDef.description = "This function gets the player's localization setting as set in the MTA client.";
tmpDef.returnType = "table";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setClipboard";
tmpDef.description = "This function sets the players clipboard text (what appears when you paste with CTRL + V) Note that there is no getClipBoard function for safety reasons.";
tmpDef.returnType = "bool";
tmpDef.args = ["string theText"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWaterLevel";
tmpDef.description = "This function allows you to retrieve the water level from a certain location. The water level is 0 in most places though it can vary (e.g. it's higher near the dam).";
tmpDef.returnType = "float";
tmpDef.args = ["float posX", "float posY", "float posZ [ ", "bool bCheckWaves = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isWaterDrawnLast";
tmpDef.description = "This function determines whether water is drawn last in the rendering order.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWaterDrawnLast";
tmpDef.description = "This function changes the water rendering order.";
tmpDef.returnType = "bool";
tmpDef.args = ["bool bEnabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createWeapon";
tmpDef.description = "Creates a custom weapon that can fire bullets. Do not confuse this with player held weapons.";
tmpDef.returnType = "weapon";
tmpDef.args = ["string theType", "float x", "float y", "float z"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fireWeapon";
tmpDef.description = "Fires one shot from a custom weapon.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponState";
tmpDef.description = "This function gets the state of a custom weapon.";
tmpDef.returnType = "string";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponTarget";
tmpDef.description = "This functions gets the target of a custom weapon.";
tmpDef.returnType = "nil/element/float";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponOwner";
tmpDef.description = "This function gets the owner of a custom weapon. Weapon ownership system was, however, disabled, so this function always returns false. Please refer to setWeaponOwner for details.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponFlags";
tmpDef.description = "This function gets the flags of a custom weapon.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon", "string theFlag"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponFiringRate";
tmpDef.description = "This gets the firing rate to be used when a custom weapon opens fire.";
tmpDef.returnType = "int";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponAmmo";
tmpDef.description = "This function gets the total ammo a custom weapon has.";
tmpDef.returnType = "int";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponClipAmmo";
tmpDef.description = "This function gets the amount of ammo left in a custom weapon's magazine/clip.";
tmpDef.returnType = "int";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetWeaponFiringRate";
tmpDef.description = "This function resets the firing rate of a custom weapon to the default one.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWeaponState";
tmpDef.description = "This function sets a custom weapon's state.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon", "string theState"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWeaponTarget";
tmpDef.description = "This function sets the target of a custom weapon. There are 3 different targeting modes, which are explained below.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon", "element theTarget [", "int theComponent = 255]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWeaponFlags";
tmpDef.description = "This function sets a custom weapon flags, used to change how it behaves or finds a possible target to shoot.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon", "string theFlag", "bool enable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWeaponFiringRate";
tmpDef.description = "This function sets the firing rate to be used when a custom weapon is in firing state.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon", "int firingRate"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWeaponClipAmmo";
tmpDef.description = "This function sets the ammo left in a custom weapon's magazine/clip.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon", "int clipAmmo"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getNearClipDistance";
tmpDef.description = "This function gets the distance from the camera at which the world starts rendering. For more information about this please refer to setNearClipDistance.";
tmpDef.returnType = "float";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getScreenFromWorldPosition";
tmpDef.description = "This function gets the screen position of a point in the world. This is useful for attaching 2D gui elements to parts of the world (e.g. players) or detecting if a point is on the screen (though it does not check if it is actually visible, you should use processLineOfSight for that).";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["float x", "float y", "float z [", "float edgeTolerance = 0.0", "bool relative = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWorldFromScreenPosition";
tmpDef.description = "This function allows you to retrieve the world position corresponding to a 2D position on the screen, at a certain depth.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["float x", "float y", "float depth"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isAmbientSoundEnabled";
tmpDef.description = "This function allows you to check if some background sound effects are enabled.";
tmpDef.returnType = "bool";
tmpDef.args = ["string theType"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isLineOfSightClear";
tmpDef.description = "This function checks if there are obstacles between two points of the game world, optionally ignoring certain kinds of elements. Use processLineOfSight if you want more information about what the ray hits.";
tmpDef.returnType = "bool";
tmpDef.args = ["float startX", "float startY", "float startZ", "float endX", "float endY", "float endZ", "[ bool checkBuildings = true", "bool checkVehicles = true", "bool checkPeds = true", "bool checkObjects = true", "bool checkDummies = true", "bool seeThroughStuff = false", "bool ignoreSomeObjectsForCamera = false", "element ignoredElement = nil]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isWorldSoundEnabled";
tmpDef.description = "This function allows you to check if certain world sound effects have not been disabled by setWorldSoundEnabled";
tmpDef.returnType = "bool";
tmpDef.args = ["int group", "[ int index = -1 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isWorldSpecialPropertyEnabled";
tmpDef.description = "Checks if a special world property (cheat) is enabled or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["string propname"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "processLineOfSight";
tmpDef.description = "This function casts a ray between two points in the world, and tells you information about the point that was hit, if any. The two positions must be within the local player's draw distance as the collision data is not loaded outside this area, and the call will just fail as if the ray didn't hit.";
tmpDef.returnType = "bool hit, float x, float y, float z, element, float nx, float ny, float nz, int mat, float lighting, int piece, int worldModel, float x, float y, float z, float rx, float ry, float rz, int worldLOD";
tmpDef.args = ["float startX", "float startY", "float startZ", "float endX", "float endY", "float endZ", "[bool checkBuildings = true", "bool checkVehicles = true", "bool checkPlayers = true", "bool checkObjects = true", "bool checkDummies = true", "bool seeThroughStuff = false", "bool ignoreSomeObjectsForCamera = false", "bool shootThroughStuff = false", "element ignoredElement = nil", "bool includeWorldModelInformation = false", "bool bIncludeCarTyres]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetAmbientSounds";
tmpDef.description = "This function is used to reset the background sounds to the default setting.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetWorldSounds";
tmpDef.description = "This function is used to reset the world sounds to the default setting.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setAmbientSoundEnabled";
tmpDef.description = "This function allows you to disable some background sound effects.";
tmpDef.returnType = "bool";
tmpDef.args = ["string theType", "bool enable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBirdsEnabled";
tmpDef.description = "This function allows you to disable the flying birds.";
tmpDef.returnType = "bool";
tmpDef.args = ["bool enable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setInteriorFurnitureEnabled";
tmpDef.description = "This function toggles furniture generation in interiors with the specified room ID.";
tmpDef.returnType = "bool";
tmpDef.args = ["int roomID", "bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setNearClipDistance";
tmpDef.description = "This function sets the distance from the camera at which the world starts rendering. Do not use this function unless you have a specific reason to do so, as any values can cause artifacts and flickering problems. It can be used in many ways, including: reducing Z-fighting, creating more sophisticated first person views, allowing the camera to fly closer to the ground without passing through it, etcetera.";
tmpDef.returnType = "bool";
tmpDef.args = ["float distance"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "testLineAgainstWater";
tmpDef.description = "This function checks to see if a line between two points collides with the water. This is similar to processLineOfSight, but only collides with water. Waves are taken into account when testing the line.";
tmpDef.returnType = "bool float float float";
tmpDef.args = ["float startX", "float startY", "float startZ", "float endX", "float endY", "float endZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getKeyBoundToFunction";
tmpDef.description = "getKeyBoundToFunction allows retrieval of the first key bound to a function./key command gives bounded key to our chat function";
tmpDef.returnType = "string";
tmpDef.args = ["function theFunction"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "clearChatBox";
tmpDef.description = "This function clears the chatbox. It does not clear the console (F8) ";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "outputChatBox";
tmpDef.description = "This outputs the specified text string to the chatbox. It can be specified as a message to certain player(s) or all players.";
tmpDef.returnType = "";
tmpDef.args = ["string text [", "int r = 231", "int g = 217", "int b = 176", "bool colorCoded = false]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

// 1.5.6

tmpDef = new MTAFunction;
tmpDef.label = "extinguishFire";
tmpDef.description = "This function is used to extinguish all spreading fire, or spreading fire at specified coordinates.";
tmpDef.returnType = "bool";
tmpDef.args = ["[ float x", "float y", "float z [", "float radius = 1.0 ] ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

// New immediate argument
tmpDef = new MTAFunction;
tmpDef.label = "setWorldSoundEnabled";
tmpDef.description = "This function allows you to disable world sounds. A world sound is a sound effect which has not been caused by playSound or playSound3D.";
tmpDef.returnType = "bool";
tmpDef.args = ["int group", "[ int index = -1", "] bool enable [", "bool immediate = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

// New noiseEnable argument
tmpDef = new MTAFunction;
tmpDef.label = "setCameraGoggleEffect";
tmpDef.description = "This function allows you to set the camera's current goggle effect. This means you can activate nightvision or infrared effects by script";
tmpDef.returnType = "bool";
tmpDef.args = ["string goggleEffect [", "bool noiseEnabled = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

//1.5.7 by Vadya963
tmpDef = new MTAFunction;
tmpDef.label = "getSoundBufferLength";
tmpDef.description = "This function gets the buffer playback length of the specified sound. Works only with streams.";
tmpDef.returnType = "float";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getObjectProperty";
tmpDef.description = "This function gets a property of the specified object.";
tmpDef.returnType = "mixed";
tmpDef.args = ["object theObject"," string property"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setObjectProperty";
tmpDef.description = "This function sets a property of the specified object.";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject"," string property"," var value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "downloadFile";
tmpDef.description = "This function ensures the requested resource file is correct and then triggers onClientFileDownloadComplete. If the file has been previously downloaded and the CRC matches, the file will not be downloaded again but onClientFileDownloadComplete will still run. The file should also be included in the resource meta.xml with the download attribute set to 'false', see meta.xml for more details.";
tmpDef.returnType = "bool";
tmpDef.args = ["string fileName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getKeyboardLayout";
tmpDef.description = "This function gets the player's keyboard layout settings, which they are currently (keyboard layout can be changed at any moment) using at the time of invocation.";
tmpDef.returnType = "table";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetNearClipDistance";
tmpDef.description = "This function resets near clip distance set by setNearClipDistance.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBlurLevel";
tmpDef.description = "This function allows you to check the current blur level of a specified player.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetBlurLevel";
tmpDef.description = "Resets the motion blur level on the clients screen to default value (36).";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBlurLevel";
tmpDef.description = "Sets the motion blur level on the clients screen. Accepts a value between 0 and 255.";
tmpDef.returnType = "bool";
tmpDef.args = ["int level"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);
