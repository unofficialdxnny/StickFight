gdjs.Loading_32ScreenCode = {};
gdjs.Loading_32ScreenCode.GDFPSObjects1= [];
gdjs.Loading_32ScreenCode.GDFPSObjects2= [];
gdjs.Loading_32ScreenCode.GDLoading_95BackgroundObjects1= [];
gdjs.Loading_32ScreenCode.GDLoading_95BackgroundObjects2= [];
gdjs.Loading_32ScreenCode.GDLoading_95Background_95VideoObjects1= [];
gdjs.Loading_32ScreenCode.GDLoading_95Background_95VideoObjects2= [];
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95outObjects1= [];
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95outObjects2= [];
gdjs.Loading_32ScreenCode.GDLoading_95scroll_95up_95with_95ninjaObjects1= [];
gdjs.Loading_32ScreenCode.GDLoading_95scroll_95up_95with_95ninjaObjects2= [];
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95out_95colly_95pcObjects1= [];
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95out_95colly_95pcObjects2= [];
gdjs.Loading_32ScreenCode.GDLoading_95Animation_95for_95StickFightObjects1= [];
gdjs.Loading_32ScreenCode.GDLoading_95Animation_95for_95StickFightObjects2= [];
gdjs.Loading_32ScreenCode.GDunder_95developmentObjects1= [];
gdjs.Loading_32ScreenCode.GDunder_95developmentObjects2= [];
gdjs.Loading_32ScreenCode.GDGitHubObjects1= [];
gdjs.Loading_32ScreenCode.GDGitHubObjects2= [];
gdjs.Loading_32ScreenCode.GDPressObjects1= [];
gdjs.Loading_32ScreenCode.GDPressObjects2= [];
gdjs.Loading_32ScreenCode.GDSpaceObjects1= [];
gdjs.Loading_32ScreenCode.GDSpaceObjects2= [];
gdjs.Loading_32ScreenCode.GDToContinueObjects1= [];
gdjs.Loading_32ScreenCode.GDToContinueObjects2= [];
gdjs.Loading_32ScreenCode.GDPress_95Any_95KeyObjects1= [];
gdjs.Loading_32ScreenCode.GDPress_95Any_95KeyObjects2= [];
gdjs.Loading_32ScreenCode.GDBackground_95FinalObjects1= [];
gdjs.Loading_32ScreenCode.GDBackground_95FinalObjects2= [];

gdjs.Loading_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Loading_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Loading_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Loading_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Loading_32ScreenCode.condition3IsTrue_0 = {val:false};
gdjs.Loading_32ScreenCode.conditionTrue_1 = {val:false};
gdjs.Loading_32ScreenCode.condition0IsTrue_1 = {val:false};
gdjs.Loading_32ScreenCode.condition1IsTrue_1 = {val:false};
gdjs.Loading_32ScreenCode.condition2IsTrue_1 = {val:false};
gdjs.Loading_32ScreenCode.condition3IsTrue_1 = {val:false};


gdjs.Loading_32ScreenCode.asyncCallback10790676 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Background_Final"), gdjs.Loading_32ScreenCode.GDBackground_95FinalObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sounds\\Background Music.mp3", false, 5, 1);
}{gdjs.evtTools.advancedWindow.setResizable(false, runtimeScene);
}{gdjs.evtTools.advancedWindow.setMinimizable(false, runtimeScene);
}{for(var i = 0, len = gdjs.Loading_32ScreenCode.GDBackground_95FinalObjects2.length ;i < len;++i) {
    gdjs.Loading_32ScreenCode.GDBackground_95FinalObjects2[i].play();
}
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, "StickFight");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sounds\\Background_Music(Creative_Commons).mp3", false, 10, 1);
}{gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.func(runtimeScene, "1046748678733430804", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "", "", 0, 0, "https://cdn.discordapp.com/app-icons/1046748678733430804/d2110c9e8035d89d1d25b72a7ac9f241.png", "Logo", "", "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.Loading_32ScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Loading_32ScreenCode.asyncCallback10790676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Loading_32ScreenCode.mapOfGDgdjs_46Loading_9532ScreenCode_46GDGitHubObjects1Objects = Hashtable.newFrom({"GitHub": gdjs.Loading_32ScreenCode.GDGitHubObjects1});
gdjs.Loading_32ScreenCode.eventsList1 = function(runtimeScene) {

{


gdjs.Loading_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Loading_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Loading_32ScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Loading_32ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GitHub"), gdjs.Loading_32ScreenCode.GDGitHubObjects1);

gdjs.Loading_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Loading_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.Loading_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.Loading_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Loading_32ScreenCode.mapOfGDgdjs_46Loading_9532ScreenCode_46GDGitHubObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Loading_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Loading_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Loading_32ScreenCode.condition1IsTrue_0.val ) {
{
{gdjs.Loading_32ScreenCode.conditionTrue_1 = gdjs.Loading_32ScreenCode.condition2IsTrue_0;
gdjs.Loading_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10793132);
}
}}
}
if (gdjs.Loading_32ScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://github.com/unofficialdxnny/StickFight", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Background_Final"), gdjs.Loading_32ScreenCode.GDBackground_95FinalObjects1);

gdjs.Loading_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Loading_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.Loading_32ScreenCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Loading_32ScreenCode.GDBackground_95FinalObjects1.length;i<l;++i) {
    if ( gdjs.Loading_32ScreenCode.GDBackground_95FinalObjects1[i].isPlayed() ) {
        gdjs.Loading_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Loading_32ScreenCode.GDBackground_95FinalObjects1[k] = gdjs.Loading_32ScreenCode.GDBackground_95FinalObjects1[i];
        ++k;
    }
}
gdjs.Loading_32ScreenCode.GDBackground_95FinalObjects1.length = k;}if ( gdjs.Loading_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Loading_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.Loading_32ScreenCode.condition1IsTrue_0.val ) {
{
{gdjs.Loading_32ScreenCode.conditionTrue_1 = gdjs.Loading_32ScreenCode.condition2IsTrue_0;
gdjs.Loading_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10794492);
}
}}
}
if (gdjs.Loading_32ScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sounds\\Click_Sound_Effect.mp3", false, 100, 1);
}}

}


{


{
}

}


};

gdjs.Loading_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Loading_32ScreenCode.GDFPSObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDFPSObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95BackgroundObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95BackgroundObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95Background_95VideoObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95Background_95VideoObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95outObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95outObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95scroll_95up_95with_95ninjaObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95scroll_95up_95with_95ninjaObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95out_95colly_95pcObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95out_95colly_95pcObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95Animation_95for_95StickFightObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95Animation_95for_95StickFightObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDunder_95developmentObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDunder_95developmentObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDGitHubObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDGitHubObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDPressObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDPressObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDSpaceObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDSpaceObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDToContinueObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDToContinueObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDPress_95Any_95KeyObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDPress_95Any_95KeyObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDBackground_95FinalObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDBackground_95FinalObjects2.length = 0;

gdjs.Loading_32ScreenCode.eventsList1(runtimeScene);
return;

}

gdjs['Loading_32ScreenCode'] = gdjs.Loading_32ScreenCode;
