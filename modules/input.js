const readline = require('readline');

module.exports = class {
    constructor () {
        this.listeners = [];
        this.cleanupHandlers = [];

        process.stdin.on("keypress", (str, key) => {
            if (key.sequence === '\u0003') {
                this.cleanupHandlers.forEach(h => h());
                process.exit();
            }

            this.listeners.forEach(l => l(key));
        });
    }

    bind (listener) {
        this.listeners.push(listener);
    }

    bindCleanup (handler) {
        this.cleanupHandlers.push(handler);
    }

    init () {
        readline.emitKeypressEvents(process.stdin);
        if (process.stdin.isTTY) process.stdin.setRawMode(true);
    }
}
