import * as p from '../index';

test('doParse', () => {
    const parse = p.build(p.doParse({
        firstBracer: p.tag('{'),
        secondBracer: p.tag('}'),
    }, (result) => ({
        firstBracer: result.firstBracer.getValue().join(),
        secondBracer: result.secondBracer.getValue().join(),
    })));

    const result = parse('{}').getResult();

    expect(result).toEqual({ firstBracer: '{', secondBracer: '}' });
});
