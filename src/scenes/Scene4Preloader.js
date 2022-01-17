import Phaser from 'phaser';
import PreloaderBuilder from '../classes/PreloaderBuilder';

export default class Scene4Preloader extends Phaser.Scene {

    constructor() {
        super('Scene4Preloader');
    }

    create() {
        preloaderBuilder = new PreloaderBuilder(this, 'ROUND 3');
        preloaderBuilder.createBackground();
    }


}