using BOofLogN.Algo;

int[] testArray = [3, 6, 9, 12, 15, 18, 21, 24];

int target = 9;
int result = BinarySearchHelper.BinarySearch(testArray, target);

if (result != -1)
{
    WriteLine($"Binary Search: Found target {target} at index {result}");
}
else
{
    WriteLine($"Binary Search: Target {target} not found in the array.");
}
