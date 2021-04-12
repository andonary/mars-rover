import {Rover} from "../domain/models/rover";
import {Position} from "../domain/models/position";
import {Direction} from "../domain/models/direction";
import {CommandEnum, Commands} from "../domain/models/commands";

describe('Rover does not move', () => {
    const rover = new Rover();
    let position, direction;

    test('Given: Rover receive no instruction', () => {
        expect(rover).toBeDefined();
    });

    test('When: Navigator ask rover position and direction', () => {
        position = rover.getPosition();
        expect(position).toBeDefined();
        direction = rover.getDirection();
        expect(direction).toBeDefined();
    });

    test('Then: position is initial position', () => {
        const initialPosition: string = new Position().getValue();
        expect(position).toEqual(initialPosition);
    });

    test('Then: direction of rover is default direction', () => {
        const defaultDirection: string = new Direction().getValue();
        expect(direction).toEqual(defaultDirection);
    });
});

describe('Rover moves only forward', () => {
    const rover = new Rover();
    let position;

    test('Given: Rover receive instruction: move forward', () => {
        expect(rover.commands).toBeDefined();
    });

    test('When: Navigator ask rover to move forward', () => {
        const command: CommandEnum = new Commands(CommandEnum.forward).getValue();
        rover.commands(command);
        position = rover.getPosition();
    });

    test('Then: position is not initial position', () => {
        const initialPosition: string = new Position().getValue();
        expect(position).not.toEqual(initialPosition);
    });
});
