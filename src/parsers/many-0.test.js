import * as p from '../index';

test('many0 matches until it hits an invalid character', () => {
    const parse = p.build(p.many0(p.char('a')));

    const result = parse('aaaaab');

    expect(result.valid).toBe(true);
    expect(result.position).toBe(5);
    expect(result.getResult()).toEqual(['a', 'a', 'a', 'a', 'a']);
});

test('many0 matches until it hits the end', () => {
    const parse = p.build(p.many0(p.char('a')));

    const result = parse('aaaa');

    expect(result.valid).toBe(true);
    expect(result.position).toBe(4);
    expect(result.getResult()).toEqual(['a', 'a', 'a', 'a']);
});

test('many0 matches an empty list', () => {
    const parse = p.build(p.many0(p.char('a')));

    const result = parse('');

    expect(result.valid).toBe(true);
    expect(result.position).toBe(0);
    expect(result.getResult()).toEqual([]);
});
