import Phaser from "phaser";

export default class SceneSwitcher extends Phaser.Scene {
    constructor() {
        super('SceneSwitcher')
    }

    create() {
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
}