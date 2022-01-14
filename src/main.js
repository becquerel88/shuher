import Phaser from 'phaser';

import RootScene from './scenes/RootScene';
import Scene1 from './scenes/Scene1';
import Scene2Preload from './scenes/Scene2_preload';
import Scene2 from './scenes/Scene2';
import Scene3Preload from './scenes/Scene3_preload';


import GameOverScene from './scenes/GameOverScene';

const config = {
    width: 1800,
    height: 1500,
    zoom: 0.8,
    type: Phaser.AUTO,
    parent: 'canvas-holder',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [RootScene, Scene1, Scene2Preload, Scene2, Scene3Preload, GameOverScene],
    render: {
        pixelArt: false
    }
}

const game = new Phaser.Game(config);
