var audioActivo = true;
var audioActual = new Audio();

/**
 * por sí en algún momento se necesita saber el slide actual del smart wizard
 */
function onLoadAudio() {
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlAudioSlides(stepIndex);
}

function pause_audio() {
    audioActual.pause();
}

function controlAudioSlides(numeroSlide) {

    if(audioActual)
     audioActual.pause();

    switch (numeroSlide) {
        case 1:
            audioActual = new Audio('assets/voz/sonido1_p1.mp3');
            break;
        case 2:
            $(`#tabsObjetivos>div>.tabs>button`).removeClass("active");
            $(`#tabsObjetivos>div>.wrapper_tabcontent>div`).removeClass("active");
            $("#tabObjetivos").addClass("active");
            $(`#Objetivos`).addClass("active");  
            audioActual = new Audio('assets/voz/Sonido2_p2.mp3');


            break;            
        case 3:
            $(`#tabsAprenderas>div>.tabs>button`).removeClass("active");
            $(`#tabsAprenderas>div>.wrapper_tabcontent>div`).removeClass("active");
            $("#tabUnidad_aprenderas").addClass("active");
            $(`#unidad_aprenderas`).addClass("active");      
            audioActual = new Audio('assets/voz/Sonido5_p3.mp3');  

            
            break;            
        case 4:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            $('#carouselActividadAprendizaje1').carousel(0);
            audioActual = new Audio('assets/voz/Sonido 8_p4.mp3');  
            
            break;            
        case 5:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
                $('.pasos-conceptos').hide();
                $('.conceptos1').show().css({ 'opacity': 0, 'bottom': '-100px' }).animate({ 'opacity': '1', 'bottom': 0 }, 1000);;            
                audioActual = new Audio('assets/voz/Sonido14_p5.mp3');  
            break;    
        case 6:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido15_p6.mp3');  
            break;                                              
        case 7:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido19_ p7.mp3');  
            //$('#carouselActividadAprendizaje2').carousel(0);
            
            break;                                              
        case 8:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido20_p8.mp3');  
            //$(".comentariosFrecuencia").hide();           
            
            break;            
        case 9:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido21_p9.mp3');  
            //$("#carouselFrecuencia").carousel(0);
            
            break;            
        case 10:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido22_p10.mp3');  
            //$("#carouselGeneracionCorriente").carousel(0);
            
            break;            
        case 11:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido23_p11.mp3');  
            
            break;            
        case 12:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido24_p12.mp3');  
            break;
        case 13:   
        $(`.menu_actidades`).removeClass("active_actividad");
        $(`.menu_actidades1`).addClass("active_actividad");   
        audioActual = new Audio('assets/voz/Sonido25_p13.mp3');  
            break;            
        case 14:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio();  
            break;            
        case 15:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades2`).addClass("active_actividad");
            $('#carouselActividadAprendizaje2').carousel(0);
            audioActual = new Audio('assets/voz/Sonido26_p14.mp3');  
            
            break;               
        case 16:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades2`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido32_p15.mp3'); 
            break;            
        case 17:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades2`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido33_p16.mp3');
            break;            
        case 18:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades2`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido34_p17.mp3');
            break;            
        case 19: 
        $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades2`).addClass("active_actividad");        
        audioActual = new Audio();
            break;
        case 20:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades3`).addClass("active_actividad");
            $("#carouselActividadAprendizaje3").carousel(0);
            audioActual = new Audio('assets/voz/Sonido35_p18.mp3');
            break;            
        case 21:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades3`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido42_p19.mp3');
            break;                         
        case 22:
            audioActual = new Audio('assets/voz/Sonido43_p20.mp3');
            break;                         
        case 23:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades3`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido46_ p21.mp3');
            
            break;                         
        case 24:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades3`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido51_p22.mp3');
            break;                         
        case 25:    
        $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades3`).addClass("active_actividad"); 
        $("#quiz-restart-btn").click();
        $("#quiz-start-btn").click();    
        audioActual = new Audio();
            break;      
        case 26:

           
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            $("#carouselActividadAprendizaje4").carousel(0);
            audioActual = new Audio('assets/voz/Sonido52_p23.mp3');
            
            break;   
        case 27:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido59_p24.mp3');
           
            break; 
        case 28:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido60_p25.mp3');
            break;
        case 29:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido63_p26.mp3');
            break; 
        case 30:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido64_p27.mp3');
            break;  
        case 31:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido65_p28.mp3');
            break;    
        case 32:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido66_p29.mp3');
            break;    
        case 33:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido67_p30.mp3');
            
            break; 
        case 34:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio();
            break;   
        case 35:
           
            break;   
                             
        default:
            
            break;
    }
    
    if(!audioActivo) {
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        return false;
    } else {
        $("#resumeAudio").hide();
        $("#pauseAudio").show();        
    }

    if(audioActual){
        audioActual.play();
    }

}

