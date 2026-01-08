gdjs.Fase1Code = {};
gdjs.Fase1Code.localVariables = [];
gdjs.Fase1Code.idToCallbackMap = new Map();
gdjs.Fase1Code.GDA_9595buttonObjects2_1final = [];

gdjs.Fase1Code.GDB_9595buttonObjects2_1final = [];

gdjs.Fase1Code.GDPunch_9595CollisionObjects1= [];
gdjs.Fase1Code.GDPunch_9595CollisionObjects2= [];
gdjs.Fase1Code.GDPunch_9595CollisionObjects3= [];
gdjs.Fase1Code.GDPunch_9595CollisionObjects4= [];
gdjs.Fase1Code.GDEnemy_95951Objects1= [];
gdjs.Fase1Code.GDEnemy_95951Objects2= [];
gdjs.Fase1Code.GDEnemy_95951Objects3= [];
gdjs.Fase1Code.GDEnemy_95951Objects4= [];
gdjs.Fase1Code.GDNewTileMapObjects1= [];
gdjs.Fase1Code.GDNewTileMapObjects2= [];
gdjs.Fase1Code.GDNewTileMapObjects3= [];
gdjs.Fase1Code.GDNewTileMapObjects4= [];
gdjs.Fase1Code.GDExplosion_9595FXObjects1= [];
gdjs.Fase1Code.GDExplosion_9595FXObjects2= [];
gdjs.Fase1Code.GDExplosion_9595FXObjects3= [];
gdjs.Fase1Code.GDExplosion_9595FXObjects4= [];
gdjs.Fase1Code.GDCheckpointObjects1= [];
gdjs.Fase1Code.GDCheckpointObjects2= [];
gdjs.Fase1Code.GDCheckpointObjects3= [];
gdjs.Fase1Code.GDCheckpointObjects4= [];
gdjs.Fase1Code.GDPlatform_95951Objects1= [];
gdjs.Fase1Code.GDPlatform_95951Objects2= [];
gdjs.Fase1Code.GDPlatform_95951Objects3= [];
gdjs.Fase1Code.GDPlatform_95951Objects4= [];
gdjs.Fase1Code.GDForest_9595BackgroundObjects1= [];
gdjs.Fase1Code.GDForest_9595BackgroundObjects2= [];
gdjs.Fase1Code.GDForest_9595BackgroundObjects3= [];
gdjs.Fase1Code.GDForest_9595BackgroundObjects4= [];
gdjs.Fase1Code.GDGreenHeroObjects1= [];
gdjs.Fase1Code.GDGreenHeroObjects2= [];
gdjs.Fase1Code.GDGreenHeroObjects3= [];
gdjs.Fase1Code.GDGreenHeroObjects4= [];
gdjs.Fase1Code.GDRed_9595heroObjects1= [];
gdjs.Fase1Code.GDRed_9595heroObjects2= [];
gdjs.Fase1Code.GDRed_9595heroObjects3= [];
gdjs.Fase1Code.GDRed_9595heroObjects4= [];
gdjs.Fase1Code.GDBloque_9595SolidoObjects1= [];
gdjs.Fase1Code.GDBloque_9595SolidoObjects2= [];
gdjs.Fase1Code.GDBloque_9595SolidoObjects3= [];
gdjs.Fase1Code.GDBloque_9595SolidoObjects4= [];
gdjs.Fase1Code.GDSmallGreenButtonObjects1= [];
gdjs.Fase1Code.GDSmallGreenButtonObjects2= [];
gdjs.Fase1Code.GDSmallGreenButtonObjects3= [];
gdjs.Fase1Code.GDSmallGreenButtonObjects4= [];
gdjs.Fase1Code.GDSmallRedButtonObjects1= [];
gdjs.Fase1Code.GDSmallRedButtonObjects2= [];
gdjs.Fase1Code.GDSmallRedButtonObjects3= [];
gdjs.Fase1Code.GDSmallRedButtonObjects4= [];
gdjs.Fase1Code.GDB_9595buttonObjects1= [];
gdjs.Fase1Code.GDB_9595buttonObjects2= [];
gdjs.Fase1Code.GDB_9595buttonObjects3= [];
gdjs.Fase1Code.GDB_9595buttonObjects4= [];
gdjs.Fase1Code.GDA_9595buttonObjects1= [];
gdjs.Fase1Code.GDA_9595buttonObjects2= [];
gdjs.Fase1Code.GDA_9595buttonObjects3= [];
gdjs.Fase1Code.GDA_9595buttonObjects4= [];
gdjs.Fase1Code.GDFlatLightJoystickObjects1= [];
gdjs.Fase1Code.GDFlatLightJoystickObjects2= [];
gdjs.Fase1Code.GDFlatLightJoystickObjects3= [];
gdjs.Fase1Code.GDFlatLightJoystickObjects4= [];
gdjs.Fase1Code.GDBloque_9595FantasmaObjects1= [];
gdjs.Fase1Code.GDBloque_9595FantasmaObjects2= [];
gdjs.Fase1Code.GDBloque_9595FantasmaObjects3= [];
gdjs.Fase1Code.GDBloque_9595FantasmaObjects4= [];
gdjs.Fase1Code.GDBloque_9595PruebaObjects1= [];
gdjs.Fase1Code.GDBloque_9595PruebaObjects2= [];
gdjs.Fase1Code.GDBloque_9595PruebaObjects3= [];
gdjs.Fase1Code.GDBloque_9595PruebaObjects4= [];
gdjs.Fase1Code.GDCrossObjects1= [];
gdjs.Fase1Code.GDCrossObjects2= [];
gdjs.Fase1Code.GDCrossObjects3= [];
gdjs.Fase1Code.GDCrossObjects4= [];
gdjs.Fase1Code.GDtransitionObjects1= [];
gdjs.Fase1Code.GDtransitionObjects2= [];
gdjs.Fase1Code.GDtransitionObjects3= [];
gdjs.Fase1Code.GDtransitionObjects4= [];


