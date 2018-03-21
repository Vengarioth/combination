export const oneOf = (characters) => {
    const characterList = characters.split('');
    if(characterList.length < 1) {
        throw new Error(`oneOf expects characters to be a string with at least length one`);
    }
    
    return (parseState) => {
        if(parseState.reachedEnd()) {
            return parseState.invalid();
        }
        if(characterList.some(character => character === parseState.getCurrent())) {
            return parseState.advance();
        } else {
            return parseState.invalid();
        }
    };
};
