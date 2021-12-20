import Phaser from 'phaser';
import {itemIds, zoneIds} from '../consts/common';

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

let buttonIsClicked = false; //check mousebutton condition

let itemCounterToHide = itemsInfoArray.length;

class Scene2 extends Phaser.Scene {

    preload() {
        //load images
        this.loadResources();
    }

    create() {
        this.physics.add.image(900, 600, itemIds.BACKGROUND);

        //create zones
        let zonesArray = this.createZones();

        //create items
        let itemsArray = this.createItems();
        //make items draggable

        this.physics.add.overlap(itemsArray, zonesArray, function (object1, object2) {
            if (object1.zoneId == object2.texture.key && !buttonIsClicked) {
                object1.destroy();
                itemCounterToHide--;
                console.log(itemCounterToHide);
            }
        }, null, this);

        //event listener to drag
        this.input.on('pointerdown', this.startDrag, this);
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

        for (let i = 0; i < itemsInfoArray.length; i++) {
            let item = this.physics.add.image(itemsInfoArray[i].xPosition, itemsInfoArray[i].yPosition, itemsInfoArray[i].itemKey);
            item.zoneId = itemsInfoArray[i].zoneId;
            item.setInteractive();
            itemsArray.push(item);
        }

        return itemsArray;
    } //**** */

    createZones() {
        let zonesArray = [];
        for (let i = 0; i < zonesInfoArray.length; i++) {
            let zone = this.physics.add.image(zonesInfoArray[i].xPosition, zonesInfoArray[i].yPosition, zonesInfoArray[i].zoneKey);
            zonesArray.push(zone);
        }
        
        return zonesArray;
    } //**** */

    startDrag(pointer, targets) {
        this.dragObject = targets[0];
        if (!this.dragObject) return; // if object interactive is false, skip it 
        this.input.off('pointerdown', this.startDrag, this);
        buttonIsClicked = true;
        this.input.on('pointermove', this.doDrag, this);
        this.input.on('pointerup', this.stopDrag, this);

    }

    doDrag(pointer) {
        this.dragObject.x = pointer.x;
        this.dragObject.y = pointer.y;
    }

    stopDrag() {
        this.input.on('pointerdown', this.startDrag, this);
        this.input.off('pointermove', this.doDrag, this);
        this.input.off('pointerup', this.stopDrag, this);
        buttonIsClicked = false;
    }
}

export default Scene2;