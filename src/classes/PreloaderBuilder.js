import { forEach } from 'lodash';
import { backgrounds, uiElements, sounds, fontIds } from '../consts/common';

export default class PreloaderBuilder {
    constructor(scene, title, itemsInfoArray) {
        this.scene = scene;
        this.title = title;
        this.itemsInfoArray = itemsInfoArray;
        this.scene.customProperties = {};
    }

    // анимация плавного появления сцены
    createFadeIn() {
        this.scene.cameras.main.fadeIn(300, 0, 0, 0);
    }
    // создание бекграунда
    createBackground() {
        this.scene.add.image(900, 750, backgrounds.PRELOADER_BG.name);

    }

    // создание заголовка
    createTitle() {
        this.scene.add.text(900, 100, this.title, fontIds.TITLE_FONT).setOrigin(0.5, 0.5);
    }

    // создание второго заголовка
    createSubtitle() {
        this.scene.add.text(900, 200, 'you\'ve got to find and hide', fontIds.SUBTITLE_FONT).setOrigin(0.5, 0.5);
    }

    // создание звуков
    createSounds() {

        // музыка
        this.scene.customProperties.music = this.scene.sound.add(sounds.PRELOADER_MUSIC.name);
        this.scene.customProperties.music.play();
        this.scene.customProperties.music.setLoop(true);
        
        // звук анимации появления предмета
        this.scene.customProperties.bumpSound = this.scene.sound.add(sounds.BUMP_SOUND.name); 
        
        // звук нажатия на кнопку
        this.scene.customProperties.btnSound = this.scene.sound.add(sounds.BTN_CLICK.name);
    }

    // создание предметов
    createItems() {
        // создание темных силуэтов предметов
        forEach(this.itemsInfoArray, function (element) {
            let item = this.physics.add.image(element.xPosition, element.yPosition, element.itemKey).setOrigin(0.5, 0.5);
            item.setScale(element.scale);
            item.setTint(0x00000);
        }.bind(this.scene));

        // создание предметов
        let delay = 600;

        forEach(this.itemsInfoArray, function (element) {

            let item = this.physics.add.image(element.xPosition, element.yPosition, element.itemKey).setOrigin(0.5, 0.5);
            item.setScale(element.scale);

            // создание анимации появления предметов
            this.add.tween({
                targets: item,
                alpha: { start: 0, to: 1 },
                duration: 100,
                delay: delay,
                onComplete: function () {
                    this.customProperties.bumpSound.play();
                },
                onCompleteScope: this
            });
            delay = delay + 700;
        }.bind(this.scene));
    }

    // создание описаний предметов
    createDescriptions() {
        forEach(this.itemsInfoArray, function (element) {
            this.add.text(element.description.xPosition, element.description.yPosition, element.description.value, fontIds.DESCRIPTION_FONT).setOrigin(0.5, 0.5).setScale(element.description.scale);
        }.bind(this.scene));
    }

    // создание кнопки play
    createPlayButton() {
        let playBtn = this.scene.physics.add.sprite(900, 1350, uiElements.PLAY_BTN.name).setInteractive().setScale(1.5);

        playBtn.on('pointerover', function (pointer) {
            playBtn.setFrame(1);
            playBtn.setScale(1.7);
        }, this.scene);

        playBtn.on('pointerout', function (pointer) {
            playBtn.setFrame(0);
            playBtn.setScale(1.5);
        }, this.scene);

        playBtn.on('pointerdown', function (pointer) {
            playBtn.off('pointerdown'); // отключает кнопку, чтобы не было даблклика
            this.customProperties.btnSound.play();
            this.customProperties.music.stop();
            //анимация плавной смены сцены
            this.cameras.main.fadeOut(300, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('SceneSwitcher', { scene: this.constructor.name });
                localStorage.setItem('initConfig', JSON.stringify({ scene: this.constructor.name }));
            });
        }, this.scene);
    }

    // мастер метод
    buildScene() {
        this.createBackground();
        this.createFadeIn();
        this.createSounds();
        this.createTitle();
        this.createSubtitle();
        this.createItems();
        this.createDescriptions();
        this.createPlayButton();
    }
}