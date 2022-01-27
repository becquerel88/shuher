import Phaser, { Scene } from 'phaser';

import RootScene from './scenes/RootScene';
import SceneSwitcher from './scenes/SceneSwitcher';
import IntroScene from './scenes/IntroScene';
import TitleScene from './scenes/TitleScene';
import Scene1Preloader from './scenes/Scene1Preloader';
import Scene1 from './scenes/Scene1';
import Scene2Preloader from './scenes/Scene2Preloader';
import Scene2 from './scenes/Scene2';
import Scene3Preloader from './scenes/Scene3Preloader';
import Scene3 from './scenes/Scene3';
import EndGameScene from './scenes/EndGameScene';

import WinningScene from './scenes/WinningScene';
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
        SceneSwitcher,
        IntroScene,
        TitleScene,
        Scene1Preloader,
        Scene1,
        Scene2Preloader,
        Scene2,
        Scene3Preloader,
        Scene3,
        EndGameScene,
        WinningScene,
        GameOverScene],
    render: {
        pixelArt: false
    }
}

const game = new Phaser.Game(config);
