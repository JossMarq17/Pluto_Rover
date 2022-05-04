const roverGirar = require('./roverGirar');

test ('Girar hacía la izquierda el sentido del Rover', () => {
    expect(roverGirar("L")).toBe("0, 0, O");
});

test ('Girar hacía la derecha el sentido del Rover', () => {
    expect(roverGirar("R")).toBe("0, 0, E");
});