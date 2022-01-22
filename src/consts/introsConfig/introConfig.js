import {fontIds, uiElements } from '../common';

export default {
    text: {
        xPosition: 1270,
        yPosition: 680,
        value: 'The previous game was\ninterrupted. Do you want\nto continue your progress\nor restart the game?',
        font: fontIds.TEXT_FONT,
        scale: 1
    },

    uiBtns: [
        {
            xPosition: 1100,
            yPosition: 920,
            value: uiElements.CONTINUE_BTN.name,
            scale: 1.3,
            pointerScale: 1.5
        },
        {
            xPosition: 1520,
            yPosition: 920,
            value: uiElements.RESTART_BTN.name,
            scale: 1.3,
            pointerScale: 1.5
        }
    ]
}