gdjs.Fase1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Fase1Code.GDGreenHeroObjects2, gdjs.Fase1Code.GDGreenHeroObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDGreenHeroObjects3.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDGreenHeroObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDGreenHeroObjects3[k] = gdjs.Fase1Code.GDGreenHeroObjects3[i];
        ++k;
    }
}
gdjs.Fase1Code.GDGreenHeroObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDGreenHeroObjects3.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDGreenHeroObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDGreenHeroObjects3[k] = gdjs.Fase1Code.GDGreenHeroObjects3[i];
        ++k;
    }
}
gdjs.Fase1Code.GDGreenHeroObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Fase1Code.GDGreenHeroObjects3 */
{for(var i = 0, len = gdjs.Fase1Code.GDGreenHeroObjects3.length ;i < len;++i) {
    gdjs.Fase1Code.GDGreenHeroObjects3[i].getBehavior("Animation").setAnimationName("Run");
}
}
}

}


{

gdjs.copyArray(gdjs.Fase1Code.GDGreenHeroObjects2, gdjs.Fase1Code.GDGreenHeroObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDGreenHeroObjects3.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDGreenHeroObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDGreenHeroObjects3[k] = gdjs.Fase1Code.GDGreenHeroObjects3[i];
        ++k;
    }
}
gdjs.Fase1Code.GDGreenHeroObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDGreenHeroObjects3.length;i<l;++i) {
    if ( !(gdjs.Fase1Code.GDGreenHeroObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDGreenHeroObjects3[k] = gdjs.Fase1Code.GDGreenHeroObjects3[i];
        ++k;
    }
}
gdjs.Fase1Code.GDGreenHeroObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Fase1Code.GDGreenHeroObjects3 */
{for(var i = 0, len = gdjs.Fase1Code.GDGreenHeroObjects3.length ;i < len;++i) {
    gdjs.Fase1Code.GDGreenHeroObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{

/* Reuse gdjs.Fase1Code.GDGreenHeroObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDGreenHeroObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDGreenHeroObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDGreenHeroObjects2[k] = gdjs.Fase1Code.GDGreenHeroObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDGreenHeroObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Fase1Code.GDGreenHeroObjects2 */
{for(var i = 0, len = gdjs.Fase1Code.GDGreenHeroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDGreenHeroObjects2[i].getBehavior("Animation").setAnimationName("Jump");
}
}
}

}


};gdjs.Fase1Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Fase1Code.GDGreenHeroObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDGreenHeroObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDGreenHeroObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDGreenHeroObjects2[k] = gdjs.Fase1Code.GDGreenHeroObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDGreenHeroObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Fase1Code.GDGreenHeroObjects2 */
{for(var i = 0, len = gdjs.Fase1Code.GDGreenHeroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDGreenHeroObjects2[i].returnVariable(gdjs.Fase1Code.GDGreenHeroObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}
}

}


};gdjs.Fase1Code.mapOfGDgdjs_9546Fase1Code_9546GDPunch_95959595CollisionObjects2Objects = Hashtable.newFrom({"Punch_Collision": gdjs.Fase1Code.GDPunch_9595CollisionObjects2});
gdjs.Fase1Code.mapOfGDgdjs_9546Fase1Code_9546GDPunch_95959595CollisionObjects2Objects = Hashtable.newFrom({"Punch_Collision": gdjs.Fase1Code.GDPunch_9595CollisionObjects2});
gdjs.Fase1Code.mapOfGDgdjs_9546Fase1Code_9546GDEnemy_959595951Objects2Objects = Hashtable.newFrom({"Enemy_1": gdjs.Fase1Code.GDEnemy_95951Objects2});
gdjs.Fase1Code.asyncCallback16839236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Fase1Code.localVariables);
gdjs.Fase1Code.localVariables.length = 0;
}
gdjs.Fase1Code.idToCallbackMap.set(16839236, gdjs.Fase1Code.asyncCallback16839236);
gdjs.Fase1Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Fase1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.Fase1Code.asyncCallback16839236(runtimeScene, asyncObjectsList)), 16839236, asyncObjectsList);
}
}

}


};gdjs.Fase1Code.asyncCallback16840316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Fase1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Enemy_1"), gdjs.Fase1Code.GDEnemy_95951Objects2);

