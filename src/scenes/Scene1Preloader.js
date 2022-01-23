import Phaser from 'phaser';
import PreloaderBuilder from '../classes/PreloaderBuilder';
import scene1PreloaderConfig from '../consts/preloadersConfig/scene1PreloaderConfig';

export default class Scene1Preloader extends Phaser.Scene {

    constructor() {
        super('Scene1Preloader');
    }

    create() {
        const preloaderBuilder = new PreloaderBuilder(this, 'ROUND 1', scene1PreloaderConfig);
        preloaderBuilder.buildScene();
    }
}