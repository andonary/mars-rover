import {ValueObject} from "./core/valueObject";

interface PositionProps {
    coordinate: string;
}

export class Position extends ValueObject<PositionProps> {
    constructor(x, y) {
        super({coordinate: x + '-' + y});
    }
}
