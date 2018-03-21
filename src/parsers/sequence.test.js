import * as p from '../index';

test('sequence accepts a sequence matching its parsers', () => {
    const parse = p.build(p.sequence([p.char('a'), p.char('b')]));

    const result = parse('abc');

    expect(result.valid).toBe(true);
    expect(result.position).toBe(2);
    expect(result.getValue()).toEqual(['a', 'b']);
});

test('sequence accepts a sequence matching its parsers starting inside the string', () => {
    const parser = p.sequence([p.char('a'), p.char('b')]);
    const parseState = new p.ParseState('bcabc'.split(''), 0, 2, true);

    const result = parser(parseState);

    expect(result.valid).toBe(true);
    expect(result.position).toBe(4);
    expect(result.getValue()).toEqual(['a', 'b']);
});

test('sequence rejects a sequence not matching its parsers', () => {
    const parse = p.build(p.sequence([p.char('a'), p.char('b')]));

    const result = parse('acc');

    expect(result.valid).toBe(false);
    expect(result.position).toBe(0);
    expect(result.getValue()).toEqual([]);
});

test('sequence rejects a sequence too short its parsers', () => {
    const parse = p.build(p.sequence([p.char('a'), p.char('b')]));

    const result = parse('a');

    expect(result.valid).toBe(false);
    expect(result.position).toBe(0);
    expect(result.getValue()).toEqual([]);
});
