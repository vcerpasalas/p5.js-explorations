class Tree {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(30, 50);
        this.growthRate = random(0.1, 0.3);
    }

    grow(season) {
        if (season.currentSeason === 'Spring' || season.currentSeason === 'Summer') {
            this.size += this.growthRate;
        }
        if (season.currentSeason === 'Autumn' || season.currentSeason === 'Winter') {
            this.size -= this.growthRate * 0.1;
        }
        if (this.size < 30) {
            this.size = 30;
        }
    }

    display() {
        fill(34, 139, 34);
        noStroke();
        ellipse(this.x, this.y - this.size / 2, this.size);
        fill(139, 69, 19);
        rect(this.x - this.size / 10, this.y - this.size / 2, this.size / 5, this.size / 2);
    }
}