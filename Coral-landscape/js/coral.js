class Coral {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(20, 40);
        this.growthRate = random(0.1, 0.3);
        this.health = 100;
    }

    grow(season) {
        if (season.currentSeason === 'Spring' || season.currentSeason === 'Summer') {
            this.size += this.growthRate;
        }
        if (season.currentSeason === 'Autumn' || season.currentSeason === 'Winter') {
            this.size -= this.growthRate * 0.1;
        }
        if (this.size < 20) {
            this.size = 20;
        }
        
        // Simulación de blanqueo de corales debido a la temperatura alta
        if (season.temperature > 30) {
            this.health -= 0.5;
        } else {
            this.health += 0.1;
        }

        this.health = constrain(this.health, 0, 100);
    }

    display() {
        let coralColor = color(255 - this.health * 2.55, this.health * 2.55, 0);
        fill(coralColor);
        noStroke();
        ellipse(this.x, this.y - this.size / 2, this.size);
        fill(139, 69, 19);
        rect(this.x - this.size / 10, this.y - this.size / 2, this.size / 5, this.size / 2);
    }
}