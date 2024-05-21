class Temperature {
    constructor() {
        this.temperature = 20;
        this.increment = 0.01;
    }

    display() {
        this.temperature += this.increment;
        if (this.temperature > 50) {
            this.temperature = 20;
        }
        fill(255, 0, 0, 100);
        noStroke();
        let tempHeight = map(this.temperature, 20, 50, 0, height);
        rect(width - 100, height - tempHeight, 40, tempHeight);
        fill(0);
        textSize(20);
        text("Temperatura", width - 150, height - tempHeight - 10);
    }
}