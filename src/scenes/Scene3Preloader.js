import Phaser from 'phaser';
import PreloaderBuilder from '../classes/PreloaderBuilder';
import scene3PreloaderConfig from '../consts/preloadersConfig/scene3PreloaderConfig';

export default class Scene3Preloader extends Phaser.Scene {

    constructor() {
        super('Scene3Preloader');
    }

    create() {
        console.log(this);
        const preloaderBuilder = new PreloaderBuilder(this, 'ROUND 3', scene3PreloaderConfig);
        preloaderBuilder.buildScene();
    }
}