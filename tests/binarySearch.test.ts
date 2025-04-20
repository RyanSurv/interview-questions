import { binary_search } from '../src/binarySearch';

describe('binary_search', () => {
    const arr = [1, 4, 13, 21, 42, 69, 99, 198, 420];

    test('should return true for existing elements', () => {
        expect(binary_search(arr, 1)).toBe(true);
        expect(binary_search(arr, 99)).toBe(true);
    });

    test('should return false for non-existing elements', () => {
        expect(binary_search(arr, 1000)).toBe(false);
        expect(binary_search(arr, 199)).toBe(false);
    });
});