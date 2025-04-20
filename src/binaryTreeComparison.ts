type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

export function binary_tree_comparison(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
}
