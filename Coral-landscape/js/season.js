class Season {
    constructor() {
        this.seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];
        this.currentSeason = random(this.seasons);
        this.seasonDuration = 300; // Duration of each season in frames
        this.seasonCounter = 0;
        this.temperature = 25;
    }

    update() {
        this.seasonCounter++;
        if (this.seasonCounter > this.seasonDuration) {
            this.seasonCounter = 0;
            this.changeSeason();
        }
    }

    changeSeason() {
        let nextIndex = (this.seasons.indexOf(this.currentSeason) + 1) % this.seasons.length;
        this.currentSeason = this.seasons[nextIndex];

        switch (this.currentSeason) {
            case 'Spring':
                this.temperature = 25;
                break;
            case 'Summer':
                this.temperature = 35;
                break;
            case 'Autumn':
                this.temperature = 20;
                break;
            case 'Winter':
                this.temperature = 15;
                break;
        }
    }
}