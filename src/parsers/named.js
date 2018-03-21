export const named = (parserMap, builder) => {

    const parserKeys = Object.keys(parserMap);

    return (parseState) => {
        const map = {};
        let p = parseState;
        for(var i = 0; i < parserKeys.length; ++i) {
            if(p.reachedEnd()) {
                return parseState.invalid();
            }

            p = parserMap[parserKeys[i]](p);
            map[parserKeys[i]] = p.getValue().reduce((a, b) => a.join(b));

            if(!p.valid) {
                return parseState.invalid();
            }
        }

        return parseState.advanceBy(builder(map), parserKeys.length);
    };
};
