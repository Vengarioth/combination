export const sequence = (parsers) => {

    if(!Array.isArray(parsers)) {
        throw new Error('sequence expects parsers to be an array');
    }

    if(parsers.length < 1) {
        throw new Error('sequence expects at least one parser');
    }

    return (parseState) => {
        let result = [];

        let p = parseState;
        for(var i = 0; i < parsers.length; ++i) {
            if(p.reachedEnd()) {
                return parseState.invalid();
            }

            p = parsers[i](p);

            if(!p.valid) {
                return parseState.invalid();
            }

            result.push(p.getResult());
        }

        return parseState.advanceTo(result, p.position);
    };
};
