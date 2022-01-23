import { backgrounds, sounds } from '../consts/common';
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
    crateSounds() {
        this.scene.customProperties.catchSound = this.scene.sound.add(sounds.CATCH_SOUND.name);
        this.scene.customProperties.closetSound = this.scene.sound.add(sounds.CLOSET_SOUND.name);
        this.scene.customProperties.trashbinSound = this.scene.sound.add(sounds.TRASHBIN_SOUND.name);
        this.scene.customProperties.bedSound = this.scene.sound.add(sounds.BED_SOUND.name);
    }

    // создание счетчика предметов на сцене
    createItemsCounter() {
        this.scene.customProperties.itemCounterToHide = this.scene.customProperties.items.length;
    }

    // создание системы перемещения предметов на сцене
    makeItemsDraggable() {
        this.scene.input.on('pointerdown', startDrag, this.scene);

        function startDrag(pointer, targets) {
            // targets[0] - определение верхнего элемента под курсором
            this.customProperties.dragObject = targets[0];
            if (!this.customProperties.dragObject) return; // пропуск обьекта, если setInteractive обьекта = false

            this.customProperties.catchSound.play();

            // определение зоны, в которую должен быть помещен взятый в руку предмет и ее анимация
            this.customProperties.zoneAnimation = find(this.customProperties.zones, function (element) {
                return element.customProperties.zoneKey == this.suitableZone;
            }.bind(this.customProperties.dragObject));

            this.customProperties.zoneAnimation.setFrame(0);

            this.input.off('pointerdown', this.startDrag, this);
            this.customProperties.isMovingMouse = true; // регистрация перемещения курсора
            this.input.on('pointermove', doDrag, this);
            this.input.on('pointerup', stopDrag, this);
        }

        function doDrag(pointer) {

            this.customProperties.dragObject.x = pointer.x;
            this.customProperties.dragObject.y = pointer.y;

            // ограничение игровой сцены по Y до UI бара
            if (pointer.y >= 1200) {
                this.customProperties.dragObject.y = 1200;
            }
        }

        function stopDrag() {
            this.input.on('pointerdown', startDrag, this);
            this.input.off('pointermove', doDrag, this);
            this.input.off('pointerup', stopDrag, this);

            // анимация зоны в исходное состояние
            this.customProperties.isMovingMouse = false;
        }
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
        // console.log(this.scene);
        //     this.scene.setActive(false);
        // this.scene.launch('GameOverScene', this.constructor.name);
    }

    buildScene() {
        this.createBackground();
        this.createFadeIn();
        this.createZones();
        this.createItems();
        this.createUIBarBackground();
        this.crateSounds();
        this.createItemsCounter();
        this.makeItemsDraggable();
        this.createOverlap();
        this.gameover();
    }
}

// однажды в голливуде
// воспоминания об убийстве