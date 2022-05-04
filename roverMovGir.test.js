const roverMovGir = require('./roverMovGir');

test ('Mover al Rover hacía el frente y girar a la derecha', () => {
    expect(roverMovGir("FRF")).toBe(1, 1, "E");
});