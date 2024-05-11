# Learn Data Structures and Algorithms

I am learning Data Structures and Algorithms from different Websites, Books, and Video courses

## 1. Algorithmic Complexity Notations

### 1.1. Big Omega (Ω)

> 1. **Definition:** Big Omega notation represents the lower bound on the running time or space complexity of an algorithm.
> 1. **Purpose:** It provides information about the best-case performance of an algorithm.
> 1. **Example:** If we say an algorithm has a time complexity of Ω(n), it means that the best-case running time grows linearly with the input size.
> 1. **Use Case:** Big Omega is useful for understanding lower bounds and best-case scenarios.

### 1.2. Big Theta (Θ)

> 1. **Definition:** Big Theta notation represents both the upper and lower bounds on the running time or space complexity of an algorithm.
> 1. **Purpose:** It describes the tightest possible bound for an algorithm’s performance.
> 1. **Example:** If we say an algorithm has a time complexity of Θ(n), it means that both the best-case and worst-case running times grow linearly with the input size.
> 1. **Use Case:** Big Theta is commonly used when we want to express a precise estimate of an algorithm’s behavior.

### 1.3. Big O (O)

> 1. **Definition:** Big O notation represents the upper bound on the running time or space complexity of an algorithm.
> 1. **Purpose:** It helps us understand how an algorithm’s performance scales as the input size grows.
> 1. **Example:** If we say an algorithm has a time complexity of O(n), it means that the worst-case running time grows linearly with the input size.
> 1. **Use Case:** Big O is often used to analyze the worst-case scenario.

## 2. Big O Basic Concepts

### 2.1. O(1): Constant Time

> 1. **Description:** Algorithms with constant time complexity execute in a fixed amount of time, regardless of the input size. They are highly efficient.
> 1. **Example:** Accessing an array element by its index.

**Sample codes:**

```python
def access_element(arr, index):
    return arr[index]
```

```JavaScript
function accessElement(arr, index) {
    return arr[index];
}
```

### 2.2. O(log n): Logarithmic Time

> 1. **Description:** Logarithmic time complexity indicates that the
divides the problem into smaller parts in each step (divide and conquer). It's efficient for large datasets.
> 1. **Example:** Binary search.

**Pseudocode:**

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

### 2.3. O(n): Linear Time

- **Description:** Linear time complexity means the running time grows linearly with the input size. It's proportional to the data set size.
- **Example:** Looping through an array.
- **Pseudocode:**

     ```python
     def linear_search(arr, target):
         for i in range(len(arr)):
             if arr[i] == target:
                 return i
         return -1
     ```

### 2.4. O(n log n): Linearithmic Time

- **Description:** Linearithmic time complexity combines linear and logarithmic behavior. It's common in sorting and searching algorithms.
- **Example:** Merge sort, quick sort.
- **Pseudocode (Merge Sort):**

     ```python
     def merge_sort(arr):
         if len(arr) <= 1:
             return arr
         mid = len(arr) // 2
         left_half = merge_sort(arr[:mid])
         right_half = merge_sort(arr[mid:])
         return merge(left_half, right_half)

     def merge(left, right):
         result = []
         i, j = 0, 0
         while i < len(left) and j < len(right):
             if left[i] < right[j]:
                 result.append(left[i])
                 i += 1
             else:
                 result.append(right[j])
                 j += 1
         result.extend(left[i:])
         result.extend(right[j:])
         return result
     ```

### 2.5. O(n^2): Polynomial Time

- **Description:** Polynomial time complexity involves nested loops for each power of n. It's less efficient for large datasets.
- **Example:** Bubble sort (O(n^2)).
- **Pseudocode:**

     ```python
     def bubble_sort(arr):
         n = len(arr)
         for i in range(n):
             for j in range(n - i - 1):
                 if arr[j] > arr[j + 1]:
                     arr[j], arr[j + 1] = arr[j + 1], arr[j]
     ```

Remember that understanding these complexities helps in choosing the right algorithm for specific tasks. Feel free to ask if you need further clarification or additional examples! 🌟📊

Source: Conversation with Bing, 5/11/2024
(1) github.com. <https://github.com/jaydeepdeka/DataStructures-Algo/tree/c068472913656af615dbfd51823d2d0bce9b9ed5/sorting.py>.
(2) github.com. <https://github.com/michaelmcguiness/stanford-algorithms-specialization/tree/ff3cf563f46b79ac96f2ee97410ae40aeaf33eb4/divide-and-conquer%2Fmerge_sort.py>.
(3) github.com. <https://github.com/gcy1998/sample-code/tree/29539d4f45013bcaf84d1d9962fc506b3089d073/Python%2FAlgorithms%2Fsort_compare.py>.
(4) github.com. <https://github.com/xiongdawei/Sorting-Algorithm/tree/95a92f85ca27acea38e869407bed153df564fd3c/work056.py>.
(5) github.com. <https://github.com/juso40/sorting-algorithms/tree/0f7db0940c2fc013a107d158ba0ef285f1c4125d/Python%2FBubblesort.py>.

---

![Polindrome Two Pointer in Go](documentation/images/polindrome_go.PNG)

![Polindrome Two Pointer in JavaScript](documentation/images/polindrome_js.PNG)

---
