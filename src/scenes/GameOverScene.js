import { backgrounds, fontIds, sounds, uiElements } from "../consts/common";

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene');
        this.customProperties = {};
    }

    init(initConfig) {
        this.customProperties.initConfig = initConfig;
    }

    create() {
        this.buildScene();
    }

    createBackground() {
        this.physics.add.image(1195, 350, 'parentsGameoverBg');
        this.physics.add.image(900, 600, backgrounds.GAMEOVER_BLUR_BG.name);
    }

    createSounds() {
        this.customProperties.restartBtn = this.sound.add(sounds.BTN_CLICK.name);

        this.sound.add(sounds.FAIL_SOUND.name).play();
    }

    createText() {
        this.add.text(910, 710, 'YOU FAILED', fontIds.GAMEOVER_WINNING_FONT_SHADOW).setOrigin(0.5, 0.5);
        this.add.text(900, 700, 'YOU FAILED', fontIds.GAMEOVER_WINNING_FONT).setOrigin(0.5, 0.5);
    }

    createRestartButton() {
        let restartBtn = this.physics.add.sprite(900, 1350, uiElements.FAIL_RESTART_BTN.name).setInteractive().setScale(2);

        restartBtn.on('pointerover', function (pointer) {
            restartBtn.setFrame(1);
            restartBtn.setScale(2.2);
        }, this.scene);

        restartBtn.on('pointerout', function (pointer) {
            restartBtn.setFrame(0);
            restartBtn.setScale(2);
        }, this.scene);

        restartBtn.on('pointerdown', function () {
            restartBtn.off('pointerdown');
            this.customProperties.restartBtn.play();
            // анимация плавной смены сцены
            this.cameras.main.fadeOut(300, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start(this.customProperties.initConfig);;
            });

        }, this);
    }

    buildScene() {
        this.createBackground();
        this.createSounds();
        this.createRestartButton();
        this.createText();
    }
}