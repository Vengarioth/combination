import * as p from '../index';

test('many1 matches until it hits an invalid character', () => {
    const parse = p.build(p.many1(p.char('a')));

    const result = parse('aaaaab');

    expect(result.valid).toBe(true);
    expect(result.position).toBe(5);
    expect(result.getResult()).toEqual(['a', 'a', 'a', 'a', 'a']);
});

test('many1 matches until it hits the end', () => {
    const parse = p.build(p.many1(p.char('a')));

    const result = parse('aaaa');

    expect(result.valid).toBe(true);
    expect(result.position).toBe(4);
    expect(result.getResult()).toEqual(['a', 'a', 'a', 'a']);
});

test('many1 needs at least one match', () => {
    const parse = p.build(p.many1(p.char('a')));

    const result = parse('bbccaa');

    expect(result.valid).toBe(false);
    expect(result.position).toBe(0);
});

test('many1 does not match an empty list', () => {
    const parse = p.build(p.many1(p.char('a')));

    const result = parse('');

    expect(result.valid).toBe(false);
    expect(result.position).toBe(0);
});
