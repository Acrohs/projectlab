
if (typeof gdjs.evtsExt__LoadCustomImage__Action_Image1 !== "undefined") {
  gdjs.evtsExt__LoadCustomImage__Action_Image1.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LoadCustomImage__Action_Image1 = {};
gdjs.evtsExt__LoadCustomImage__Action_Image1.GDObjectObjects1= [];


gdjs.evtsExt__LoadCustomImage__Action_Image1.userFunc0xafb7f8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const customImage = runtimeScene.getVariables().get("__CustomizableImage");
const objects = eventsFunctionContext.getObjects("Object");
const id = eventsFunctionContext.getArgument("ID");
customImage.getChild(id).setBoolean(false);

for (const obj of objects) {
  obj.getVariables().get(id).setBoolean(false);
}

const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.accept = "image/jpeg, image/png";
fileInput.addEventListener("change", handleFiles, false);
fileInput.click();

function handleFiles() {
  const file = fileInput.files[0];

  if (file) {
    const fileNameLowerCased = file.name.toLowerCase();

    if (/\.(jpg|jpeg|png)$/.test(fileNameLowerCased)) {
      const img = new Image();
      const objectURL = URL.createObjectURL(file);
      img.src = objectURL;

      img.onload = function () {
        URL.revokeObjectURL(objectURL);
        const texture = new PIXI.Texture(new PIXI.BaseTexture(img));

        for (const obj of objects) {
          if (eventsFunctionContext.getArgument("Mode")) {
            obj.getRendererObject().texture.baseTexture = texture.baseTexture;
          } else {
            obj.getRendererObject().texture = texture;
          }
          obj.getVariables().get(id).setBoolean(true);
        }
        customImage.getChild(id).setBoolean(true);
      };

      img.onerror = function () {
        customImage.getChild(id).setBoolean(false);
        
        for (const obj of objects) {
          obj.getVariables().get(id).setBoolean(false);
        }
      };
    } else {
      fileInput.value = null;
    }
  }
}
};
gdjs.evtsExt__LoadCustomImage__Action_Image1.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__LoadCustomImage__Action_Image1.userFunc0xafb7f8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__LoadCustomImage__Action_Image1.func = function(runtimeScene, Object, ID, Mode, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LoadCustomImage"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LoadCustomImage"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
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
if (argName === "ID") return ID;
if (argName === "Mode") return Mode;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__LoadCustomImage__Action_Image1.GDObjectObjects1.length = 0;

gdjs.evtsExt__LoadCustomImage__Action_Image1.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LoadCustomImage__Action_Image1.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__LoadCustomImage__Action_Image1.registeredGdjsCallbacks = [];