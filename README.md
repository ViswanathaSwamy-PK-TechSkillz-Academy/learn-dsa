# Learn Data Structures and Algorithms

I am learning Data Structures and Algorithms from different Websites, Books, and Video courses

## Time Complexity

### **Big Omega (Ω)**

**Definition**: Big Omega notation represents the **lower bound** on an algorithm's time complexity. It indicates the least amount of time required (best-case scenario).

**Mathematical Representation**: If `f(n)` is the running time of an algorithm, we say that `f(n)` is `Ω(g(n))` if there exist positive constants `C` and `n₀` such that `0 ≤ Cg(n) ≤ f(n)` for all `n ≥ n₀`.

**Example**: Binary search has a best-case time complexity of `Ω(log n)` because it efficiently narrows down the search space by half with each iteration.

**JavaScript Example**:

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

---

![Polindrome Two Pointer in Go](documentation/images/polindrome_go.PNG)

![Polindrome Two Pointer in JavaScript](documentation/images/polindrome_js.PNG)