$("#audioActivo").click(function() { 
    audioActivoFuncion();
});

$("#boton_generales").click(function() { 
    audioActual.pause();
    audioActual = new Audio('assets/voz/Sonido47_ p21.mp3');
    audioActual.play(); 
});

$("#boton_responsable").click(function() { 
    audioActual.pause();
    audioActual = new Audio('assets/voz/Sonido48_ p21.mp3');
    audioActual.play(); 
});

$("#boton_condiciones").click(function() { 
    audioActual.pause();
    audioActual = new Audio('assets/voz/Sonido49_ p21.mp3 ');
    audioActual.play(); 
});


$("#boton_mezclas").click(function() { 
    audioActual.pause();
    audioActual = new Audio('assets/voz/Sonido50_p21.mp3');
    audioActual.play(); 
});




$("#cardFront_3").click(function() { 
   /*  audioActual.pause();
    audioActual = new Audio('assets/voz/Sonido16_p6.mp3');
    audioActual.play();  */
});

$("#cardBack_3").click(function() { 
    audioActual.pause();

});

$("#cardFront_4").click(function() { 
   /*  audioActual.pause();
    audioActual = new Audio('assets/voz/Sonido16_p6.mp3');
    audioActual.play();  */
});

$("#cardBack_4").click(function() { 
    audioActual.pause();

});




function audioActivoFuncion() {
    audioActivo = !audioActivo;
    
    if(!audioActivo) {
        $("#iconoAudioActivo").hide();
        $("#iconoAudioInactivo").show();
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        if (audioActual)
        audioActual.pause();          
    } else {
        $("#iconoAudioInactivo").hide();        
        $("#iconoAudioActivo").show();
        $("#pauseAudio").show();
        $("#resumeAudio").hide();
        if (audioActual)
        audioActual.play();  
    }
}

$("#pauseAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.pause(); 

    $("#pauseAudio").hide();
    $("#resumeAudio").show();
});

$("#pauseAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.pause(); 

    $("#pauseAudio").hide();
    $("#resumeAudio").show();
});

$("#modal_1").click(function() {

    if(audioActual)
     audioActual.pause();

     audioActual = new Audio('assets/voz/Sonido16_p6.mp3');

     if(audioActual){
        audioActual.play();
    }
 
});


$("#modal_2").click(function() {

    if(audioActual)
     audioActual.pause();

     audioActual = new Audio('assets/voz/Sonido17_p6.mp3');

     if(audioActual){
        audioActual.play();
    }
 
});


$("#modal_3").click(function() {

    if(audioActual)
     audioActual.pause();

     audioActual = new Audio('assets/voz/Sonido18_p6.mp3');

     if(audioActual){
        audioActual.play();
    }
 
});


function reproducirAudio(audioLocation) {
    if (audioActual)
        audioActual.pause();    

    audioActual = new Audio(audioLocation);        

    if (!audioActivo) {
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        return false;
    } else {
        $("#resumeAudio").hide();
        $("#pauseAudio").show();
    }

    if (audioActual)
        audioActual.play();    
}

/**
 * Configuraciones personalizadas para tabs de audio
 */

