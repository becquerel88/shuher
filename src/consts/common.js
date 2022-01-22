// Константы бекграундов
export const backgrounds = {
    INTRO_BG: { name: 'introBg', path: 'assets/intro_bg.png' },
    PRELOADER_BG: { name: 'preloaderBg', path: 'assets/preloader_bg.png' },
    MAIN_BG: { name: 'mainBg', path: 'assets/main_bg.png' },
    UI_BG: { name: 'uiBg', path: 'assets/ui_bg.png' },
    GAMEOVER_BLUR_BG: { name: 'GameOverBlurBg', path: 'assets/blur.png' },
};

// Интерфейсные константы
export const uiElements = {
    START_BTN: { name: 'startBtn', path: 'assets/start_btn.png', frameSize: { frameWidth: 290, frameHeight: 30 } },
    PLAY_BTN: { name: 'playBtn', path: 'assets/play_btn.png', frameSize: { frameWidth: 368, frameHeight: 78 } },
    RESTART_BTN: { name: 'restartBtn', path: 'assets/restart_btn.png', frameSize: { frameWidth: 250, frameHeight: 50 } },
    CONTINUE_BTN: { name: 'continueBtn', path: 'assets/continue_btn.png', frameSize: { frameWidth: 310, frameHeight: 50 } }
};

// Константы шрифтов
export const fontIds = {
    TITLE_FONT: { font: '110px neuropol_x_bold', fill: '#ffffff' },
    SUBTITLE_FONT: { font: '72px neuropol_x_bold', fill: '#000000' },
    DESCRIPTION_FONT: { font: '40px neuropol_x_bold', fill: '#ffffff', align: 'center' },
    GAMEOVER_FONT: { font: '40px neuropol_x_bold', fill: '#fe0000' },
    TEXT_FONT: { font: '68px comic_sans_bold', fill: '#000000', align: 'center' }
};

// Константы предметов
export const items = {
    PANTS: { name: 'pants', path: 'assets/pants.png' },
    CONDOMS: { name: 'condoms', path: 'assets/condoms.png' },
    ASHTRAY: { name: 'ashtray', path: 'assets/ashtray.png' },
    FRIEND: { name: 'friend', path: 'assets/friend.png' },
    HOOKAH: { name: 'hookah', path: 'assets/hookah.png' },
    DEALER: { name: 'dealer', path: 'assets/dealer.png' },
    POSTER: { name: 'poster', path: 'assets/poster.png' },
    SODA: { name: 'sodaandvodka', path: 'assets/sodaandvodka.png' }
};


// Константы зон
export const zoneIds = {
    TRASHBIN: 'trashbin',
    LOCKER: 'locker',
    BED: 'bed'
};

// Константы звуков
export const soundIds = {
    PRELOADER_MUSIC: 'preloaderMusic',
    MAIN_MUSIC: 'mainMusic',
    BTN_CLICK: 'btnClick',
    BUMP: 'bump'
};