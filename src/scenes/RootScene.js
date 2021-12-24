import Phaser from 'phaser';
import { itemIds, zoneIds, uiIds, soundIds, fontIds } from '../consts/common';
import loadFont from '../utils/fontloader'

class RootScene extends Phaser.Scene {
    isFirstLaunch = true;

    constructor() {
        super('RootScene');
    }

    init(scenename) {
        this.scenename = scenename;
    }

    preload() {
        this.loadResources();
    }

    create() {
        if (this.isFirstLaunch) {
            this.isFirstLaunch = false;
            this.scene.start('Scene1');
        }

        switch (this.scenename) {
            case 'Scene1': {
                this.scene.start('Scene2Preload');
                break;
            }
            case 'Scene2Preload': {
                this.scene.start('Scene2');
                break;
            }

        }

    }

    loadResources() {
        // load backgrounds
        this.load.image(itemIds.MAIN_BACKGROUND, 'assets/main_background.png');
        this.load.image(itemIds.PRELOADER_BACKGROUND, 'assets/preloader_background.png');
        this.load.image(itemIds.TITLE_BACKGROUND, 'assets/title_background.png');

        // load ui
        this.load.spritesheet(uiIds.START_BUTTON, 'assets/start_btn.png', { frameWidth: 290, frameHeight: 30 });
        this.load.spritesheet(uiIds.PLAY_BUTTON, 'assets/play_btn.png', { frameWidth: 368, frameHeight: 78 });

        // load items
        this.load.image(itemIds.PANTS, 'assets/pants.png');
        this.load.image(itemIds.CONDOMS, 'assets/condoms.png');
        this.load.image(itemIds.ASHTRAY, 'assets/ashtray.png');
        this.load.image(itemIds.FRIEND, 'assets/friend.png');
        this.load.image(itemIds.HOOKAH, 'assets/hookah.png');

        // load audio
        this.load.audio(soundIds.MAIN_MUSIC, 'assets/sounds/music.ogg');
        this.load.audio(soundIds.PRELOADER_MUSIC, 'assets/sounds/music2.ogg');
        this.load.audio(soundIds.BUTTON_CLICK, 'assets/sounds/click.ogg');
        this.load.audio(soundIds.BUMP, 'assets/sounds/bump.ogg');

        // load containers
        this.load.image(zoneIds.TRASHBIN, 'assets/trashbin.png');
        this.load.image(zoneIds.LOCKER, 'assets/trashbin.png');
        this.load.image(zoneIds.BED, 'assets/trashbin.png');

        // load fonts
        loadFont(fontIds.MAIN_FONT, "assets/fonts/neuropol_x_bold.ttf");
    }
}

export default RootScene;