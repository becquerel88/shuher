import { items, sounds, zones } from "../common";

export const itemsInfo = [
    {
        xPosition: 1650,
        yPosition: 170,
        itemKey: items.PANTS.name,
        scale: 1,
        suitableZone: zones.LOCKER.name
    },
    {
        xPosition: 600,
        yPosition: 1100,
        itemKey: items.CONDOMS.name,
        scale: 1,
        suitableZone: zones.TRASHBIN.name
    },
    {
        xPosition: 1150,
        yPosition: 1100,
        itemKey: items.ASHTRAY.name,
        scale: 1.1,
        suitableZone: zones.TRASHBIN.name
    },
    {
        xPosition: 1050,
        yPosition: 700,
        itemKey: items.FRIEND.name,
        scale: 0.9,
        suitableZone: zones.BED.name
    },
    {
        xPosition: 350,
        yPosition: 600,
        itemKey: items.HOOKAH.name,
        scale: 1,
        suitableZone: zones.BED.name
    },
    {
        xPosition: 750,
        yPosition: 650,
        itemKey: items.SODA.name,
        scale: 0.3,
        suitableZone: zones.BED.name
    },
    {
        xPosition: 900,
        yPosition: 1050,
        itemKey: items.DEALER.name,
        scale: 0.5,
        suitableZone: zones.BED.name
    },
    {
        xPosition: 220,
        yPosition: 150,
        itemKey: items.POSTER.name,
        scale: 0.4,
        suitableZone: zones.TRASHBIN.name
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
