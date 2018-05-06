import { parse } from '../../examples/json';

test('test json parser', () => {
    const result = parse(`{
        "someKey": {
            "foo": "someValue"
        }
    }`);

    expect(result.getResult()).toEqual({
        someKey: {
            foo: 'someValue'
        }
    });
});
