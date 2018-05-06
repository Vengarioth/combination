export const any = (...parsers) => {

    return (parseState) => {
        if(parseState.reachedEnd()) {
            return parseState.invalid();
        }

        const parser = parsers.find(parser => parser(parseState).valid);

        if(parser) {
            return parser(parseState);
        } else {
            return parseState.invalid();
        }
    };
};
