gdjs._50_95winsCode = {};
gdjs._50_95winsCode.GDbgObjects1= [];
gdjs._50_95winsCode.GDbgObjects2= [];
gdjs._50_95winsCode.GDNewSpriteObjects1= [];
gdjs._50_95winsCode.GDNewSpriteObjects2= [];
gdjs._50_95winsCode.GDNewTextObjects1= [];
gdjs._50_95winsCode.GDNewTextObjects2= [];

gdjs._50_95winsCode.conditionTrue_0 = {val:false};
gdjs._50_95winsCode.condition0IsTrue_0 = {val:false};
gdjs._50_95winsCode.condition1IsTrue_0 = {val:false};


gdjs._50_95winsCode.asyncCallback10030756 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}
gdjs._50_95winsCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs._50_95winsCode.asyncCallback10030756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50_95winsCode.eventsList1 = function(runtimeScene) {

{


gdjs._50_95winsCode.condition0IsTrue_0.val = false;
{
gdjs._50_95winsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._50_95winsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Player 2 Victory");
}
{ //Subevents
gdjs._50_95winsCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs._50_95winsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50_95winsCode.GDbgObjects1.length = 0;
gdjs._50_95winsCode.GDbgObjects2.length = 0;
gdjs._50_95winsCode.GDNewSpriteObjects1.length = 0;
gdjs._50_95winsCode.GDNewSpriteObjects2.length = 0;
gdjs._50_95winsCode.GDNewTextObjects1.length = 0;
gdjs._50_95winsCode.GDNewTextObjects2.length = 0;

gdjs._50_95winsCode.eventsList1(runtimeScene);
return;

}

gdjs['_50_95winsCode'] = gdjs._50_95winsCode;
