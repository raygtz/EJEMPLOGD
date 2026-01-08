gdjs.Main_95MenuCode = {};
gdjs.Main_95MenuCode.localVariables = [];
gdjs.Main_95MenuCode.idToCallbackMap = new Map();
gdjs.Main_95MenuCode.GDTitleObjects1= [];
gdjs.Main_95MenuCode.GDTitleObjects2= [];
gdjs.Main_95MenuCode.GDTitleObjects3= [];
gdjs.Main_95MenuCode.GDPlayObjects1= [];
gdjs.Main_95MenuCode.GDPlayObjects2= [];
gdjs.Main_95MenuCode.GDPlayObjects3= [];
gdjs.Main_95MenuCode.GDSettings_9595titleObjects1= [];
gdjs.Main_95MenuCode.GDSettings_9595titleObjects2= [];
gdjs.Main_95MenuCode.GDSettings_9595titleObjects3= [];
gdjs.Main_95MenuCode.GDQuitObjects1= [];
gdjs.Main_95MenuCode.GDQuitObjects2= [];
gdjs.Main_95MenuCode.GDQuitObjects3= [];
gdjs.Main_95MenuCode.GDMarkerObjects1= [];
gdjs.Main_95MenuCode.GDMarkerObjects2= [];
gdjs.Main_95MenuCode.GDMarkerObjects3= [];
gdjs.Main_95MenuCode.GDSoundVolumeObjects1= [];
gdjs.Main_95MenuCode.GDSoundVolumeObjects2= [];
gdjs.Main_95MenuCode.GDSoundVolumeObjects3= [];
gdjs.Main_95MenuCode.GDMusicVolumeObjects1= [];
gdjs.Main_95MenuCode.GDMusicVolumeObjects2= [];
gdjs.Main_95MenuCode.GDMusicVolumeObjects3= [];
gdjs.Main_95MenuCode.GDSoundSliderObjects1= [];
gdjs.Main_95MenuCode.GDSoundSliderObjects2= [];
gdjs.Main_95MenuCode.GDSoundSliderObjects3= [];
gdjs.Main_95MenuCode.GDMusicSliderObjects1= [];
gdjs.Main_95MenuCode.GDMusicSliderObjects2= [];
gdjs.Main_95MenuCode.GDMusicSliderObjects3= [];
gdjs.Main_95MenuCode.GDBackObjects1= [];
gdjs.Main_95MenuCode.GDBackObjects2= [];
gdjs.Main_95MenuCode.GDBackObjects3= [];
gdjs.Main_95MenuCode.GDSettingsMarkerObjects1= [];
gdjs.Main_95MenuCode.GDSettingsMarkerObjects2= [];
gdjs.Main_95MenuCode.GDSettingsMarkerObjects3= [];
gdjs.Main_95MenuCode.GDGreenHeroObjects1= [];
gdjs.Main_95MenuCode.GDGreenHeroObjects2= [];
gdjs.Main_95MenuCode.GDGreenHeroObjects3= [];
gdjs.Main_95MenuCode.GDRed_9595heroObjects1= [];
gdjs.Main_95MenuCode.GDRed_9595heroObjects2= [];
gdjs.Main_95MenuCode.GDRed_9595heroObjects3= [];
gdjs.Main_95MenuCode.GDBloque_9595SolidoObjects1= [];
gdjs.Main_95MenuCode.GDBloque_9595SolidoObjects2= [];
gdjs.Main_95MenuCode.GDBloque_9595SolidoObjects3= [];
gdjs.Main_95MenuCode.GDSmallGreenButtonObjects1= [];
gdjs.Main_95MenuCode.GDSmallGreenButtonObjects2= [];
gdjs.Main_95MenuCode.GDSmallGreenButtonObjects3= [];
gdjs.Main_95MenuCode.GDSmallRedButtonObjects1= [];
gdjs.Main_95MenuCode.GDSmallRedButtonObjects2= [];
gdjs.Main_95MenuCode.GDSmallRedButtonObjects3= [];
gdjs.Main_95MenuCode.GDB_9595buttonObjects1= [];
gdjs.Main_95MenuCode.GDB_9595buttonObjects2= [];
gdjs.Main_95MenuCode.GDB_9595buttonObjects3= [];
gdjs.Main_95MenuCode.GDA_9595buttonObjects1= [];
gdjs.Main_95MenuCode.GDA_9595buttonObjects2= [];
gdjs.Main_95MenuCode.GDA_9595buttonObjects3= [];
gdjs.Main_95MenuCode.GDFlatLightJoystickObjects1= [];
gdjs.Main_95MenuCode.GDFlatLightJoystickObjects2= [];
gdjs.Main_95MenuCode.GDFlatLightJoystickObjects3= [];
gdjs.Main_95MenuCode.GDBloque_9595FantasmaObjects1= [];
gdjs.Main_95MenuCode.GDBloque_9595FantasmaObjects2= [];
gdjs.Main_95MenuCode.GDBloque_9595FantasmaObjects3= [];
gdjs.Main_95MenuCode.GDBloque_9595PruebaObjects1= [];
gdjs.Main_95MenuCode.GDBloque_9595PruebaObjects2= [];
gdjs.Main_95MenuCode.GDBloque_9595PruebaObjects3= [];
gdjs.Main_95MenuCode.GDCrossObjects1= [];
gdjs.Main_95MenuCode.GDCrossObjects2= [];
gdjs.Main_95MenuCode.GDCrossObjects3= [];
gdjs.Main_95MenuCode.GDtransitionObjects1= [];
gdjs.Main_95MenuCode.GDtransitionObjects2= [];
gdjs.Main_95MenuCode.GDtransitionObjects3= [];


