gdjs.RegistroCode = {};
gdjs.RegistroCode.localVariables = [];
gdjs.RegistroCode.GDC_9595EMAILObjects1= [];
gdjs.RegistroCode.GDC_9595EMAILObjects2= [];
gdjs.RegistroCode.GDC_9595CLAVEObjects1= [];
gdjs.RegistroCode.GDC_9595CLAVEObjects2= [];
gdjs.RegistroCode.GDT_9595EMAILObjects1= [];
gdjs.RegistroCode.GDT_9595EMAILObjects2= [];
gdjs.RegistroCode.GDT_9595CLAVEObjects1= [];
gdjs.RegistroCode.GDT_9595CLAVEObjects2= [];
gdjs.RegistroCode.GDM_9595CREAR_9595CUENTAObjects1= [];
gdjs.RegistroCode.GDM_9595CREAR_9595CUENTAObjects2= [];
gdjs.RegistroCode.GDM_9595INICIAR_9595SESIONObjects1= [];
gdjs.RegistroCode.GDM_9595INICIAR_9595SESIONObjects2= [];
gdjs.RegistroCode.GDM_9595ERRORObjects1= [];
gdjs.RegistroCode.GDM_9595ERRORObjects2= [];
gdjs.RegistroCode.GDI_9595EMAILObjects1= [];
gdjs.RegistroCode.GDI_9595EMAILObjects2= [];
gdjs.RegistroCode.GDI_9595CLAVEObjects1= [];
gdjs.RegistroCode.GDI_9595CLAVEObjects2= [];
gdjs.RegistroCode.GDM_9595CHECK_9595REGISTERObjects1= [];
gdjs.RegistroCode.GDM_9595CHECK_9595REGISTERObjects2= [];
gdjs.RegistroCode.GDM_9595CLAVE_9595CONTEN_9595_9595_9595Objects1= [];
gdjs.RegistroCode.GDM_9595CLAVE_9595CONTEN_9595_9595_9595Objects2= [];
gdjs.RegistroCode.GDM_9595CLAVE_9595TXTObjects1= [];
gdjs.RegistroCode.GDM_9595CLAVE_9595TXTObjects2= [];
gdjs.RegistroCode.GDgoogleRObjects1= [];
gdjs.RegistroCode.GDgoogleRObjects2= [];
gdjs.RegistroCode.GDLOG_9595INObjects1= [];
gdjs.RegistroCode.GDLOG_9595INObjects2= [];
gdjs.RegistroCode.GDSIGN_9595UPObjects1= [];
gdjs.RegistroCode.GDSIGN_9595UPObjects2= [];


