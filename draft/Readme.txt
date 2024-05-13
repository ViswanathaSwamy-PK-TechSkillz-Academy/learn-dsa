Certainly! Let's explore some common algorithms along with their time complexities:

1. **Linear Search (Sequential Search):**
   - **Time Complexity:** $$O(n)$$
   - **Description:** In linear search, we iterate through each element in a list or array until we find the target value or reach the end. It is straightforward but not very efficient for large datasets.
   - **Example:** Searching for a specific name in an unsorted phone book.

2. **Binary Search:**
   - **Time Complexity:** $$O(\log n)$$
   - **Description:** Binary search works on a sorted list by repeatedly dividing the search space in half. It quickly narrows down the search to the desired element.
   - **Example:** Finding an item in a sorted list of names.

3. **Bubble Sort:**
   - **Time Complexity:** $$O(n^2)$$
   - **Description:** Bubble sort repeatedly compares adjacent elements and swaps them if they are in the wrong order. It's simple but inefficient for large lists.
   - **Example:** Sorting a deck of cards by repeatedly comparing adjacent cards and swapping them if needed.

4. **Quick Sort:**
   - **Time Complexity:** $$O(n \log n)$$ (average case)
   - **Description:** Quick sort uses a divide-and-conquer approach. It selects a pivot element, partitions the array, and recursively sorts the subarrays.
   - **Example:** Sorting an array of numbers or names.

5. **Merge Sort:**
   - **Time Complexity:** $$O(n \log n)$$
   - **Description:** Merge sort also uses a divide-and-conquer strategy. It divides the array into smaller subarrays, sorts them, and then merges them back together.
   - **Example:** Sorting a large collection of files based on their sizes.

6. **Selection Sort:**
   - **Time Complexity:** $$O(n^2)$$
   - **Description:** Selection sort repeatedly selects the smallest (or largest) element from the unsorted part of the array and places it in the correct position.
   - **Example:** Sorting a hand of playing cards by repeatedly selecting the smallest card.

Remember that the choice of algorithm depends on the problem requirements, input size, and desired efficiency. Each of these algorithms has its strengths and weaknesses, so understanding their complexities helps in making informed decisions. 🌟🔍

Sources:
1. [GeeksforGeeks: Definition, Types, Complexity, and Examples of Algorithm](https://www.geeksforgeeks.org/what-is-an-algorithm-definition-types-complexity-examples/)
2. [Algorithm Examples: 15 Sorting Algorithms](https://blog.algorithmexamples.com/sorting-algorithm/15-sorting-algorithms-unraveling-their-complexity/)
3. [freeCodeCamp.org: Introduction to Time Complexity](https://www.freecodecamp.org/news/time-complexity-of-algorithms/)
4. [Algorithm Examples: Top 13 Sorting Algorithms](https://blog.algorithmexamples.com/sorting-algorithm/top-13-sorting-algorithms-for-complexity-analysis/) ¹²³⁴

Source: Conversation with Bing, 5/11/2024
(1) Definition, Types, Complexity and Examples of Algorithm. https://www.geeksforgeeks.org/what-is-an-algorithm-definition-types-complexity-examples/.
(2) 15 Sorting Algorithms: Unraveling Their Complexity - Algorithm Examples. https://blog.algorithmexamples.com/sorting-algorithm/15-sorting-algorithms-unraveling-their-complexity/.
(3) An Introduction to the Time Complexity of Algorithms - freeCodeCamp.org. https://www.freecodecamp.org/news/time-complexity-of-algorithms/.
(4) Top 13 Sorting Algorithms for Complexity Analysis - Algorithm Examples. https://blog.algorithmexamples.com/sorting-algorithm/top-13-sorting-algorithms-for-complexity-analysis/.
(5) Complete Guide On Complexity Analysis - Data Structure and Algorithms .... https://www.geeksforgeeks.org/complete-guide-on-complexity-analysis/.
(6) en.wikipedia.org. https://en.wikipedia.org/wiki/Algorithm.

<!-- ### 1.2. Example

> 1. Binary search has a best-case time complexity of `Ω(log n)` because it efficiently narrows down the search space by half with each iteration.

### 1.3. JavaScript Example

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Found at index mid
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Not found
}
```

### 2.1. Definition

> 1. Big Theta notation represents the **tightest bound** on an algorithm's time complexity. It combines both the upper and lower bounds.

### 2.2. Example

> 1. Merge sort has a time complexity of `Θ(n log n)` because it consistently performs well in both best and worst cases.

### 2.3. JavaScript Example

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i), right.slice(j));
}
``` -->
