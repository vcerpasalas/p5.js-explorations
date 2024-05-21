class Letter {
    constructor(x, y, char) {
        this.x = x;
        this.y = y;
        this.char = char;
        this.color = colorPalette.getColor();
        this.offsetX = random(1000);
        this.offsetY = random(1000);
        this.size = random(24, 64);
    }

    display() {
        fill(this.color);
        noStroke();
        let posX = this.x + map(noise(this.offsetX), 0, 1, -50, 50);
        let posY = this.y + map(noise(this.offsetY), 0, 1, -50, 50);
        textSize(this.size);
        textAlign(CENTER, CENTER);
        text(this.char, posX, posY);
        this.offsetX += 0.01;
        this.offsetY += 0.01;
    }
}