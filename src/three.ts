/*
Given the roots of two binary trees, a and b, write a function to determine if the two trees are identical.
Two binary trees are considered identical if they have the same structure and all corresponding nodes have the same value.

*** EXAMPLE 1: ***
Input:
a = [1, 2, 3], b = [1, 2, 3]
Output:
true

Explanation:
Both trees have the same structure and node values:
    1          1
   / \        / \
  2   3      2   3

*** EXAMPLE 2: ***
Input:
a = [1, 2], b = [1, null, 2]
Output:
false

Explanation:
The trees have different structures:
    1          1
   /            \
  2              2
*/

type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

export function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
}
