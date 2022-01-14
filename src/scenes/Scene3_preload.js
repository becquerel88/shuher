import Phaser from 'phaser';
import { forEach } from 'lodash';
import { itemIds, soundIds, fontIds, uiIds } from '../consts/common';
import Preloader from '../classes/Preloader'

let itemsInfoArray = [
    {
        xPosition: 300,
        yPosition: 650,
        itemKey: itemIds.POSTER,
        // scale: 1.8
    },
    {
        xPosition: 900,
        yPosition: 650,
        itemKey: itemIds.DEALER,
        // scale: 1.6
    },
    {
        xPosition: 1450,
        yPosition: 650,
        itemKey: itemIds.SODA,
        // scale: 1.2
    }
];

export default class Scene3Preload extends Phaser.Scene {

    constructor() {
        super('Scene3Preload');
    }

    create() {

        // const preloader = new Preloader(this, "ROUND 2", itemsInfoArray);
        // preloader.createBackground();

        // create scene change animations
        this.cameras.main.fadeIn(300, 0, 0, 0);

        // create background
        this.physics.add.image(900, 750, itemIds.PRELOADER_BACKGROUND);

        // create sounds
        this.music = this.createMusic();
        this.bumpSound = this.createBumpSound();
        this.music.play();
        this.music.setLoop(true);

        // create title
        this.createTitle();

        // create descriptions 
        // this.createDescriptions();

        // create item shadows
        this.createItemShadows();

        // create play button
        this.createPlayBtn();
    }

    createMusic() {
        let music = this.sound.add(soundIds.PRELOADER_MUSIC);
        return music;
    }

    createBumpSound() {
        let bumpSound = this.sound.add(soundIds.BUMP);
        return bumpSound;
    }

    createTitle() {
        // create title
        this.add.text(900, 100, 'ROUND 2', { font: `110px ${fontIds.MAIN_FONT}`, fill: '#ffffff' }).setOrigin(0.5, 0.5);

        //create subtitle
        this.add.text(900, 200, 'you\'ve got to find and hide', { font: `72px ${fontIds.MAIN_FONT}`, fill: '#000000' }).setOrigin(0.5, 0.5);
    }

    createDescriptions() {
        forEach(descriptionsInfoArray, function (element) {
            let item = this.add.text(element.xPosition, element.yPosition, element.value, element.fontStyle);
            item.setOrigin();
        }.bind(this));
    }

    createItemShadows() {
        forEach(itemsInfoArray, function (element) {
            let item = this.physics.add.image(element.xPosition, element.yPosition, element.itemKey);
            item.setOrigin(0.5, 0.5);
            item.setScale(element.scale);
            item.setTint(0x00000);
        }.bind(this));
    }

    createItems() {
        let delay = 600;

        forEach(itemsInfoArray, function (element) {

            let item = this.physics.add.image(element.xPosition, element.yPosition, element.itemKey);
            item.setOrigin(0.5, 0.5);
            item.setScale(element.scale);

            this.add.tween({
                targets: item,
                alpha: { start: 0, to: 1 },
                duration: 100,
                delay: delay,
                onComplete: function () {
                    this.bumpSound.play();
                },
                onCompleteScope: this
            });
            delay = delay + 700;
        }.bind(this));
    }

    createPlayBtn() {
        let playBtn = this.physics.add.sprite(900, 1350, uiIds.PLAY_BUTTON).setInteractive();
        playBtn.setScale(1.5);

        playBtn.on('pointerover', function (pointer) {
            playBtn.setFrame(1);
            playBtn.setScale(1.7);
        }, this);

        playBtn.on('pointerout', function (pointer) {
            playBtn.setFrame(0);
            playBtn.setScale(1.5);
        }, this);

        playBtn.on('pointerdown', () => {
            this.music.stop();
            this.cameras.main.fadeOut(300, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('RootScene', this.constructor.name)
            });
            playBtn.off('pointerdown'); // disable start button to avoid double click

            this.scene.start('RootScene', this.constructor.name)
        });
    }

}