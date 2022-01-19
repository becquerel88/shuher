import { itemIds, zoneIds } from "../common";

export const itemsInfo = [
    {
        xPosition: 1430,
        yPosition: 365,
        itemKey: itemIds.PANTS,
        scale: 1,
        suitableZone: zoneIds.LOCKER
    },
    {
        xPosition: 1500,
        yPosition: 850,
        itemKey: itemIds.CONDOMS,
        scale: 1,
        suitableZone: zoneIds.TRASHBIN
    },
    {
        xPosition: 975,
        yPosition: 900,
        itemKey: itemIds.ASHTRAY,
        scale: 1,
        suitableZone: zoneIds.TRASHBIN
    },
    {
        xPosition: 780,
        yPosition: 1100,
        itemKey: itemIds.FRIEND,
        scale: 1,
        suitableZone: zoneIds.BED
    },
    {
        xPosition: 350,
        yPosition: 600,
        itemKey: itemIds.HOOKAH,
        scale: 1,
        suitableZone: zoneIds.BED
    },
];

export const zonesInfo = [
    {
        xPosition: 680,
        yPosition: 830,
        scale: 1,
        zoneKey: zoneIds.TRASHBIN,
        frameWidth: 100,
        frameHeight: 200,
        displayFrame: 1
    },
    {
        xPosition: 960,
        yPosition: 455,
        scale: 1.1,
        zoneKey: zoneIds.LOCKER,
        frameWidth: 200,
        frameHeigth: 300,
        displayFrame: 1
    },
    {
        xPosition: 1545,
        yPosition: 890,
        scale: 1,
        zoneKey: zoneIds.BED,
        frameWidth: 2,
        frameHeigth: 2,
        displayFrame: 1
    },

];

// первоначальное положение анимации всех зон - открытые
// кладу предмет - закрытые
// поднимаю предмет - открываются
// опять кладу предмет - закрываются



// {
//     xPosition: 1056,
//     yPosition: 467,
//     scale: 1.005,
//     zoneKey: zoneIds.LOCKER,
//     frameWidth: 200,
//     frameHeigth: 300,
//     displayFrame: 1
// },