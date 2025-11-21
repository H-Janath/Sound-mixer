import {sounds,defaultPresets } from './soundData.js'
import {SoundManager} from './soundManager.js'
import {UI}  from './ui.js'
class AmbientMixer {
    //Initialize dependencies and default state
    constructor(){
        console.log("Initializing state...");
        this.soundManager = new SoundManager(),
        this.ui = new UI(),
        this.presetManager = null,
        this.timer = null,
        this.currentSoundState ={}
        this.isInitialized = false;
    }

     init(){
        try {
            //Initialize UI elements
            this.ui.init();

            //Render sound cards using sound data
            this.ui.renderSoundCards(sounds);
            
            //load all sound files
            this.loadAllSounds();

            //Try to play rain
            this.isInitialized = true;
            console.log("App initialized successfully.");
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