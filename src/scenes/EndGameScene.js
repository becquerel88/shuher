import Phaser from 'phaser';
import { videos, uiElements, sounds } from '../consts/common';

export default class EndGameScene extends Phaser.Scene {
    constructor() {
        super('EndGameScene');
        this.customProperties = {};
    }

    create() {
        this.buildScene();
    }

    createFadeIn() {
        this.cameras.main.fadeIn(300, 0, 0, 0);
    }

    createSounds() {
        this.customProperties.playAgainBtnSound = this.sound.add(sounds.BTN_CLICK.name);
    }

    createPlayAgainButton() {

        let playAgainBtn = this.physics.add.sprite(900, 1000, uiElements.PLAY_AGAIN_BTN.name).setInteractive().setScale(3);

        playAgainBtn.on('pointerover', function (pointer) {
            playAgainBtn.setFrame(1);
            playAgainBtn.setScale(3.3);
        }, this.scene);

        playAgainBtn.on('pointerout', function (pointer) {
            playAgainBtn.setFrame(0);
            playAgainBtn.setScale(3);
        }, this.scene);

        playAgainBtn.on('pointerdown', function () {
            playAgainBtn.off('pointerdown');
            // анимация плавной смены сцены
            this.customProperties.playAgainBtnSound.play();
            this.cameras.main.fadeOut(300, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('TitleScene');
            });

        }, this);
    }

    createVideo() {
        let finalVideo = this.add.video(900, 750, videos.END_GAME_VIDEO.name).play().setScale(1.4);

        finalVideo.on('complete', function (video) {
            this.createPlayAgainButton();
        }, this);
    }

    buildScene() {
        this.createFadeIn();
        this.createSounds();
        this.createVideo();
    }
}