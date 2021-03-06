import Phaser from 'phaser';
import { backgrounds, fontIds, sounds, uiElements } from "../consts/common";

export default class WinningScene extends Phaser.Scene {
    constructor() {
        super('WinningScene');
        this.customProperties = {};
    }

    init(initConfig) {
        this.customProperties.initConfig = initConfig;
    }

    create() {
        this.buildScene();
    }

    createBackground() {
        this.physics.add.image(900, 750, backgrounds.WINNING_BG.name);
    }

    createText() {
        this.add.text(910, 710, 'YOU DID IT', fontIds.GAMEOVER_WINNING_FONT_SHADOW).setOrigin(0.5, 0.5);
        this.add.text(900, 700, 'YOU DID IT', fontIds.GAMEOVER_WINNING_FONT).setOrigin(0.5, 0.5);
    }

    createSounds() {
        this.customProperties.continueBtn = this.sound.add(sounds.BTN_CLICK.name);

        this.sound.add(sounds.WINNING_SOUND.name).play();
    }

    createContinueButton() {
        let playBtn = this.physics.add.sprite(900, 1350, uiElements.WINNING_CONTINUE_BTN.name).setInteractive().setScale(2);

        playBtn.on('pointerover', function (pointer) {
            playBtn.setFrame(1);
            playBtn.setScale(2.2);
        }, this.scene);

        playBtn.on('pointerout', function (pointer) {
            playBtn.setFrame(0);
            playBtn.setScale(2);
        }, this.scene);

        playBtn.on('pointerdown', function () {
            playBtn.off('pointerdown');
            this.customProperties.continueBtn.play();
            // анимация плавной смены сцены
            this.cameras.main.fadeOut(300, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('SceneSwitcher', this.customProperties.initConfig);
            });

        }, this);
    }

    buildScene() {
        this.createBackground();
        this.createText();
        this.createSounds();
        this.createContinueButton();
    }
}