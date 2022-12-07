gdjs.SettingsCode = {};
gdjs.SettingsCode.GDNewSpriteObjects1= [];
gdjs.SettingsCode.GDNewSpriteObjects2= [];
gdjs.SettingsCode.GDNewSprite2Objects1= [];
gdjs.SettingsCode.GDNewSprite2Objects2= [];
gdjs.SettingsCode.GDBgObjects1= [];
gdjs.SettingsCode.GDBgObjects2= [];
gdjs.SettingsCode.GDSliderObjects1= [];
gdjs.SettingsCode.GDSliderObjects2= [];
gdjs.SettingsCode.GDNewShapePainterObjects1= [];
gdjs.SettingsCode.GDNewShapePainterObjects2= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};


gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.advancedWindow.setFullScreenable(false, runtimeScene);
}{gdjs.evtTools.advancedWindow.setResizable(false, runtimeScene);
}{gdjs.evtTools.advancedWindow.setMinimizable(false, runtimeScene);
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, "StickFight - Settings");
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sounds\\Click_Sound_Effect.mp3", false, 50, 1);
}}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDNewSpriteObjects1.length = 0;
gdjs.SettingsCode.GDNewSpriteObjects2.length = 0;
gdjs.SettingsCode.GDNewSprite2Objects1.length = 0;
gdjs.SettingsCode.GDNewSprite2Objects2.length = 0;
gdjs.SettingsCode.GDBgObjects1.length = 0;
gdjs.SettingsCode.GDBgObjects2.length = 0;
gdjs.SettingsCode.GDSliderObjects1.length = 0;
gdjs.SettingsCode.GDSliderObjects2.length = 0;
gdjs.SettingsCode.GDNewShapePainterObjects1.length = 0;
gdjs.SettingsCode.GDNewShapePainterObjects2.length = 0;

gdjs.SettingsCode.eventsList0(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
