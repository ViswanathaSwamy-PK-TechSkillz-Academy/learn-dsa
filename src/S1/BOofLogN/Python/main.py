def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1


# Example usage:
test_array = [3, 6, 9, 12, 15, 18, 21, 24]
target_value = 9

result = binary_search(test_array, target_value)
if result != -1:
    print(f"Element {target_value} found at index {result}")
else:
    print(f"Element {target_value} not found")
