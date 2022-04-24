﻿var location = "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_Maya\\log\\";
var scr_name = "sf_maya22_4";


//#include "sf_scr_global_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\sf_scr_global_1.jsx"
#include "sf_scr_lib_maya_2.jsx"


#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\json2.js"

#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_compos_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_final_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_folder_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_prop_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_sys_1.jsx"




//#include "sf_scr_lib_vika_1.jsx"

// global vars
var durationSec     = 5;
var rotationEnable  = 1;

// global vars
//var location = "C:\\data";
//var location = "e:\\Setup\\!AE\\ae_scripts\\log\\";


//===================================================
function main() 
{



    lg.open("w","UTF-8")
    lg.writeln("====================");
    lg.writeln(scr_name + " Date: " + new Date().toString());

    var influenceIn = getRandomInt(0, 10);
    lg.writeln(" getRandomInt: " +getRandomInt(0, 10).toString());
    lg.writeln(" getRandomInt: " +getRandomInt(0, 10).toString());
    var random = Math.round(Math.random());
    lg.writeln(" Math.round(Math.random()): " +Math.round(Math.random()).toString());
    lg.writeln(" Math.round(Math.random()): " +Math.round(Math.random()).toString());

    genXml = readXmlaeGenXml("e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_Maya\\xml\\gen_maya_22_1.xml");

    var logName       = genXml.logName;
    var pathRrXml     = genXml.pathRrXml;
    //lg.writeln(" pathRrXml: " + pathRrXml.toString());

    myXml = readXmlae_maya22_3_1(pathRrXml);
    //lg.writeln(" myXml: " + myXml.toString());

    handleXmlmaya_2(myXml);
    lg.writeln('filePathUrl.length= ' +  String(filePathUrl.length)  );


    handleFolders() ;
    handleNewComposit2();

    var compFinalName = "aeFinalMayaAll_1";
    finalComp = handleFinalCompAll(compFinalName);
    
    var compFinalName = "aeFinalMaya_1";
    finalComp = handleFinalComp4(compFinalName);
    
    var compFinalName = "aeFinalMayaBaseBg_1";
    finalComp = handleFinalCompBaseBg(compFinalName);
    
    var compFinalName = "aeFinalMayaBg_1";
    finalComp = handleFinalCompBg(compFinalName);
    
    
    var compFinalName = "aeFinalMayaBase_1";
    finalComp = handleFinalCompBase(compFinalName);
    
    
    var compFinalName = "aeFinalMayaBaseBi_1";
    finalComp = handleFinalCompBi(compFinalName);


    // ## // // handleFolders() ;
    // ## handleFolders_V() ;
    // ## // 
    // ## handleXmlVika_1();
    // ## lg.writeln('filePathUrl.length= ' +  String(filePathUrl.length)  );
    // ## // 
    // ## // handleNewComposit2();
    // ## handleNewComposit_V();
    // ## 
    // ##  
    // ## //var compFinalName = "aeFinalDimaAll_1";
    // ## var compFinalName = "aeFinalVikaAll_1";
    // ## finalComp = handleFinalCompAll(compFinalName);
    // ## 
    // ## //var compFinalName = "aeFinalDima_1";
    // ## var compFinalName = "aeFinalVika_1";
    // ## finalComp = handleFinalComp4(compFinalName);
    // ## 
    // ## //var compFinalName = "aeFinalDimaBaseBg_1";
    // ## var compFinalName = "aeFinalVikaBaseBg_1";
    // ## //finalComp = handleFinalComp3(compFinalName);
    // ## finalComp = handleFinalCompBaseBg(compFinalName);
    // ## 
    // ## //var compFinalName = "aeFinalDimaBaseBg_1";
    // ## var compFinalName = "aeFinalVikaBg_1";
    // ## //finalComp = handleFinalComp3(compFinalName);
    // ## finalComp = handleFinalCompBg(compFinalName);
    // ## 
    // ## 
    // ## //var compFinalName = "aeFinalDimaBase_1";
    // ## var compFinalName = "aeFinalVikaBase_1";
    // ## //finalComp = handleFinalComp3(compFinalName);
    // ## finalComp = handleFinalCompBase(compFinalName);
    // ## 
    // ## 
    // ## //var compFinalName = "aeFinalDimaBaseBg_1";
    // ## var compFinalName = "aeFinalVikaBaseBi_1";
    // ## //finalComp = handleFinalComp3(compFinalName);
    // ## finalComp = handleFinalCompBi(compFinalName);
    




    lg.writeln("====================");
    lg.close();

}

//===================================================

app.beginUndoGroup("AR_" + scr_name); // Begin undo group
var vault = []; // Initialize array for storing everything necessary
main()
app.endUndoGroup(); // End undo group

