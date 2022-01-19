import Phaser from 'phaser';
import IntroBuilder from '../classes/introBuilder';
import { fontIds, uiIds } from '../consts/common';

export default class ModalScene extends Phaser.Scene {
    constructor() {
        super('ModalScene');
    }

    create() {
        const introBuilder = new IntroBuilder(this);
        introBuilder.createBackground();
        
        this.add.text(1270, 680, 'The previous game was\ninterrupted. Do you want\nto continue your progress\nor restart the game?', fontIds.TEXT_FONT).setOrigin(0.5, 0.5);

        // create ui

        let continueBtn = this.physics.add.sprite(1100, 920, uiIds.CONTINUE_BTN).setInteractive().setOrigin(0.5, 0.5);
        continueBtn.setScale(1.3);

        let restartBtn = this.physics.add.sprite(1520, 920, uiIds.RESTART_BTN).setInteractive().setOrigin(0.5, 0.5);
        restartBtn.setScale(1.3);

        // // create sounds
        // let btnClick = this.sound.add(soundIds.BUTTON_CLICK);
        // let music = this.sound.add(soundIds.MAIN_MUSIC);
        // music.play();
        // music.setLoop(true);

        // eventlistener for mouse clicking on start button
        continueBtn.on('pointerdown', function (pointer) {
            // btnClick.play();
            // music.stop();
            // create scene change animation
            // this.cameras.main.fadeOut(300, 0, 0, 0);
            // this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                // this.scene.start('RootScene', this.constructor.name);
            // });
            this.scene.start('RootScene', this.constructor.name)
            continueBtn.off('pointerdown'); // disable start button to avoid double click
        }, this);

        // eventlisteners for mouse moving over start button
        continueBtn.on('pointerover', function (pointer) {
            continueBtn.setFrame(1);
            continueBtn.setScale(1.5);
        }, this);

        continueBtn.on('pointerout', function (pointer) {
            continueBtn.setFrame(0);
            continueBtn.setScale(1.3);
        }, this);

        restartBtn.on('pointerover', function (pointer) {
            restartBtn.setFrame(1);
            restartBtn.setScale(1.5);
        }, this);

        restartBtn.on('pointerout', function (pointer) {
            restartBtn.setFrame(0);
            restartBtn.setScale(1.3);
        }, this);
    }
}