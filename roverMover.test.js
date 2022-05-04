const roverMover = require('./roverMover');

test ('Mover al Rover una casilla al frente', () => {
    expect(roverMover("F")).toBe("0, 1, N");
});

test ('Mover al Rover una casilla al frente', () => {
    expect(roverMover("B")).toBe("0, 10, N");
});