gdjs.RegistroCode.mapOfGDgdjs_9546RegistroCode_9546GDLOG_95959595INObjects1Objects = Hashtable.newFrom({"LOG_IN": gdjs.RegistroCode.GDLOG_9595INObjects1});
gdjs.RegistroCode.mapOfGDgdjs_9546RegistroCode_9546GDSIGN_95959595UPObjects1Objects = Hashtable.newFrom({"SIGN_UP": gdjs.RegistroCode.GDSIGN_9595UPObjects1});
gdjs.RegistroCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.RegistroCode.GDSIGN_9595UPObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RegistroCode.mapOfGDgdjs_9546RegistroCode_9546GDSIGN_95959595UPObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9680636);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("I_CLAVE"), gdjs.RegistroCode.GDI_9595CLAVEObjects1);
gdjs.copyArray(runtimeScene.getObjects("I_EMAIL"), gdjs.RegistroCode.GDI_9595EMAILObjects1);
{gdjs.evtTools.firebaseTools.auth.createAccountWithEmail((( gdjs.RegistroCode.GDI_9595EMAILObjects1.length === 0 ) ? "" :gdjs.RegistroCode.GDI_9595EMAILObjects1[0].getText()), (( gdjs.RegistroCode.GDI_9595CLAVEObjects1.length === 0 ) ? "" :gdjs.RegistroCode.GDI_9595CLAVEObjects1[0].getText()), runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


};gdjs.RegistroCode.mapOfGDgdjs_9546RegistroCode_9546GDgoogleRObjects1Objects = Hashtable.newFrom({"googleR": gdjs.RegistroCode.GDgoogleRObjects1});
gdjs.RegistroCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("LOG_IN"), gdjs.RegistroCode.GDLOG_9595INObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RegistroCode.mapOfGDgdjs_9546RegistroCode_9546GDLOG_95959595INObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("I_CLAVE"), gdjs.RegistroCode.GDI_9595CLAVEObjects1);
gdjs.copyArray(runtimeScene.getObjects("I_EMAIL"), gdjs.RegistroCode.GDI_9595EMAILObjects1);
{gdjs.evtTools.firebaseTools.auth.signInWithEmail((( gdjs.RegistroCode.GDI_9595EMAILObjects1.length === 0 ) ? "" :gdjs.RegistroCode.GDI_9595EMAILObjects1[0].getText()), (( gdjs.RegistroCode.GDI_9595CLAVEObjects1.length === 0 ) ? "" :gdjs.RegistroCode.GDI_9595CLAVEObjects1[0].getText()), runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("M_ERROR"), gdjs.RegistroCode.GDM_9595ERRORObjects1);
{for(var i = 0, len = gdjs.RegistroCode.GDM_9595ERRORObjects1.length ;i < len;++i) {
    gdjs.RegistroCode.GDM_9595ERRORObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("M_ERROR"), gdjs.RegistroCode.GDM_9595ERRORObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistroCode.GDM_9595ERRORObjects1.length;i<l;++i) {
    if ( gdjs.RegistroCode.GDM_9595ERRORObjects1[i].getBehavior("Text").getText() == "ok" ) {
        isConditionTrue_0 = true;
        gdjs.RegistroCode.GDM_9595ERRORObjects1[k] = gdjs.RegistroCode.GDM_9595ERRORObjects1[i];
        ++k;
    }
}
gdjs.RegistroCode.GDM_9595ERRORObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.RegistroCode.GDM_9595ERRORObjects1 */
{for(var i = 0, len = gdjs.RegistroCode.GDM_9595ERRORObjects1.length ;i < len;++i) {
    gdjs.RegistroCode.GDM_9595ERRORObjects1[i].getBehavior("Text").setText("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "Registro");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SIGN_UP"), gdjs.RegistroCode.GDSIGN_9595UPObjects1);
{for(var i = 0, len = gdjs.RegistroCode.GDSIGN_9595UPObjects1.length ;i < len;++i) {
    gdjs.RegistroCode.GDSIGN_9595UPObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.RegistroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("googleR"), gdjs.RegistroCode.GDgoogleRObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RegistroCode.mapOfGDgdjs_9546RegistroCode_9546GDgoogleRObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.auth.signInWithProvider("google", runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.RegistroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RegistroCode.GDC_9595EMAILObjects1.length = 0;
gdjs.RegistroCode.GDC_9595EMAILObjects2.length = 0;
gdjs.RegistroCode.GDC_9595CLAVEObjects1.length = 0;
gdjs.RegistroCode.GDC_9595CLAVEObjects2.length = 0;
gdjs.RegistroCode.GDT_9595EMAILObjects1.length = 0;
gdjs.RegistroCode.GDT_9595EMAILObjects2.length = 0;
gdjs.RegistroCode.GDT_9595CLAVEObjects1.length = 0;
gdjs.RegistroCode.GDT_9595CLAVEObjects2.length = 0;
gdjs.RegistroCode.GDM_9595CREAR_9595CUENTAObjects1.length = 0;
gdjs.RegistroCode.GDM_9595CREAR_9595CUENTAObjects2.length = 0;
gdjs.RegistroCode.GDM_9595INICIAR_9595SESIONObjects1.length = 0;
gdjs.RegistroCode.GDM_9595INICIAR_9595SESIONObjects2.length = 0;
gdjs.RegistroCode.GDM_9595ERRORObjects1.length = 0;
gdjs.RegistroCode.GDM_9595ERRORObjects2.length = 0;
gdjs.RegistroCode.GDI_9595EMAILObjects1.length = 0;
gdjs.RegistroCode.GDI_9595EMAILObjects2.length = 0;
gdjs.RegistroCode.GDI_9595CLAVEObjects1.length = 0;
gdjs.RegistroCode.GDI_9595CLAVEObjects2.length = 0;
gdjs.RegistroCode.GDM_9595CHECK_9595REGISTERObjects1.length = 0;
gdjs.RegistroCode.GDM_9595CHECK_9595REGISTERObjects2.length = 0;
gdjs.RegistroCode.GDM_9595CLAVE_9595CONTEN_9595_9595_9595Objects1.length = 0;
gdjs.RegistroCode.GDM_9595CLAVE_9595CONTEN_9595_9595_9595Objects2.length = 0;
gdjs.RegistroCode.GDM_9595CLAVE_9595TXTObjects1.length = 0;
gdjs.RegistroCode.GDM_9595CLAVE_9595TXTObjects2.length = 0;
gdjs.RegistroCode.GDgoogleRObjects1.length = 0;
gdjs.RegistroCode.GDgoogleRObjects2.length = 0;
gdjs.RegistroCode.GDLOG_9595INObjects1.length = 0;
gdjs.RegistroCode.GDLOG_9595INObjects2.length = 0;
gdjs.RegistroCode.GDSIGN_9595UPObjects1.length = 0;
gdjs.RegistroCode.GDSIGN_9595UPObjects2.length = 0;

gdjs.RegistroCode.eventsList1(runtimeScene);
gdjs.RegistroCode.GDC_9595EMAILObjects1.length = 0;
gdjs.RegistroCode.GDC_9595EMAILObjects2.length = 0;
gdjs.RegistroCode.GDC_9595CLAVEObjects1.length = 0;
gdjs.RegistroCode.GDC_9595CLAVEObjects2.length = 0;
gdjs.RegistroCode.GDT_9595EMAILObjects1.length = 0;
gdjs.RegistroCode.GDT_9595EMAILObjects2.length = 0;
gdjs.RegistroCode.GDT_9595CLAVEObjects1.length = 0;
gdjs.RegistroCode.GDT_9595CLAVEObjects2.length = 0;
gdjs.RegistroCode.GDM_9595CREAR_9595CUENTAObjects1.length = 0;
gdjs.RegistroCode.GDM_9595CREAR_9595CUENTAObjects2.length = 0;
gdjs.RegistroCode.GDM_9595INICIAR_9595SESIONObjects1.length = 0;
gdjs.RegistroCode.GDM_9595INICIAR_9595SESIONObjects2.length = 0;
gdjs.RegistroCode.GDM_9595ERRORObjects1.length = 0;
gdjs.RegistroCode.GDM_9595ERRORObjects2.length = 0;
gdjs.RegistroCode.GDI_9595EMAILObjects1.length = 0;
gdjs.RegistroCode.GDI_9595EMAILObjects2.length = 0;
gdjs.RegistroCode.GDI_9595CLAVEObjects1.length = 0;
gdjs.RegistroCode.GDI_9595CLAVEObjects2.length = 0;
gdjs.RegistroCode.GDM_9595CHECK_9595REGISTERObjects1.length = 0;
gdjs.RegistroCode.GDM_9595CHECK_9595REGISTERObjects2.length = 0;
gdjs.RegistroCode.GDM_9595CLAVE_9595CONTEN_9595_9595_9595Objects1.length = 0;
gdjs.RegistroCode.GDM_9595CLAVE_9595CONTEN_9595_9595_9595Objects2.length = 0;
gdjs.RegistroCode.GDM_9595CLAVE_9595TXTObjects1.length = 0;
gdjs.RegistroCode.GDM_9595CLAVE_9595TXTObjects2.length = 0;
gdjs.RegistroCode.GDgoogleRObjects1.length = 0;
gdjs.RegistroCode.GDgoogleRObjects2.length = 0;
gdjs.RegistroCode.GDLOG_9595INObjects1.length = 0;
gdjs.RegistroCode.GDLOG_9595INObjects2.length = 0;
gdjs.RegistroCode.GDSIGN_9595UPObjects1.length = 0;
gdjs.RegistroCode.GDSIGN_9595UPObjects2.length = 0;


return;

}

gdjs['RegistroCode'] = gdjs.RegistroCode;
