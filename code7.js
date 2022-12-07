gdjs.LoginCode = {};
gdjs.LoginCode.GDbgObjects1= [];
gdjs.LoginCode.GDbgObjects2= [];
gdjs.LoginCode.GDEmailObjects1= [];
gdjs.LoginCode.GDEmailObjects2= [];
gdjs.LoginCode.GDEmailsObjects1= [];
gdjs.LoginCode.GDEmailsObjects2= [];

gdjs.LoginCode.conditionTrue_0 = {val:false};
gdjs.LoginCode.condition0IsTrue_0 = {val:false};


gdjs.LoginCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.LoginCode.GDEmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("Emails"), gdjs.LoginCode.GDEmailsObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDEmailsObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDEmailsObjects1[i].setString("" + (( gdjs.LoginCode.GDEmailObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDEmailObjects1[0].getString()));
}
}{for(var i = 0, len = gdjs.LoginCode.GDEmailsObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDEmailsObjects1[i].setOutline("255;255;255", 1);
}
}{for(var i = 0, len = gdjs.LoginCode.GDEmailsObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDEmailsObjects1[i].setString(gdjs.evtTools.string.subStr((gdjs.LoginCode.GDEmailsObjects1[i].getString()), 0, 20));
}
}}

}


};

gdjs.LoginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoginCode.GDbgObjects1.length = 0;
gdjs.LoginCode.GDbgObjects2.length = 0;
gdjs.LoginCode.GDEmailObjects1.length = 0;
gdjs.LoginCode.GDEmailObjects2.length = 0;
gdjs.LoginCode.GDEmailsObjects1.length = 0;
gdjs.LoginCode.GDEmailsObjects2.length = 0;

gdjs.LoginCode.eventsList0(runtimeScene);
return;

}

gdjs['LoginCode'] = gdjs.LoginCode;
