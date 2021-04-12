interface ValueObjectProps {
    [key: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> {
    protected constructor(private props: T) {
    }

    getValue() {
        const typeName = Object.keys(this.props)[0];
        return this.props[typeName];
    }
}
