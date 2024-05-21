class Season {
    constructor() {
        this.seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];
        this.currentSeason = random(this.seasons);
        this.seasonDuration = 300; // Duration of each season in frames
        this.seasonCounter = 0;
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
    }
}