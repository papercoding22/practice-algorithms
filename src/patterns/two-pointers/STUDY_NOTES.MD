# Two Pointers Pattern

The Two Pointers pattern is a common and efficient technique used to solve problems involving arrays, strings, or linked lists. It involves using two pointers to iterate through the data structure, often to find a pair of elements that satisfy a certain condition, or to process elements in a specific order.

By using two pointers instead of nested loops, we can often reduce the time complexity of a solution from O(n^2) to O(n).

## Key Recognition Cues

- The problem involves finding pairs, subarrays, or subsequences that meet a certain criteria within a sorted or unsorted array/list.
- You need to compare elements from both ends of a data structure or from different positions simultaneously.
- The problem can be solved by processing the data structure from two different "directions" (e.g., start and end, or with a slow and fast runner).

## Common Variations

### 1. Opposite-End Pointers (Left and Right)

This is the most common variation. Two pointers start at opposite ends of a sorted array and move towards each other.

- **Concept:** One pointer starts at the beginning (`left`) and the other at the end (`right`). They move inwards until they meet or cross.
- **When to use:**
  - When working with a **sorted** array.
  - When searching for a pair of elements that sum up to a target value.
  - When looking for a combination of elements from opposite ends of the array that satisfy a condition.
- **Examples:**
  - **3Sum:** After sorting, for each element `x`, find a pair `(y, z)` that sums to `-x` using opposite-end pointers.
  - **Container with Most Water:** Find the pair of lines that can hold the most water. The pointers represent the two lines, and you move the pointer of the shorter line inwards.
  - **Boats to Save People:** After sorting people by weight, pair the lightest person with the heaviest to optimize boat usage.
  - **Number of Distinct Averages:** After sorting, repeatedly take the min and max elements (using left and right pointers) to calculate averages.
  - **Valid Triangle Number:** After sorting, for each potential longest side `c`, find pairs of `a` and `b` such that `a + b > c`.

### 2. Fast and Slow Pointers

This variation is commonly used in linked lists but can also be applied to arrays.

- **Concept:** Two pointers start at the same position, but one (`fast`) moves at a faster pace than the other (`slow`). Typically, the `fast` pointer moves two steps for every one step of the `slow` pointer.
- **When to use:**
  - Detecting cycles in a linked list (Floyd's Tortoise and Hare algorithm).
  - Finding the middle of a linked list.
  - Problems where you need to relate an element to another element `k` positions away.
- **Examples:**
  - **Middle of the Linked List:** When the `fast` pointer reaches the end of the list, the `slow` pointer will be at the middle.
  - **Will Runners Meet:** Simulates two runners on a track. This is a classic cycle detection problem.

### 3. Same-Direction Pointers (Sliding Window variation)

Two pointers start at or near the same location and move in the same direction. One pointer (`fast` or `right`) expands a "window" or explores ahead, while the other (`slow` or `left`) marks the beginning of a subarray or a position for the next valid element.

- **Concept:** A `slow` pointer tracks a position, and a `fast` pointer iterates through the data. When the `fast` pointer finds an element of interest, the `slow` pointer's position is updated or the element at the `slow` pointer's position is modified.
- **When to use:**
  - In-place modifications of an array.
  - Removing duplicates or specific elements.
  - Problems where you need to process a "window" or a contiguous subarray.
- **Examples:**
  - **Move Zeroes:** The `slow` pointer keeps track of where the next non-zero element should be placed, while the `fast` pointer scans the array.
  - **Remove Element:** Similar to `Move Zeroes`, the `slow` pointer tracks the position for the next element that is not the one to be removed.
