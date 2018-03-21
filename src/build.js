import { ParseState } from './index';

export const build = (parser) => {
    return (input) => {
        return parser(new ParseState(input.split(''), 0, 0));
    }
}
