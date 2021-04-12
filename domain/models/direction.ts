import {ValueObject} from "./core/valueObject";

interface DirectionProps {
    direction: string;
}

export class Direction extends ValueObject<DirectionProps>{
    constructor(direction = 'N') {
        super({direction});
    }
}
