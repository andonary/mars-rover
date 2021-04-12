import {Position} from "./position";
import {Direction} from "./direction";

export class Rover {
    private x: number = 0;
    private y: number = 0;
    private direction: string;

    getPosition() {
        return new Position(this.x, this.y).getValue();
    }

    getDirection() {
        return new Direction(this.direction).getValue();
    }
}
