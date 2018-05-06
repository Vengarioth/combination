import { char, sequence } from '../index';

export const tag = (characters) => {
    const characterList = characters.split('');
    if(characterList.length < 1) {
        throw new Error(`tag expects characters to be a string with at least length one`);
    }

    const inner = sequence(characterList.map(c => char(c)));

    return (parseState) => {
        const result = inner(parseState);
        if(result.valid) {
            result.result = result.result.join('');
        }
        return result;
    };
};
