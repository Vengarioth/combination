export const doParse = (parserMap, builder) => {

    const parserKeys = Object.keys(parserMap);

    if(parserKeys.length < 1) {
        throw new Error('named expects at least one parser');
    }

    return (parseState) => {
        const map = {};
        let p = parseState;
        for(var i = 0; i < parserKeys.length; ++i) {
            if(p.reachedEnd()) {
                return parseState.invalid();
            }

            p = parserMap[parserKeys[i]](p);
            map[parserKeys[i]] = p;

            if(!p.valid) {
                return parseState.invalid();
            }
        }

        return parseState.advanceTo(builder(map), p.position);
    };
};
