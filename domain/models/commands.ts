import {ValueObject} from "./core/valueObject";

interface CommandsProps {
    command: CommandEnum;
}

export enum CommandEnum {
    forward='f'
}

export class Commands extends ValueObject<CommandsProps>{
    constructor(command: CommandEnum) {
        super({command});
    }
}
