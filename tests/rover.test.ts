import {Rover} from "../domain/models/rover";
import {Position} from "../domain/models/position";

describe('Rover does not move', () => {
    const rover = new Rover();
    let position;

    test('Given: Rover receive no instruction', () => {
        expect(rover).toBeDefined();
    });

    test('When: User ask rover position', () => {
        position = rover.getPosition();
        expect(position).toBeDefined();
    });

    test('Then: position is initial position', () => {
        const initialPosition: string = new Position(0, 0).getValue();
        expect(position).toEqual(initialPosition);
    });
})
