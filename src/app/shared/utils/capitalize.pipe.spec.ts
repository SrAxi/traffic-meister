import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
    let pipe: CapitalizePipe;

    beforeEach(() => {
        pipe = new CapitalizePipe();
    });

    it('transforms "abc" to "Abc"', () => {
        expect(pipe.transform('abc')).toBe('Abc');
    });
});
