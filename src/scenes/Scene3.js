import Phaser from 'phaser';
import { itemIds, zoneIds } from '../consts/common';
import startDrag from '../classes/dragSystem';

class Scene3 extends Phaser.Scene {
    constructor() {
        super('Scene3');
    }

    preload() {
        //load background
        this.load.image(itemIds.BACKGROUND, 'assets/background.png');
        this.load.image('witcher3', 'assets/witcher3.jpg');
    }

    create() {
        this.physics.add.image(900, 600, itemIds.BACKGROUND);
        this.physics.add.image(900, 600, 'witcher3');

        this.input.on('pointerdown', function(pointer){
            this.scene.start('Scene2'); 
        }, this);
    }
}

export default Scene3;