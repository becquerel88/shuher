import { itemIds, zoneIds } from "../common";

export const itemsInfoArray = [
    {
        xPosition: 1430,
        yPosition: 365,
        itemKey: itemIds.PANTS,
        zoneId: zoneIds.LOCKER
    },
    {
        xPosition: 1500,
        yPosition: 850,
        itemKey: itemIds.CONDOMS,
        zoneId: zoneIds.TRASHBIN
    },
    {
        xPosition: 975,
        yPosition: 900,
        itemKey: itemIds.ASHTRAY,
        zoneId: zoneIds.TRASHBIN
    },
    {
        xPosition: 780,
        yPosition: 1100,
        itemKey: itemIds.FRIEND,
        zoneId: zoneIds.BED
    },
    {
        xPosition: 350,
        yPosition: 600,
        itemKey: itemIds.HOOKAH,
        zoneId: zoneIds.BED
    },
];

export const zonesInfoArray = [
    {
        xPosition: 680,
        yPosition: 830,
        zoneKey: zoneIds.TRASHBIN
    },
    {
        xPosition: 1000,
        yPosition: 400,
        zoneKey: zoneIds.LOCKER
    },
    {
        xPosition: 1500,
        yPosition: 1100,
        zoneKey: zoneIds.BED
    },

];

// первоначальное положение анимации всех зон - открытые
// кладу предмет - закрытые
// поднимаю предмет - открываются
// опять кладу предмет - закрываются