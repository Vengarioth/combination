export * from './parser-collection';
export * from './parse-state';
export * from './build';

export * from './parsers/any';
export * from './parsers/char';
export * from './parsers/do-parse';
export * from './parsers/many-0';
export * from './parsers/many-1';
export * from './parsers/one-of';
export * from './parsers/sequence';
export * from './parsers/tag';
export * from './parsers/ws';

export const lazy = (self, s, createParser) => {
    if(!self._parser) {
        self._parser = createParser;
    }

    return self._parser(s);
}
