import { forEach } from 'lodash';
import Phaser from 'phaser';
import { backgrounds, uiElements, items, sounds, zones, videos } from '../consts/common';
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
            this.scene.start('TitleScene');
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
        forEach(sounds, function (element) {
            this.load.audio(element.name, element.path);
        }.bind(this));

        // Загрузка ресурсов для контейнеров
        forEach(zones, function (element) {
            this.load.spritesheet(element.name, element.path, element.frameSize);
        }.bind(this));

        // Загрузка ресурсов для видео
        forEach(videos, function (element) {
            this.load.video(element.name, element.path);
        }.bind(this));

        // Загрузка ресурсов для шрифтов
        loadFont('neuropol_x_bold', 'assets/fonts/neuropol_x_bold.ttf');
        loadFont('comic_sans_bold', 'assets/fonts/comic_sans_bold.ttf');


    }
}