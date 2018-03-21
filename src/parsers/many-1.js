export const many1 = (parser) => {
    return (parseState) => {

        let p = parseState;
        let matches = 0;
        while(true) {
            if(p.reachedEnd()) {
                break;
            }

            p = parser(p);

            if(!p.valid) {
                break;
            }

            matches += 1;
        }

        if(matches > 0) {
            return parseState.advanceBy({}, matches);
        } else {
            return parseState.invalid();
        }
    };
};
