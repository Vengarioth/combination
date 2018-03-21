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

        if(character === parseState.getCurrent()) {
            return parseState.advance();
        } else {
            return parseState.invalid();
        }
    };
};
