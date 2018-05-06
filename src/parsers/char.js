export const char = (character) => {
    if(typeof character !== 'string') {
        throw new Error('char expects a string (a single character)');
    }

    if(character.length !== 1) {
        throw new Error('char expects its string to be exactly one character long');
    }

    return (parseState) => {
        if(parseState.reachedEnd()) {
            return parseState.invalid();
        }

        const current = parseState.getCurrent();

        if(character === current) {
            return parseState.advance(current);
        } else {
            return parseState.invalid();
        }
    };
};
