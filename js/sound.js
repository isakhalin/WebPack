import {Howl, Howler} from 'howler';
import snd from '../Sound/Waves.mp3'
// import { Howl, Howler} from '../node_modules/howler/dist/howler.js'

export const sound = new Howl({
    src: [snd]
});