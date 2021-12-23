/* Here's a small function, which only requires the font name and url.
Use it like:
loadFont("mixolydian", "assets/fonts/mixolydian.ttf"); */


function loadFont(name, url) {
    var newFont = new FontFace(name, `url(${url})`);
    newFont.load().then(function (loaded) {
        document.fonts.add(loaded);
    }).catch(function (error) {
        return error;
    });
}

export default loadFont;

