import * as p from '../index';

test('it strips the whitespaces', () => {
    const parse = p.build(p.ws(p.tag('foo')));

    const result = parse('  foo  ');

    expect(result.valid).toBe(true);
    expect(result.position).toBe(7);
    expect(result.getResult()).toEqual('foo');
});
