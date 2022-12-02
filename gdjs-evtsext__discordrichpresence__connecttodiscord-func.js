
if (typeof gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord !== "undefined") {
  gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord = {};

gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.conditionTrue_0 = {val:false};
gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.userFunc0x9218d0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const remote = runtimeScene.getGame().getRenderer().getElectronRemote
    ? runtimeScene.getGame().getRenderer().getElectronRemote()
    : runtimeScene.getGame().getRenderer().getElectron() && runtimeScene.getGame().getRenderer().getElectron().remote;

if (!remote) return;
const DRP = remote.require("discord-rich-presence");

if (gdjs.evtTools.discordRP.client) gdjs.evtTools.discordRP.client.disconnect();
gdjs.evtTools.discordRP.client = new DRP(eventsFunctionContext.getArgument("clientId"))
    .on("error", (e) => gdjs.Logger.getLoggerOutput().log("Discord Rich Presence", e));

window.addEventListener("beforeunload", () => gdjs.evtTools.discordRP.client.disconnect());

};
gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.userFunc0x9218d0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.func = function(runtimeScene, clientId, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "clientId") return clientId;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.registeredGdjsCallbacks = [];