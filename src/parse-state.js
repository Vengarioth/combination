export class ParseState {
    constructor(source, start, position, result, valid = true) {
        this.source = source;
        this.start = start;
        this.position = position;
        this.result = result;
        this.valid = valid;
    }

    getResult() {
        return this.result;
    }

    reachedEnd() {
        return this.position >= this.source.length;
    }

    getCurrent() {
        return this.source[this.position];
    }

    advance(result) {
        return new ParseState(this.source, this.position, this.position + 1, result);
    }

    advanceBy(result, by) {
        return new ParseState(this.source, this.position, this.position + by, result);
    }

    advanceTo(result, to) {
        if(to < this.position) {
            throw new Error('cannot advance backwards');
        }
        return new ParseState(this.source, this.position, to, result);
    }

    invalid() {
        return new ParseState(this.source, this.position, this.position, undefined, false);
    }

    getValue() {
        return this.source.slice(this.start, this.position);
    }
}
