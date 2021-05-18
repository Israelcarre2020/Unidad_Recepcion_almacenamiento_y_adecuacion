var numSlide = 35;
var htmljuego = $("#juegofv").html();
var intentosJuego = 0;
var arraytruefalse = [false,false,false];

$(document).ready(function () {
    iniciarJuegofv();
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('.hello_world').pwstabs({
       effect: 'slideleft',
       defaultTab: 1
    });

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        $('#porcentaje_curso').popover({
            container: 'body',
            html: true,
            content:'<div id="percent_curso" class="blue"></div>',
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        });
    })

    $('#porcentaje_curso').on('shown.bs.popover', function () {
        var numItems = $('.done').length / 2;
        var porcent = parseFloat((numItems/numSlide) * 100).toFixed( 2 );
        $("#percent_curso").percircle({percent: porcent ,animate: "true"});
    })

    $('#icon_actividades').off('click').on('click', function(){
        if($(".divcontenido").is(':visible')){
            $(".divcontenido").animate({ width: 'hide' }); 
            $(".menu-actividades").show(1000); 
            setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
        }else{
            $(".menu-actividades").hide();
            setTimeout(function() { toggleOptions('.selector'); }, 10);
            $(".divcontenido").animate({ width: 'show' });
        }
    });
    $('#icon_salir').off('click').on('click', function(e){
        window.open('', '_self', '');
        window.close();
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });





    // var words = ['gafasdeproteccion',
    //              'Corrienteeléctrica',
    //              'guantestermicos',
    //              'calzadoseguro'
    //              ];

    var words = ['Calcinacion',
                 'Molienda',
                 'Digestion',
                 'Fusión',
                 'Extraccion',
                 'Dilución',
                 'Retencióndemuestras'

                 ];             


    var gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');

    $("#tryAgainPuzzle").click(function(){
        gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');        
    });

    $("#solvePuzzle").click(function () { wordfindgame.solve(gamePuzzle, words) });


    



    
    canvas_circuito();    

    

    $('#zoom_01').elevateZoom({zoomWindowPosition: 10});
    $("select").imagepicker({
        show_label: true,
        clicked: function(e){
            console.log($(this).val());
        }
    })

    $(".reco1").on("click", function function_name(argument) {
        $(".recomendacion").hide()
        $(".recomendacion1").show(300);
    })
    $(".reco2").on("click", function function_name(argument) {
        $(".recomendacion").hide()
        $(".recomendacion2").show(300);
    })
    $(".reco3").on("click", function function_name(argument) {
        $(".recomendacion").hide()
        $(".recomendacion3").show(300);
    })
    $(".reco4").on("click", function function_name(argument) {
        $(".recomendacion").hide()
        $(".recomendacion4").show(300);
    })

    

    $('#smartwizard').smartWizard({
        loader:"show",
        theme:'arrows',
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        }
    });
    $('#smartwizard2').smartWizard({
        theme:'arrows',
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        },
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        }
    });

    $('#nextSlide').on('click', function () {
        var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"))+1;
         
        switch (stepIndex) {
            case 15:
                // pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 20:
                // pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 26:
                // pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            default:
                $('#smartwizard2').smartWizard("next");
                $('#smartwizard').smartWizard("next");
                break;
        }
                         
    });
    $('#prevSlide').on('click', function () {
        $('#smartwizard2').smartWizard("prev");
        $('#smartwizard').smartWizard("prev"); 
    });

    $("#smartwizard").on("stepContent", function(e, anchorObject, stepIndex, stepDirection) {
        console.log("Here is the content for step " + stepIndex);
        controlAudioSlides(stepIndex);
        switch(stepIndex) {
            default:
            // code block
        }
    });

    function iniciarJuegofv() {
    
        $(".actividadtruefalse label").checkbox({
          checked: "assets/img/cb2-1.png",
          check: "assets/img/cb2-0.png",
          onChange: function(i) {
                switch (i[0].name) {
                  case "r1":
                    if (i[0].value==="1") {
                        arraytruefalse[0]=true;
                    } else {
                        arraytruefalse[0]=false;
                    }
                    break;
                  case "r2":
                    if (i[0].value==="0") {
                        arraytruefalse[1]=true;
                    } else {
                        arraytruefalse[1]=false;
                    }
                    break;
                  case "r3":
                    if (i[0].value==="0") {
                        arraytruefalse[2]=true;
                    } else {
                        arraytruefalse[2]=false;
                    }
                    break;
                  default:
                    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                    break;
                }
          },
          onLoad: function(i) {
            // do something
          }
        });
    }


    $('#validarjuego3').off('click').on('click', function(){
        if (intentosJuego > 1) {
            Swal.fire(
                '¡Has superado el número de intentos!',
                'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
                'warning'
            ) 
        } else {
            console.log(arraytruefalse);
            if (arraytruefalse.indexOf(false) != -1) {
                Swal.fire(
                    '¡Respuesta Invalida!',
                    'Selecciona unicamente lo correcto',
                    'error'
                )  
                intentosJuego++;
            }else{
                Swal.fire(
                    '¡Has acertado!',
                    'Continua con la Siguiente actividad',
                    'success'
                )    
            }
        }  
    });

    function canvas_circuito() {
        var canvas = new fabric.Canvas('plano-electronico');
        var imgElement = 'assets/img/uno.png';
        var imgElement2 = 'assets/img/dos.png'; 
        var imgElement3 = 'assets/img/tres.png';
        var imgElement4 = 'assets/img/cuatro.png';
        var imgElement5 = 'assets/img/cinco.png';
        var imgElement6 = 'assets/img/seis.png';
        var imgElement7 = 'assets/img/siete.png';
        var imgElement8 = 'assets/img/ocho.png';
        var imgElement9 = 'assets/img/nueve.png';
        var imgElement10 = 'assets/img/uno.png';
        var imgElement11 = 'assets/img/uno.png';
        var imgElement12 = 'assets/img/uno.png'; 
        fabric.Image.fromURL(imgElement, function(oImg) {
            oImg.left=50;
            oImg.top=20;
            oImg.scaleToHeight(40);
            oImg.scaleToWidth(40);
            oImg.selectable = false;
            canvas.add(oImg);

            oImg.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito1").modal("show");            
            });
            oImg.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement2, function(oImg2) {
            oImg2.left=100;
            oImg2.top=20;
            oImg2.scaleToHeight(40);
            oImg2.scaleToWidth(40);
            oImg2.selectable = false;
            canvas.add(oImg2);

            oImg2.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito2").modal("show");            
            });
            oImg2.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement3, function(oImg3) {
            oImg3.left=150;
            oImg3.top=20;
            oImg3.scaleToHeight(40);
            oImg3.scaleToWidth(40);
            oImg3.selectable = false;
            canvas.add(oImg3);

            oImg3.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito3").modal("show");            
            });
            oImg3.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement4, function(oImg4) {
            oImg4.left=200;
            oImg4.top=20;
            oImg4.scaleToHeight(40);
            oImg4.scaleToWidth(40);
            oImg4.selectable = false;
            canvas.add(oImg4);

            oImg4.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito4").modal("show");            
            });
            oImg4.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement5, function(oImg5) {
            oImg5.left=250;
            oImg5.top=45;
            oImg5.scaleToHeight(40);
            oImg5.scaleToWidth(40);
            oImg5.selectable = false;
            canvas.add(oImg5);

            oImg5.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito5").modal("show");            
            });
            oImg5.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement6, function(oImg6) {
            oImg6.left=300;
            oImg6.top=45;
            oImg6.scaleToHeight(40);
            oImg6.scaleToWidth(40);
            oImg6.selectable = false;
            canvas.add(oImg6);

            oImg6.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito6").modal("show");            
            });
            oImg6.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement7, function(oImg7) {
            oImg7.left=350;
            oImg7.top=45;
            oImg7.scaleToHeight(40);
            oImg7.scaleToWidth(40);
            oImg7.selectable = false;
            canvas.add(oImg7);

            oImg7.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito7").modal("show");            
            });
            oImg7.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement8, function(oImg8) {
            oImg8.left=400;
            oImg8.top=45;
            oImg8.scaleToHeight(40);
            oImg8.scaleToWidth(40);
            oImg8.selectable = false;
            canvas.add(oImg8);

            oImg8.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito8").modal("show");            
            });
            oImg8.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement9, function(oImg9) {
            oImg9.left=50;
            oImg9.top=100;
            oImg9.scaleToHeight(40);
            oImg9.scaleToWidth(40);
            oImg9.selectable = false;
            canvas.add(oImg9);

            oImg9.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito9").modal("show");            
            });
            oImg9.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement10, function(oImg10) {
            oImg10.left=100;
            oImg10.top=100;
            oImg10.scaleToHeight(40);
            oImg10.scaleToWidth(40);
            oImg10.selectable = false;
            canvas.add(oImg10);

            oImg10.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito10").modal("show");            
            });
            oImg10.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement11, function(oImg11) {
            oImg11.left=150;
            oImg11.top=100;
            oImg11.scaleToHeight(40);
            oImg11.scaleToWidth(40);
            oImg11.selectable = false;
            canvas.add(oImg11);

            oImg11.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito11").modal("show");            
            });
            oImg11.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement12, function(oImg12) {
            oImg12.left=200;
            oImg12.top=100;
            oImg12.scaleToHeight(40);
            oImg12.scaleToWidth(40);
            oImg12.selectable = false;
            canvas.add(oImg12);

            oImg12.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito12").modal("show");            
            });
            oImg12.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
    }

    $('.link_actividad').off('click').on('click', function(){
        $(".menu-actividades").hide();
        setTimeout(function() { toggleOptions('.selector'); }, 10);
        $(".divcontenido").animate({ width: 'show' });

        var number_at= $(this).attr("for");

        switch (number_at) {
            case "c1":
                $('#smartwizard').smartWizard("goToStep", 4);
                $('#smartwizard2').smartWizard("goToStep", 4);
            break;
            case "c2":
                $('#smartwizard').smartWizard("goToStep", 15);
                $('#smartwizard2').smartWizard("goToStep", 15);
            break;
            case "c3":
                $('#smartwizard').smartWizard("goToStep", 20);
                $('#smartwizard2').smartWizard("goToStep", 20);
            break;
            case "c4":
                $('#smartwizard').smartWizard("goToStep", 26);
                $('#smartwizard2').smartWizard("goToStep", 26);
            break;
          default:
            //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
            break;
        }
        $(".controls-slide").show();
        $(".divcontenido").css("height","1000px");
    });

    $('#quiz').quiz({
      //resultsScreen: '#results-screen',
      //counter: false,
      //homeButton: '#custom-home',
      nextButtonText: 'Suguiente',
      counterFormat: 'Pregunta %current de %total',
      resultsFormat: 'Acertaste %score de %total !',
      restartButtonText: 'Reintentar',
      questions: [
        {
          'q': '<br> ¿Por qué la muestra debe conservarse de manera que se asegure su integridad, seguridad, regularidad y estabilidad?',
          'options': [
            'Cualquier muestra que deba refrigerarse requiere monitoreo constante.',
            'Cualquier deterioro de la muestra invalida cualquier resultado analítico.',
            'Ninguna de las anteriores.'
          ],
          'correctIndex': 1,
          'correctResponse': 'Buen trabajo, continua.',
          'incorrectResponse': 'No es la respuesta'
        },
        {
          'q': '<br> ¿Cuál es la temperatura de las instalaciones que almacenan muestras?',
          'options': [
            'Entre -5°C y 30°C.',
            'Entre 0°C y 35°C.',
            'Entre 0°C y 30°C.'
          ],
          'correctIndex': 2,
          'correctResponse': 'Respuesta Correcta.',
          'incorrectResponse': 'Sigue Intentanto'
        },
        {
          'q': '<br> ¿Por qué no se puede envasar productos sin etiqueta?',
          'options': [
            'En caso de emergencia no se podrían tomar medidas precisas.',
            'El almacenamiento adecuado prolonga el tiempo de la muestra.',
            'Ninguna de las anteriores.'
          ],
          'correctIndex': 0,
          'correctResponse': 'Excelente!.',
          'incorrectResponse': 'Profundiza mas en las actidades de aprendizaje'
        },
        
      ]
    });

    var wheel = $("#wheel").flipster({
        style: 'wheel',
        spacing: 0,
        start: 0,
        onItemSwitch: function(currentItem, previousItem) {
          console.log('hover a circle'+previousItem);
          $('.wheeldiv p').html($(currentItem).attr("data-flip-title"));
        }
    });

    var flat = $("#flat").flipster({
        style: 'flat',
        spacing: -0.25,
        buttons: true,
        start: 0,
        buttonNext: 'Siguiente',
    });

    // tabs

    var tabLinks = document.querySelectorAll(".tablinks1");
    var tabContent = document.querySelectorAll(".tabcontent1");

    var tabLinks2 = document.querySelectorAll(".tablinks2");
    var tabContent2 = document.querySelectorAll(".tabcontent2");


    tabLinks.forEach(function(el) {
       el.addEventListener("click", openTabs);
    });
    tabLinks2.forEach(function(el) {
       el.addEventListener("click", openTabs2);
    });


    function openTabs(el) {
       var btnTarget = el.currentTarget;
       var country = btnTarget.dataset.country;

       tabContent.forEach(function(el) {
          el.classList.remove("active");
       });

       tabLinks.forEach(function(el) {
          el.classList.remove("active");
       });

       document.querySelector("#" + country).classList.add("active");
       btnTarget.classList.add("active");
    }

    function openTabs2(el) {
       var btnTarget = el.currentTarget;
       var country = btnTarget.dataset.country;

       tabContent2.forEach(function(el) {
          el.classList.remove("active");
       });

       tabLinks2.forEach(function(el) {
          el.classList.remove("active");
       });

       document.querySelector("#" + country).classList.add("active");
       btnTarget.classList.add("active");
    }

    $('.carousel').carousel({
      interval: false,
      ride: false
    })
});

$('.card_animada').click(function () {
    var numeroTarjeta = $(this).attr("data-numeroTarjeta");

    $('#cardFront_' + numeroTarjeta).toggleClass('card-flip');
    $('#cardBack_' + numeroTarjeta).toggleClass('card-flip');
});


$('.card_animada2').click(function () {
    var numeroTarjeta = $(this).attr("data-numeroTarjeta");

    $('#cardFront_' + numeroTarjeta).toggleClass('card-flip');
    $('#cardBack_' + numeroTarjeta).toggleClass('card-flip');
});