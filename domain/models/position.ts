import {ValueObject} from "./core/valueObject";

interface PositionProps {
    coordinate: string;
}

export class Position extends ValueObject<PositionProps> {
    constructor(x = 0, y = 0) {
        super({coordinate: x + '-' + y});
    }
}
