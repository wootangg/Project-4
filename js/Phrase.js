/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        var phraseWrap = document.getElementById('phrase');
        var phraseList = phraseWrap.querySelector('ul');

        //erase previous active phrase
        phraseList.innerHTML = '';
        
        for (var i = 0; i < this.phrase.length; i++) {
            var liElement = document.createElement('li')
            var liText = document.createTextNode(this.phrase[i]);

            liElement.appendChild(liText);

            //check for spaces
            if( this.phrase[i] == ' ') {
                liElement.classList.add('space');
            } else {
                liElement.classList.add('hide', 'letter', this.phrase[i]);
            }
            
            phraseList.appendChild(liElement);
        }
        

        //display placeholders of the phrase for the game
        phraseWrap.appendChild(phraseList);
    }

    checkLetter(letter) {
        if( this.phrase.indexOf(letter) !== -1) {
            return true;
        } else {
            return false;
        }
    }

    showMatchedLetter(letter) {
        var allMatchedLetters = document.querySelectorAll('.' + letter);
        allMatchedLetters.forEach( function(el) {
            el.classList.remove('hide');
            el.classList.add('show');
        });
    }
 }