import Phaser from 'phaser';
import { itemIds, zoneIds, uiIds, soundIds, backgroundIds } from '../consts/common';
import loadFont from '../utils/fontloader'

// Служебная сцена, для переключения уровней и промежуточных сцен
export default class RootScene extends Phaser.Scene {

    constructor() {
        super('RootScene');
    }

    // Метод, который принимает данные, переданные этой сцене при ее открытии
    init(initConfig) {
        this.initConfig = initConfig;
    }

    preload() {
        // Загрузка ресурсов
        this.loadResources();
    }

    create() {
        /*  Проверка на первый запуск игры. Если первый раз попадаешь на эту сцену, то запускается первый уровень, в остальных случаях работает переключатель сцен */

        if (localStorage.getItem("initConfig") == null) {
            this.scene.start('Scene1');
        }   

        // console.log();
        if (Object.keys(this.initConfig).length != 0) {
            // localStorage.setItem('initConfig', JSON.stringify(this.initConfig));
        } 

        switch (this.initConfig.scene) {
            case 'IntroScene': {
                this.scene.start('TitleScene');
                break;
            }
            case 'TitleScene': {
                this.scene.start('Scene1Preloader');
                break;
            }
            case 'Scene1Preloader': {
                this.scene.start('Scene1');
                break;
            }
            case 'Scene1': {
                this.scene.start('Scene2Preloader');
                break;
            }
        }
    }

    loadResources() {
        // Загрузка ресурсов для фонов
        this.load.image(backgroundIds.INTRO_BG, 'assets/intro_bg.png');
        this.load.image(backgroundIds.PRELOADER_BG, 'assets/preloader_bg.png');
        this.load.image(backgroundIds.MAIN_BG, 'assets/main_bg.png')
        this.load.image(backgroundIds.UI_BG, 'assets/ui_bg.png');
        this.load.image(backgroundIds.GAMEOVER_BLUR_BG, 'assets/blur.png');

        // Загрузка ресурсов для кнопок и интерфейсов
        this.load.spritesheet(uiIds.CONTINUE_BTN, 'assets/continue_btn.png', { frameWidth: 310, frameHeight: 50 });
        this.load.spritesheet(uiIds.RESTART_BTN, 'assets/restart_btn.png', { frameWidth: 250, frameHeight: 50 });
        this.load.spritesheet(uiIds.START_BTN, 'assets/start_btn.png', { frameWidth: 290, frameHeight: 30 });
        this.load.spritesheet(uiIds.PLAY_BTN, 'assets/play_btn.png', { frameWidth: 368, frameHeight: 78 });

        // Загрузка ресурсов для игровых предметов
        this.load.image(itemIds.PANTS, 'assets/pants.png');
        this.load.image(itemIds.CONDOMS, 'assets/condoms.png');
        this.load.image(itemIds.ASHTRAY, 'assets/ashtray.png');
        this.load.image(itemIds.FRIEND, 'assets/friend.png');
        this.load.image(itemIds.HOOKAH, 'assets/hookah.png');
        this.load.image(itemIds.DEALER, 'assets/dealer.png');
        this.load.image(itemIds.POSTER, 'assets/poster.png');
        this.load.image(itemIds.SODA, 'assets/sodaandvodka.png');

        // Загрузка ресурсов для музыки и звуков
        this.load.audio(soundIds.MAIN_MUSIC, 'assets/sounds/music.ogg');
        this.load.audio(soundIds.PRELOADER_MUSIC, 'assets/sounds/music2.ogg');
        this.load.audio(soundIds.BTN_CLICK, 'assets/sounds/click.ogg');
        this.load.audio(soundIds.BUMP, 'assets/sounds/bump.ogg');

        // Загрузка ресурсов для контейнеров
        this.load.spritesheet(zoneIds.TRASHBIN, 'assets/trash_bin.png', { frameWidth: 205, frameHeight: 252 });
        this.load.spritesheet(zoneIds.LOCKER, 'assets/locker.png', { frameWidth: 200, frameHeight: 300 });
        this.load.spritesheet(zoneIds.BED, 'assets/bed.png', { frameWidth: 542, frameHeight: 660 });

        // Загрузка ресурсов для шрифтов
        loadFont('neuropol_x_bold', 'assets/fonts/neuropol_x_bold.ttf');
        loadFont('comic_sans_bold', 'assets/fonts/comic_sans_bold.ttf');
    }
}