gdjs.Main_95MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Main_95MenuCode.GDBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Main_95MenuCode.GDPlayObjects2);
gdjs.copyArray(runtimeScene.getObjects("Settings_title"), gdjs.Main_95MenuCode.GDSettings_9595titleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_95MenuCode.GDPlayObjects2.length;i<l;++i) {
    if ( gdjs.Main_95MenuCode.GDPlayObjects2[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_95MenuCode.GDPlayObjects2[k] = gdjs.Main_95MenuCode.GDPlayObjects2[i];
        ++k;
    }
}
gdjs.Main_95MenuCode.GDPlayObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Main_95MenuCode.GDBackObjects2.length;i<l;++i) {
    if ( gdjs.Main_95MenuCode.GDBackObjects2[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_95MenuCode.GDBackObjects2[k] = gdjs.Main_95MenuCode.GDBackObjects2[i];
        ++k;
    }
}
gdjs.Main_95MenuCode.GDBackObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Main_95MenuCode.GDSettings_9595titleObjects2.length;i<l;++i) {
    if ( gdjs.Main_95MenuCode.GDSettings_9595titleObjects2[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_95MenuCode.GDSettings_9595titleObjects2[k] = gdjs.Main_95MenuCode.GDSettings_9595titleObjects2[i];
        ++k;
    }
}
gdjs.Main_95MenuCode.GDSettings_9595titleObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Main_95MenuCode.GDBackObjects2 */
/* Reuse gdjs.Main_95MenuCode.GDPlayObjects2 */
/* Reuse gdjs.Main_95MenuCode.GDSettings_9595titleObjects2 */
{for(var i = 0, len = gdjs.Main_95MenuCode.GDPlayObjects2.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDPlayObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.Main_95MenuCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDBackObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.Main_95MenuCode.GDSettings_9595titleObjects2.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDSettings_9595titleObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Main_95MenuCode.GDBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Main_95MenuCode.GDPlayObjects2);
gdjs.copyArray(runtimeScene.getObjects("Settings_title"), gdjs.Main_95MenuCode.GDSettings_9595titleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_95MenuCode.GDPlayObjects2.length;i<l;++i) {
    if ( !(gdjs.Main_95MenuCode.GDPlayObjects2[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_95MenuCode.GDPlayObjects2[k] = gdjs.Main_95MenuCode.GDPlayObjects2[i];
        ++k;
    }
}
gdjs.Main_95MenuCode.GDPlayObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Main_95MenuCode.GDBackObjects2.length;i<l;++i) {
    if ( !(gdjs.Main_95MenuCode.GDBackObjects2[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_95MenuCode.GDBackObjects2[k] = gdjs.Main_95MenuCode.GDBackObjects2[i];
        ++k;
    }
}
gdjs.Main_95MenuCode.GDBackObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Main_95MenuCode.GDSettings_9595titleObjects2.length;i<l;++i) {
    if ( !(gdjs.Main_95MenuCode.GDSettings_9595titleObjects2[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_95MenuCode.GDSettings_9595titleObjects2[k] = gdjs.Main_95MenuCode.GDSettings_9595titleObjects2[i];
        ++k;
    }
}
gdjs.Main_95MenuCode.GDSettings_9595titleObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Main_95MenuCode.GDBackObjects2 */
/* Reuse gdjs.Main_95MenuCode.GDPlayObjects2 */
/* Reuse gdjs.Main_95MenuCode.GDSettings_9595titleObjects2 */
{for(var i = 0, len = gdjs.Main_95MenuCode.GDPlayObjects2.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDPlayObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.Main_95MenuCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDBackObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.Main_95MenuCode.GDSettings_9595titleObjects2.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDSettings_9595titleObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings_title"), gdjs.Main_95MenuCode.GDSettings_9595titleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_95MenuCode.GDSettings_9595titleObjects2.length;i<l;++i) {
    if ( gdjs.Main_95MenuCode.GDSettings_9595titleObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_95MenuCode.GDSettings_9595titleObjects2[k] = gdjs.Main_95MenuCode.GDSettings_9595titleObjects2[i];
        ++k;
    }
}
gdjs.Main_95MenuCode.GDSettings_9595titleObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SettingsMarker"), gdjs.Main_95MenuCode.GDSettingsMarkerObjects2);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.Main_95MenuCode.GDSettingsMarkerObjects2.length === 0 ) ? 0 :gdjs.Main_95MenuCode.GDSettingsMarkerObjects2[0].getPointX("")) + gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeInOutSine", 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Main_95MenuCode.GDPlayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_95MenuCode.GDPlayObjects2.length;i<l;++i) {
    if ( gdjs.Main_95MenuCode.GDPlayObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_95MenuCode.GDPlayObjects2[k] = gdjs.Main_95MenuCode.GDPlayObjects2[i];
        ++k;
    }
}
gdjs.Main_95MenuCode.GDPlayObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.Main_95MenuCode.GDtransitionObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\MUSIC\\pick.ogg", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Sound")), 1);
}
{for(var i = 0, len = gdjs.Main_95MenuCode.GDtransitionObjects2.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDtransitionObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("173;170;170", 1, "Circular", "Forward", 0, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.Main_95MenuCode.GDtransitionObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_95MenuCode.GDtransitionObjects2.length;i<l;++i) {
    if ( gdjs.Main_95MenuCode.GDtransitionObjects2[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_95MenuCode.GDtransitionObjects2[k] = gdjs.Main_95MenuCode.GDtransitionObjects2[i];
        ++k;
    }
}
gdjs.Main_95MenuCode.GDtransitionObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Seleccion_Pj", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_95MenuCode.GDQuitObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_95MenuCode.GDQuitObjects2.length;i<l;++i) {
    if ( gdjs.Main_95MenuCode.GDQuitObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_95MenuCode.GDQuitObjects2[k] = gdjs.Main_95MenuCode.GDQuitObjects2[i];
        ++k;
    }
}
gdjs.Main_95MenuCode.GDQuitObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Main_95MenuCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_95MenuCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.Main_95MenuCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_95MenuCode.GDBackObjects1[k] = gdjs.Main_95MenuCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.Main_95MenuCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Main_95MenuCode.GDMarkerObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.Main_95MenuCode.GDMarkerObjects1.length === 0 ) ? 0 :gdjs.Main_95MenuCode.GDMarkerObjects1[0].getPointX("")) + gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeInOutQuad", 1);
}
{gdjs.evtTools.storage.writeStringInJSONFile("SettingS", "SettingS", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}

}


};gdjs.Main_95MenuCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Main_95MenuCode.GDMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.Main_95MenuCode.GDMusicSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsMarker"), gdjs.Main_95MenuCode.GDSettingsMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundSlider"), gdjs.Main_95MenuCode.GDSoundSliderObjects1);
{for(var i = 0, len = gdjs.Main_95MenuCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDMarkerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Main_95MenuCode.GDSettingsMarkerObjects1.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDSettingsMarkerObjects1[i].hide();
}
}
{gdjs.evtTools.storage.readStringFromJSONFile("SettingS", "SettingS", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(2));
}
{for(var i = 0, len = gdjs.Main_95MenuCode.GDSoundSliderObjects1.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDSoundSliderObjects1[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Sound")), null);
}
}
{for(var i = 0, len = gdjs.Main_95MenuCode.GDMusicSliderObjects1.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDMusicSliderObjects1[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Music")), null);
}
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SoundSlider"), gdjs.Main_95MenuCode.GDSoundSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_95MenuCode.GDSoundSliderObjects1.length;i<l;++i) {
    if ( gdjs.Main_95MenuCode.GDSoundSliderObjects1[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_95MenuCode.GDSoundSliderObjects1[k] = gdjs.Main_95MenuCode.GDSoundSliderObjects1[i];
        ++k;
    }
}
gdjs.Main_95MenuCode.GDSoundSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Main_95MenuCode.GDSoundSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Sound").setNumber((( gdjs.Main_95MenuCode.GDSoundSliderObjects1.length === 0 ) ? 0 :gdjs.Main_95MenuCode.GDSoundSliderObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.Main_95MenuCode.GDMusicSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_95MenuCode.GDMusicSliderObjects1.length;i<l;++i) {
    if ( gdjs.Main_95MenuCode.GDMusicSliderObjects1[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_95MenuCode.GDMusicSliderObjects1[k] = gdjs.Main_95MenuCode.GDMusicSliderObjects1[i];
        ++k;
    }
}
gdjs.Main_95MenuCode.GDMusicSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Main_95MenuCode.GDMusicSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Music").setNumber((( gdjs.Main_95MenuCode.GDMusicSliderObjects1.length === 0 ) ? 0 :gdjs.Main_95MenuCode.GDMusicSliderObjects1[0].Value(null)));
}
}

}


