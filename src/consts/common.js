// Константы бекграундов
export const backgrounds = {
    INTRO_BG: { name: 'introBg', path: 'assets/intro_bg.png' },
    PRELOADER_BG: { name: 'preloaderBg', path: 'assets/preloader_bg.png' },
    MAIN_BG: { name: 'mainBg', path: 'assets/main_bg.png' },
    UI_BG: { name: 'uiBg', path: 'assets/ui_bg.png' },
    GAMEOVER_BLUR_BG: { name: 'gameOverBlurBg', path: 'assets/blur.png' },
    WINNING_BG: { name: 'winningBg', path: 'assets/winning_bg.png' }
};

// Интерфейсные константы
export const uiElements = {
    START_BTN: { name: 'startBtn', path: 'assets/start_btn.png', frameSize: { frameWidth: 290, frameHeight: 30 } },
    PLAY_BTN: { name: 'playBtn', path: 'assets/play_btn.png', frameSize: { frameWidth: 368, frameHeight: 78 } },
    RESTART_BTN: { name: 'restartBtn', path: 'assets/restart_btn.png', frameSize: { frameWidth: 250, frameHeight: 50 } },
    CONTINUE_BTN: { name: 'continueBtn', path: 'assets/continue_btn.png', frameSize: { frameWidth: 310, frameHeight: 50 } },
    WINNING_CONTINUE_BTN: { name: 'winningContinueBtn', path: 'assets/winning_continue_btn.png', frameSize: { frameWidth: 470, frameHeight: 50 } },
    HAND_MARKER: { name: 'handMarker', path: 'assets/marker.png', frameSize: { frameWidth: 175, frameHeight: 173} }
};

// Константы шрифтов
export const fontIds = {
    TITLE_FONT: { font: '110px neuropol_x_bold', fill: '#ffffff' },
    SUBTITLE_FONT: { font: '72px neuropol_x_bold', fill: '#000000' },
    DESCRIPTION_FONT: { font: '40px neuropol_x_bold', fill: '#ffffff', align: 'center' },
    GAMEOVER_WINNING_FONT: { font: '132px neuropol_x_bold', fill: '#fe0000' },
    GAMEOVER_WINNING_FONT_SHADOW: { font: '132px neuropol_x_bold', fill: '#333333' },
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
    SODA: { name: 'sodaandvodka', path: 'assets/soda_and_vodka.png' },
    AMSTERDAM: { name: 'amsterdam', path: 'assets/amsterdam.png' },
    GRASS_BAG: { name: 'grass_bag', path: 'assets/grass_bag.png' },
    PORN: { name: 'porn', path: 'assets/porn.png' },
};

// Константы зон
export const zones = {
    TRASHBIN: { name: 'trashbin', path: 'assets/trash_bin.png', frameSize: { frameWidth: 205, frameHeight: 252 } },
    LOCKER: { name: 'locker', path: 'assets/locker.png', frameSize: { frameWidth: 200, frameHeight: 300 } },
    BED: { name: 'bed', path: 'assets/bed.png', frameSize: { frameWidth: 542, frameHeight: 660 } },
    CLOSET: { name: 'closet', path: 'assets/closet.png', frameSize: { frameWidth: 532, frameHeight: 627 } }
}

// Константы звуков
export const sounds = {
    MAIN_MUSIC: { name: 'mainMusic', path: 'assets/sounds/main_music.ogg' },
    PRELOADER_MUSIC: { name: 'preloaderMusic', path: 'assets/sounds/preloader_music.ogg' },
    BTN_CLICK: { name: 'btnClickSound', path: 'assets/sounds/click_sound.ogg' },
    BUMP_SOUND: { name: 'bumpSound', path: 'assets/sounds/bump_sound.ogg' },
    CATCH_SOUND: { name: 'catchSound', path: 'assets/sounds/catch_sound.ogg' },
    TRASHBIN_SOUND: { name: 'trashbinSound', path: 'assets/sounds/trashbin_sound.ogg' },
    CLOSET_SOUND: { name: 'closetSound', path: 'assets/sounds/closet_sound.ogg' },
    BED_SOUND: { name: 'bedSound', path: 'assets/sounds/bed_sound.ogg' },
    WINNING_SOUND: { name: 'winningSound', path: 'assets/sounds/winning_sound.ogg' }
};