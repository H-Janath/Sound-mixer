export class SoundManager {
    constructor(){
        this.audioElement =  new Map();
        this.isPlaying = false;
        console.log("SoundManager initialized");
    }

    //Load a sound file

    loadSound(soundId,filePath){
        try {
            const audio = new Audio();
            audio.src = filePath;
            audio.loop = true;
            audio.preload = 'metadata';

            // Add sounds to audio element map
            this.audioElement.set(soundId,audio);
            return true;

        } catch (error) {
            console.error(`Failed to load sound ${soundId}`);
            return false;
        }
    }
}