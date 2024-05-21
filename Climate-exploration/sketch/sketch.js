let seaLevel;
let temperature;
let co2;
let glacier;

function setup() {
    createCanvas(windowWidth, windowHeight);
    seaLevel = new SeaLevel();
    temperature = new Temperature();
    co2 = new CO2();
    glacier = new Glacier();
    background(255);
}

function draw() {
    background(255);
    seaLevel.display();
    temperature.display();
    co2.display();
    glacier.display();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}