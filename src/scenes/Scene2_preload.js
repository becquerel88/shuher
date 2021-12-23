import Phaser from 'phaser';

class Scene2Preload extends Phaser.Scene {
    constructor() {
        super('Scene2Preload');
    }

    preload() {
        // load background
    }

    create() {
        this.physics.add.image(900, 750, 'menubackground');

        let startBtn = this.physics.add.sprite(1300, 1000, 'startbtn').setInteractive();
        startBtn.setScale(1.6);

        startBtn.on('pointerdown', function (pointer) {
            this.cameras.main.fadeOut(300, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('Scene2')
            });
        }, this);
        
        startBtn.on('pointerover', function(pointer) {
            startBtn.setFrame(1);
            startBtn.setScale(1.9);
        }, this);

        startBtn.on('pointerout', function(pointer) {
            startBtn.setFrame(0);
            startBtn.setScale(1.6);
        }, this);
    }

    update() {
    }
}

export default Scene2Preload;