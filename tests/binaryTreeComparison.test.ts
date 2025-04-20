import { binary_tree_comparison } from '../src/binaryTreeComparison';

type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

describe('binary_tree_comparison', () => {
    test('should return true for identical trees', () => {
        const tree1: BinaryNode<number> = {
            value: 1,
            left: { value: 2, left: null, right: null },
            right: { value: 3, left: null, right: null },
        };

        const tree2: BinaryNode<number> = {
            value: 1,
            left: { value: 2, left: null, right: null },
            right: { value: 3, left: null, right: null },
        };

        expect(binary_tree_comparison(tree1, tree2)).toBe(true);
    });

    test('should return false for trees with different values', () => {
        const tree1: BinaryNode<number> = {
            value: 1,
            left: { value: 2, left: null, right: null },
            right: { value: 3, left: null, right: null },
        };

        const tree2: BinaryNode<number> = {
            value: 1,
            left: { value: 2, left: null, right: null },
            right: { value: 4, left: null, right: null },
        };

        expect(binary_tree_comparison(tree1, tree2)).toBe(false);
    });

    test('should return false for trees with different structures', () => {
        const tree1: BinaryNode<number> = {
            value: 1,
            left: { value: 2, left: null, right: null },
            right: null,
        };

        const tree2: BinaryNode<number> = {
            value: 1,
            left: { value: 2, left: null, right: null },
            right: { value: 3, left: null, right: null },
        };

        expect(binary_tree_comparison(tree1, tree2)).toBe(false);
    });

    test('should return true for two null trees', () => {
        expect(binary_tree_comparison(null, null)).toBe(true);
    });

    test('should return false if one tree is null and the other is not', () => {
        const tree1: BinaryNode<number> = {
            value: 1,
            left: null,
            right: null,
        };

        expect(binary_tree_comparison(tree1, null)).toBe(false);
        expect(binary_tree_comparison(null, tree1)).toBe(false);
    });
});