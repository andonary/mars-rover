import {Position} from "./position";
import {Direction} from "./direction";
import {CommandEnum} from "./commands";

export class Rover {
    private x: number;
    private y: number;
    private direction: string;

    getPosition() {
        return new Position(this.x, this.y).getValue();
    }

    getDirection() {
        return new Direction(this.direction).getValue();
    }

    commands(commands: CommandEnum) {
        switch (commands) {
            case CommandEnum.forward:
                this.y = 1;
                break;
        }
    }
}
