import * as p from '../index';

test('char accepts the correct character at the current position', () => {
    const parse = p.build(p.char('a'));

    const result = parse('a716');

    expect(result.valid).toBe(true);
    expect(result.position).toBe(1);
    expect(result.getResult()).toEqual('a');
});

test('char rejects an incorrect character at the current position', () => {
    const parse = p.build(p.char('a'));

    const result = parse('716a');

    expect(result.valid).toBe(false);
    expect(result.position).toBe(0);
});

test('char rejects if it reached the end of a string', () => {
    const parse = p.build(p.char('a'));

    const result = parse('');

    expect(result.valid).toBe(false);
    expect(result.position).toBe(0);
});

test('char throws if no characters are provided', () => {
    expect(() => p.char('')).toThrow();
});
