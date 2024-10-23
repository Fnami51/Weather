import { getDay } from './getDay';

describe('getDay', () => {
    it('should return Sunday for "2024-10-20"', () => {
        expect(getDay('2024-10-20')).toBe('Sunday');
    });

    it('should return Monday for "2024-10-21"', () => {
        expect(getDay('2024-10-21')).toBe('Monday');
    });

    it('should return Tuesday for "2024-10-22"', () => {
        expect(getDay('2024-10-22')).toBe('Tuesday');
    });

    it('should return Wednesday for "2024-10-23"', () => {
        expect(getDay('2024-10-23')).toBe('Wednesday');
    });

    it('should return Thursday for "2024-10-24"', () => {
        expect(getDay('2024-10-24')).toBe('Thursday');
    });

    it('should return Friday for "2024-10-25"', () => {
        expect(getDay('2024-10-25')).toBe('Friday');
    });

    it('should return Saturday for "2024-10-26"', () => {
        expect(getDay('2024-10-26')).toBe('Saturday');
    });

    it('should return null for invalid date', () => {
        expect(getDay('invalid-date')).toBeNull();
    });

    it('should return null for an empty string', () => {
        expect(getDay('')).toBeNull();
    });

    it('should return null for non-date strings', () => {
        expect(getDay('random-string')).toBeNull();
    });
});
