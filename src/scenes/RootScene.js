import Phaser from 'phaser';

class RootScene extends Phaser.Scene {
    isFirstLaunch = true;

    constructor() {
        super('RootScene');
    }

    init(scenename) {
        this.scenename = scenename;
    }

    create() {
        if (this.isFirstLaunch) {
            this.isFirstLaunch = false;
            this.scene.start('Scene1');
        }

        switch(this.scenename) {
            case 'Scene1' : {
                this.scene.start('Scene2');
                break;
            }
            case 'Scene2' : {
                console.log('Запускаю Scene3');
                break;                
            }
        }
        
        

        // this.selectScene(this.scenename);
    }


}

export default RootScene;