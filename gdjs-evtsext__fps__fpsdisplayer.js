
gdjs.evtsExt__FPS__FPSDisplayer = gdjs.evtsExt__FPS__FPSDisplayer || {};

/**
 * Behavior generated from FPS Displayer
 */
gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer = class FPSDisplayer extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.prefix = behaviorData.prefix !== undefined ? behaviorData.prefix : "FPS: ";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.prefix !== newBehaviorData.prefix)
      this._behaviorData.prefix = newBehaviorData.prefix;

    return true;
  }

  // Properties:
  
  _getprefix() {
    return this._behaviorData.prefix !== undefined ? this._behaviorData.prefix : "FPS: ";
  }
  _setprefix(newValue) {
    this._behaviorData.prefix = newValue;
  }
}

// Methods:
gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1[i].setString((gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getprefix()) + gdjs.evtTools.common.toString(gdjs.evtsExt__FPS__FPS.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};

gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerBehavior("FPS::FPSDisplayer", gdjs.evtsExt__FPS__FPSDisplayer.FPSDisplayer);
