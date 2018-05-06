import * as p from '../index';

test('oneOf accepts the correct character at the current position', () => {
    const parse = p.build(p.oneOf('abc'));

    const result = parse('a716');

    expect(result.valid).toBe(true);
    expect(result.position).toBe(1);
    expect(result.getResult()).toEqual('a');
});

test('oneOf rejects an incorrect character at the current position', () => {
    const parse = p.build(p.oneOf('abc'));

    const result = parse('716a');

    expect(result.valid).toBe(false);
    expect(result.position).toBe(0);
});

test('oneOf rejects if it reached the end of a string', () => {
    const parse = p.build(p.oneOf('abc'));

    const result = parse('');

    expect(result.valid).toBe(false);
    expect(result.position).toBe(0);
});

test('oneOf throws if no characters are provided', () => {
    expect(() => p.oneOf('')).toThrow();
});
