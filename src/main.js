import Phaser from 'phaser';

import RootScene from './scenes/RootScene';
import Scene1 from './scenes/Scene1';
import Scene2 from './scenes/Scene2';
import Scene3 from './scenes/Scene3';

const config = {
    width: 1800,
    height: 1500,
    zoom: 0.8,
    type: Phaser.AUTO,
    parent: 'canvas-holder',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [RootScene, Scene1, Scene2, Scene3],
    render: {
        pixelArt: false
    }
}

const game = new Phaser.Game(config);