{for(var i = 0, len = gdjs.Fase1Code.GDEnemy_95951Objects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDEnemy_95951Objects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.Fase1Code.localVariables.length = 0;
}
gdjs.Fase1Code.idToCallbackMap.set(16840316, gdjs.Fase1Code.asyncCallback16840316);
gdjs.Fase1Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Fase1Code.localVariables);
for (const obj of gdjs.Fase1Code.GDEnemy_95951Objects1) asyncObjectsList.addObject("Enemy_1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Fase1Code.asyncCallback16840316(runtimeScene, asyncObjectsList)), 16840316, asyncObjectsList);
}
}

}


};gdjs.Fase1Code.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, 1, "Primary", "Right", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenHero"), gdjs.Fase1Code.GDGreenHeroObjects2);
{for(var i = 0, len = gdjs.Fase1Code.GDGreenHeroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDGreenHeroObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, 1, "Primary", "Left", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenHero"), gdjs.Fase1Code.GDGreenHeroObjects2);
{for(var i = 0, len = gdjs.Fase1Code.GDGreenHeroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDGreenHeroObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.Fase1Code.GDB_9595buttonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Fase1Code.GDB_9595buttonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("B_button"), gdjs.Fase1Code.GDB_9595buttonObjects3);
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDB_9595buttonObjects3.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDB_9595buttonObjects3[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.Fase1Code.GDB_9595buttonObjects3[k] = gdjs.Fase1Code.GDB_9595buttonObjects3[i];
        ++k;
    }
}
gdjs.Fase1Code.GDB_9595buttonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Fase1Code.GDB_9595buttonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Fase1Code.GDB_9595buttonObjects2_1final.indexOf(gdjs.Fase1Code.GDB_9595buttonObjects3[j]) === -1 )
            gdjs.Fase1Code.GDB_9595buttonObjects2_1final.push(gdjs.Fase1Code.GDB_9595buttonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Fase1Code.GDB_9595buttonObjects2_1final, gdjs.Fase1Code.GDB_9595buttonObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenHero"), gdjs.Fase1Code.GDGreenHeroObjects2);
{for(var i = 0, len = gdjs.Fase1Code.GDGreenHeroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDGreenHeroObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.Fase1Code.GDA_9595buttonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Fase1Code.GDA_9595buttonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("A_button"), gdjs.Fase1Code.GDA_9595buttonObjects3);
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDA_9595buttonObjects3.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDA_9595buttonObjects3[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.Fase1Code.GDA_9595buttonObjects3[k] = gdjs.Fase1Code.GDA_9595buttonObjects3[i];
        ++k;
    }
}
gdjs.Fase1Code.GDA_9595buttonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Fase1Code.GDA_9595buttonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Fase1Code.GDA_9595buttonObjects2_1final.indexOf(gdjs.Fase1Code.GDA_9595buttonObjects3[j]) === -1 )
            gdjs.Fase1Code.GDA_9595buttonObjects2_1final.push(gdjs.Fase1Code.GDA_9595buttonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Fase1Code.GDA_9595buttonObjects2_1final, gdjs.Fase1Code.GDA_9595buttonObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenHero"), gdjs.Fase1Code.GDGreenHeroObjects2);
{for(var i = 0, len = gdjs.Fase1Code.GDGreenHeroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDGreenHeroObjects2[i].returnVariable(gdjs.Fase1Code.GDGreenHeroObjects2[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.Fase1Code.GDGreenHeroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDGreenHeroObjects2[i].getBehavior("Animation").setAnimationName("Punch");
}
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GreenHero"), gdjs.Fase1Code.GDGreenHeroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDGreenHeroObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDGreenHeroObjects2[i].getVariableBoolean(gdjs.Fase1Code.GDGreenHeroObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDGreenHeroObjects2[k] = gdjs.Fase1Code.GDGreenHeroObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDGreenHeroObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Fase1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenHero"), gdjs.Fase1Code.GDGreenHeroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDGreenHeroObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDGreenHeroObjects2[i].getVariableBoolean(gdjs.Fase1Code.GDGreenHeroObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDGreenHeroObjects2[k] = gdjs.Fase1Code.GDGreenHeroObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDGreenHeroObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Fase1Code.GDGreenHeroObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Punch_Collision"), gdjs.Fase1Code.GDPunch_9595CollisionObjects2);
{for(var i = 0, len = gdjs.Fase1Code.GDPunch_9595CollisionObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDPunch_9595CollisionObjects2[i].putAround((( gdjs.Fase1Code.GDGreenHeroObjects2.length === 0 ) ? 0 :gdjs.Fase1Code.GDGreenHeroObjects2[0].getPointX("Attack")), (( gdjs.Fase1Code.GDGreenHeroObjects2.length === 0 ) ? 0 :gdjs.Fase1Code.GDGreenHeroObjects2[0].getPointY("Attack")) - 20, 0, 0);
}
}
{for(var i = 0, len = gdjs.Fase1Code.GDGreenHeroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDGreenHeroObjects2[i].returnVariable(gdjs.Fase1Code.GDGreenHeroObjects2[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenHero"), gdjs.Fase1Code.GDGreenHeroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDGreenHeroObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDGreenHeroObjects2[i].getVariableBoolean(gdjs.Fase1Code.GDGreenHeroObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDGreenHeroObjects2[k] = gdjs.Fase1Code.GDGreenHeroObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDGreenHeroObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Fase1Code.GDGreenHeroObjects2 */
{for(var i = 0, len = gdjs.Fase1Code.GDGreenHeroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDGreenHeroObjects2[i].getBehavior("Animation").setAnimationName("Punch");
}
}

{ //Subevents
gdjs.Fase1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenHero"), gdjs.Fase1Code.GDGreenHeroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDGreenHeroObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDGreenHeroObjects2[i].getVariableBoolean(gdjs.Fase1Code.GDGreenHeroObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDGreenHeroObjects2[k] = gdjs.Fase1Code.GDGreenHeroObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDGreenHeroObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16836908);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Fase1Code.GDGreenHeroObjects2 */
gdjs.Fase1Code.GDPunch_9595CollisionObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Fase1Code.mapOfGDgdjs_9546Fase1Code_9546GDPunch_95959595CollisionObjects2Objects, (( gdjs.Fase1Code.GDGreenHeroObjects2.length === 0 ) ? 0 :gdjs.Fase1Code.GDGreenHeroObjects2[0].getPointX("Attack")), (( gdjs.Fase1Code.GDGreenHeroObjects2.length === 0 ) ? 0 :gdjs.Fase1Code.GDGreenHeroObjects2[0].getPointY("Attack")) - 20, "");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenHero"), gdjs.Fase1Code.GDGreenHeroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDGreenHeroObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDGreenHeroObjects2[i].getVariableBoolean(gdjs.Fase1Code.GDGreenHeroObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDGreenHeroObjects2[k] = gdjs.Fase1Code.GDGreenHeroObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDGreenHeroObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Punch_Collision"), gdjs.Fase1Code.GDPunch_9595CollisionObjects2);
{for(var i = 0, len = gdjs.Fase1Code.GDPunch_9595CollisionObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDPunch_9595CollisionObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy_1"), gdjs.Fase1Code.GDEnemy_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("Punch_Collision"), gdjs.Fase1Code.GDPunch_9595CollisionObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Fase1Code.mapOfGDgdjs_9546Fase1Code_9546GDPunch_95959595CollisionObjects2Objects, gdjs.Fase1Code.mapOfGDgdjs_9546Fase1Code_9546GDEnemy_959595951Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16838244);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Fase1Code.GDEnemy_95951Objects2 */
{for(var i = 0, len = gdjs.Fase1Code.GDEnemy_95951Objects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDEnemy_95951Objects2[i].getBehavior("Health").Hit(1, false, false, null);
}
}
{for(var i = 0, len = gdjs.Fase1Code.GDEnemy_95951Objects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDEnemy_95951Objects2[i].setColor("255;0;0");
}
}
{for(var i = 0, len = gdjs.Fase1Code.GDEnemy_95951Objects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDEnemy_95951Objects2[i].getBehavior("Flash").Flash(0.3, null);
}
}

{ //Subevents
gdjs.Fase1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Punch_Collision"), gdjs.Fase1Code.GDPunch_9595CollisionObjects2);
{for(var i = 0, len = gdjs.Fase1Code.GDPunch_9595CollisionObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDPunch_9595CollisionObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy_1"), gdjs.Fase1Code.GDEnemy_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDEnemy_95951Objects1.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDEnemy_95951Objects1[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDEnemy_95951Objects1[k] = gdjs.Fase1Code.GDEnemy_95951Objects1[i];
        ++k;
    }
}
gdjs.Fase1Code.GDEnemy_95951Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Fase1Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Fase1Code.eventsList5 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, 1, "Primary", "Right", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Red_hero"), gdjs.Fase1Code.GDRed_9595heroObjects2);
{for(var i = 0, len = gdjs.Fase1Code.GDRed_9595heroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDRed_9595heroObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, 1, "Primary", "Left", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Red_hero"), gdjs.Fase1Code.GDRed_9595heroObjects2);
{for(var i = 0, len = gdjs.Fase1Code.GDRed_9595heroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDRed_9595heroObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.Fase1Code.GDB_9595buttonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Fase1Code.GDB_9595buttonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("B_button"), gdjs.Fase1Code.GDB_9595buttonObjects3);
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDB_9595buttonObjects3.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDB_9595buttonObjects3[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.Fase1Code.GDB_9595buttonObjects3[k] = gdjs.Fase1Code.GDB_9595buttonObjects3[i];
        ++k;
    }
}
gdjs.Fase1Code.GDB_9595buttonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Fase1Code.GDB_9595buttonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Fase1Code.GDB_9595buttonObjects2_1final.indexOf(gdjs.Fase1Code.GDB_9595buttonObjects3[j]) === -1 )
            gdjs.Fase1Code.GDB_9595buttonObjects2_1final.push(gdjs.Fase1Code.GDB_9595buttonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Fase1Code.GDB_9595buttonObjects2_1final, gdjs.Fase1Code.GDB_9595buttonObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Red_hero"), gdjs.Fase1Code.GDRed_9595heroObjects2);
{for(var i = 0, len = gdjs.Fase1Code.GDRed_9595heroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDRed_9595heroObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Red_hero"), gdjs.Fase1Code.GDRed_9595heroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDRed_9595heroObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDRed_9595heroObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDRed_9595heroObjects2[k] = gdjs.Fase1Code.GDRed_9595heroObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDRed_9595heroObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Fase1Code.GDRed_9595heroObjects2 */
{for(var i = 0, len = gdjs.Fase1Code.GDRed_9595heroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDRed_9595heroObjects2[i].getBehavior("Animation").setAnimationName("Jump");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Red_hero"), gdjs.Fase1Code.GDRed_9595heroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDRed_9595heroObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDRed_9595heroObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDRed_9595heroObjects2[k] = gdjs.Fase1Code.GDRed_9595heroObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDRed_9595heroObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Fase1Code.GDRed_9595heroObjects2 */
{for(var i = 0, len = gdjs.Fase1Code.GDRed_9595heroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDRed_9595heroObjects2[i].getBehavior("Animation").setAnimationName("Fall");
}
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Red_hero"), gdjs.Fase1Code.GDRed_9595heroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDRed_9595heroObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDRed_9595heroObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDRed_9595heroObjects2[k] = gdjs.Fase1Code.GDRed_9595heroObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDRed_9595heroObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDRed_9595heroObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDRed_9595heroObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDRed_9595heroObjects2[k] = gdjs.Fase1Code.GDRed_9595heroObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDRed_9595heroObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Fase1Code.GDRed_9595heroObjects2 */
{for(var i = 0, len = gdjs.Fase1Code.GDRed_9595heroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDRed_9595heroObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Red_hero"), gdjs.Fase1Code.GDRed_9595heroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDRed_9595heroObjects1.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDRed_9595heroObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDRed_9595heroObjects1[k] = gdjs.Fase1Code.GDRed_9595heroObjects1[i];
        ++k;
    }
}
gdjs.Fase1Code.GDRed_9595heroObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDRed_9595heroObjects1.length;i<l;++i) {
    if ( !(gdjs.Fase1Code.GDRed_9595heroObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDRed_9595heroObjects1[k] = gdjs.Fase1Code.GDRed_9595heroObjects1[i];
        ++k;
    }
}
gdjs.Fase1Code.GDRed_9595heroObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Fase1Code.GDRed_9595heroObjects1 */
{for(var i = 0, len = gdjs.Fase1Code.GDRed_9595heroObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDRed_9595heroObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.Fase1Code.mapOfGDgdjs_9546Fase1Code_9546GDRed_95959595heroObjects2Objects = Hashtable.newFrom({"Red_hero": gdjs.Fase1Code.GDRed_9595heroObjects2});
gdjs.Fase1Code.mapOfGDgdjs_9546Fase1Code_9546GDGreenHeroObjects1Objects = Hashtable.newFrom({"GreenHero": gdjs.Fase1Code.GDGreenHeroObjects1});
gdjs.Fase1Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.Fase1Code.GDRed_9595heroObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Fase1Code.mapOfGDgdjs_9546Fase1Code_9546GDRed_95959595heroObjects2Objects, 0, 144, "");
}
{for(var i = 0, len = gdjs.Fase1Code.GDRed_9595heroObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDRed_9595heroObjects2[i].getBehavior("Resizable").setSize(56, 64);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.Fase1Code.GDGreenHeroObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Fase1Code.mapOfGDgdjs_9546Fase1Code_9546GDGreenHeroObjects1Objects, 0, 144, "");
}
{for(var i = 0, len = gdjs.Fase1Code.GDGreenHeroObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDGreenHeroObjects1[i].getBehavior("Resizable").setSize(80, 64);
}
}
}

}


};gdjs.Fase1Code.eventsList7 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Fase1Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Fase1Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("A_button"), gdjs.Fase1Code.GDA_9595buttonObjects2);
gdjs.copyArray(runtimeScene.getObjects("B_button"), gdjs.Fase1Code.GDB_9595buttonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bloque_Prueba"), gdjs.Fase1Code.GDBloque_9595PruebaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bloque_Solido"), gdjs.Fase1Code.GDBloque_9595SolidoObjects2);
gdjs.copyArray(runtimeScene.getObjects("FlatLightJoystick"), gdjs.Fase1Code.GDFlatLightJoystickObjects2);
{for(var i = 0, len = gdjs.Fase1Code.GDA_9595buttonObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDA_9595buttonObjects2[i].getBehavior("Opacity").setOpacity(50);
}
}
{for(var i = 0, len = gdjs.Fase1Code.GDFlatLightJoystickObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDFlatLightJoystickObjects2[i].getBehavior("Opacity").setOpacity(50);
}
}
{for(var i = 0, len = gdjs.Fase1Code.GDB_9595buttonObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDB_9595buttonObjects2[i].getBehavior("Opacity").setOpacity(50);
}
}
{for(var i = 0, len = gdjs.Fase1Code.GDBloque_9595SolidoObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDBloque_9595SolidoObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Fase1Code.GDBloque_9595PruebaObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDBloque_9595PruebaObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cross"), gdjs.Fase1Code.GDCrossObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase1Code.GDCrossObjects1.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDCrossObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Fase1Code.GDCrossObjects1[k] = gdjs.Fase1Code.GDCrossObjects1[i];
        ++k;
    }
}
gdjs.Fase1Code.GDCrossObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Seleccion_Pj", true);
}
}

}


};gdjs.Fase1Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Red_hero"), gdjs.Fase1Code.GDRed_9595heroObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Fase1Code.GDRed_9595heroObjects2.length !== 0 ? gdjs.Fase1Code.GDRed_9595heroObjects2[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Fase1Code.GDRed_9595heroObjects2.length !== 0 ? gdjs.Fase1Code.GDRed_9595heroObjects2[0] : null), true, "TileSet", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, -(233), 1706, 240, "", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, -(233), 1706, 240, "TileSet", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenHero"), gdjs.Fase1Code.GDGreenHeroObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Fase1Code.GDGreenHeroObjects1.length !== 0 ? gdjs.Fase1Code.GDGreenHeroObjects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Fase1Code.GDGreenHeroObjects1.length !== 0 ? gdjs.Fase1Code.GDGreenHeroObjects1[0] : null), true, "TileSet", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, -(233), 1706, 240, "", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, -(233), 1706, 240, "TileSet", 0);
}
}

}


};gdjs.Fase1Code.asyncCallback16743636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Fase1Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Bloque_Prueba"), gdjs.Fase1Code.GDBloque_9595PruebaObjects3);
gdjs.copyArray(runtimeScene.getObjects("Platform_1"), gdjs.Fase1Code.GDPlatform_95951Objects3);
{for(var i = 0, len = gdjs.Fase1Code.GDBloque_9595PruebaObjects3.length ;i < len;++i) {
    gdjs.Fase1Code.GDBloque_9595PruebaObjects3[i].addForce(1, 0, 1);
}
}
{for(var i = 0, len = gdjs.Fase1Code.GDPlatform_95951Objects3.length ;i < len;++i) {
    gdjs.Fase1Code.GDPlatform_95951Objects3[i].addForce(1, 0, 1);
}
}
gdjs.Fase1Code.localVariables.length = 0;
}
gdjs.Fase1Code.idToCallbackMap.set(16743636, gdjs.Fase1Code.asyncCallback16743636);
gdjs.Fase1Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Fase1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Fase1Code.asyncCallback16743636(runtimeScene, asyncObjectsList)), 16743636, asyncObjectsList);
}
}

}


};gdjs.Fase1Code.mapOfGDgdjs_9546Fase1Code_9546GDBloque_95959595PruebaObjects2Objects = Hashtable.newFrom({"Bloque_Prueba": gdjs.Fase1Code.GDBloque_9595PruebaObjects2});
gdjs.Fase1Code.mapOfGDgdjs_9546Fase1Code_9546GDBloque_95959595SolidoObjects2Objects = Hashtable.newFrom({"Bloque_Solido": gdjs.Fase1Code.GDBloque_9595SolidoObjects2});
gdjs.Fase1Code.asyncCallback16744180 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Fase1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Bloque_Prueba"), gdjs.Fase1Code.GDBloque_9595PruebaObjects3);

