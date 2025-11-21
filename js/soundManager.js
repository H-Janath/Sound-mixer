export class SoundManager {
    constructor(){
        this.audioElement =  new Map();
        this.isPlaying = false;
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

    //Play specific sound
    async playSound(soundId){
        const audio = this.audioElement.get(soundId);

        if(audio){
            try {
                await audio.play();
                console.log(`Playing sound: ${soundId}`);  
                return true;
            } catch (error) {
                console.error(`Failed to play sound ${soundId}`,error);
                return false;
            }
        }
    }

    //Pause a specific sound
    pauseSound(soundId){
        const audio = this.audioElement.get(soundId);

        if(audio && !audio.paused){
            audio.pause();
            console.log(`Paused sound: ${soundId}`);
        }
    }
    //Set volume for a specific sound (0-100)

    setVolume(soundId,volume){
        const audio = this.audioElement.get(soundId);

        if(!audio){
            console.error(`Sound ${soundId} not found`);
            return false;
        }

        // Convert 0-100 to 0-1
        audio.volume = volume /100;
        console.log(`Volume for ${soundId} set to ${volume}`);
        return true;
    }

    
}