{


gdjs.Main_95MenuCode.eventsList0(runtimeScene);
}


};

gdjs.Main_95MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_95MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_95MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_95MenuCode.GDTitleObjects3.length = 0;
gdjs.Main_95MenuCode.GDPlayObjects1.length = 0;
gdjs.Main_95MenuCode.GDPlayObjects2.length = 0;
gdjs.Main_95MenuCode.GDPlayObjects3.length = 0;
gdjs.Main_95MenuCode.GDSettings_9595titleObjects1.length = 0;
gdjs.Main_95MenuCode.GDSettings_9595titleObjects2.length = 0;
gdjs.Main_95MenuCode.GDSettings_9595titleObjects3.length = 0;
gdjs.Main_95MenuCode.GDQuitObjects1.length = 0;
gdjs.Main_95MenuCode.GDQuitObjects2.length = 0;
gdjs.Main_95MenuCode.GDQuitObjects3.length = 0;
gdjs.Main_95MenuCode.GDMarkerObjects1.length = 0;
gdjs.Main_95MenuCode.GDMarkerObjects2.length = 0;
gdjs.Main_95MenuCode.GDMarkerObjects3.length = 0;
gdjs.Main_95MenuCode.GDSoundVolumeObjects1.length = 0;
gdjs.Main_95MenuCode.GDSoundVolumeObjects2.length = 0;
gdjs.Main_95MenuCode.GDSoundVolumeObjects3.length = 0;
gdjs.Main_95MenuCode.GDMusicVolumeObjects1.length = 0;
gdjs.Main_95MenuCode.GDMusicVolumeObjects2.length = 0;
gdjs.Main_95MenuCode.GDMusicVolumeObjects3.length = 0;
gdjs.Main_95MenuCode.GDSoundSliderObjects1.length = 0;
gdjs.Main_95MenuCode.GDSoundSliderObjects2.length = 0;
gdjs.Main_95MenuCode.GDSoundSliderObjects3.length = 0;
gdjs.Main_95MenuCode.GDMusicSliderObjects1.length = 0;
gdjs.Main_95MenuCode.GDMusicSliderObjects2.length = 0;
gdjs.Main_95MenuCode.GDMusicSliderObjects3.length = 0;
gdjs.Main_95MenuCode.GDBackObjects1.length = 0;
gdjs.Main_95MenuCode.GDBackObjects2.length = 0;
gdjs.Main_95MenuCode.GDBackObjects3.length = 0;
gdjs.Main_95MenuCode.GDSettingsMarkerObjects1.length = 0;
gdjs.Main_95MenuCode.GDSettingsMarkerObjects2.length = 0;
gdjs.Main_95MenuCode.GDSettingsMarkerObjects3.length = 0;
gdjs.Main_95MenuCode.GDGreenHeroObjects1.length = 0;
gdjs.Main_95MenuCode.GDGreenHeroObjects2.length = 0;
gdjs.Main_95MenuCode.GDGreenHeroObjects3.length = 0;
gdjs.Main_95MenuCode.GDRed_9595heroObjects1.length = 0;
gdjs.Main_95MenuCode.GDRed_9595heroObjects2.length = 0;
gdjs.Main_95MenuCode.GDRed_9595heroObjects3.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595SolidoObjects1.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595SolidoObjects2.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595SolidoObjects3.length = 0;
gdjs.Main_95MenuCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.Main_95MenuCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.Main_95MenuCode.GDSmallGreenButtonObjects3.length = 0;
gdjs.Main_95MenuCode.GDSmallRedButtonObjects1.length = 0;
gdjs.Main_95MenuCode.GDSmallRedButtonObjects2.length = 0;
gdjs.Main_95MenuCode.GDSmallRedButtonObjects3.length = 0;
gdjs.Main_95MenuCode.GDB_9595buttonObjects1.length = 0;
gdjs.Main_95MenuCode.GDB_9595buttonObjects2.length = 0;
gdjs.Main_95MenuCode.GDB_9595buttonObjects3.length = 0;
gdjs.Main_95MenuCode.GDA_9595buttonObjects1.length = 0;
gdjs.Main_95MenuCode.GDA_9595buttonObjects2.length = 0;
gdjs.Main_95MenuCode.GDA_9595buttonObjects3.length = 0;
gdjs.Main_95MenuCode.GDFlatLightJoystickObjects1.length = 0;
gdjs.Main_95MenuCode.GDFlatLightJoystickObjects2.length = 0;
gdjs.Main_95MenuCode.GDFlatLightJoystickObjects3.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595FantasmaObjects1.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595FantasmaObjects2.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595FantasmaObjects3.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595PruebaObjects1.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595PruebaObjects2.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595PruebaObjects3.length = 0;
gdjs.Main_95MenuCode.GDCrossObjects1.length = 0;
gdjs.Main_95MenuCode.GDCrossObjects2.length = 0;
gdjs.Main_95MenuCode.GDCrossObjects3.length = 0;
gdjs.Main_95MenuCode.GDtransitionObjects1.length = 0;
gdjs.Main_95MenuCode.GDtransitionObjects2.length = 0;
gdjs.Main_95MenuCode.GDtransitionObjects3.length = 0;

