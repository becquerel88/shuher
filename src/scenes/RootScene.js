import Phaser from 'phaser';
import { itemIds, zoneIds, uiIds, soundIds, fontIds } from '../consts/common';
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
            case 'Scene1': {
                this.scene.start('Scene3Preload');
                break;
            }
            case 'Scene2Preload': {
                this.scene.start('Scene2');
                break;
            }
            case 'Scene2': {
                this.scene.start('Scene3Preload');
                break;
            }

        }

    }

    loadResources() {
        // Загрузка ресурсов для фонов
        this.load.image(itemIds.MAIN_BACKGROUND, 'assets/main_background.png');
        this.load.image(itemIds.PRELOADER_BACKGROUND, 'assets/preloader_background.png');
        this.load.image(itemIds.TITLE_BACKGROUND, 'assets/title_background.png');
        this.load.image('blur', 'assets/blur.png');

        // Загрузка ресурсов для кнопок и интерфейсов
        this.load.spritesheet(uiIds.START_BUTTON, 'assets/start_btn.png', { frameWidth: 290, frameHeight: 30 });
        this.load.spritesheet(uiIds.PLAY_BUTTON, 'assets/play_btn.png', { frameWidth: 368, frameHeight: 78 });

        this.load.image(itemIds.UI_BACKGROUND, 'assets/ui_background.png');

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
        this.load.image(zoneIds.TRASHBIN, 'assets/trash_bin.png');
        this.load.image(zoneIds.LOCKER, 'assets/trash_bin.png');
        this.load.image(zoneIds.BED, 'assets/trash_bin.png');

        // Загрузка ресурсов для шрифтов
        loadFont(fontIds.MAIN_FONT, "assets/fonts/neuropol_x_bold.ttf");
    }
}