import { create, forEach } from "lodash";
import { backgrounds, fontIds, uiIds, soundIds } from "../consts/common";

export default class IntroBuilder {
    constructor(scene, config) {
        this.scene = scene;
        this.scene.customProperties = {};
        this.scene.customProperties.config = config;
    }

    createBackground() {
        this.scene.physics.add.image(900, 750, backgrounds.INTRO_BG.name);
    }

    createText() {
        this.scene.add.text(
            this.scene.customProperties.config.text.xPosition,
            this.scene.customProperties.config.text.yPosition,
            this.scene.customProperties.config.text.value,
            fontIds.TEXT_FONT
        ).setOrigin(0.5, 0.5).setScale(this.scene.customProperties.config.text.scale);
    }

    createSound() {
        this.scene.customProperties.btnSound = this.scene.sound.add(soundIds.BTN_CLICK);
        this.scene.customProperties.music = this.scene.sound.add(soundIds.MAIN_MUSIC);
    }

    playMusic() {
        this.scene.customProperties.music.play();
        this.scene.customProperties.music.setLoop(true);
    }

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
                this.customProperties.btnSound.play();
                this.customProperties.music.stop();

                this.scene.start('RootScene', { scene: this.constructor.name, button: element.value });
            }, this);
        }.bind(this.scene));
    }

    buildScene() {
        this.createBackground();
        this.createText();
        this.createButtons();
        this.createSound();
        this.playMusic();
    }
}