{for(var i = 0, len = gdjs.Fase1Code.GDBloque_9595PruebaObjects3.length ;i < len;++i) {
    gdjs.Fase1Code.GDBloque_9595PruebaObjects3[i].deleteFromScene(runtimeScene);
}
}
gdjs.Fase1Code.localVariables.length = 0;
}
gdjs.Fase1Code.idToCallbackMap.set(16744180, gdjs.Fase1Code.asyncCallback16744180);
gdjs.Fase1Code.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Fase1Code.localVariables);
for (const obj of gdjs.Fase1Code.GDBloque_9595PruebaObjects2) asyncObjectsList.addObject("Bloque_Prueba", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Fase1Code.asyncCallback16744180(runtimeScene, asyncObjectsList)), 16744180, asyncObjectsList);
}
}

}


};gdjs.Fase1Code.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Fase1Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bloque_Prueba"), gdjs.Fase1Code.GDBloque_9595PruebaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bloque_Solido"), gdjs.Fase1Code.GDBloque_9595SolidoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Fase1Code.mapOfGDgdjs_9546Fase1Code_9546GDBloque_95959595PruebaObjects2Objects, gdjs.Fase1Code.mapOfGDgdjs_9546Fase1Code_9546GDBloque_95959595SolidoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Fase1Code.eventsList11(runtimeScene);} //End of subevents
}

}


