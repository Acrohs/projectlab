gdjs.LoginCode = {};
gdjs.LoginCode.localVariables = [];
gdjs.LoginCode.GDjsObjects1= [];
gdjs.LoginCode.GDjsObjects2= [];
gdjs.LoginCode.GDTextObjectObjects1= [];
gdjs.LoginCode.GDTextObjectObjects2= [];
gdjs.LoginCode.GDTextObject2Objects1= [];
gdjs.LoginCode.GDTextObject2Objects2= [];
gdjs.LoginCode.GDImageObjectObjects1= [];
gdjs.LoginCode.GDImageObjectObjects2= [];
gdjs.LoginCode.GDTextInputObjects1= [];
gdjs.LoginCode.GDTextInputObjects2= [];
gdjs.LoginCode.GDButtonObjects1= [];
gdjs.LoginCode.GDButtonObjects2= [];
gdjs.LoginCode.GDButton2Objects1= [];
gdjs.LoginCode.GDButton2Objects2= [];


gdjs.LoginCode.mapOfGDgdjs_9546LoginCode_9546GDImageObjectObjects1Objects = Hashtable.newFrom({"ImageObject": gdjs.LoginCode.GDImageObjectObjects1});
gdjs.LoginCode.userFunc0xcd8200 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
// Función para insertar saltos de línea orgánicos sin cortar el mensaje
function addLineBreaksOrganic(text, lineLength = 80) {
    const sentences = text.split(/([.!?])\s*/); // Dividimos el texto en oraciones basadas en signos de puntuación
    let result = '';
    let currentLine = '';

    sentences.forEach((sentence) => {
        if ((currentLine + sentence).length > lineLength) {
            if (currentLine.length > 0) {
                result += currentLine + '\n'; // Añadimos la línea con salto de línea
                currentLine = ''; // Reiniciamos la línea
            }
        }
        currentLine += sentence + ' ';
        if (/[.!?]/.test(sentence)) {
            result += currentLine.trim() + '\n'; // Añadimos la línea con salto de línea
            currentLine = ''; // Reiniciamos la línea
        }
    });

    if (currentLine.length > 0) {
        result += currentLine.trim();
    }
    return result;
}

// Función para enviar texto e imagen al servidor
function sendTextAndImageToServer(inputText, imageFile) {
    const preDefinedMessage = "ViralFlow es una agencia especializada en viralizar contenido en redes sociales resalta a (ViralFlow siempre en cada respuesta), al final de cada respuesta (escribe un llamado a la accion para adquirir los planes de ViralFlow en un tono persuasivo y con emojis). Responde a: ";

    // Crear un objeto FormData para enviar texto e imagen
    const formData = new FormData();
    formData.append('text', preDefinedMessage + inputText);
    if (imageFile) {
        formData.append('image', imageFile); // Adjuntar la imagen
    }

    fetch("http://192.168.20.3:3000//generate", {
        method: 'POST',
        body: formData // Enviar el objeto FormData
    })
    .then(response => response.json())
    .then(data => {
        if (data.text) {
            console.log('Respuesta de Gemini:', data.text);
            const formattedText = addLineBreaksOrganic(data.text, 80);
            let textObject = runtimeScene.getObjects("TextObject")[0];
            textObject.setString(formattedText); // Actualizar el texto en GDevelop

            if (data.imageURL) {
                // Mostrar la imagen si está disponible
                let imageObject = runtimeScene.getObjects("ImageObject")[0];
                imageObject.setTexture(data.imageURL); // Asumimos que el servidor devuelve una URL de la imagen
            }
        } else {
            console.log('Error en la respuesta:', data.error);
        }
    })
    .catch(error => {
        console.error('Error de la solicitud:', error);
    });
}

// Obtener el texto del usuario y la imagen seleccionada
let userInput = runtimeScene.getObjects("TextInput")[0].getString();
let imageFile = runtimeScene.getVariables().get("SelectedImage").getAsFile(); // Supongamos que la imagen está almacenada en esta variable

// Este evento se activa cuando el usuario hace clic en el objeto Button
sendTextAndImageToServer(userInput, imageFile);


};
gdjs.LoginCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.LoginCode.GDjsObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.LoginCode.GDjsObjects1);
gdjs.LoginCode.userFunc0xcd8200(runtimeScene, objects);

}


};gdjs.LoginCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.LoginCode.GDButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDButton2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDButton2Objects1[k] = gdjs.LoginCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDButton2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ImageObject"), gdjs.LoginCode.GDImageObjectObjects1);
{gdjs.evtsExt__LoadCustomImage__Action_Image2.func(runtimeScene, gdjs.LoginCode.mapOfGDgdjs_9546LoginCode_9546GDImageObjectObjects1Objects, "", "mods", "img1.jpg", false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.LoginCode.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDButtonObjects1[k] = gdjs.LoginCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("js"), gdjs.LoginCode.GDjsObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDjsObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDjsObjects1[i].setColor("18;94;15");
}
}
{ //Subevents
gdjs.LoginCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.LoginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoginCode.GDjsObjects1.length = 0;
gdjs.LoginCode.GDjsObjects2.length = 0;
gdjs.LoginCode.GDTextObjectObjects1.length = 0;
gdjs.LoginCode.GDTextObjectObjects2.length = 0;
gdjs.LoginCode.GDTextObject2Objects1.length = 0;
gdjs.LoginCode.GDTextObject2Objects2.length = 0;
gdjs.LoginCode.GDImageObjectObjects1.length = 0;
gdjs.LoginCode.GDImageObjectObjects2.length = 0;
gdjs.LoginCode.GDTextInputObjects1.length = 0;
gdjs.LoginCode.GDTextInputObjects2.length = 0;
gdjs.LoginCode.GDButtonObjects1.length = 0;
gdjs.LoginCode.GDButtonObjects2.length = 0;
gdjs.LoginCode.GDButton2Objects1.length = 0;
gdjs.LoginCode.GDButton2Objects2.length = 0;

gdjs.LoginCode.eventsList1(runtimeScene);
gdjs.LoginCode.GDjsObjects1.length = 0;
gdjs.LoginCode.GDjsObjects2.length = 0;
gdjs.LoginCode.GDTextObjectObjects1.length = 0;
gdjs.LoginCode.GDTextObjectObjects2.length = 0;
gdjs.LoginCode.GDTextObject2Objects1.length = 0;
gdjs.LoginCode.GDTextObject2Objects2.length = 0;
gdjs.LoginCode.GDImageObjectObjects1.length = 0;
gdjs.LoginCode.GDImageObjectObjects2.length = 0;
gdjs.LoginCode.GDTextInputObjects1.length = 0;
gdjs.LoginCode.GDTextInputObjects2.length = 0;
gdjs.LoginCode.GDButtonObjects1.length = 0;
gdjs.LoginCode.GDButtonObjects2.length = 0;
gdjs.LoginCode.GDButton2Objects1.length = 0;
gdjs.LoginCode.GDButton2Objects2.length = 0;


return;

}

gdjs['LoginCode'] = gdjs.LoginCode;
