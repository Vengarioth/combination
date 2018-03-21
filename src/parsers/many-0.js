export const many0 = (parser) => {
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

        return parseState.advanceBy({}, matches);
    };
};
