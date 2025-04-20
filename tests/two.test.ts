import { search } from '../src/two';

describe('search', () => {
    const arr = [1, 4, 13, 21, 42, 69, 99, 198, 420];

    test('should return true for existing elements', () => {
        expect(search(arr, 1)).toBe(true);
        expect(search(arr, 99)).toBe(true);
    });

    test('should return false for non-existing elements', () => {
        expect(search(arr, 1000)).toBe(false);
        expect(search(arr, 199)).toBe(false);
    });
});