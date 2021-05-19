var correctCards = 0;
var intentosEmparejamiento = 0;
$(document).ready(function () { 
    
    init();
});
function init() {
    // Reset the game
    correctCards = 0;
    $('#cardPile').html('');
    $('#cardSlots').html('');

    // Create the pile of shuffled cards
    var columnaOrigen = ['Desecación', 'Oxidación', 'Luz', 'Absorción'];
    var numbers = [1, 2, 3, 4];
    numbers.sort(function () { return Math.random() - .5 });

    for (var i = 0; i < numbers.length; i++) {
        $('<p class="btn btn-warning boton-juego" style="width:100%">' + columnaOrigen[numbers[i]-1] + '</p>').data('number', numbers[i]).attr('id', 'cardEmparejamiento' + numbers[i]).appendTo('#cardPile').draggable({
            containment: '#contentEmparejamiento',
            stack: '#cardPile p',
            cursor: 'move',
            revert: false
        });
    }


    for (var i = 1; i <= numbers.length; i++) {

        if(i == 1){
        $('<p  class="btn btn-warning" style="width:100%">...</p>').data('number', i).appendTo('#cardSlots1').droppable({
            accept: '#cardPile p',
            hoverClass: 'hovered',
            drop: handleCardDrop,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });

        $(' <p class="justificado p_black dashed-box">Pérdida de agua</p>').appendTo('#corrosivoJuego')
    }

    if(i == 2){
        $('<p class="btn btn-warning" style="width:100%">...</p>').data('number', i).appendTo('#cardSlots3').droppable({
            accept: '#cardPile p',
            hoverClass: 'hovered',
            drop: handleCardDrop,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });

        $('<p class="justificado p_black dashed-box">Destrucción de ácidos grasos insaturados, pérdida de vitaminas.</p></p>').appendTo('#toxicoJuego')

    }

    if(i == 3){
        $('<p class="btn btn-warning" style="width:100%">...</p>').data('number', i).appendTo('#cardSlots4').droppable({
            accept: '#cardPile p',
            hoverClass: 'hovered',
            drop: handleCardDrop,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });

        $('<p class="justificado p_black dashed-box" >Fotodegradación</p></p>').appendTo('#fuegoJuego');
    }

    if(i == 4){
        $('<p class="btn btn-warning" style="width:100%">...</p>').data('number', i).appendTo('#cardSlots5').droppable({
            accept: '#cardPile p',
            hoverClass: 'hovered',
            drop: handleCardDrop,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });

        $('<p class="justificado p_black dashed-box">Ganancia de agua</p></p>').appendTo('#explosionJuego');
    }
        
    }

}

function handleCardDrop(event, ui) {

    //Grab the slot number and card number
    var slotNumber = $(this).data('number');
    var cardNumber = ui.draggable.data('number');

    ui.draggable.position({
        of: $(this), my: 'left top', at: 'left top'
    });

    //If the cards was dropped to the correct slot,
    //change the card colour, position it directly
    //on top of the slot and prevent it being dragged again
    if (slotNumber === cardNumber) {
        ui.draggable.addClass('correct');
        //ui.draggable.draggable('disable');
        //$(this).droppable('disable');

        //This prevents the card from being
        //pulled back to its initial position
        //once it has been dropped
        //ui.draggable.draggable('option', 'revert', false);
    } else {
        ui.draggable.removeClass('correct');
    }
}

function validarResultado(){

    var correctCards = $("#cardPile>p.correct").length;

    if (correctCards === 4) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has arrastrado correctamente todos los elementos',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                init();
            }
        })
    } else{
        intentosEmparejamiento++;

        if(intentosEmparejamiento >= 2){
            Swal.fire(
                '¡Lo sentimos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            intentosEmparejamiento = 0;
            init();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
        }
    }
}
