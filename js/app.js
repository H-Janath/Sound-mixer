import {sounds,defaultPresets } from './soundData.js'
import {SoundManager} from './soundManager.js'

class AmbientMixer {
    //Initialize dependencies and default state
    constructor(){
        console.log("Initializing state...");
        this.soundManager = new SoundManager(),
        this.ui = null,
        this.presetManager = null,
        this.timer = null,
        this.currentSoundState ={}
        this.isInitialized = false;
    }

     init(){
        try {
            //load all sound files
            this.loadAllSounds();

            //Try to play rain
            
        } catch (error) {
            console.log('Failed to inititalize app:',error)
        }
    }

    loadAllSounds(){
        sounds.forEach((sound)=>{
            const audioUrl = `audio/${sound.file}`;
            const success = this.soundManager.loadSound(sound.id,audioUrl);
            if(!success){
                console.warn(`Could not load sound: ${sound.name} from ${audioUrl}`)
            }
        })
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    const app = new AmbientMixer();
    app.init();


    //Make app available for testing in browser
    window.app = app;
    
})