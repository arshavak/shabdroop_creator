
darshay();
function darshay(){

//स्थानशुद्धिः
document.getElementById("rup").innerHTML = "";

//अन्त्याक्षरप्राप्तिः
var input = document.getElementById("inp").value;
var antlop = input.trim();
var ant = antlop.substr(-2);
var ant1 = antlop.substr(-1);
var antvrsch = antlop.substr(-6);
var antrajan = antlop.substr(-3);
var vamant = antlop.substr(-4);

// इति 



//अत्र लोपः क्रियते

for(var i = 0; i<antlop.length; i++){
var s = antlop.slice(0, -2);
var s1 = antlop.slice(0, -1);
var svrsch = antlop.slice(0, -4);
var innant = antlop.slice(0, -3);
var vamantlop = antlop.slice(0, -2);
}
//इति 


//लेखपुटके रिक्ते न कार्यं करोति 
if(document.getElementById("inp").value == ""){return}

 
//चन्द्रमस् आदिसिद्धये कल्पितमिदम्
var kadi = ["क","ख","ग","घ","ङ","च","छ","ज","झ","ञ","ट","ठ","ड","ढ","ण","त","थ","द","ध","न","प","फ","ब","भ","म","य","र","ल","व","श","ष","स","ह"];
var ss = antlop.substr(-3);
var ss3 = ss.charAt(0);
var adupadh = kadi.includes(ss3);
// इति 


//अकारान्तस्य हेतोः नियमः
var aa = antlop.substr(-1);
var akarant = kadi.includes(aa);
// इति

// इतरवर्णनिरसनाय इदम्
var varnamala = ["","अ","आ","इ","इ","उ","ऊ","ऋ","ॠ","ऌ","ॡ","ए","ऐ","ओ","औ","्","ः","ं","ा","ि","ी","ु","ू","ृ","ॄ","ॢ","ॣ","े","े","ै","ो","ौ","क","ख","ग","घ","ङ","च","छ","ज","झ","ञ","ट","ठ","ड","ढ","ण","त","थ","द","ध","न","प","फ","ब","भ","म","य","र","र","ल","व","श","ष","स","ह"];
var khoj = varnamala.includes(ant1);
if(khoj==false){
alert("देवनागरलिपिरेव इहानुमतास्ति !");
document.getElementById("inp").value ="धर्म";
return darshay();
} 
//इति



if (ant1 == "ा"){
s=s1;
var vt =["ा","े","ा:","ाम्","े","ा:","या","ाभ्याम्","ाभिः","ायै","ाभ्याम्","ाभ्यः","ायाः","ाभ्याम्","ाभ्यः","ायाः","योः","ानाम्","ायाम् ","योः","ासु","े"];
}else

if(ant1 == "ि"){
s=s1;
var vt =["िः","ी","यः","िम्","ी","ीन्","िना","िभ्याम्","िभिः","ये","िभ्याम्","िभ्यः","ेः","िभ्याम्","िभ्यः","ेः","्योः","ीनाम्","ौ ","्योः","िषु","े"]
}else

if(ant=="इ"){
s=s1;
var vt =["इः","ई","अयः","इम्","ई","ईन्","इना","इभ्याम्","इभिः","अये","इभ्याम्","इभ्यः","एः","इभ्याम्","इभ्यः","एः","योः","ईनाम्","औ","योः","इषु","ए"]
} else

if(ant1 == "ी"){
s=s1;
var vt =["ी","्यौ","्यः","ीम्","्यौ","ीः","्या","ीभ्याम्","ीभिः","्यै","ीभ्याम्","ीभ्यः","्याः","ीभ्याम्","ीभ्यः","्याः","्योः","ीनाम्","्याम्","्योः","ीषु","ि"]
 }else

if(ant1 == "ु"){
s=s1;
var vt =["ुः","ू","वः","ुम्","ू","ून्","ुना","ुभ्याम्","ुभिः","वे","ुभ्याम्","ुभ्यः","ोः","ुभ्याम्","ुभ्यः","ोः","्वोः","ूनाम्","ौ ","्वोः","ुषु","ो"]
}else

if(ant1 == "ू"){
s=s1;
var vt =["ूः","्वौ","्वः","ूम्","्वौ","ूः","्वा","ूभ्याम्","ूभिः","्वै","ूभ्याम्","ूभ्यः","्वाः","ूभ्याम्","ूभ्यः","्वाः","्वोः","ूनाम्","्वाम्","्वोः","ूषु","ु"]
}else

if(ant1 == "ृ"){
s=s1;
var vt =["ा","ारौ","ारः","ारम्","ारौ","ॄन्","्रा","ृभ्याम्","ृभिः","्रे","ृभ्याम्","ृभ्यः","ुः","ृभ्याम्","ृभ्यः","ुः","्रोः","ॄणाम्","रि","्रो","ृषु","ः"]     
}else

if(ant == "क्"){
var vt =["क्/ग्","कौ","कः","कम्","कौ","कः","का","ग्भ्याम्","ग्भिः","के","ग्भ्याम्","ग्भ्यः","कः","ग्भ्याम्","ग्भ्यः","कः","कोः","काम्","कि","कोः","क्षु","क्/ग्"]    
}else

if(ant == "ख्"){
var vt =["क्/ग्","खौ","खः","खम्","खौ","खः","खा","ग्भ्याम्","ग्भिः","खे","ग्भ्याम्","ग्भ्यः","खः","ग्भ्याम्","ग्भ्यः","खः","खोः","खाम्","खि","खोः","क्षु","क्/ग्"]   
}else

if(ant == "ग्"){
var vt =["ग्/क्","गौ","गः","गम्","गौ","गः","गा","ग्भ्याम्","ग्भिः","गे","ग्भ्याम्","ग्भ्यः","गः","ग्भ्याम्","ग्भ्यः","गः","गोः","गाम्","गि","गोः","क्षु","ग्/क्"]
}else

if(ant == "घ्"){
var vt = ["ग् /क्","घौ","घः","घम्","घौ","घः","घा","ग्भ्याम्","ग्भिः","घे","ग्भ्याम्","ग्भ्यः","घः","ग्भ्याम्","ग्भ्यः","घः","घोः","घाम्","घि","घोः","क्षु","ग् /क्"] 
 }else

if(ant == "ङ्"){
var vt = ["ङ्","ङौ","ङः","ङम्","ङौ","ङः","ङा","ङ्भ्याम्","ङ्भिः","ङे","ङ्भ्याम्","ङ्भ्यः","ङः","ङ्भ्याम्","ङ्भ्यः","ङः","ङोः","ङाम्","ङि","ङोः","ङ्क्षु/ङ्षु","ङ्"]
}else

if(antvrsch == "वृश्च्"){
s=svrsch;
var vt = ["ट्/ड्","श्चौ","श्चः","श्चम्","श्चौ","श्चः","श्चा","ड्भ्याम्","ड्भिः","श्चे","ड्भ्याम्","ड्भ्यः","श्चः","ड्भ्याम्","ड्भ्यः","श्चः","श्चोः","श्चाम्","श्चि","श्चोः","ट्सु/ट्त्सु","ट्/ड्"]
}else

if(ant == "च्"){
var vt = ["क्/ग्","चौ","चः","चम्","चौ","चः","चा","ग्भ्याम्","ग्भिः","चे","ग्भ्याम्","ग्भ्यः","चः","ग्भ्याम्","ग्भ्यः","चः","चोः","चाम्","चि","चोः","क्षु","क्/ग्"]
}else

if(ant == "छ्"){
var vt = ["ट्/ड्","च्छौ","च्छः","च्छम्","च्छौ","च्छः","च्छा","ड्भ्याम्","ड्भिः","च्छे","ड्भ्याम्","ड्भ्यः","च्छः","ड्भ्याम्","ड्भ्यः","च्छः","च्छोः","च्छाम्","च्छि","च्छोः","ट्सु/ट्त्सु","ट्/ड्"]
}else

if(ant == "ज्"){
var vt = ["क्/ग्","जौ","जः","जम्","जौ","जः","जा","ग्भ्याम्","ग्भिः","जे","ग्भ्याम्","ग्भ्यः","जः","ग्भ्याम्","ग्भ्यः","जः","जोः","जाम्","जि","जोः","क्षु","क्/ग्"]
}else

if(ant == "झ्"){
var vt = ["क्/ग्","झौ","झः","झम्","झौ","झः","झा","ग्भ्याम्","ग्भिः","झे","ग्भ्याम्","ग्भ्यः","झः","ग्भ्याम्","ग्भ्यः","झः","झोः","झाम्","झि","झोः","क्षु","क्/ग्"]
 }else

if(ant == "ञ्"){
var vt = ["ङ्","ञौ","ञः","ञम्","ञौ","ञः","ञा","ङ्भ्याम्","ङ्भिः","ञे","ङ्भ्याम्","ङ्भ्यः","ञः","ङ्भ्याम्","ङ्भ्यः","ञः","ञोः","ञाम्","ञि","ञो","ङ्षु/ङ्क्षु","ङ्"]
} else 

if (ant == "ट्"){
var vt = ["ट्/ड्","टौ","टः","टम्","टौ","टः","टा","ड्भ्याम्","ड्भिः","टे",	"ड्भ्याम्","ड्भ्यः","टः","ड्भ्याम्","ड्भ्यः","टः","टोः","टाम्","टि","टोः","ट्सु/ट्त्सु","ट्/ड्"];
}else

if (ant == "ठ्"){
var vt = ["ट्/ड्","ठौ","ठः","ठम्","ठौ","ठः","ठा","ड्भ्याम्","ड्भिः","ठे","ड्भ्याम्","ड्भ्यः","ठः","ड्भ्याम्","ड्भ्यः","ठः","ठोः","ठाम्","ठि","ठोः","ट्सु/ट्त्सु","ट्/ड्"];
}else

if (ant == "ड्"){
var vt = ["ट्/ड्","डौ","डः","डम्","डौ","डः","डा","ड्भ्याम्","ड्भिः","डे","ड्भ्याम्","ड्भ्यः","डः","ड्भ्याम्","ड्भ्यः","डः",	"डोः","डाम्","डि","डोः","ट्सु/ट्त्सु","ट्/ड्"];
}else

if (ant == "ढ्"){
var vt = ["ट्/ड्","ढौ","ढः","ढम्","ढौ","ढः","ढा","ड्भ्याम्","ड्भिः","ढे","ड्भ्याम्","ड्भ्यः","ढः","ड्भ्याम्","ड्भ्यः","ढः","ढोः","ढाम्","ढि","ढोः","ट्सु/ट्त्सु","ट्/ड्"];
}else

if (ant == "ण्"){
var vt = ["ण्","णौ","णः","णम्","णौ","णः","णा","ण्भ्याम्","ण्भिः","णे","ण्भ्याम्","ण्भ्यः","णः","ण्भ्याम्","ण्भ्यः","णः","णोः","णाम्","णि","णोः","ण्ट्सु/ण्सु","ण्"];
}else

if (ant == "त्"){
var vt = ["त्/द्","तौ","तः","तम्","तौ","तः","ता","द्भ्याम्","द्भिः","ते","द्भ्याम्","द्भ्यः","तः","द्भ्याम्","द्भ्यः","तः","तोः",	"ताम्","ति","तोः","त्सु","त्/द्"];
}else

if (ant == "थ्"){
var vt = ["त्/द्","थौ",	"थः","थम्","थौ","थः","था","द्भ्याम्","द्भिः","थे","द्भ्याम्","द्भ्यः","थः","द्भ्याम्","द्भ्यः","थः","थोः","थाम्","थि","थोः","त्सु","त्/द्"];
}else

if (ant == "द्"){
var vt = ["त्/द्","दौ","दः","दम्","दौ","दः","दा","द्भ्याम्","द्भिः","दे","द्भ्याम्","द्भ्यः","दः","द्भ्याम्","द्भ्यः","दः","दोः","दाम्","दि","दोः","त्सु","त्/द्"];
}else

if (ant == "ध्"){
var vt = ["त्/द्","धौ","धः","धम्","धौ","धः","धा","द्भ्याम्","द्भिः","धे","द्भ्याम्","द्भ्यः","धः","द्भ्याम्","द्भ्यः","धः","धोः","धाम्","धि","धोः","त्सु","त्/द्"];
}else

if (antrajan == "जन्"){
var vt = ["ा","ानौ","ानः","ानम्","ानौ","्ञः","्ञा","भ्याम्","भिः","्ञे","भ्याम्","भ्यः","्ञः","भ्याम्","भ्यः","्ञः","्ञोः","्ञाम्",	"्ञि/०जनि","्ञोः","सु","न्"];
} else


if (vamant == "्मन्"){
s=vamantlop;
var vt =["ा","ानौ","ानः","ानम्","ानौ","नः","ना","भ्याम्","भिः","ने","भ्याम्","भ्यः","नः","भ्याम्","भ्यः","नः","नोः","नाम्","नि","नोः","सु","न्"];
} else


if (vamant == "्वन्"){
s=vamantlop;
var vt =["ा","ानौ","ानः","ानम्","ानौ","नः","ना","भ्याम्","भिः","ने","भ्याम्","भ्यः","नः","भ्याम्","भ्यः","नः","नोः","नाम्","नि","नोः","सु","न्"];
} else


if (antrajan == "िन्"){
s=innant;
var vt =["ी","िनौ","िनः","िनम्","िनौ","िनः","िना","िभ्याम्","िभिः","िने","िभ्याम्","िभ्यः","िनः","िभ्याम्","िभ्यः","िनः","िनोः","िनाम्","िनि","िनोः","िसु","िन्"];
} else


if (ant == "न्"){
var vt =["ा","ानौ","ानः","ानम्","ानौ","्नः","्ना","भ्याम्","भिः","्ने","भ्याम्","भ्यः","्नः","भ्याम्","भ्यः","्नः",	"्नोः","्नाम्","्नि/⁰नि","्नोः","सु","न्"];
} else

if(ant=="प्"){
var vt =["प्/ब्","पौ","पः","पम्","पौ","पः","पा","ब्भ्याम्","ब्भिः","पे","ब्भ्याम्","ब्भ्यः","पः","ब्भ्याम्","ब्भ्यः","पः","पोः","पाम्","पि","पोः","प्सु","प्/ब्"];} else

if(ant=="फ्"){
var vt =["प्/ब्","फौ","फः","फम्","फौ","फः","फा","ब्भ्याम्","ब्भिः","फे","ब्भ्याम्","ब्भ्यः","फः","ब्भ्याम्","ब्भ्यः","फः","फोः","फाम्","फि","फोः","प्सु","प्/ब्"];} else

if(ant=="ब्"){
var vt =["ब्/प्","बौ","बः","बम्","बौ","बः","बा","ब्भ्याम्","ब्भिः","बे","ब्भ्याम्","ब्भ्यः","बः","ब्भ्याम्","ब्भ्यः","बः","बोः","बाम्","बि","बोः","प्सु","ब्/प्"];} else

if(ant=="भ्"){
var vt =["ब्/प्","भौ","भः","भम्","भौ","भः","भा","ब्भ्याम्","ब्भिः","भे","ब्भ्याम्","ब्भ्यः","भः","ब्भ्याम्","ब्भ्यः","भः","भोः","भाम्","भि","भोः","प्सु","ब्/प्"];} else

if(ant=="म्"){
var vt =["म्","मौ","मः","मम्","मौ","मः","मा","म्भ्याम्","म्भिः","मे","म्भ्याम्","म्भ्यः","मः","म्भ्याम्","म्भ्यः","मः","मोः","माम्","मि","मोः","ंसु","म्"];} else

if(ant=="य्"){
var vt =["ः","यौ","यः","यम्","यौ","यः","या","भ्याम्","भिः","ये","भ्याम्","भ्यः","यः","भ्याम्","भ्यः","यः","योः","याम्","यि","योः","सु",""];} else

if(ant=="र्"){
var vt =["ः","रौ","रः","रम्","रौ","रः","रा","र्भ्याम्","र्भिः","रे","र्भ्याम्","र्भ्यः","रः","र्भ्याम्","र्भ्यः","रः","रोः","राम्","रि","रोः","ःषु/र्षु",""];} else


if(ant=="ल्"){
var vt =["ल्","लौ","लः","लम्","लौ","लः","ला","ल्भ्याम्","ल्भिः","ले","ल्भ्याम्","ल्भ्यः","लः","ल्भ्याम्","ल्भ्यः","लः","लोः","लाम्","लि","लोः","ल्सु","ल्"];} else


if(ant=="व्"){
var vt =["ः","वौ","वः","वम्","वौ","वः","वा","भ्याम्","भिः","वे","भ्याम्","भ्यः","वः","भ्याम्","भ्यः","वः","वोः","वाम्","वि","वोः","सु",""];} else


if(ant=="श्"){
var vt =["ट्","शौ","शः","शम्","शौ","शः","शा","ड्भ्याम्","ड्भिः","शे","ड्भ्याम्","ड्भ्यः","शः","ड्भ्याम्","ड्भ्यः","शः","शोः","शाम्","शि","शोः","ट्सु/ट्त्सु","ट्"];} else

if(ant=="ष्"){
var vt =["ट्","षौ","षः","षम्","षौ","षः","षा","ड्भ्याम्","ड्भिः","षे","ड्भ्याम्","ड्भ्यः","षः","ड्भ्याम्","ड्भ्यः", "षः","षोः","षाम्","षि","षोः","ट्सु/ट्त्सु","ट्"];} else

if(ant=="स्" && adupadh== true){
var vt =["ाः","सौ","सः","सम्","सौ","सः","सा","ोभ्याम्","ोभिः","से","ोभ्याम्","ोभ्यः","सः","ोभ्याम्","ोभ्यः","सः","सोः","साम्","सि","सोः","ःसु/स्सु","ः"];} else


if(ant=="स्" && adupadh== false){
var vt =["ः","सौ","सः","सम्","सौ","सः","सा","भ्याम्","भिः","से","भ्याम्","भ्यः","सः","भ्याम्","भ्यः","सः","सोः","साम्","सि","सोः","ःसु/स्सु","ः"];} else


if(ant=="ह्"){
var vt =["ट्/ड्","हौ","हः","हम्","हौ","हः","हा","ड्भ्याम्","ड्भिः","हे","ड्भ्याम्","ड्भ्यः","हः","ड्भ्याम्","ड्भ्यः","हः","होः","हाम्","हि","होः","ट्सु/ट्त्सु","ट्/ड्"];} else

if(akarant == true){
s=antlop;
var vt =["ः","ौ","ा:","म्","ौ","ान्","ेन","ाभ्याम्","ै:","ाय","ाभ्याम्","ेभ्यः","ात्","ाभ्याम्","ेभ्यः","स्य","योः ","ानाम् ","े ","योः","ेषु",""];}else
{
document.getElementById("rup").innerHTML ="एतादृशं प्रातिपदिकं न सम्भवति ।";
return;}




//अट्कुप्वाङ्नुम्व्यवायेऽपि  ॥  रषाभ्यां नो णः समानपदे ॥

//रेफस्य कृते

var rtpr =/[^र]*$/.exec(input)[0];
if((rtpr.includes("ल")==false && rtpr.includes("च")==false &&  rtpr.includes("छ")==false &&  rtpr.includes("ज")==false && rtpr.includes("झ")==false && rtpr.includes("ञ")==false && rtpr.includes("ट")==false && rtpr.includes("ठ")==false && rtpr.includes("ड")==false && rtpr.includes("ढ")==false && rtpr.includes("ण")==false && rtpr.includes("त")==false && rtpr.includes("थ")==false && rtpr.includes("द")==false && rtpr.includes("ध")==false && rtpr.includes("न")==false && rtpr.includes("श")==false && rtpr.includes("स")==false) && input.includes("र")== true ){
vt[6]=vt[6].replace("न","ण"); 
vt[17]=vt[17].replace("न","ण");
}

//षकारस्य कृते

var stpr =/[^ष]*$/.exec(input)[0];
if((stpr.includes("ल")==false && stpr.includes("च")==false &&  stpr.includes("छ")==false &&  stpr.includes("ज")==false && stpr.includes("झ")==false && stpr.includes("ञ")==false && stpr.includes("ट")==false && stpr.includes("ठ")==false && stpr.includes("ड")==false && stpr.includes("ढ")==false && stpr.includes("ण")==false && stpr.includes("त")==false && stpr.includes("थ")==false && stpr.includes("द")==false && stpr.includes("ध")==false && stpr.includes("न")==false && stpr.includes("श")==false && stpr.includes("स")==false) &&  input.includes("ष")== true){
vt[6]=vt[6].replace("न","ण"); 
vt[17]=vt[17].replace("न","ण");
}

//ऋकारस्य कृते
var uspr =/[^ृ]*$/.exec(input)[0];
if((uspr.includes("ल")==false && uspr.includes("च")==false &&  uspr.includes("छ")==false &&  uspr.includes("ज")==false && uspr.includes("झ")==false && uspr.includes("ञ")==false && uspr.includes("ट")==false && uspr.includes("ठ")==false && uspr.includes("ड")==false && uspr.includes("ढ")==false && uspr.includes("ण")==false && uspr.includes("त")==false && uspr.includes("थ")==false && uspr.includes("द")==false && uspr.includes("ध")==false && uspr.includes("न")==false && uspr.includes("श")==false && uspr.includes("स")==false) &&  input.includes("ृ")== true){
vt[6]=vt[6].replace("न","ण"); 
vt[17]=vt[17].replace("न","ण");
}


//इति णत्वम्

var a11 = s+vt[0];
var a12 = s+vt[1];
var a13 = s+vt[2];
var a21 = s+vt[3];
var a22 = s+vt[4];
var a23 = s+vt[5];
var a31 = s+vt[6];
var a32 = s+vt[7];
var a33 = s+vt[8];
var a41 = s+vt[9];
var a42 = s+vt[10];
var a43 = s+vt[11];
var a51 = s+vt[12];
var a52 = s+vt[13];
var a53 = s+vt[14];
var a61 = s+vt[15];
var a62 = s+vt[16];
var a63 = s+vt[17];
var a71 = s+vt[18];
var a72 = s+vt[19];
var a73 = s+vt[20];
var a81 = s+vt[21];


var roopani = 
"<center>"+"<table style='width:auto;text-align:center;'>"
+"<tr style='background-color:#ffffcc;'>" +"<td style='background-color:#ffffcc;width:20%;font-size:15px;'><marquee> इमानि "+antlop+"-"+"शब्दस्य रूपाणि वर्तन्ते । त्रुटयः सम्भाव्यन्ते । शोधनं प्रवर्तते ।"+"</marquee></td>"+ "<td>"+ "<b>एकवचनम्</b>"+'</td><td>'+"<b>द्विवचनम्</b>"+'</td><td> '+"<b>बहुवचनम्</b>"+"</td></tr>"+"<tr>"+"<td style='background-color:#ffffcc;'><b>प्रथमा विभक्तिः</b>   </td>"+"<td>"+ a11+'</td><td>'+a12+'</td><td> '+a13+"</td></tr>"+"<tr>"+"<td style='background-color:#ffffcc;'>   <b>द्वितीया विभक्तिः</b>  </td>"+"<td>"+a21+"</td><td> "+a22+"</td><td> "+a23+ "</td></tr>"+"<tr>"+"<td style='background-color:#ffffcc;'>  <b>तृतीया विभक्तिः</b>   </td>"+"<td>"+a31+'</td><td> '+a32+' </td><td>'+a33+' '+ "</td></tr>"+"<tr>"+"<td style='background-color:#ffffcc;'>   <b>चतुर्थी विभक्तिः</b>     </td>"+"<td>"+a41+"</td><td> "+a42+"</td><td> "+a43+ "</td></tr>"+"<tr>"+"<td style='background-color:#ffffcc;'>     <b>पञ्चमी विभक्तिः</b>   </td>"+"<td>"+a51+'</td><td> '+a52+'</td><td> '+a53+' '+ "</td></tr>"+"<tr>"+"<td style='background-color:#ffffcc;'>    <b>षष्ठी विभक्तिः</b>    </td>"+"<td>"+a61+" </td><td>"+a62+"</td><td> "+a63+ "</td></tr>"+"<tr>"+"<td style='background-color:#ffffcc;'>   <b>सप्तमी विभक्तिः</b>     </td>"+"<td>"+a71+'</td><td> '+a72+' </td><td>'+a73+ "</td></tr>"+"<tr>"+"<td style='background-color:#ffffcc;'><b>सम्बोधनम्</b>        </td>"+"<td>"+"हे"+" "+a81+"</td><td> "+"हे"+" "+a12+"</td><td> "+"हे"+" "+a13+ "</td></tr>"+ "</table>"+"</center>";

document.getElementById("rup").innerHTML = roopani;
}

//save this in txt
function savetxt(){
    var inputPratipadikam = document.getElementById("inp").value;
    if(confirm("txt file will downloade. are you sure you want to")){
        let file = new Blob([document.getElementById('rup').innerText], {type: 'text/plain'});
        //Create a link element
        let downloadLink = document.createElement("a");
        //Set link attributes
        
        downloadLink.download = inputPratipadikam +"_शब्दरूपाणि"+ ".txt"
        downloadLink.href = window.URL.createObjectURL(file);
        downloadLink.click();   
        
    }
}