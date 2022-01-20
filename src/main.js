import Phaser from 'phaser';

import RootScene from './scenes/RootScene';
import IntroScene from './scenes/IntroScene';
import TitleScene from './scenes/TitleScene';
import Scene1Preloader from './scenes/Scene1Preloader';
import Scene1 from './scenes/Scene1';
import Scene2Preloader from './scenes/Scene2Preloader';

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
    scene: [
        RootScene,
        IntroScene,
        TitleScene,
        Scene1Preloader,
        Scene1,
        Scene2Preloader,
        GameOverScene],
    render: {
        pixelArt: false
    }
}

const game = new Phaser.Game(config);
