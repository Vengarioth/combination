export const oneOf = (characters) => {
    const characterList = characters.split('');
    if(characterList.length < 1) {
        throw new Error(`oneOf expects characters to be a string with at least length one`);
    }
    
    return (parseState) => {
        if(parseState.reachedEnd()) {
            return parseState.invalid();
        }

        const current = parseState.getCurrent();
        const character = characterList.find(c => c === current);

        if(character) {
            return parseState.advance(character);
        } else {
            return parseState.invalid();
        }
    };
};
