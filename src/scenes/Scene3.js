import Phaser from 'phaser';
import { itemIds, zoneIds, uiIds, soundIds, fontIds } from '../consts/common';
import Preloader from '../classes/Preloader';

let itemsArray = [
    {
        xPosition: 200,
        yPostion: 200,
        loadedImage: itemIds.PANTS,
        description: 'PARTNERS \n PANTS'
    },
    {
        xPosition: 600,
        yPostion: 600,
        loadedImage: itemIds.ASHTRAY,
        description: 'ASHTRAY'
    }
];

class Scene3 extends Phaser.Scene {

    constructor() {
        super('Scene3');
    }

    create() {
        const preloader = new Preloader(this, 'ROUND 2', itemsArray);
        preloader.createBackground();
    }
}

export default Scene3;