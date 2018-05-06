export const many1 = (parser) => {
    return (parseState) => {

        let p = parseState;
        let matches = 0;
        let results = [];
        while(true) {
            if(p.reachedEnd()) {
                break;
            }

            p = parser(p);
            
            if(!p.valid) {
                break;
            }
            
            results.push(p.getResult());
            matches += 1;
        }

        if(matches > 0) {
            return parseState.advanceTo(results, p.position);
        } else {
            return parseState.invalid();
        }
    };
};
