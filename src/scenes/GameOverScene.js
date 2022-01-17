import { backgroundIds, fontIds } from "../consts/common";

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene');
    }

    init(scenename) {
        this.scenename = scenename;
    }

    create() {
        this.physics.add.image(900, 600, backgroundIds.GAMEOVER_BG_BLUR);
        this.add.text(900, 600, 'CLICK TO RESTART', fontIds.GAMEOVER_FONT).setOrigin(0.5, 0.5);

        this.input.on('pointerdown', () => {
            this.scene.start(this.scenename);
        });
    }
}