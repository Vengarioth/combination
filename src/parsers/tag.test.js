import * as p from '../index';

test('tag accepts a sequence matching its characters', () => {
    const parse = p.build(p.tag('ab'));

    const result = parse('abc');

    expect(result.valid).toBe(true);
    expect(result.position).toBe(2);
    expect(result.getResult()).toEqual('ab');
});

test('tag accepts a sequence matching its characters starting inside the string', () => {
    const parser = p.tag('ab');
    const parseState = new p.ParseState('bcabc'.split(''), 0, 2, true);

    const result = parser(parseState);

    expect(result.valid).toBe(true);
    expect(result.position).toBe(4);
    expect(result.getResult()).toEqual('ab');
});

test('tag rejects a sequence not matching its characters', () => {
    const parse = p.build(p.tag('ab'));

    const result = parse('acc');

    expect(result.valid).toBe(false);
    expect(result.position).toBe(0);
});

test('tag rejects a sequence too short its characters', () => {
    const parse = p.build(p.tag('ab'));

    const result = parse('a');

    expect(result.valid).toBe(false);
    expect(result.position).toBe(0);
});
