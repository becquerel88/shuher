import Phaser from 'phaser';
import PreloaderBuilder from '../classes/PreloaderBuilder';
import scene2PreloaderConfig from '../consts/preloadersConfig/scene2PreloaderConfig';

export default class Scene2Preloader extends Phaser.Scene {

    constructor() {
        super('Scene2Preloader');
    }

    create() {
        const preloaderBuilder = new PreloaderBuilder(this, 'ROUND 2', scene2PreloaderConfig);
        preloaderBuilder.buildScene();
    }
}