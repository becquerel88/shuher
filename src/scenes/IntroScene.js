import Phaser from 'phaser';
import IntroBuilder from '../classes/introBuilder';
import { uiElements } from '../consts/common';
import introConfig from '../consts/introsConfig/introConfig';

export default class IntroScene extends Phaser.Scene {
    constructor() {
        super('IntroScene');
    }

    create() {
        const introBuilder = new IntroBuilder(this, introConfig);
        introBuilder.buildScene();
    }
}