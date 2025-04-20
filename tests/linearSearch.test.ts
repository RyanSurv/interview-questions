import { linear_search } from '../src/linearSearch';

describe('linear_search', () => {
    const arr = [1, 4, 13, 21, 42, 69, 99, 198, 420];

    test('should return true for existing elements', () => {
        expect(linear_search(arr, 1)).toBe(true);
        expect(linear_search(arr, 99)).toBe(true);
    });

    test('should return false for non-existing elements', () => {
        expect(linear_search(arr, 1000)).toBe(false);
        expect(linear_search(arr, 199)).toBe(false);
    });
});