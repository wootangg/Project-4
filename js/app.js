/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

var game;

document.getElementById('btn__reset').addEventListener('click', function() {
    game = new Game();
    game.startGame();
});


//add event listeners on keys
var displayedLetters = document.querySelectorAll('.key');

    displayedLetters.forEach( function(el) {
        el.addEventListener('click', function (e) {
            var userClicked = e.target;

            game.handleInteraction(userClicked);

            
        });

        
    });
