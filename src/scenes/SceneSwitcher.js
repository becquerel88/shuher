import Phaser from "phaser";

export default class SceneSwitcher extends Phaser.Scene {
    constructor() {
        super('SceneSwitcher')

    }

    init(initConfig) {
        this.initConfig = initConfig;
    }

    create() {
        // console.log(this.initConfig);

        switch (this.initConfig.scene) {
            case 'IntroScene': {
                console.log("***");
                if (this.initConfig.button == 'continueBtn') {
                    this.scene.start(JSON.parse(localStorage.getItem('initConfig')).scene);
                }
                else {
                    this.scene.start('TitleScene');
                }
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