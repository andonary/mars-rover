import {Position} from "./position";

export class Rover {
    private x: number = 0;
    private y: number = 0;

    getPosition() {
        return new Position(this.x, this.y).getValue();
    }
}
