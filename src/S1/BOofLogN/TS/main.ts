function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// Example usage:
const testArray: number[] = [3, 6, 9, 12, 15, 18, 21, 24];
const targetValue: number = 9;

const result = binarySearch(testArray, targetValue);
if (result !== -1) {
    console.log(`Element ${targetValue} found at index ${result}`);
} else {
    console.log(`Element ${targetValue} not found`);
}
