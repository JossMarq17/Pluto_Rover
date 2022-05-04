const rover = require('./rover');

test ('Colocar el Rover en la posición inicial', () => {
    expect(rover(0, 0, N)).toBe("origen");
});