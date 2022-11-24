class Soundboard {
    correctSound = new Audio("../audio/correct.mp3");
    wrongSound = new Audio("../audio/wrong.mp3");
    shuffleSound = new Audio("../audio/shuffle.mp3");
    thinkSound = new Audio("../audio/think.mp3");
    soundMap = new Map();

    constructor () {
        this.soundMap.set("correctSound", this.correctSound);
        this.soundMap.set("wrongSound", this.wrongSound);
        this.soundMap.set("shuffleSound", this.shuffleSound);
        this.soundMap.set("thinkSound", this.thinkSound);
    }

    playSound(soundName, volume) {
        let targetSound = this.soundMap.get(soundName);
        targetSound.currentTime = 0;
        targetSound.volume = volume;
        targetSound.play();
    }
}