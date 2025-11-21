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
            this.soundManager.loadSound('rain','audio/rain.mp3');
            this.isInitialized =true;

        } catch (error) {
            console.log('Failed to inititalize app:',error)
        }
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    const app = new AmbientMixer();
    app.init();
})