{



}


};gdjs.Fase1Code.eventsList13 = function(runtimeScene) {

{



}


{


gdjs.Fase1Code.eventsList4(runtimeScene);
}


{


gdjs.Fase1Code.eventsList5(runtimeScene);
}


{


gdjs.Fase1Code.eventsList7(runtimeScene);
}


{


gdjs.Fase1Code.eventsList8(runtimeScene);
}


{


gdjs.Fase1Code.eventsList9(runtimeScene);
}


{


gdjs.Fase1Code.eventsList12(runtimeScene);
}


};

gdjs.Fase1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Fase1Code.GDPunch_9595CollisionObjects1.length = 0;
gdjs.Fase1Code.GDPunch_9595CollisionObjects2.length = 0;
gdjs.Fase1Code.GDPunch_9595CollisionObjects3.length = 0;
gdjs.Fase1Code.GDPunch_9595CollisionObjects4.length = 0;
gdjs.Fase1Code.GDEnemy_95951Objects1.length = 0;
gdjs.Fase1Code.GDEnemy_95951Objects2.length = 0;
gdjs.Fase1Code.GDEnemy_95951Objects3.length = 0;
gdjs.Fase1Code.GDEnemy_95951Objects4.length = 0;
gdjs.Fase1Code.GDNewTileMapObjects1.length = 0;
gdjs.Fase1Code.GDNewTileMapObjects2.length = 0;
gdjs.Fase1Code.GDNewTileMapObjects3.length = 0;
gdjs.Fase1Code.GDNewTileMapObjects4.length = 0;
gdjs.Fase1Code.GDExplosion_9595FXObjects1.length = 0;
gdjs.Fase1Code.GDExplosion_9595FXObjects2.length = 0;
gdjs.Fase1Code.GDExplosion_9595FXObjects3.length = 0;
gdjs.Fase1Code.GDExplosion_9595FXObjects4.length = 0;
gdjs.Fase1Code.GDCheckpointObjects1.length = 0;
gdjs.Fase1Code.GDCheckpointObjects2.length = 0;
gdjs.Fase1Code.GDCheckpointObjects3.length = 0;
gdjs.Fase1Code.GDCheckpointObjects4.length = 0;
gdjs.Fase1Code.GDPlatform_95951Objects1.length = 0;
gdjs.Fase1Code.GDPlatform_95951Objects2.length = 0;
gdjs.Fase1Code.GDPlatform_95951Objects3.length = 0;
gdjs.Fase1Code.GDPlatform_95951Objects4.length = 0;
gdjs.Fase1Code.GDForest_9595BackgroundObjects1.length = 0;
gdjs.Fase1Code.GDForest_9595BackgroundObjects2.length = 0;
gdjs.Fase1Code.GDForest_9595BackgroundObjects3.length = 0;
gdjs.Fase1Code.GDForest_9595BackgroundObjects4.length = 0;
gdjs.Fase1Code.GDGreenHeroObjects1.length = 0;
gdjs.Fase1Code.GDGreenHeroObjects2.length = 0;
gdjs.Fase1Code.GDGreenHeroObjects3.length = 0;
gdjs.Fase1Code.GDGreenHeroObjects4.length = 0;
gdjs.Fase1Code.GDRed_9595heroObjects1.length = 0;
gdjs.Fase1Code.GDRed_9595heroObjects2.length = 0;
gdjs.Fase1Code.GDRed_9595heroObjects3.length = 0;
gdjs.Fase1Code.GDRed_9595heroObjects4.length = 0;
gdjs.Fase1Code.GDBloque_9595SolidoObjects1.length = 0;
gdjs.Fase1Code.GDBloque_9595SolidoObjects2.length = 0;
gdjs.Fase1Code.GDBloque_9595SolidoObjects3.length = 0;
gdjs.Fase1Code.GDBloque_9595SolidoObjects4.length = 0;
gdjs.Fase1Code.GDSmallGreenButtonObjects1.length = 0;
gdjs.Fase1Code.GDSmallGreenButtonObjects2.length = 0;
gdjs.Fase1Code.GDSmallGreenButtonObjects3.length = 0;
gdjs.Fase1Code.GDSmallGreenButtonObjects4.length = 0;
gdjs.Fase1Code.GDSmallRedButtonObjects1.length = 0;
gdjs.Fase1Code.GDSmallRedButtonObjects2.length = 0;
gdjs.Fase1Code.GDSmallRedButtonObjects3.length = 0;
gdjs.Fase1Code.GDSmallRedButtonObjects4.length = 0;
gdjs.Fase1Code.GDB_9595buttonObjects1.length = 0;
gdjs.Fase1Code.GDB_9595buttonObjects2.length = 0;
gdjs.Fase1Code.GDB_9595buttonObjects3.length = 0;
gdjs.Fase1Code.GDB_9595buttonObjects4.length = 0;
gdjs.Fase1Code.GDA_9595buttonObjects1.length = 0;
gdjs.Fase1Code.GDA_9595buttonObjects2.length = 0;
gdjs.Fase1Code.GDA_9595buttonObjects3.length = 0;
gdjs.Fase1Code.GDA_9595buttonObjects4.length = 0;
gdjs.Fase1Code.GDFlatLightJoystickObjects1.length = 0;
gdjs.Fase1Code.GDFlatLightJoystickObjects2.length = 0;
gdjs.Fase1Code.GDFlatLightJoystickObjects3.length = 0;
gdjs.Fase1Code.GDFlatLightJoystickObjects4.length = 0;
gdjs.Fase1Code.GDBloque_9595FantasmaObjects1.length = 0;
gdjs.Fase1Code.GDBloque_9595FantasmaObjects2.length = 0;
gdjs.Fase1Code.GDBloque_9595FantasmaObjects3.length = 0;
gdjs.Fase1Code.GDBloque_9595FantasmaObjects4.length = 0;
gdjs.Fase1Code.GDBloque_9595PruebaObjects1.length = 0;
gdjs.Fase1Code.GDBloque_9595PruebaObjects2.length = 0;
gdjs.Fase1Code.GDBloque_9595PruebaObjects3.length = 0;
gdjs.Fase1Code.GDBloque_9595PruebaObjects4.length = 0;
gdjs.Fase1Code.GDCrossObjects1.length = 0;
gdjs.Fase1Code.GDCrossObjects2.length = 0;
gdjs.Fase1Code.GDCrossObjects3.length = 0;
gdjs.Fase1Code.GDCrossObjects4.length = 0;
gdjs.Fase1Code.GDtransitionObjects1.length = 0;
gdjs.Fase1Code.GDtransitionObjects2.length = 0;
gdjs.Fase1Code.GDtransitionObjects3.length = 0;
gdjs.Fase1Code.GDtransitionObjects4.length = 0;

