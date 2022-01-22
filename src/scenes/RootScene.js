import { forEach } from 'lodash';
import Phaser from 'phaser';
import { itemIds, zoneIds, soundIds, backgrounds, uiElements, items } from '../consts/common';
import loadFont from '../utils/fontloader'

// Служебная сцена, для переключения уровней и промежуточных сцен
export default class RootScene extends Phaser.Scene {

    constructor() {
        super('RootScene');
    }

    preload() {
        // Загрузка ресурсов
        this.loadResources();
    }

    create() {
        // Проверка на первый запуск игры
        if (localStorage.getItem("initConfig") == null) {
            this.scene.start('Scene1');
        }
        else {
            this.scene.start('IntroScene');
        }
    }

    loadResources() {
        // Загрузка бекграундов
        forEach(backgrounds, function (element) {
            this.load.image(element.name, element.path);
        }.bind(this));

        // Загрузка ресурсов для кнопок и интерфейсов
        forEach(uiElements, function (element) {
            this.load.spritesheet(element.name, element.path, element.frameSize);
        }.bind(this));

        // Загрузка ресурсов для игровых предметов
        forEach(items, function (element) {
            this.load.image(element.name, element.path);
        }.bind(this));

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