export const any = (...parsers) => {

    return (parseState) => {
        if(parseState.reachedEnd()) {
            return parseState.invalid();
        }

        if(parsers.some(parser => parser(parseState).valid)) {
            return parseState.advance();
        } else {
            return parseState.invalid();
        }
    };
};
