gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDBackgroundObjects3= [];
gdjs.Main_32MenuCode.GDStickManObjects1= [];
gdjs.Main_32MenuCode.GDStickManObjects2= [];
gdjs.Main_32MenuCode.GDStickManObjects3= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects1= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects2= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects3= [];
gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1= [];
gdjs.Main_32MenuCode.GDPlay_95ButtonObjects2= [];
gdjs.Main_32MenuCode.GDPlay_95ButtonObjects3= [];
gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1= [];
gdjs.Main_32MenuCode.GDSettings_95ButtonObjects2= [];
gdjs.Main_32MenuCode.GDSettings_95ButtonObjects3= [];
gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1= [];
gdjs.Main_32MenuCode.GDQuit_95ButtonObjects2= [];
gdjs.Main_32MenuCode.GDQuit_95ButtonObjects3= [];
gdjs.Main_32MenuCode.GDMain_95Menu_95BGObjects1= [];
gdjs.Main_32MenuCode.GDMain_95Menu_95BGObjects2= [];
gdjs.Main_32MenuCode.GDMain_95Menu_95BGObjects3= [];
gdjs.Main_32MenuCode.GDNewSprite3Objects1= [];
gdjs.Main_32MenuCode.GDNewSprite3Objects2= [];
gdjs.Main_32MenuCode.GDNewSprite3Objects3= [];
gdjs.Main_32MenuCode.GDNewSprite4Objects1= [];
gdjs.Main_32MenuCode.GDNewSprite4Objects2= [];
gdjs.Main_32MenuCode.GDNewSprite4Objects3= [];
gdjs.Main_32MenuCode.GDSoung_95InfoObjects1= [];
gdjs.Main_32MenuCode.GDSoung_95InfoObjects2= [];
gdjs.Main_32MenuCode.GDSoung_95InfoObjects3= [];
gdjs.Main_32MenuCode.GDbgObjects1= [];
gdjs.Main_32MenuCode.GDbgObjects2= [];
gdjs.Main_32MenuCode.GDbgObjects3= [];
gdjs.Main_32MenuCode.GDSettingsObjects1= [];
gdjs.Main_32MenuCode.GDSettingsObjects2= [];
gdjs.Main_32MenuCode.GDSettingsObjects3= [];
gdjs.Main_32MenuCode.GDFPSObjects1= [];
gdjs.Main_32MenuCode.GDFPSObjects2= [];
gdjs.Main_32MenuCode.GDFPSObjects3= [];
gdjs.Main_32MenuCode.GDGithubObjects1= [];
gdjs.Main_32MenuCode.GDGithubObjects2= [];
gdjs.Main_32MenuCode.GDGithubObjects3= [];
gdjs.Main_32MenuCode.GDSound_95on_95offObjects1= [];
gdjs.Main_32MenuCode.GDSound_95on_95offObjects2= [];
gdjs.Main_32MenuCode.GDSound_95on_95offObjects3= [];
gdjs.Main_32MenuCode.GDP_95KeyObjects1= [];
gdjs.Main_32MenuCode.GDP_95KeyObjects2= [];
gdjs.Main_32MenuCode.GDP_95KeyObjects3= [];
gdjs.Main_32MenuCode.GDS_95KeyObjects1= [];
gdjs.Main_32MenuCode.GDS_95KeyObjects2= [];
gdjs.Main_32MenuCode.GDS_95KeyObjects3= [];
gdjs.Main_32MenuCode.GDPlayer_951Objects1= [];
gdjs.Main_32MenuCode.GDPlayer_951Objects2= [];
gdjs.Main_32MenuCode.GDPlayer_951Objects3= [];
gdjs.Main_32MenuCode.GDBackground_95StaticObjects1= [];
gdjs.Main_32MenuCode.GDBackground_95StaticObjects2= [];
gdjs.Main_32MenuCode.GDBackground_95StaticObjects3= [];
gdjs.Main_32MenuCode.GDPlayer_952Objects1= [];
gdjs.Main_32MenuCode.GDPlayer_952Objects2= [];
gdjs.Main_32MenuCode.GDPlayer_952Objects3= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_1 = {val:false};


