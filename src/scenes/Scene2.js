import Phaser from 'phaser';
import { itemIds, zoneIds } from '../consts/common';
import { forEach } from 'lodash';
import startDrag from '../classes/dragSystem';

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

class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }

    isMovingMouse = false; // When true, moving the item on the Scene

    preload() {
        //load images
        this.loadResources();

        this.load.audio('music2', 'assets/sounds/music2.ogg');
    }

    create() {
        let mainMusic = this.sound.add('music2');
        mainMusic.play();
        mainMusic.setLoop(true);
        this.cameras.main.fadeIn(300, 0, 0, 0);
        this.physics.add.image(900, 600, itemIds.BACKGROUND);

        //create zones
        let zonesArray = this.createZones();

        //create items
        let itemsArray = this.createItems();
        //make items draggable

        this.physics.add.overlap(itemsArray, zonesArray, function (object1, object2) {
            if (object1.zoneId == object2.texture.key && !this.isMovingMouse) {
                object1.destroy();
                itemCounterToHide--;
                console.log(itemCounterToHide);
            }
        }, null, this);

        //event listener to drag
        this.input.on('pointerdown', startDrag, this);
    }

    update() {
        if (itemCounterToHide == 0) {
            this.scene.start('RootScene', this.constructor.name);
            
        }
    }

    loadResources() {
        //load background
        this.load.image(itemIds.BACKGROUND, 'assets/background.png');

        //load items
        this.load.image(itemIds.PANTS, 'assets/pants.png');
        this.load.image(itemIds.CONDOMS, 'assets/condoms.png');
        this.load.image(itemIds.ASHTRAY, 'assets/ashtray.png');
        this.load.image(itemIds.FRIEND, 'assets/friend.png');
        this.load.image(itemIds.HOOKAH, 'assets/hookah.png');

        //load containers
        this.load.image(zoneIds.TRASHBIN, 'assets/trashbin.png');
        this.load.image(zoneIds.LOCKER, 'assets/trashbin.png');
        this.load.image(zoneIds.BED, 'assets/trashbin.png');
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

export default Scene2;