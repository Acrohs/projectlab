gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDexitObjects1= [];
gdjs.MenuCode.GDexitObjects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.MenuCode.GDexitObjects1});
gdjs.MenuCode.userFunc0x958b20 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
function removeIframe() {
    const iframe = document.querySelector('iframe');
    if (iframe && iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
        console.log('Iframe eliminado');
    } else {
        console.log('Iframe no encontrado');
    }
}


// Evento principal
if (gdjs.evtTools.input.cursorOnObject(runtimeScene.getObjects("exit"), runtimeScene, true, false) &&
    gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left")) {
    // Acción: Ejecutar una vez
    if (!runtimeScene.getOnceTriggers().triggerOnce(123456)) {
        return;
    }

    // Acción: Llamar a la función removeIframe
    removeIframe();

    // Subevento: Cambiar a la escena "Registro"
    gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Registro", false);
}

};
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDexitObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.MenuCode.GDexitObjects1);
gdjs.MenuCode.userFunc0x958b20(runtimeScene, objects);

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.MenuCode.GDNewTextObjects1});
gdjs.MenuCode.userFunc0x8a8020 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
if (gdjs.evtTools.input.cursorOnObject(runtimeScene.getObjects("NewText"), runtimeScene, true, false) && 
    gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left")) {
    // Acción: Ejecutar una vez 
    if (!runtimeScene.getOnceTriggers().triggerOnce(123456)) {
        return;
    }

    // Crear un objeto HTML para el iframe
    const iframe = document.createElement('iframe');
    iframe.width = '560';
    iframe.height = '315';
    iframe.src = 'https://www.youtube.com/embed/6LqiQ6xMrkg?si=RcFYFlkyGEiel8j-&controls=0&autoplay=1';
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    iframe.style.position = 'absolute';
    iframe.style.maxWidth = '100%'; 
    iframe.style.maxHeight = '100%';
    iframe.style.width = '560px'; 
    iframe.style.height = '315px'; 
    iframe.style.left = '50%'; 
    iframe.style.top = '50%'; 
    iframe.style.transform = 'translate(-50%, -50%)'; 
    iframe.style.boxSizing = 'border-box';

    // Añadir el iframe al contenedor de la escena
    const container = runtimeScene.getGame().getRenderer().getDomElementContainer();
    container.style.width = '100%'; 
    container.style.height = '100%'; 
    container.style.display = 'flex'; 
    container.style.justifyContent = 'center'; 
    container.style.alignItems = 'center'; 
    container.appendChild(iframe);

    // Forzar la actualización del iframe 
    iframe.src += '&autoplay=1';
}

};
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MenuCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDNewTextObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDNewTextObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDNewTextObjects1[k] = gdjs.MenuCode.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDNewTextObjects1.length = k;
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.MenuCode.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDexitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10164380);
}
}
}
if (isConditionTrue_0) {
{firebase.auth().signOut();
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Registro", false);
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MenuCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9638628);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDNewTextObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewTextObjects1[i].setColor("20;223;108");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MenuCode.GDNewTextObjects1);

var objects = [];
objects.push.apply(objects,gdjs.MenuCode.GDNewTextObjects1);
gdjs.MenuCode.userFunc0x8a8020(runtimeScene, objects);

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDexitObjects1.length = 0;
gdjs.MenuCode.GDexitObjects2.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDexitObjects1.length = 0;
gdjs.MenuCode.GDexitObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
