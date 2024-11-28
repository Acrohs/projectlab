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


gdjs.LoginCode.userFunc0x8fd2f8 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
// Función para insertar saltos de línea orgánicos sin cortar el mensaje
function addLineBreaksOrganic(text, lineLength = 80) {
    const sentences = text.split(/([.!?])\s*/); // Dividimos el texto en oraciones basadas en signos de puntuación
    let result = '';
    let currentLine = '';

    sentences.forEach((sentence, index) => {
        // Si es la última oración y la línea actual más la oración excede el límite
        if ((currentLine + sentence).length > lineLength) {
            if (currentLine.length > 0) {
                result += currentLine + '\n'; // Añadimos la línea con salto de línea
                currentLine = ''; // Reiniciamos la línea
            }
        }
        
        // Añadimos la oración a la línea actual
        currentLine += sentence + ' ';
        
        // Si la oración termina con un signo de puntuación, agregamos un salto de línea
        if (/[.!?]/.test(sentence)) {
            result += currentLine.trim() + '\n'; // Añadimos la línea con salto de línea
            currentLine = ''; // Reiniciamos la línea
        }
    });

    // Añadimos cualquier línea restante
    if (currentLine.length > 0) {
        result += currentLine.trim();
    }

    return result;
}

// Función para enviar el texto ingresado por el usuario junto con el mensaje predefinido
function sendTextToServer(inputText) {
    const preDefinedMessage = "ViralFlow es una agencia especializada en viralizar contenido en redes sociales resalta a (ViralFlow siempre en cada respuesta), al final de cada respuesta (escribe un llamado a la accion para adquirir los planes de ViralFlow en un tono persuasivo y con emojis). responde a : "; // Mensaje predefinido

    // Combinamos el mensaje predefinido con el texto del usuario
    const messageToSend = preDefinedMessage + inputText;

    fetch("https://aa4bf626-9d3e-44ab-bb8d-21a642450349-00-3v41u9enncpbj.riker.replit.dev/generate", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: messageToSend // Enviar el mensaje combinado
        })
    })
    .then(response => response.json())
    .then(data => {
        // Mostrar la respuesta de Gemini en GDevelop
        if (data.text) {
            console.log('Respuesta de Gemini:', data.text);
            // Insertamos saltos de línea orgánicos
            const formattedText = addLineBreaksOrganic(data.text, 80);

            // Aquí puedes actualizar un objeto de texto en GDevelop
            let textObject = runtimeScene.getObjects("TextObject")[0]; // Asumiendo que el objeto de texto se llama "TextObject"
            textObject.setString(formattedText); // Establecer el texto de la respuesta con saltos de línea orgánicos
        } else {
            console.log('Error en la respuesta:', data.error);
        }
    })
    .catch(error => {
        console.error('Error de la solicitud:', error);
    });
}

// Obtener el texto ingresado por el usuario en el objeto TextInput
let userInput = runtimeScene.getObjects("TextInput")[0].getString(); 

// Este evento se activa cuando el usuario hace clic en el objeto Button
// Al hacer clic en el botón, se ejecuta la función
sendTextToServer(userInput);

};
gdjs.LoginCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.LoginCode.GDjsObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.LoginCode.GDjsObjects1);
gdjs.LoginCode.userFunc0x8fd2f8(runtimeScene, objects);

}


};gdjs.LoginCode.eventsList1 = function(runtimeScene) {

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


return;

}

gdjs['LoginCode'] = gdjs.LoginCode;
