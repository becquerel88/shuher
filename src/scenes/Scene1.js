import Phaser from 'phaser';
import { itemsInfo, zonesInfo } from "../consts/scenesConfig/scene1Config";
import SceneBuilder from '../classes/SceneBuilder';

export default class Scene1 extends Phaser.Scene {
    timer;
    timerText;

    constructor() {
        super('Scene1');
    }

    create() {
        const sceneBuilder = new SceneBuilder(this, itemsInfo, zonesInfo);
        sceneBuilder.buildScene();

        // this.timer = this.time.addEvent({
        //     delay: 25000,
        //     // delay: 2000,
        //     paused: false,
        //     callback: this.gameover,
        //     callbackScope: this
        // });

        // this.timerText = this.add.text(200, 1350, '', { font: `70px ${fontIds.MAIN_FONT}`, fill: '#ffffff' });
        // this.timerText.setOrigin(0.5, 0.5);
    }

    // update() {
    //     this.timerText.setText(this.timer.getRemainingSeconds().toFixed());

    //     if (itemCounterToHide == 0) {
    //         this.scene.start('RootScene', this.constructor.name);
    //     }
    // }

    // gameover() {
    //     this.scene.setActive(false);
    //     this.scene.launch('GameOverScene', this.constructor.name);
    // }

}