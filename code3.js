gdjs.Map_32SelectCode = {};
gdjs.Map_32SelectCode.GDNewSpriteObjects1= [];
gdjs.Map_32SelectCode.GDNewSpriteObjects2= [];
gdjs.Map_32SelectCode.GDback_95arrowObjects1= [];
gdjs.Map_32SelectCode.GDback_95arrowObjects2= [];
gdjs.Map_32SelectCode.GDMapsObjects1= [];
gdjs.Map_32SelectCode.GDMapsObjects2= [];
gdjs.Map_32SelectCode.GDDevils_95ShardObjects1= [];
gdjs.Map_32SelectCode.GDDevils_95ShardObjects2= [];

gdjs.Map_32SelectCode.conditionTrue_0 = {val:false};
gdjs.Map_32SelectCode.condition0IsTrue_0 = {val:false};
gdjs.Map_32SelectCode.condition1IsTrue_0 = {val:false};
gdjs.Map_32SelectCode.condition2IsTrue_0 = {val:false};


gdjs.Map_32SelectCode.asyncCallback9971012 = function (runtimeScene, asyncObjectsList) {
}
gdjs.Map_32SelectCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Map_32SelectCode.asyncCallback9971012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Map_32SelectCode.mapOfGDgdjs_46Map_9532SelectCode_46GDback_9595arrowObjects1Objects = Hashtable.newFrom({"back_arrow": gdjs.Map_32SelectCode.GDback_95arrowObjects1});
gdjs.Map_32SelectCode.mapOfGDgdjs_46Map_9532SelectCode_46GDDevils_9595ShardObjects1Objects = Hashtable.newFrom({"Devils_Shard": gdjs.Map_32SelectCode.GDDevils_95ShardObjects1});
gdjs.Map_32SelectCode.mapOfGDgdjs_46Map_9532SelectCode_46GDDevils_9595ShardObjects1Objects = Hashtable.newFrom({"Devils_Shard": gdjs.Map_32SelectCode.GDDevils_95ShardObjects1});
gdjs.Map_32SelectCode.mapOfGDgdjs_46Map_9532SelectCode_46GDDevils_9595ShardObjects1Objects = Hashtable.newFrom({"Devils_Shard": gdjs.Map_32SelectCode.GDDevils_95ShardObjects1});
gdjs.Map_32SelectCode.eventsList1 = function(runtimeScene) {

{


gdjs.Map_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Map_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Map_32SelectCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Map_32SelectCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back_arrow"), gdjs.Map_32SelectCode.GDback_95arrowObjects1);

gdjs.Map_32SelectCode.condition0IsTrue_0.val = false;
gdjs.Map_32SelectCode.condition1IsTrue_0.val = false;
{
gdjs.Map_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Map_32SelectCode.mapOfGDgdjs_46Map_9532SelectCode_46GDback_9595arrowObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Map_32SelectCode.condition0IsTrue_0.val ) {
{
gdjs.Map_32SelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Map_32SelectCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sounds\\Click_Sound_Effect.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Devils_Shard"), gdjs.Map_32SelectCode.GDDevils_95ShardObjects1);

gdjs.Map_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Map_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Map_32SelectCode.mapOfGDgdjs_46Map_9532SelectCode_46GDDevils_9595ShardObjects1Objects, runtimeScene, true, false);
}if (gdjs.Map_32SelectCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Map_32SelectCode.GDDevils_95ShardObjects1 */
{for(var i = 0, len = gdjs.Map_32SelectCode.GDDevils_95ShardObjects1.length ;i < len;++i) {
    gdjs.Map_32SelectCode.GDDevils_95ShardObjects1[i].play();
}
}{for(var i = 0, len = gdjs.Map_32SelectCode.GDDevils_95ShardObjects1.length ;i < len;++i) {
    gdjs.Map_32SelectCode.GDDevils_95ShardObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.Map_32SelectCode.GDDevils_95ShardObjects1.length ;i < len;++i) {
    gdjs.Map_32SelectCode.GDDevils_95ShardObjects1[i].setLoop(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Devils_Shard"), gdjs.Map_32SelectCode.GDDevils_95ShardObjects1);

gdjs.Map_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Map_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Map_32SelectCode.mapOfGDgdjs_46Map_9532SelectCode_46GDDevils_9595ShardObjects1Objects, runtimeScene, true, true);
}if (gdjs.Map_32SelectCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Map_32SelectCode.GDDevils_95ShardObjects1 */
{for(var i = 0, len = gdjs.Map_32SelectCode.GDDevils_95ShardObjects1.length ;i < len;++i) {
    gdjs.Map_32SelectCode.GDDevils_95ShardObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Map_32SelectCode.GDDevils_95ShardObjects1.length ;i < len;++i) {
    gdjs.Map_32SelectCode.GDDevils_95ShardObjects1[i].setCurrentTime(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Devils_Shard"), gdjs.Map_32SelectCode.GDDevils_95ShardObjects1);

gdjs.Map_32SelectCode.condition0IsTrue_0.val = false;
gdjs.Map_32SelectCode.condition1IsTrue_0.val = false;
{
gdjs.Map_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Map_32SelectCode.mapOfGDgdjs_46Map_9532SelectCode_46GDDevils_9595ShardObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Map_32SelectCode.condition0IsTrue_0.val ) {
{
gdjs.Map_32SelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Map_32SelectCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Devils Shard", false);
}}

}


{


gdjs.Map_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Map_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
}if (gdjs.Map_32SelectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sounds\\Click_Sound_Effect.mp3", false, 50, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.Map_32SelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Map_32SelectCode.GDNewSpriteObjects1.length = 0;
gdjs.Map_32SelectCode.GDNewSpriteObjects2.length = 0;
gdjs.Map_32SelectCode.GDback_95arrowObjects1.length = 0;
gdjs.Map_32SelectCode.GDback_95arrowObjects2.length = 0;
gdjs.Map_32SelectCode.GDMapsObjects1.length = 0;
gdjs.Map_32SelectCode.GDMapsObjects2.length = 0;
gdjs.Map_32SelectCode.GDDevils_95ShardObjects1.length = 0;
gdjs.Map_32SelectCode.GDDevils_95ShardObjects2.length = 0;

gdjs.Map_32SelectCode.eventsList1(runtimeScene);
return;

}

gdjs['Map_32SelectCode'] = gdjs.Map_32SelectCode;
