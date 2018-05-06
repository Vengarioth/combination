import * as p from '../src';

const parsers = new p.ParserCollection();
export const parse = p.build(parsers.get('jsonObject'));

parsers.add('jsonString', p.doParse({
    open: p.tag('"'),
    inner: p.many1(p.oneOf('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')),
    close: p.tag('"'),
}, (values) => {
    return values.inner.getResult().join('');
}));

parsers.add('jsonKeyValuePair', p.doParse({
    key: p.ws(parsers.get('jsonString')),
    separator: p.tag(':'),
    value: p.ws(parsers.get('jsonValue')),
}, (values) => {
    return {
        key: values.key.getResult(),
        value: values.value.getResult(),
    };
}));

parsers.add('jsonValue', p.any(
    parsers.get('jsonString'),
    parsers.get('jsonObject')
));

parsers.add('jsonObject', p.doParse({
    open: p.ws(p.tag('{')),
    content: p.many0(parsers.get('jsonKeyValuePair')),
    close: p.ws(p.tag('}')),
}, (values) => {
    const result = {};
    values.content.getResult().forEach(e => {
        result[e.key] = e.value;
    });
    return result;
}));
