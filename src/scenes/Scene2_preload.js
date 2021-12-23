import Phaser from 'phaser';

class Scene2Preload extends Phaser.Scene {
    constructor() {
        super('Scene2Preload');
    }

    preload() {
        // load background
        this.load.image('scene2PreloadBackground', 'assets/scene2_preload_background.png');

        // load images
        this.load.image('pants', 'assets/pants.png');
        
        // load sounds
        this.load.audio('music2', 'assets/sounds/music2.ogg');
    }

    create() {
        this.cameras.main.fadeIn(300, 0, 0, 0);
        this.physics.add.image(900, 750, 'scene2PreloadBackground');
        
        let pants = this.physics.add.image(600, 600, 'pants').setInteractive();
        pants.on('pointerdown', function() {
            this.scene.start('RootScene', this.constructor.name);
        }, this);
        
    }

    update() {
    }
}

export default Scene2Preload;