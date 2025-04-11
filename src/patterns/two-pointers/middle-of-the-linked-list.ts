/**
 * Description: Find the middle of a linked list using the two-pointer technique.
 * - Given the head of a singly linked list, return the middle node of the linked list.
 * - If there are two middle nodes, return the second middle node.
 * Example 1:
 * - Input: head = [1,2,3,4,5]
 * - Output: [3,4,5]
 * - Explanation: The middle node of the list is node 3.
 * Example 2:
 * - Input: head = [1,2,3,4,5,6]
 * - Output: [4,5,6]
 * - Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
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
