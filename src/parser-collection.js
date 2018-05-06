export class ParserCollection {
    constructor() {
        this.parsers = {};
    }

    add(name, parser) {
        this.parsers[name] = parser;
    }

    get(name) {
        return s => this.parsers[name](s);
    }
}
