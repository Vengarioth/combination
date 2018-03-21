import { char, sequence } from '../index';

export const tag = (characters) => {
    const characterList = characters.split('');
    if(characterList.length < 1) {
        throw new Error(`tag expects characters to be a string with at least length one`);
    }

    return sequence(characterList.map(c => char(c)));
};
