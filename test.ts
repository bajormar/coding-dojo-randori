import {toRoman} from './main';

describe('Calculate', () => {
    it('should return null', () => {
        expect(toRoman(1)).toBe('I');
        expect(toRoman(2)).toBe('II');
        expect(toRoman(3)).toBe('III');
        expect(toRoman(4)).toBe('IV');
        expect(toRoman(5)).toBe('V');
        expect(toRoman(6)).toBe('VI');
        expect(toRoman(7)).toBe('VII');
        expect(toRoman(8)).toBe('VIII');
        expect(toRoman(9)).toBe('IX');
        expect(toRoman(10)).toBe('X');
        expect(toRoman(585)).toBe('DLXXXV');
        expect(toRoman(999)).toBe('CMXCIX');
    })
})
