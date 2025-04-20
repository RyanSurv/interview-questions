# Interview Questions

This project contains templates to implement various algorithms and data structures.

## Features

- **Linear Search**: A simple search algorithm that checks each element in a list.
- **Binary Search**: A fast search algorithm for sorted arrays.
- **Binary Tree Comparison**: Compares two binary trees for structural and value equality.
- **Quick Sort**: An efficient sorting algorithm using the divide-and-conquer approach.

## Project Structure

```
interview-questions/
├── src/
│   ├── linearSearch.ts         # Linear search implementation
│   ├── binarySearch.ts         # Binary search implementation
│   ├── binaryTreeComparison.ts # Binary tree comparison implementation
│   ├── quickSort.ts            # Quick sort implementation
├── tests/
│   ├── linearSearch.test.ts         # Tests for linear search
│   ├── binarySearch.test.ts         # Tests for binary search
│   ├── binaryTreeComparison.test.ts # Tests for binary tree comparison
│   ├── quickSort.test.ts            # Tests for quick sort
├── jest.config.js              # Jest configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies and scripts
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RyanSurv/interview-questions.git
   cd interview-questions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

- **Run Specific Test**: Run a specific test file.
  ```bash
  npm run test:<test-name>
  ```

## Usage

- Implement algorithms in the `src` directory.
- Run tests to verify the correctness of your implementations.

## Dependencies

- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [ts-jest](https://kulshekhar.github.io/ts-jest/)