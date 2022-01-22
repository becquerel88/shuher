import Phaser from 'phaser';
import IntroBuilder from '../classes/introBuilder';
import titleConfig from '../consts/introsConfig/titleConfig';


export default class TitleScene extends Phaser.Scene {
    constructor() {
        super('TitleScene');
    }

    create() {
        const introBuilder = new IntroBuilder(this, titleConfig);
        introBuilder.buildScene();
    }
}