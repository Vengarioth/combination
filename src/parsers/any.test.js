import * as p from '../index';

test('any accepts a correct character at the current position', () => {
    const parse = p.build(p.any(p.char('a'), p.char('b')));

    const result = parse('b716');

    expect(result.valid).toBe(true);
    expect(result.position).toBe(1);
    expect(result.getValue()).toEqual(['b']);
});

test('any rejects an incorrect character at the current position', () => {
    const parse = p.build(p.any(p.char('a'), p.char('b')));

    const result = parse('c716');

    expect(result.valid).toBe(false);
    expect(result.position).toBe(0);
    expect(result.getValue()).toEqual([]);
});
