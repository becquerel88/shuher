import { items, sounds, zones } from "../common";

export const itemsInfo = [
    {
        xPosition: 1430,
        yPosition: 365,
        itemKey: items.PANTS.name,
        scale: 1,
        suitableZone: zones.LOCKER.name
    },
    {
        xPosition: 1550,
        yPosition: 680,
        itemKey: items.CONDOMS.name,
        scale: 1,
        suitableZone: zones.TRASHBIN.name
    },
    {
        xPosition: 975,
        yPosition: 900,
        itemKey: items.ASHTRAY.name,
        scale: 1.1,
        suitableZone: zones.TRASHBIN.name
    },
    {
        xPosition: 780,
        yPosition: 1100,
        itemKey: items.FRIEND.name,
        scale: 1,
        suitableZone: zones.BED.name
    },
    {
        xPosition: 350,
        yPosition: 600,
        itemKey: items.HOOKAH.name,
        scale: 1,
        suitableZone: zones.BED.name
    },
];

export const zonesInfo = [
    {
        xPosition: 680,
        yPosition: 830,
        scale: 1,
        zoneKey: zones.TRASHBIN.name,
        displayFrame: 1,
        sound: sounds.TRASHBIN_SOUND.name
    },
    {
        xPosition: 960,
        yPosition: 455,
        scale: 1.1,
        zoneKey: zones.LOCKER.name,
        displayFrame: 1,
        sound: sounds.CLOSET_SOUND.name
    },
    {
        xPosition: 1545,
        yPosition: 890,
        scale: 1,
        zoneKey: zones.BED.name,
        displayFrame: 1,
        sound: sounds.BED_SOUND.name
    },
    {
        xPosition: 617,
        yPosition: 350,
        scale: 1,
        zoneKey: zones.CLOSET.name,
        displayFrame: 1,
        sound: sounds.CLOSET_SOUND.name
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