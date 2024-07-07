using BOofLogN.Algo;

int[] testArray = [3, 6, 9, 12, 15, 18, 21, 24];

static void PerformBinarySearch(int[] array, int target)
{
    int result = BinarySearchHelper.BinarySearch(array, target);

    if (result != -1)
    {
        Console.WriteLine($"Binary Search: Found target {target} at index {result}");
    }
    else
    {
        Console.WriteLine($"Binary Search: Target {target} not found in the array.");
    }
}

// Test with target = 9
PerformBinarySearch(testArray, 9);

// Test with target = 99
PerformBinarySearch(testArray, 99);
