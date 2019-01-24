/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game {
    constructor() {
        this.missed = 0;
        this.phrase = this.createPhrases();
        this.activePhrase = null;
    }

    createPhrases( ) {
        let phrases = [
            new Phrase('shake and bake'),
            new Phrase('say hello to my little friend'),
            new Phrase('may the force be with you'),
            new Phrase('why so serious'),
            new Phrase('this is sparta')
        ];

        return phrases;
    }

    getRandomPhrase() {
        let random = Math.floor(Math.random() * 5);
        let randomPhrase = this.phrase[random];

        return randomPhrase;
    }

    startGame() {
        document.getElementById('overlay').style.display = 'none';
        

        //select the phrase when game is started
        var gamePhrase = this.getRandomPhrase();
        gamePhrase.addPhraseToDisplay();

        //change activePhrase to selected phrase
        this.activePhrase = gamePhrase;
    }

    handleInteraction(key) {
        //disable clicked letter
        key.disabled = true;

        if( this.activePhrase.checkLetter(key.textContent) ) {
            key.classList.add('chosen');
            
            //show matched letter
            this.activePhrase.showMatchedLetter(key.textContent);
            
            //check for win
            if ( this.checkForWin() ) {
                this.gameOver();
            }

        } else {
            key.classList.add('wrong');
            this.removeLife();
        }

    }

    checkForWin() {
        var revealedAll = true;
        var flippedLetters = document.querySelectorAll('.letter');
            flippedLetters.forEach( function(el) {
                if( el.classList.contains('hide') ) {
                    revealedAll = false;
                }
        });

        return revealedAll;

    }

    removeLife() {
        this.missed++;

        var getTries = document.querySelectorAll('.tries > img');
        
        //remove heart icons
        if (this.missed < 6) {
            for( var i = 0; i < this.missed; i++ ) {
                getTries[i].src = 'images/lostHeart.png';
            }
        }

        //game over after missing all 5 tries
        if (this.missed == 5) {
            this.gameOver(true);
        }
    }

    gameOver( status ) {
        document.getElementById('overlay').style.display = 'flex';

        var overlay = document.getElementById('overlay');
            overlay.classList.remove('start');
        
        var gameMessage = document.getElementById('game-over-message');


        if( status ) {
            overlay.classList = 'lose';
            gameMessage.innerHTML = 'Try again';
        } else {
            overlay.classList = 'win';
            gameMessage.innerHTML = 'You won!';
        }

        //reset all for new game
        var prevKey = document.querySelectorAll('.key');
            prevKey.forEach(function(el) {
                el.disabled = false;
                el.onkeydown = true;
                el.classList.remove('wrong', 'chosen');
            });

        var prevTries = document.querySelectorAll('.tries > img');
            for( var i = 0; i < prevTries.length; i++) {
                prevTries[i].src = 'images/liveHeart.png';
            };

    }

 }