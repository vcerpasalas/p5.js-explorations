class Shape {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = colorPalette.getColor();
        this.offsetX = random(1000);
        this.offsetY = random(1000);
    }

    display() {
        fill(this.color);
        noStroke();
        let posX = this.x + map(noise(this.offsetX), 0, 1, -50, 50);
        let posY = this.y + map(noise(this.offsetY), 0, 1, -50, 50);
        ellipse(posX, posY, this.size);
        this.offsetX += 0.01;
        this.offsetY += 0.01;
    }
}