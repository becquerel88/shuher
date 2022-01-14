export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene');
    }

    init(scenename) {
        this.scenename = scenename;
    }

    create() {
        this.physics.add.image(900, 600, 'blur');
        let blur = this.add.text(900, 600, 'CLICK TO RESTART', { font: `70px ${fontIds.MAIN_FONT}`, fill: '#ff0000' }).setOrigin(0.5, 0.5);

        this.input.on('pointerdown', () => {
            this.scene.start(this.scenename);
        });
    }
}