function audioConceptos(numeroTab) {

    var audioLocation;

    switch (parseInt(numeroTab)) {
        case 1:
            audioLocation = 'assets/voz/U14D011.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D012.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D013.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D014.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D015.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D016.mp3';
            break;
        case 7:
            $('#carouselConceptos').carousel(0);
            audioLocation = 'assets/voz/U14D017.mp3';
            break;
        case 8:
            $('#carouselConceptos_2').carousel(0);
            audioLocation = 'assets/voz/U14D024.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioTarjetas(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 54:
            audioLocation = 'assets/voz/U14D054.mp3';
            break;
        case 56:
            audioLocation = 'assets/voz/U14D056.mp3';
            break;
        case 58:
            audioLocation = 'assets/voz/U14D058.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla13(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D061.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D063.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D065.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla16(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 2:
            audioLocation = 'assets/voz/U14D073.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D074.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D075.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla18(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D080.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D082.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla19(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D084.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D092.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla24(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D110.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D112.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D114.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D116.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D118.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla25(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D119.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D121.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D124.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D128.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla30(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D144.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D145.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D146.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla34(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D155.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D157.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla37(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D161.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D163.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D165.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla38(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D172.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D173.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D174.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D175.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPasos(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 2:
            audioLocation = 'assets/voz/U14D015.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D016.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D017.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D018.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D019.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U14D020.mp3';
            break;
        case 8:
            audioLocation = 'assets/voz/U14D021.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U14D022.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U14D023.mp3';
            break;
        case 11:
            audioLocation = 'assets/voz/U14D024.mp3';
            break;
        case 12:
            audioLocation = 'assets/voz/U14D025.mp3';
            break;
        case 13:
            audioLocation = 'assets/voz/U14D026.mp3';
            break;
        case 14:
            audioLocation = 'assets/voz/U14D027.mp3';
            break;
        case 15:
            audioLocation = 'assets/voz/U14D028.mp3';
            break;
        case 16:
            audioLocation = 'assets/voz/U14D029.mp3';
            break;
        case 17:
            audioLocation = 'assets/voz/U14D030.mp3';
            break;
        case 18:
            audioLocation = 'assets/voz/U14D031.mp3';
            break;
        case 19:
            audioLocation = 'assets/voz/U14D032.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

/**
 * Esta función se llama desde contenido.html, ya que de acuerdo al botón seleccionado
 * se abre un modal. Estos audios corresponden a esos casos específicos:
 */
function audioTipoEquipos(tipoEquipo){
    var audioLocation;

    switch (tipoEquipo) {
        case 'electrodos':
            audioLocation = 'assets/voz/U14D042.mp3';
            break;
        case 'barrajes':
            audioLocation = 'assets/voz/U14D044.mp3';
            break;
        case 'conductores':                
            audioLocation = 'assets/voz/U14D046.mp3';
            break;
        case 'puentes':
            audioLocation = 'assets/voz/U14D048.mp3';
            break;
        case 'conectores':
            audioLocation = 'assets/voz/U14D050.mp3';
            break;
        case 'dispositivo':
            audioLocation = 'assets/voz/U14D052.mp3';
            break;
        default:
            break;
    }
    
    reproducirAudio(audioLocation);
}

function audioComentariosFrecuencia(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D055.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D056.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D057.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D058.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D059.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D060.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U14D061.mp3';
            break;    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioCollapsePuntos(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 0:
            audioLocation = 'assets/voz/U14D070.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D072.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D073.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D074.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D075.mp3';
            break;
        default:
            break;
    }         
    
    reproducirAudio(audioLocation);
}

function audioImagenesCA(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D078.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D079.mp3';
            break;
        case 3:
            $("#carouselFrecuencia_2").carousel(0)
            audioLocation = 'assets/voz/U14D080.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D083.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D084.mp3';
            break;            
        case 6:
            audioLocation = 'assets/voz/U14D085.mp3';
            break;            
        default:
            break;
    }

    reproducirAudio(audioLocation);    
}

function audioTransformadoresTab(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D086.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D087.mp3';
            break;
        case 3:            
            audioLocation = 'assets/voz/U14D088.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposLinea(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D090.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D091.mp3';
            break;
        case 3:            
            audioLocation = 'assets/voz/U14D092.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposCorriente(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D094.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D095.mp3';
            break;
        case 3:            
            $("#carouselTipoCorriente").carousel(0);
            audioLocation = 'assets/voz/U14D096.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposConexiones(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D099.mp3';
            break;
        case 2:
            $("#carouselConexionDelta").carousel(0);
            audioLocation = 'assets/voz/U14D100.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioImanes(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D110.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D111.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D112.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D113.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D114.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D115.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U14D116.mp3';
            break;
        case 8:
            audioLocation = 'assets/voz/U14D117.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U14D118.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U14D119.mp3';
            break;
        case 11:
            audioLocation = 'assets/voz/U14D120.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioElectroImanesDiapositiva(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 0:
            audioLocation = 'assets/voz/U14D132.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D133.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D134.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioElectroImanesTabs(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D135.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D136.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D137.mp3';
            break;
        case 4:
            $("#carouselFoucault").carousel(0);
            audioLocation = 'assets/voz/U14D138.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioTabs(opcion) {
    var audioLocation;

    switch (opcion) {
        case 'Objetivos':
            audioLocation = 'assets/voz/Sonido2_p2.mp3';
            break;
        case 'Contenido':
            audioLocation = 'assets/voz/Sonido3_p2.mp3';
            break;
        case 'Metodologia':
            audioLocation = 'assets/voz/Sonido4_p2.mp3 ';
            break;
        case 'unidad_aprenderas':
            audioLocation = 'assets/voz/Sonido5_p3.mp3';
            break;
        case 'unidad_necesitas':
            audioLocation = 'assets/voz/Sonido6_p3.mp3';
            break;


            case '':
                audioLocation = 'assets/voz/Sonido6_p3.mp3';
                break;

        default:
            break;
    }

    reproducirAudio(audioLocation);
}

$('#carouselActividadAprendizaje1').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje1>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D007.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D008.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D009.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D010.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselActividadAprendizaje2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D068.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D069.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D070.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D071.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselActividadAprendizaje3').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje3>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D105.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D106.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D107.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D108.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselActividadAprendizaje4').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje4>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D130.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D131.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D132.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D133.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselActividadAprendizaje5').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje5>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D150.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D151.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D152.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D153.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators5').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators5>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D077.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D086.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U14D088.mp3';
            break; 
        case 3:
            audioLocation = 'assets/voz/U14D089.mp3';
            break; 
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators6').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators6>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D092.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D093.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U14D094.mp3';
            break; 
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})


