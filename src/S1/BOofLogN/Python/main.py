from binary_search_helper import binary_search

test_array = [3, 6, 9, 12, 15, 18, 21, 24]


def perform_binary_search(array, target):
    result = binary_search(array, target)

    if result != -1:
        print(f"Binary Search: Found target {target} at index {result}")
    else:
        print(f"Binary Search: Target {target} not found in the array.")


# Test with target = 9
perform_binary_search(test_array, 9)

# Test with target = 99
perform_binary_search(test_array, 99)
