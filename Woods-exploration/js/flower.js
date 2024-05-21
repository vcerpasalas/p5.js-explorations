class Flower {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(10, 20);
        this.growthRate = random(0.05, 0.15);
        this.color = color(random(255), random(255), random(255));
    }

    grow(season) {
        if (season.currentSeason === 'Spring' || season.currentSeason === 'Summer') {
            this.size += this.growthRate;
        }
        if (season.currentSeason === 'Autumn' || season.currentSeason === 'Winter') {
            this.size -= this.growthRate * 0.1;
        }
        if (this.size < 10) {
            this.size = 10;
        }
    }

    display() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y - this.size / 2, this.size);
        fill(34, 139, 34);
        rect(this.x - this.size / 20, this.y - this.size / 2, this.size / 10, this.size / 2);
    }
}