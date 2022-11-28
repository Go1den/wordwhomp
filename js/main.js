let whiz = new Whiz();

function newGame(e) {
    whiz.newGame();
    e.blur();
}

function nextRound(e) {
    whiz.nextRound();
    e.blur();
}

function scramble(e) {
    if (whiz.getIsGameGoing()) {
        whiz.scramble(true);
    }
    e.blur();
}

function addLetter(field, index) {
    if (whiz.getIsGameGoing()) {
        whiz.addLetter(field, index);
    }
}

function putLetterBack(e) {
    if (whiz.getIsGameGoing()) {
        whiz.putLetterBack();
    }
    e.blur();
}

function submit(e) {
    if (whiz.getIsGameGoing()) {
        whiz.submit();
    }
    e.blur();
}

function giveUp(e) {
    if (whiz.getIsGameGoing()) {
        whiz.giveUp();
    }
    e.blur();
}

document.addEventListener("keydown", function(event) {
    if (whiz.getIsGameGoing()) {
        if (event.key === "Backspace") {
            whiz.putLetterBack();
        } else if (event.key === "Enter") {
            whiz.submit();
        } else if (event.code.startsWith("Key") && event.code.length == 4) {
            let charCode = event.code.charCodeAt(3);
            if (charCode >= 65 && charCode <= 90) {
                whiz.typeLetter(event.code.charAt(3));
            }
        }
    }
});