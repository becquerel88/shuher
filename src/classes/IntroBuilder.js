import { backgroundIds } from "../consts/common";

export default class IntroBuilder {
    constructor(scene) {
        this.scene = scene;
        this.scene.customProperties = {};
        // this.scene.customProperties.description = description;
        // this.scene.customProperties.config = config;
    }

    createBackground() {
        this.scene.physics.add.image(900, 750, backgroundIds.INTRO_BG);
    }

}