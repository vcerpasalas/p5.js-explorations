class ColorPalette {
    constructor() {
        this.colors = [];
        this.generatePalette();
    }

    generatePalette() {
        for (let i = 0; i < 10; i++) {
            this.colors.push(color(`hsl(${random(360)}, 100%, 50%)`));
        }
    }

    getColor(level) {
        return this.colors[level % this.colors.length];
    }
}