gdjs.Main_32MenuCode.asyncCallback9930956 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Player_1"), gdjs.Main_32MenuCode.GDPlayer_951Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player_2"), gdjs.Main_32MenuCode.GDPlayer_952Objects2);
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.Main_32MenuCode.GDbgObjects2);
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Main Menu");
}{gdjs.evtTools.advancedWindow.setFullScreenable(false, runtimeScene);
}{gdjs.evtTools.advancedWindow.setMinimizable(false, runtimeScene);
}{gdjs.evtTools.advancedWindow.setResizable(false, runtimeScene);
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, "StickFight- Main Menu");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDbgObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDbgObjects2[i].play();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayer_951Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayer_951Objects2[i].play();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayer_952Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayer_952Objects2[i].play();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayer_951Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayer_951Objects2[i].setLoop(true);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayer_952Objects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayer_952Objects2[i].setLoop(true);
}
}{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "", "Main Menu", 0, 0, "StickFight", "StickFight Logo", "", "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback9930956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlay_9595ButtonObjects1Objects = Hashtable.newFrom({"Play_Button": gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlay_9595ButtonObjects1Objects = Hashtable.newFrom({"Play_Button": gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDSettings_9595ButtonObjects1Objects = Hashtable.newFrom({"Settings_Button": gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDSettings_9595ButtonObjects1Objects = Hashtable.newFrom({"Settings_Button": gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuit_9595ButtonObjects1Objects = Hashtable.newFrom({"Quit_Button": gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuit_9595ButtonObjects1Objects = Hashtable.newFrom({"Quit_Button": gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuit_9595ButtonObjects1Objects = Hashtable.newFrom({"Quit_Button": gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlay_9595ButtonObjects1Objects = Hashtable.newFrom({"Play_Button": gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDGithubObjects1Objects = Hashtable.newFrom({"Github": gdjs.Main_32MenuCode.GDGithubObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDSound_9595on_9595offObjects1Objects = Hashtable.newFrom({"Sound_on_off": gdjs.Main_32MenuCode.GDSound_95on_95offObjects1});
gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Main_32MenuCode.GDSound_95on_95offObjects1, gdjs.Main_32MenuCode.GDSound_95on_95offObjects2);


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDSound_95on_95offObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDSound_95on_95offObjects2[i].getVariableBoolean(gdjs.Main_32MenuCode.GDSound_95on_95offObjects2[i].getVariables().getFromIndex(0), false) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDSound_95on_95offObjects2[k] = gdjs.Main_32MenuCode.GDSound_95on_95offObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDSound_95on_95offObjects2.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDSound_95on_95offObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSound_95on_95offObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSound_95on_95offObjects2[i].setAnimationName("Sound_On");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{

/* Reuse gdjs.Main_32MenuCode.GDSound_95on_95offObjects1 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDSound_95on_95offObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDSound_95on_95offObjects1[i].getVariableBoolean(gdjs.Main_32MenuCode.GDSound_95on_95offObjects1[i].getVariables().getFromIndex(0), true) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDSound_95on_95offObjects1[k] = gdjs.Main_32MenuCode.GDSound_95on_95offObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDSound_95on_95offObjects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDSound_95on_95offObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSound_95on_95offObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSound_95on_95offObjects1[i].setAnimationName("Sound_Off");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlay_9595ButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1[i].setAnimationName("Play_Pressed");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlay_9595ButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1[i].setAnimationName("Play_Button");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings_Button"), gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDSettings_9595ButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1[i].setAnimationName("Settings_Pressed");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings_Button"), gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDSettings_9595ButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1[i].setAnimationName("Settings");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit_Button"), gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuit_9595ButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1[i].setAnimationName("Quit_Pressed");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit_Button"), gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuit_9595ButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1[i].setAnimationName("Quit");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit_Button"), gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuit_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlay_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map Select", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sounds\\Click_Sound_Effect.mp3", false, 50, 1);
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Github"), gdjs.Main_32MenuCode.GDGithubObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDGithubObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition2IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9943844);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://github.com/unofficialdxnny/StickFight", runtimeScene);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sounds\\Click_Sound_Effect.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound_on_off"), gdjs.Main_32MenuCode.GDSound_95on_95offObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDSound_9595on_9595offObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDSound_95on_95offObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSound_95on_95offObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSound_95on_95offObjects1[i].toggleVariableBoolean(gdjs.Main_32MenuCode.GDSound_95on_95offObjects1[i].getVariables().getFromIndex(0));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map Select", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sounds\\Click_Sound_Effect.mp3", false, 50, 1);
}}

}


{


{
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects3.length = 0;
gdjs.Main_32MenuCode.GDStickManObjects1.length = 0;
gdjs.Main_32MenuCode.GDStickManObjects2.length = 0;
gdjs.Main_32MenuCode.GDStickManObjects3.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects3.length = 0;
gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlay_95ButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlay_95ButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDSettings_95ButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDSettings_95ButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuit_95ButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuit_95ButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDMain_95Menu_95BGObjects1.length = 0;
gdjs.Main_32MenuCode.GDMain_95Menu_95BGObjects2.length = 0;
gdjs.Main_32MenuCode.GDMain_95Menu_95BGObjects3.length = 0;
gdjs.Main_32MenuCode.GDNewSprite3Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewSprite3Objects2.length = 0;
gdjs.Main_32MenuCode.GDNewSprite3Objects3.length = 0;
gdjs.Main_32MenuCode.GDNewSprite4Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewSprite4Objects2.length = 0;
gdjs.Main_32MenuCode.GDNewSprite4Objects3.length = 0;
gdjs.Main_32MenuCode.GDSoung_95InfoObjects1.length = 0;
gdjs.Main_32MenuCode.GDSoung_95InfoObjects2.length = 0;
gdjs.Main_32MenuCode.GDSoung_95InfoObjects3.length = 0;
gdjs.Main_32MenuCode.GDbgObjects1.length = 0;
gdjs.Main_32MenuCode.GDbgObjects2.length = 0;
gdjs.Main_32MenuCode.GDbgObjects3.length = 0;
gdjs.Main_32MenuCode.GDSettingsObjects1.length = 0;
gdjs.Main_32MenuCode.GDSettingsObjects2.length = 0;
gdjs.Main_32MenuCode.GDSettingsObjects3.length = 0;
gdjs.Main_32MenuCode.GDFPSObjects1.length = 0;
gdjs.Main_32MenuCode.GDFPSObjects2.length = 0;
gdjs.Main_32MenuCode.GDFPSObjects3.length = 0;
gdjs.Main_32MenuCode.GDGithubObjects1.length = 0;
gdjs.Main_32MenuCode.GDGithubObjects2.length = 0;
gdjs.Main_32MenuCode.GDGithubObjects3.length = 0;
gdjs.Main_32MenuCode.GDSound_95on_95offObjects1.length = 0;
gdjs.Main_32MenuCode.GDSound_95on_95offObjects2.length = 0;
gdjs.Main_32MenuCode.GDSound_95on_95offObjects3.length = 0;
gdjs.Main_32MenuCode.GDP_95KeyObjects1.length = 0;
gdjs.Main_32MenuCode.GDP_95KeyObjects2.length = 0;
gdjs.Main_32MenuCode.GDP_95KeyObjects3.length = 0;
gdjs.Main_32MenuCode.GDS_95KeyObjects1.length = 0;
gdjs.Main_32MenuCode.GDS_95KeyObjects2.length = 0;
gdjs.Main_32MenuCode.GDS_95KeyObjects3.length = 0;
gdjs.Main_32MenuCode.GDPlayer_951Objects1.length = 0;
gdjs.Main_32MenuCode.GDPlayer_951Objects2.length = 0;
gdjs.Main_32MenuCode.GDPlayer_951Objects3.length = 0;
gdjs.Main_32MenuCode.GDBackground_95StaticObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackground_95StaticObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackground_95StaticObjects3.length = 0;
gdjs.Main_32MenuCode.GDPlayer_952Objects1.length = 0;
gdjs.Main_32MenuCode.GDPlayer_952Objects2.length = 0;
gdjs.Main_32MenuCode.GDPlayer_952Objects3.length = 0;

gdjs.Main_32MenuCode.eventsList2(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
