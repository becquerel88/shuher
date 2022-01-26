import { backgrounds, uiElements, sounds, fontIds, configConsts } from '../consts/common';
import { find, forEach } from 'lodash';

export default class SceneBuilder {
    constructor(scene, itemsInfo, zonesInfo) {
        this.scene = scene;
        this.scene.customProperties = {};
        this.scene.customProperties.itemsInfo = itemsInfo;
        this.scene.customProperties.zonesInfo = zonesInfo;
        this.scene.customProperties.isMovingMouse = false; // когда true, item передвигается по сцене
    }

    // анимация плавного появления сцены
    createFadeIn() {
        this.scene.cameras.main.fadeIn(300, 0, 0, 0);
    }

    // создание бекграунда
    createBackground() {
        this.scene.physics.add.image(900, 600, backgrounds.MAIN_BG.name);
    }

    // создание бекграунда UI бара
    createUIBarBackground() {
        this.scene.physics.add.image(900, 1350, backgrounds.UI_BG.name);
    }

    // создание зон
    createZones() {
        this.scene.customProperties.zones = [];

        forEach(this.scene.customProperties.zonesInfo, function (element) {
            let zone = this.physics.add.sprite(element.xPosition, element.yPosition, element.zoneKey);
            zone.setOrigin(0.5, 0.5);
            zone.customProperties = {};
            zone.customProperties.zoneKey = element.zoneKey;
            zone.customProperties.sound = element.sound;
            zone.setScale(element.scale);
            this.customProperties.zones.push(zone);
        }.bind(this.scene));
    }

    // создание предметов
    createItems() {
        this.scene.customProperties.items = [];

        forEach(this.scene.customProperties.itemsInfo, function (element) {
            let item = this.physics.add.sprite(element.xPosition, element.yPosition, element.itemKey).setInteractive();
            item.setOrigin(0.5, 0.5);
            item.suitableZone = element.suitableZone;
            item.itemKey = element.itemKey;
            item.setScale(element.scale)
            this.customProperties.items.push(item);
        }.bind(this.scene));
    }

    // создание звуков
    createSounds() {
        // создание музыки
        this.scene.customProperties.music = this.scene.sound.add(sounds.MAIN_MUSIC.name);
        this.scene.customProperties.music.play(configConsts.MUSIC_VOLUME);
        this.scene.customProperties.music.setLoop(true);
        // создание звуков анимаций
        this.scene.customProperties.catchSound = this.scene.sound.add(sounds.CATCH_SOUND.name);
        this.scene.customProperties.closetSound = this.scene.sound.add(sounds.CLOSET_SOUND.name);
        this.scene.customProperties.trashbinSound = this.scene.sound.add(sounds.TRASHBIN_SOUND.name);
        this.scene.customProperties.bedSound = this.scene.sound.add(sounds.BED_SOUND.name);
    }

    // создание счетчика предметов на сцене
    createItemsCounter() {
        this.scene.customProperties.itemCounterToHide = this.scene.customProperties.items.length;
    }

    createHandMarker(positionX, positionY) {
        let posX = positionX - 100;
        let posY = positionY - 100;

        this.scene.customProperties.marker = this.scene.add.sprite(posX, posY, uiElements.HAND_MARKER.name);

        this.scene.anims.create({
            key: 'markerAnim',
            frames: this.scene.anims.generateFrameNumbers(uiElements.HAND_MARKER.name),
            frameRate: 16,
            yoyo: 1,
            repeat: -1
        });

        this.scene.customProperties.marker.play('markerAnim');
    }

    // создание системы перемещения предметов на сцене
    makeItemsDraggable() {
        this.scene.input.on('pointerdown', this.startDrag, this);
    }

    // взятие предмета
    startDrag(pointer, targets) {
        this.scene.customProperties.dragObject = targets[0]; // targets[0] - определение верхнего элемента под курсором
        if (!this.scene.customProperties.dragObject) return; // пропуск обьекта, если setInteractive обьекта = false
        this.scene.customProperties.catchSound.play(); // звук анимации взятия предмета в руку

        // определение зоны, в которую должен быть помещен взятый в руку предмет и ее анимация
        this.scene.customProperties.zoneAnimation = find(this.scene.customProperties.zones, function (element) {
            return element.customProperties.zoneKey == this.suitableZone;
        }.bind(this.scene.customProperties.dragObject));

        this.scene.customProperties.zoneAnimation.setFrame(0);
        this.createHandMarker(this.scene.customProperties.zoneAnimation.x, this.scene.customProperties.zoneAnimation.y);


        this.scene.input.off('pointerdown', this.startDrag, this);
        this.scene.customProperties.isMovingMouse = true; // регистрация перемещения курсора
        this.scene.input.on('pointermove', this.doDrag, this);
        this.scene.input.on('pointerup', this.stopDrag, this);
    }

    // перемещение предмета
    doDrag(pointer) {

        this.scene.customProperties.dragObject.x = pointer.x;
        this.scene.customProperties.dragObject.y = pointer.y;

        // ограничение игровой сцены по Y до UI бара
        if (pointer.y >= 1200) {
            this.scene.customProperties.dragObject.y = 1200;
        }
    }

    // остановка перемещения предмета
    stopDrag() {
        this.scene.input.on('pointerdown', this.startDrag, this);
        this.scene.input.off('pointermove', this.doDrag, this);
        this.scene.input.off('pointerup', this.stopDrag, this);

        this.scene.customProperties.isMovingMouse = false; // анимация зоны в исходное состояние
        this.scene.customProperties.marker.destroy(); // удаление маркера (руки указателя)
    }

    // создание регистратора пересечения предметов и зон
    createOverlap() {
        this.scene.physics.add.overlap(this.scene.customProperties.items, this.scene.customProperties.zones, function (object1, object2) {

            // декремент счетчика оставшихся на сцене предметов
            if (object1.suitableZone == object2.customProperties.zoneKey && !this.isMovingMouse) {
                object1.destroy();
                this[object2.customProperties.sound].play();
                this.zoneAnimation.setFrame(1);
                this.itemCounterToHide--;
                console.log(this.itemCounterToHide);
            }
        }, null, this.scene.customProperties);
    }

    gameover() {
        this.scene.customProperties.music.stop();
        this.scene.scene.setActive(false);
        this.scene.scene.launch('GameOverScene', this.scene.constructor.name);
    }

    createTimer() {
        this.scene.timer = this.scene.time.addEvent({
            // delay: 25000,
            delay: 15000,
            paused: false,
            callback: this.gameover,
            callbackScope: this
        });

        this.scene.customProperties.timerText = this.scene.add.text(200, 1350, '', fontIds.TITLE_FONT).setOrigin(0.5, 0.5);
    }

    buildScene() {
        this.createBackground();
        this.createFadeIn();
        this.createZones();
        this.createItems();
        this.createUIBarBackground();
        this.createSounds();
        this.createItemsCounter();
        this.makeItemsDraggable();
        this.createOverlap();
        this.createTimer();
    }
}

// однажды в голливуде
// воспоминания об убийстве