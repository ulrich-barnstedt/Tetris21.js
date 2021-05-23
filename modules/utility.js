module.exports = class {
    static random (min, max) {
        return Math.floor(Math.random() * ((max + 1) - min) + min);
    }

    static box = "█";
    static blank = -1;
    static borderChars = {
        topL : "╔",
        bottomL : "╚",
        topR : "╗",
        bottomR : "╝",
        vertical : "║",
        horizontal : "═"
    }
}