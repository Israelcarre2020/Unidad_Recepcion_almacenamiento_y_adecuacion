var correctCards = 0;
var intentosEmparejamiento = 0;
$(document).ready(function () { 
    
    init();
});

function init2() {
    // Reset the game
    correctCards = 0;
   
    $('#cardPile').html('');
    $('#cardSlots').html('');
    $('#cardSlots1').html('');
    $('#cardSlots2').html('');
    $('#cardSlots3').html('');
    $('#cardSlots4').html('');
    $('#cardSlots5').html('');

    // Create the pile of shuffled cards
    var columnaOrigen = ['Desecación', 'Oxidación', 'Luz', 'Absorción'];
    var numbers = [1, 2, 3, 4];
    numbers.sort(function () { return Math.random() - .5 });


    for (var i = 0; i < numbers.length; i++) {
        $('<p class="btn btn-warning boton-juego" style="width:100%">' + columnaOrigen[numbers[i]-1] + '</p>').data('number', numbers[i]).attr('id', 'cardEmparejamiento' + numbers[i]).appendTo('#cardPile').draggable({
            containment: '#contentEmparejamiento',
            stack: '#cardPile p',
            cursor: 'move',
            revert: true
        });
    }

    // Create the card slots
    var words = ['...', '...', '...', '...'];
    for (var i = 1; i <= words.length; i++) {
        $('<p class="btn btn-warning" style="width:85%;">' + words[i - 1] + '</p>').data('number', i).appendTo('#cardSlots').droppable({
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
    }

}
function init() {
    // Reset the game
    correctCards = 0;
    intentosEmparejamiento = 0;
    $('#cardPile').html('');
    $('#cardSlots').html('');
    $('#cardSlots1').html('');
    $('#cardSlots2').html('');
    $('#cardSlots3').html('');
    $('#cardSlots4').html('');
    $('#cardSlots5').html('');

    // Create the pile of shuffled cards
    var columnaOrigen = ['Desecación', 'Oxidación', 'Luz', 'Absorción'];
    var numbers = [1, 2, 3, 4];
    numbers.sort(function () { return Math.random() - .5 });


    for (var i = 0; i < numbers.length; i++) {
        $('<p class="btn btn-warning boton-juego" style="width:100%">' + columnaOrigen[numbers[i]-1] + '</p>').data('number', numbers[i]).attr('id', 'cardEmparejamiento' + numbers[i]).appendTo('#cardPile').draggable({
            containment: '#contentEmparejamiento',
            stack: '#cardPile p',
            cursor: 'move',
            revert: true
        });
    }

    // Create the card slots
    var words = ['...', '...', '...', '...'];
    for (var i = 1; i <= words.length; i++) {
        $('<p class="btn btn-warning" style="width:85%;">' + words[i - 1] + '</p>').data('number', i).appendTo('#cardSlots').droppable({
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
            init2();
        }
    }
}
