function moveZerosToEnd(nums) {
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
}

// Test the function
const nums = [0, 1, 0, 3, 12, 0, 8];
console.log("Original array:", nums);

moveZerosToEnd(nums);

console.log("Array after moving zeros to the end:", nums);
