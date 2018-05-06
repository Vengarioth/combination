import * as p from '../../src';

test('many0 and doParse work together', () => {
    const parse = p.build(p.many0(p.doParse({
        a: p.char('a'),
        b: p.char('b'),
    }, (result) => {
        return {
            a: result.a.getResult(),
            b: result.b.getResult(),
        }
    })));

    const result = parse('ababab');

    expect(result.valid).toBe(true);
    expect(result.getResult()).toEqual([ { a: 'a', b: 'b'}, { a: 'a', b: 'b'}, { a: 'a', b: 'b'} ]);
});

test('many0 and doParse work together on empty input', () => {
    const parse = p.build(p.many0(p.doParse({
        a: p.char('a'),
        b: p.char('b'),
    }, (result) => {
        return {
            a: result.a.getResult(),
            b: result.b.getResult(),
        }
    })));

    const result = parse('');

    expect(result.valid).toBe(true);
    expect(result.getResult()).toEqual([]);
});

test('doParse gives back the correct position', () => {
    const doParse = p.doParse({
        a: p.char('a'),
        b: p.char('b'),
    }, result => result.a.getResult() + result.b.getResult());

    const parse = p.build(p.doParse({
        a: p.char('c'),
        b: doParse,
        c: p.char('c'),
    }, result => result.b));

    const result = parse('cabc').getResult();

    expect(result.valid).toBe(true);
    expect(result.start).toBe(1);
    expect(result.position).toBe(3);
});
