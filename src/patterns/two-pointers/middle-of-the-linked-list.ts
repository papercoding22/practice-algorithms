/**
 * Link: https://leetcode.com/problems/middle-of-the-linked-list/
 * Pattern: Two Pointers (Fast & Slow)
 * Recognition:
 * - Need to find middle element in a linked list without knowing length
 * - Cannot use index-based access (linked list traversal only)
 * - Classic use case for slow/fast pointer technique (tortoise and hare)
 * Description: Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes (even length list), return the second middle node.
 * Example:
 * - Input: head = [1,2,3,4,5] => Output: [3,4,5]
 *   Explanation: The middle node is node 3 (position 2 in 0-indexed)
 * - Input: head = [1,2,3,4,5,6] => Output: [4,5,6]
 *   Explanation: Two middle nodes (3 and 4), return the second one (node 4)
 * Approach: Use two pointers - slow moves one step at a time, fast moves two steps.
 * When fast reaches the end, slow will be at the middle. This works because fast travels
 * twice as fast, so when fast reaches end, slow is at halfway point.
 * Time complexity: O(n) - single traversal through the list
 * Space complexity: O(1) - only using two pointers
 */

import { ListNode } from '../../utils/linked-list';

function middleNode(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    slow = slow?.next || null;
    fast = fast.next.next;
  }
  return slow;
}

export { middleNode };
