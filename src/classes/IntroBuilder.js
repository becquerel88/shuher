import { forEach } from "lodash";
import { backgrounds, sounds, fontIds, configConsts } from "../consts/common";

export default class IntroBuilder {
    constructor(scene, config) {
        this.scene = scene;
        this.scene.customProperties = {};
        this.scene.customProperties.config = config;
    }

    // анимация плавного появления сцены
    createFadeIn() {
        this.scene.cameras.main.fadeIn(300, 0, 0, 0);
    }

    // создание бекграунда
    createBackground() {
        this.scene.physics.add.image(900, 750, backgrounds.INTRO_BG.name);
    }

    // создание текста
    createText() {
        this.scene.add.text(
            this.scene.customProperties.config.text.xPosition,
            this.scene.customProperties.config.text.yPosition,
            this.scene.customProperties.config.text.value,
            fontIds.TEXT_FONT
        ).setOrigin(0.5, 0.5).setScale(this.scene.customProperties.config.text.scale);
    }

    // создание звуков
    createSounds() {
        // создание музыки
        this.scene.customProperties.music = this.scene.sound.add(sounds.MAIN_MUSIC.name);
        this.scene.customProperties.music.play(configConsts.MUSIC_VOLUME);
        this.scene.customProperties.music.setLoop(true);
        // создание звука нажатия на кнопку
        this.scene.customProperties.btnSound = this.scene.sound.add(sounds.BTN_CLICK.name);
    }

    // создание кнопок
    createButtons() {
        forEach(this.scene.customProperties.config.uiBtns, function (element) {
            let btn = this.physics.add.sprite(element.xPosition, element.yPosition, element.value).setInteractive().setOrigin(0.5, 0.5);
            btn.setScale(element.scale);

            btn.on('pointerover', function (pointer) {
                btn.setFrame(1);
                btn.setScale(element.pointerScale);
            }, this);

            btn.on('pointerout', function (pointer) {
                btn.setFrame(0);
                btn.setScale(element.scale);
            }, this);

            btn.on('pointerdown', function (pointer) {
                btn.off('pointerdown');
                this.customProperties.btnSound.play();
                this.customProperties.music.stop();
                // анимация плавной смены сцены
                this.cameras.main.fadeOut(300, 0, 0, 0);
                this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                    this.scene.start('SceneSwitcher', { scene: this.constructor.name, button: element.value });
                });
            }, this);
        }.bind(this.scene));
    }

    buildScene() {
        this.createFadeIn();
        this.createBackground();
        this.createText();
        this.createButtons();
        this.createSounds();
    }
}