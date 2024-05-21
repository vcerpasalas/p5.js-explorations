function createGUI(params) {
    const gui = new dat.GUI();
    gui.add(params, 'angle', 0, TWO_PI, 0.01).name('Angle').onChange(redraw);
    gui.add(params, 'length', 10, 300, 1).name('Length').onChange(redraw);
    gui.add(params, 'level', 1, 10, 1).name('Levels').onChange(redraw);
}