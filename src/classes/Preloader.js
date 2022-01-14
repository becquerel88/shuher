import { itemIds, zoneIds, uiIds, soundIds, fontIds } from '../consts/common';

class Preloader {
    constructor(scene, title, itemsArray) {
        this.scene = scene;
        this.title = title;
        this.itemsArray = itemsArray;
    }

    createBackground() {
        this.scene.physics.add.image(900, 750, itemIds.PRELOADER_BACKGROUND);

        
    }
}

export default Preloader;