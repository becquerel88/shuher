import Phaser from 'phaser';
import Scene2 from './scenes/Scene2';
import Scene3 from './scenes/Scene3';

const config = {
    width: 1800,
    height: 1200,
    // zoom: 0.8,
    type: Phaser.AUTO,
    parent: 'canvas-holder',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [Scene3, Scene2],
    render: {
        pixelArt: false
    }
}

const game = new Phaser.Game(config);