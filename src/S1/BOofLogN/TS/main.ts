import { binarySearch } from './binarySearchHelper';

const testArray: number[] = [3, 6, 9, 12, 15, 18, 21, 24];

function performBinarySearch(array: number[], target: number): void {
    const result = binarySearch(array, target);

    if (result !== -1) {
        console.log(`Binary Search: Found target ${target} at index ${result}`);
    } else {
        console.log(`Binary Search: Target ${target} not found in the array.`);
    }
}

// Test with target = 9
performBinarySearch(testArray, 9);

// Test with target = 99
performBinarySearch(testArray, 99);
