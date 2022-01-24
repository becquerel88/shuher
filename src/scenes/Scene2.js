import Phaser from 'phaser';
import { itemsInfo, zonesInfo } from "../consts/scenesConfig/scene2Config";
import SceneBuilder from '../classes/SceneBuilder';

export default class Scene2 extends Phaser.Scene {

    constructor() {
        super('Scene2');
    }

    create() {
        const sceneBuilder = new SceneBuilder(this, itemsInfo, zonesInfo);
        sceneBuilder.buildScene();
    }

    update() {
        if (this.customProperties.itemCounterToHide == 0) {
            this.customProperties.music.stop();

            this.scene.start('WinningScene', { scene: this.constructor.name });
            localStorage.setItem('initConfig', JSON.stringify({ scene: this.constructor.name }));
        }
    }

}