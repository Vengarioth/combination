import * as p from '../index';

test('named', () => {
    const parse = p.build(p.named({
        firstBracer: p.tag('{'),
        secondBracer: p.tag('}'),
    }, (result) => result));

    const result = parse('{}').getResult();

    expect(result).toEqual({ firstBracer: '{', secondBracer: '}' });
});
