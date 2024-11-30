
if (typeof gdjs.evtsExt__LoadCustomImage__Action_image6 !== "undefined") {
  gdjs.evtsExt__LoadCustomImage__Action_image6.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LoadCustomImage__Action_image6 = {};


gdjs.evtsExt__LoadCustomImage__Action_image6.userFunc0xafb7f8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const customImage = runtimeScene.getVariables().get("__CustomizableImage");
const objects = eventsFunctionContext.getObjects("Object");
const id = eventsFunctionContext.getArgument("ID");
customImage.getChild(id).setBoolean(false);

for (const obj of objects) {
  obj.getVariables().get(id).setBoolean(false);
}

// Crear el input para cargar archivos.
const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.accept = "image/jpeg, image/png";
fileInput.addEventListener("change", handleFiles, false);
fileInput.click();

// Crear evento para arrastrar y soltar en el objeto textInput.
const textInputs = eventsFunctionContext.getObjects("TextInput");

for (const textInput of textInputs) {
  const domElement = textInput.getRendererObject();

  // Configurar eventos de arrastre.
  domElement.addEventListener("dragover", (event) => {
    event.preventDefault(); // Permitir el drop.
    domElement.style.border = "2px dashed #00f"; // Visual para indicar que es un área activa.
  });

  domElement.addEventListener("dragleave", () => {
    domElement.style.border = ""; // Quitar el estilo.
  });

  domElement.addEventListener("drop", (event) => {
    event.preventDefault();
    domElement.style.border = ""; // Restaurar el estilo.

    const file = event.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  });
}

// Función para manejar un archivo.
function handleFile(file) {
  const fileNameLowerCased = file.name.toLowerCase();

  if (/\.(jpg|jpeg|png)$/.test(fileNameLowerCased)) {
    const img = new Image();
    const objectURL = URL.createObjectURL(file);
    img.src = objectURL;

    img.onload = function () {
      URL.revokeObjectURL(objectURL);
      const fs = require('fs');
      const path = require('path');
      const folderPath = path.join(process.cwd(), eventsFunctionContext.getArgument("Folder"));

      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }

      const reader = new FileReader();
      reader.onload = function (event) {
        const buffer = Buffer.from(event.target.result);
        const filePath = path.join(folderPath, eventsFunctionContext.getArgument("Image"));

        fs.writeFile(filePath, buffer, (err) => {
          if (err) {
            return;
          }

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
        });
      };
      reader.readAsArrayBuffer(file);
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

// Reutilizar la función para el input y drag & drop.
function handleFiles() {
  const file = fileInput.files[0];
  if (file) {
    handleFile(file);
  }
}


};
gdjs.evtsExt__LoadCustomImage__Action_image6.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__LoadCustomImage__Action_image6.userFunc0xafb7f8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__LoadCustomImage__Action_image6.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__LoadCustomImage__Action_image6.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__LoadCustomImage__Action_image6.registeredGdjsCallbacks = [];