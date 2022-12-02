gdjs._49_95winsCode = {};
gdjs._49_95winsCode.GDBGObjects1= [];
gdjs._49_95winsCode.GDBGObjects2= [];
gdjs._49_95winsCode.GDNewTextObjects1= [];
gdjs._49_95winsCode.GDNewTextObjects2= [];
gdjs._49_95winsCode.GDNewText2Objects1= [];
gdjs._49_95winsCode.GDNewText2Objects2= [];

gdjs._49_95winsCode.conditionTrue_0 = {val:false};
gdjs._49_95winsCode.condition0IsTrue_0 = {val:false};
gdjs._49_95winsCode.condition1IsTrue_0 = {val:false};


gdjs._49_95winsCode.asyncCallback10029812 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}
gdjs._49_95winsCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs._49_95winsCode.asyncCallback10029812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._49_95winsCode.eventsList1 = function(runtimeScene) {

{


gdjs._49_95winsCode.condition0IsTrue_0.val = false;
{
gdjs._49_95winsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._49_95winsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Player 1 Victory");
}
{ //Subevents
gdjs._49_95winsCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs._49_95winsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49_95winsCode.GDBGObjects1.length = 0;
gdjs._49_95winsCode.GDBGObjects2.length = 0;
gdjs._49_95winsCode.GDNewTextObjects1.length = 0;
gdjs._49_95winsCode.GDNewTextObjects2.length = 0;
gdjs._49_95winsCode.GDNewText2Objects1.length = 0;
gdjs._49_95winsCode.GDNewText2Objects2.length = 0;

gdjs._49_95winsCode.eventsList1(runtimeScene);
return;

}

gdjs['_49_95winsCode'] = gdjs._49_95winsCode;
