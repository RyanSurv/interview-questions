import { sort } from '../src/four';

describe('sort', () => {
    test('should sort an array of numbers in ascending order', () => {
        const arr = [42, 1, 13, 99, 21, 69];
        sort(arr);
        expect(arr).toEqual([1, 13, 21, 42, 69, 99]);
    });

    test('should handle an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5];
        sort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle an array sorted in descending order', () => {
        const arr = [5, 4, 3, 2, 1];
        sort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle an array with duplicate values', () => {
        const arr = [4, 2, 4, 1, 3, 2];
        sort(arr);
        expect(arr).toEqual([1, 2, 2, 3, 4, 4]);
    });

    test('should handle an empty array', () => {
        const arr: number[] = [];
        sort(arr);
        expect(arr).toEqual([]);
    });

    test('should handle an array with a single element', () => {
        const arr = [42];
        sort(arr);
        expect(arr).toEqual([42]);
    });
});