import Phaser from 'phaser';
import { itemIds, zoneIds, fontIds } from '../consts/common';
import { forEach } from 'lodash';
import startDrag from '../modules/DragSystem';

let itemsInfoArray = [
    {
        xPosition: 1430,
        yPosition: 365,
        itemKey: itemIds.PANTS,
        zoneId: zoneIds.LOCKER
    },
    {
        xPosition: 1500,
        yPosition: 850,
        itemKey: itemIds.CONDOMS,
        zoneId: zoneIds.TRASHBIN
    },
    {
        xPosition: 975,
        yPosition: 900,
        itemKey: itemIds.ASHTRAY,
        zoneId: zoneIds.TRASHBIN
    },
    {
        xPosition: 780,
        yPosition: 1100,
        itemKey: itemIds.FRIEND,
        zoneId: zoneIds.BED
    },
    {
        xPosition: 350,
        yPosition: 600,
        itemKey: itemIds.HOOKAH,
        zoneId: zoneIds.BED
    },
];

let zonesInfoArray = [
    {
        xPosition: 680,
        yPosition: 830,
        zoneKey: zoneIds.TRASHBIN
    },
    {
        xPosition: 1000,
        yPosition: 400,
        zoneKey: zoneIds.LOCKER
    },
    {
        xPosition: 1500,
        yPosition: 1100,
        zoneKey: zoneIds.BED
    },

];

let itemCounterToHide = itemsInfoArray.length;

export default class Scene2 extends Phaser.Scene {
    timer;
    timerText;

    constructor() {
        super('Scene2');
    }

    isMovingMouse = false; // When true, moving the item on the Scene

    create() {
        this.cameras.main.fadeIn(300, 0, 0, 0);
        this.physics.add.image(900, 600, itemIds.MAIN_BACKGROUND);

        // create zones
        let zonesArray = this.createZones();

        // create items
        let itemsArray = this.createItems();

        // create overlap
        this.physics.add.overlap(itemsArray, zonesArray, function (object1, object2) {
            if (object1.zoneId == object2.texture.key && !this.isMovingMouse) {
                object1.destroy();
                itemCounterToHide--;
                console.log(itemCounterToHide);
            }
        }, null, this);

        // create ui_background
        const uiBackground = this.physics.add.image(900, 1350, itemIds.UI_BACKGROUND);

        // event listener to drag
        this.input.on('pointerdown', startDrag, this);

        this.timer = this.time.addEvent({
            delay: 25000,
            // delay: 2000,
            paused: false,
            callback: this.gameover,
            callbackScope: this
        });

        this.timerText = this.add.text(200, 1350, '', { font: `70px ${fontIds.MAIN_FONT}`, fill: '#ffffff' });
        this.timerText.setOrigin(0.5, 0.5);
    }

    update() {
        this.timerText.setText(this.timer.getRemainingSeconds().toFixed());

        if (itemCounterToHide == 0) {
            this.scene.start('RootScene', this.constructor.name);
        }
    }

    gameover() {
        this.scene.setActive(false);
        this.scene.launch('GameOverScene', this.constructor.name);
    }

    createItems() {
        let itemsArray = [];

        forEach(itemsInfoArray, function (element) {
            let item = this.physics.add.image(element.xPosition, element.yPosition, element.itemKey);
            item.zoneId = element.zoneId;
            item.setInteractive();
            itemsArray.push(item);
        }.bind(this));

        return itemsArray;
    }

    createZones() {
        let zonesArray = [];

        forEach(zonesInfoArray, function (element) {
            let zone = this.physics.add.image(element.xPosition, element.yPosition, element.zoneKey);
            zonesArray.push(zone)
        }.bind(this));

        return zonesArray;
    }
}