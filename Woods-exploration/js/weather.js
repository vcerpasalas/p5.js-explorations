class Weather {
    constructor() {
        this.rainDrops = [];
    }

    update(season) {
        if (season.currentSeason === 'Spring' || season.currentSeason === 'Autumn') {
            if (random(1) < 0.1) {
                this.rainDrops.push(new RainDrop());
            }
        }
    }

    display() {
        for (let drop of this.rainDrops) {
            drop.fall();
            drop.display();
        }
        this.rainDrops = this.rainDrops.filter(drop => drop.y < height);
    }
}

class RainDrop {
    constructor() {
        this.x = random(width);
        this.y = random(-100, -10);
        this.speed = random(4, 10);
    }

    fall() {
        this.y += this.speed;
    }

    display() {
        stroke(0, 0, 255);
        line(this.x, this.y, this.x, this.y + 10);
    }
}