export const many0 = (parser) => {
    return (parseState) => {

        let p = parseState;
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
        }

        return parseState.advanceTo(results, p.position);
    };
};
