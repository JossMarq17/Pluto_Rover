const roverMovGir = require('./roverMovGir');

test ('Mover al Rover hacía el frente y girar a la derecha', () => {
    expect(roverMovGir("FRF")).toBe(1, 1, "E");
});

test ('Mover al Rover hacía el frente y girar a la derecha y avanzar', () => {
    expect(roverMovGir("FFRFF")).toBe(2, 2, "E");
});