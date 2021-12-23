import { times } from 'lodash';
import Phaser from 'phaser';
import loadFont from '../utils/fontloader';

class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
    }

    preload() {
        // load background
        this.load.image('menubackground', 'assets/mainmenu_background.png');
        this.load.spritesheet('startbtn', 'assets/startbtn.png', { frameWidth: 290, frameHeight: 30 });

        this.load.audio('click', 'assets/sounds/click.ogg');
        this.load.audio('music', 'assets/sounds/music.ogg');
    }

    create() {
        this.physics.add.image(900, 750, 'menubackground');
        let clickSound = this.sound.add('click');
        let preloadMusic = this.sound.add('music');
        preloadMusic.play();
        preloadMusic.setLoop(true);
        

        let startBtn = this.physics.add.sprite(1300, 1000, 'startbtn').setInteractive();
        startBtn.setScale(1.6);

        startBtn.on('pointerdown', function (pointer) {
            clickSound.play();
            preloadMusic.stop();
            this.cameras.main.fadeOut(300, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('RootScene', this.constructor.name)
            });
        }, this);

        startBtn.on('pointerover', function (pointer) {
            startBtn.setFrame(1);
            startBtn.setScale(1.9);
        }, this);

        startBtn.on('pointerout', function (pointer) {
            startBtn.setFrame(0);
            startBtn.setScale(1.6);
        }, this);
    }

    update() {
    }
}

export default Scene1;