gdjs.Fase1Code.eventsList13(runtimeScene);
gdjs.Fase1Code.GDPunch_9595CollisionObjects1.length = 0;
gdjs.Fase1Code.GDPunch_9595CollisionObjects2.length = 0;
gdjs.Fase1Code.GDPunch_9595CollisionObjects3.length = 0;
gdjs.Fase1Code.GDPunch_9595CollisionObjects4.length = 0;
gdjs.Fase1Code.GDEnemy_95951Objects1.length = 0;
gdjs.Fase1Code.GDEnemy_95951Objects2.length = 0;
gdjs.Fase1Code.GDEnemy_95951Objects3.length = 0;
gdjs.Fase1Code.GDEnemy_95951Objects4.length = 0;
gdjs.Fase1Code.GDNewTileMapObjects1.length = 0;
gdjs.Fase1Code.GDNewTileMapObjects2.length = 0;
gdjs.Fase1Code.GDNewTileMapObjects3.length = 0;
gdjs.Fase1Code.GDNewTileMapObjects4.length = 0;
gdjs.Fase1Code.GDExplosion_9595FXObjects1.length = 0;
gdjs.Fase1Code.GDExplosion_9595FXObjects2.length = 0;
gdjs.Fase1Code.GDExplosion_9595FXObjects3.length = 0;
gdjs.Fase1Code.GDExplosion_9595FXObjects4.length = 0;
gdjs.Fase1Code.GDCheckpointObjects1.length = 0;
gdjs.Fase1Code.GDCheckpointObjects2.length = 0;
gdjs.Fase1Code.GDCheckpointObjects3.length = 0;
gdjs.Fase1Code.GDCheckpointObjects4.length = 0;
gdjs.Fase1Code.GDPlatform_95951Objects1.length = 0;
gdjs.Fase1Code.GDPlatform_95951Objects2.length = 0;
gdjs.Fase1Code.GDPlatform_95951Objects3.length = 0;
gdjs.Fase1Code.GDPlatform_95951Objects4.length = 0;
gdjs.Fase1Code.GDForest_9595BackgroundObjects1.length = 0;
gdjs.Fase1Code.GDForest_9595BackgroundObjects2.length = 0;
gdjs.Fase1Code.GDForest_9595BackgroundObjects3.length = 0;
gdjs.Fase1Code.GDForest_9595BackgroundObjects4.length = 0;
gdjs.Fase1Code.GDGreenHeroObjects1.length = 0;
gdjs.Fase1Code.GDGreenHeroObjects2.length = 0;
gdjs.Fase1Code.GDGreenHeroObjects3.length = 0;
gdjs.Fase1Code.GDGreenHeroObjects4.length = 0;
gdjs.Fase1Code.GDRed_9595heroObjects1.length = 0;
gdjs.Fase1Code.GDRed_9595heroObjects2.length = 0;
gdjs.Fase1Code.GDRed_9595heroObjects3.length = 0;
gdjs.Fase1Code.GDRed_9595heroObjects4.length = 0;
gdjs.Fase1Code.GDBloque_9595SolidoObjects1.length = 0;
gdjs.Fase1Code.GDBloque_9595SolidoObjects2.length = 0;
gdjs.Fase1Code.GDBloque_9595SolidoObjects3.length = 0;
gdjs.Fase1Code.GDBloque_9595SolidoObjects4.length = 0;
gdjs.Fase1Code.GDSmallGreenButtonObjects1.length = 0;
gdjs.Fase1Code.GDSmallGreenButtonObjects2.length = 0;
gdjs.Fase1Code.GDSmallGreenButtonObjects3.length = 0;
gdjs.Fase1Code.GDSmallGreenButtonObjects4.length = 0;
gdjs.Fase1Code.GDSmallRedButtonObjects1.length = 0;
gdjs.Fase1Code.GDSmallRedButtonObjects2.length = 0;
gdjs.Fase1Code.GDSmallRedButtonObjects3.length = 0;
gdjs.Fase1Code.GDSmallRedButtonObjects4.length = 0;
gdjs.Fase1Code.GDB_9595buttonObjects1.length = 0;
gdjs.Fase1Code.GDB_9595buttonObjects2.length = 0;
gdjs.Fase1Code.GDB_9595buttonObjects3.length = 0;
gdjs.Fase1Code.GDB_9595buttonObjects4.length = 0;
gdjs.Fase1Code.GDA_9595buttonObjects1.length = 0;
gdjs.Fase1Code.GDA_9595buttonObjects2.length = 0;
gdjs.Fase1Code.GDA_9595buttonObjects3.length = 0;
gdjs.Fase1Code.GDA_9595buttonObjects4.length = 0;
gdjs.Fase1Code.GDFlatLightJoystickObjects1.length = 0;
gdjs.Fase1Code.GDFlatLightJoystickObjects2.length = 0;
gdjs.Fase1Code.GDFlatLightJoystickObjects3.length = 0;
gdjs.Fase1Code.GDFlatLightJoystickObjects4.length = 0;
gdjs.Fase1Code.GDBloque_9595FantasmaObjects1.length = 0;
gdjs.Fase1Code.GDBloque_9595FantasmaObjects2.length = 0;
gdjs.Fase1Code.GDBloque_9595FantasmaObjects3.length = 0;
gdjs.Fase1Code.GDBloque_9595FantasmaObjects4.length = 0;
gdjs.Fase1Code.GDBloque_9595PruebaObjects1.length = 0;
gdjs.Fase1Code.GDBloque_9595PruebaObjects2.length = 0;
gdjs.Fase1Code.GDBloque_9595PruebaObjects3.length = 0;
gdjs.Fase1Code.GDBloque_9595PruebaObjects4.length = 0;
gdjs.Fase1Code.GDCrossObjects1.length = 0;
gdjs.Fase1Code.GDCrossObjects2.length = 0;
gdjs.Fase1Code.GDCrossObjects3.length = 0;
gdjs.Fase1Code.GDCrossObjects4.length = 0;
gdjs.Fase1Code.GDtransitionObjects1.length = 0;
gdjs.Fase1Code.GDtransitionObjects2.length = 0;
gdjs.Fase1Code.GDtransitionObjects3.length = 0;
gdjs.Fase1Code.GDtransitionObjects4.length = 0;


return;

}

gdjs['Fase1Code'] = gdjs.Fase1Code;