$('#carouselExampleIndicators7').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators7>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D095.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D097.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U14D098.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D099.mp3';
            break;  
        case 4:
            audioLocation = 'assets/voz/U14D100.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators9').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators9>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D124.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D125.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U14D126.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D127.mp3';
            break;  
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators1').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators1>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/Sonido7_p4.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/carousel_1_b.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/carousel_1_c.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/estabien.mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/U14D142.mp3';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})


$('#carouselExampleIndicators2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/Sonido26_p14.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/carousel_2_b.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/carousel_1_c.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/estabien.mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/U14D142.mp3';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicatorsX').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicatorsX>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = '';
            break;
        case 1:
            audioLocation = 'assets/voz/Sonido61_p25.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/Sonido62_ p25.mp3';
            break;
        
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators3').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators3>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/Sonido35_p18.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/';
            break;  
        case 2:
            audioLocation = 'assets/voz/Sonido38_p18.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/estabien.mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/U14D142.mp3';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators4').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators4>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/Sonido52_p23.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/Sonido53_p23.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/Sonido55_p23.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/estabien.mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/U14D142.mp3';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})






$('#carouselExampleIndicators11').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators11>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D138.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D139.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U14D140.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D141.mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/U14D142.mp3';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselExampleIndicators15').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators15>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D178.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D179.mp3';
            break;  
        case 2:
            //audioLocation = 'assets/voz/U14D181.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D181.mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/U14D182.mp3';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
////////////////////////////////////////////////////

$('#carouselConceptos').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselConceptos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D017.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D018.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D019.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D020.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D021.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D022.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselConceptos_2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselConceptos_2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D024.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D025.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D028.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselModalAcumuladores').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalAcumuladores>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D031.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D032.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalDinamos').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalDinamos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D034.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D035.mp3';
            break;        
        case 2:
            audioLocation = 'assets/voz/U14D036.mp3';
            break;        
        case 3:
            audioLocation = 'assets/voz/U14D037.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalCeldas').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalCeldas>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D039.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D040.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalPaneles').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalPaneles>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D042.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D043.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D044.mp3';
            break;

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFrecuencia').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFrecuencia>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D063.mp3';
            reproducirAudio(audioLocation);
            break;
        case 1:
            audioLocation = 'assets/voz/U14D064.mp3';
            reproducirAudio(audioLocation);
            break;
        case 5:
            audioLocation = 'assets/voz/U14D065.mp3';
            reproducirAudio(audioLocation);
            break;
        case 9:
            audioLocation = 'assets/voz/U14D066.mp3';
            reproducirAudio(audioLocation);
            break;

        default:
            break;
    }
})

$('#carouselGeneracionCorriente').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselGeneracionCorriente>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D067.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselTipoCorriente').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselTipoCorriente>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D096.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D097.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselConexionDelta').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselConexionDelta>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D100.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D101.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselMagnetismo').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselMagnetismo>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D121.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D122.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D123.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D124.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselElectromagnetismo').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselElectromagnetismo>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D127.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D129.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D130.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFrecuencia_2').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFrecuencia_2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D080.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D081.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D082.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFoucault').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFoucault>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D138.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D139.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})