gdjs.Main_95MenuCode.eventsList1(runtimeScene);
gdjs.Main_95MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_95MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_95MenuCode.GDTitleObjects3.length = 0;
gdjs.Main_95MenuCode.GDPlayObjects1.length = 0;
gdjs.Main_95MenuCode.GDPlayObjects2.length = 0;
gdjs.Main_95MenuCode.GDPlayObjects3.length = 0;
gdjs.Main_95MenuCode.GDSettings_9595titleObjects1.length = 0;
gdjs.Main_95MenuCode.GDSettings_9595titleObjects2.length = 0;
gdjs.Main_95MenuCode.GDSettings_9595titleObjects3.length = 0;
gdjs.Main_95MenuCode.GDQuitObjects1.length = 0;
gdjs.Main_95MenuCode.GDQuitObjects2.length = 0;
gdjs.Main_95MenuCode.GDQuitObjects3.length = 0;
gdjs.Main_95MenuCode.GDMarkerObjects1.length = 0;
gdjs.Main_95MenuCode.GDMarkerObjects2.length = 0;
gdjs.Main_95MenuCode.GDMarkerObjects3.length = 0;
gdjs.Main_95MenuCode.GDSoundVolumeObjects1.length = 0;
gdjs.Main_95MenuCode.GDSoundVolumeObjects2.length = 0;
gdjs.Main_95MenuCode.GDSoundVolumeObjects3.length = 0;
gdjs.Main_95MenuCode.GDMusicVolumeObjects1.length = 0;
gdjs.Main_95MenuCode.GDMusicVolumeObjects2.length = 0;
gdjs.Main_95MenuCode.GDMusicVolumeObjects3.length = 0;
gdjs.Main_95MenuCode.GDSoundSliderObjects1.length = 0;
gdjs.Main_95MenuCode.GDSoundSliderObjects2.length = 0;
gdjs.Main_95MenuCode.GDSoundSliderObjects3.length = 0;
gdjs.Main_95MenuCode.GDMusicSliderObjects1.length = 0;
gdjs.Main_95MenuCode.GDMusicSliderObjects2.length = 0;
gdjs.Main_95MenuCode.GDMusicSliderObjects3.length = 0;
gdjs.Main_95MenuCode.GDBackObjects1.length = 0;
gdjs.Main_95MenuCode.GDBackObjects2.length = 0;
gdjs.Main_95MenuCode.GDBackObjects3.length = 0;
gdjs.Main_95MenuCode.GDSettingsMarkerObjects1.length = 0;
gdjs.Main_95MenuCode.GDSettingsMarkerObjects2.length = 0;
gdjs.Main_95MenuCode.GDSettingsMarkerObjects3.length = 0;
gdjs.Main_95MenuCode.GDGreenHeroObjects1.length = 0;
gdjs.Main_95MenuCode.GDGreenHeroObjects2.length = 0;
gdjs.Main_95MenuCode.GDGreenHeroObjects3.length = 0;
gdjs.Main_95MenuCode.GDRed_9595heroObjects1.length = 0;
gdjs.Main_95MenuCode.GDRed_9595heroObjects2.length = 0;
gdjs.Main_95MenuCode.GDRed_9595heroObjects3.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595SolidoObjects1.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595SolidoObjects2.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595SolidoObjects3.length = 0;
gdjs.Main_95MenuCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.Main_95MenuCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.Main_95MenuCode.GDSmallGreenButtonObjects3.length = 0;
gdjs.Main_95MenuCode.GDSmallRedButtonObjects1.length = 0;
gdjs.Main_95MenuCode.GDSmallRedButtonObjects2.length = 0;
gdjs.Main_95MenuCode.GDSmallRedButtonObjects3.length = 0;
gdjs.Main_95MenuCode.GDB_9595buttonObjects1.length = 0;
gdjs.Main_95MenuCode.GDB_9595buttonObjects2.length = 0;
gdjs.Main_95MenuCode.GDB_9595buttonObjects3.length = 0;
gdjs.Main_95MenuCode.GDA_9595buttonObjects1.length = 0;
gdjs.Main_95MenuCode.GDA_9595buttonObjects2.length = 0;
gdjs.Main_95MenuCode.GDA_9595buttonObjects3.length = 0;
gdjs.Main_95MenuCode.GDFlatLightJoystickObjects1.length = 0;
gdjs.Main_95MenuCode.GDFlatLightJoystickObjects2.length = 0;
gdjs.Main_95MenuCode.GDFlatLightJoystickObjects3.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595FantasmaObjects1.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595FantasmaObjects2.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595FantasmaObjects3.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595PruebaObjects1.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595PruebaObjects2.length = 0;
gdjs.Main_95MenuCode.GDBloque_9595PruebaObjects3.length = 0;
gdjs.Main_95MenuCode.GDCrossObjects1.length = 0;
gdjs.Main_95MenuCode.GDCrossObjects2.length = 0;
gdjs.Main_95MenuCode.GDCrossObjects3.length = 0;
gdjs.Main_95MenuCode.GDtransitionObjects1.length = 0;
gdjs.Main_95MenuCode.GDtransitionObjects2.length = 0;
gdjs.Main_95MenuCode.GDtransitionObjects3.length = 0;


return;

}

gdjs['Main_95MenuCode'] = gdjs.Main_95MenuCode;
