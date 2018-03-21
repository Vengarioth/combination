import { ParseState } from './index';

test('ParseState', () => {
    const parseState = new ParseState('asdf'.split(''), 0, 2, true);

    expect(parseState.getValue()).toEqual(['a', 's']);
});
