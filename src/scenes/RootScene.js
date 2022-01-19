import Phaser from 'phaser';
import { itemIds, zoneIds, uiIds, soundIds, backgroundIds } from '../consts/common';
import loadFont from '../utils/fontloader'

// Служебная сцена, для переключения уровней и промежуточных сцен
export default class RootScene extends Phaser.Scene {
    isFirstLaunch = true;

    constructor() {
        super('RootScene');
    }

    // Метод, который принимает данные, переданные этой сцене при ее открытии
    init(scenename) {
        this.scenename = scenename;
    }

    preload() {
        // Загрузка ресурсов
        this.loadResources();
    }

    create() {
        /*  Проверка на первый запуск игры
         Если первый раз попадаешь на эту сцену, то запускается первый уровень
         в остальных случаях работает переключатель сцен */

        if (this.isFirstLaunch) {
            this.isFirstLaunch = false;
            this.scene.start('Scene1');
        }

        switch (this.scenename) {
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
        this.load.image(backgroundIds.TITLE_BACKGROUND, 'assets/title_background.png');
        this.load.image(backgroundIds.MAIN_BACKGROUND, 'assets/main_background.png');
        this.load.image(backgroundIds.PRELOADER_BACKGROUND, 'assets/preloader_background.png');
        this.load.image(backgroundIds.UI_BACKGROUND, 'assets/ui_background.png');
        this.load.image(backgroundIds.GAMEOVER_BG_BLUR, 'assets/blur.png');

        // Загрузка ресурсов для кнопок и интерфейсов
        this.load.spritesheet(uiIds.START_BUTTON, 'assets/start_btn.png', { frameWidth: 290, frameHeight: 30 });
        this.load.spritesheet(uiIds.PLAY_BUTTON, 'assets/play_btn.png', { frameWidth: 368, frameHeight: 78 });

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
        this.load.audio(soundIds.BUTTON_CLICK, 'assets/sounds/click.ogg');
        this.load.audio(soundIds.BUMP, 'assets/sounds/bump.ogg');

        // Загрузка ресурсов для контейнеров
        this.load.spritesheet(zoneIds.TRASHBIN, 'assets/trash_bin.png', { frameWidth: 205, frameHeight: 252, startFrame: 0 });
        this.load.spritesheet(zoneIds.LOCKER, 'assets/locker_1.png', { frameWidth: 200, frameHeight: 300, startFrame: 0 });
        this.load.spritesheet(zoneIds.BED, 'assets/bed_1.png', { frameWidth: 542, frameHeight: 660, startFrame: 1 });


        // Загрузка ресурсов для шрифтов
        loadFont("neuropol_x_bold", "assets/fonts/neuropol_x_bold.ttf");
    }
}