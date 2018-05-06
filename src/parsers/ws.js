export const ws = (parser) => {

    const isWs = (character) => {
        switch(character) {
            case '\r':
                return true;
            case '\n':
                return true;
            case ' ':
                return true;
        }
        return false;
    }

    return (parseState) => {
        while(isWs(parseState.getCurrent())) {
            parseState = parseState.advance();
        }

        const inner = parser(parseState);

        parseState = inner;
        while(isWs(parseState.getCurrent())) {
            parseState = parseState.advance();
        }

        parseState.result = inner.result;

        return parseState;
    };
};
