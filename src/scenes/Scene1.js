import Phaser from 'phaser';
import { itemIds, zoneIds, uiIds, soundIds } from '../consts/common';


class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
    }

    create() {
        // create background
        this.physics.add.image(900, 750, itemIds.TITLE_BACKGROUND);
        
        // create ui
        let startBtn = this.physics.add.sprite(1300, 1000, uiIds.START_BUTTON).setInteractive();
        startBtn.setScale(1.6);
        
        // create sounds
        let btnClick = this.sound.add(soundIds.BUTTON_CLICK);
        let music = this.sound.add(soundIds.MAIN_MUSIC);
        // music.play();
        // music.setLoop(true);

        // eventlistener for mouse clicking on start button
        startBtn.on('pointerdown', function (pointer) {
            btnClick.play();
            music.stop();
            // create scene change animation
            this.cameras.main.fadeOut(300, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('RootScene', this.constructor.name)
            });
            startBtn.off('pointerdown'); // disable start button to avoid double click
        }, this);
        
        // eventlisteners for mouse moving over start button
        startBtn.on('pointerover', function (pointer) {
            startBtn.setFrame(1);
            startBtn.setScale(1.9);
        }, this);

        startBtn.on('pointerout', function (pointer) {
            startBtn.setFrame(0);
            startBtn.setScale(1.6);
        }, this);
    }
}

export default Scene1;