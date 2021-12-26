import Phaser from 'phaser';
import { forEach } from 'lodash';
import { itemIds, zoneIds, uiIds, soundIds, fontIds } from '../consts/common';

let fontSize = '40px ';
let descriptionsInfoArray = [
    {
        xPosition: 350,
        yPosition: 700,
        value: 'CONDOMS',
        fontStyle: {
            font: `${fontSize}${fontIds.MAIN_FONT}`,
            fill: '#ffffff'
        }
    },
    {
        xPosition: 350,
        yPosition: 1100,
        value: 'ASHTRAY',
        fontStyle: {
            font: `${fontSize}${fontIds.MAIN_FONT}`,
            fill: '#ffffff'
        }
    },
    {
        xPosition: 900,
        yPosition: 1150,
        value: 'HOOKAH',
        fontStyle: {
            font: `${fontSize}${fontIds.MAIN_FONT}`,
            fill: '#ffffff'
        }
    },
    {
        xPosition: 1450,
        yPosition: 1100,
        value: 'PARTNER\n   PANTS',
        fontStyle: {
            font: `${fontSize}${fontIds.MAIN_FONT}`,
            fill: '#ffffff'
        }
    },
    {
        xPosition: 1450,
        yPosition: 700,
        value: 'MONGED\n  FRIEND',
        fontStyle: {
            font: `${fontSize}${fontIds.MAIN_FONT}`,
            fill: '#ffffff'
        }
    },
];

let itemsInfoArray = [
    {
        xPosition: 330,
        yPosition: 520,
        itemKey: itemIds.CONDOMS,
        scale: 1.8
    },
    {
        xPosition: 350,
        yPosition: 930,
        itemKey: itemIds.ASHTRAY,
        scale: 1.6,
    },
    {
        xPosition: 900,
        yPosition: 890,
        itemKey: itemIds.HOOKAH,
        scale: 1.2,
    },
    {
        xPosition: 1450,
        yPosition: 935,
        itemKey: itemIds.PANTS,
        scale: 1.4,
    },
    {
        xPosition: 1450,
        yPosition: 500,
        itemKey: itemIds.FRIEND,
        scale: 0.9,
    },
];



class Scene2Preload extends Phaser.Scene {
    bumpSound;
    music;

    constructor() {
        super('Scene2Preload');
    }

    create() {
        // create scene change animations
        this.cameras.main.fadeIn(300, 0, 0, 0);

        // create background
        this.physics.add.image(900, 750, itemIds.PRELOADER_BACKGROUND);

        // create sounds
        this.music = this.createMusic();
        this.bumpSound = this.createBumpSound();
        // this.music.play();
        // this.music.setLoop(true);

        // create title
        this.createTitle();

        // create descriptions 
        this.createDescriptions();

        // create item shadows
        this.createItemShadows();

        // create items
        this.createItems();

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
        this.add.text(900, 100, 'ROUND 1', { font: `110px ${fontIds.MAIN_FONT}`, fill: '#ffffff' }).setOrigin(0.5, 0.5);

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

export default Scene2Preload;