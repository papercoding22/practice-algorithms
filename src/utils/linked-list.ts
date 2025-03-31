class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function createLinkedList(arr: number[]): ListNode | null {
  // Check if the array is empty
  if (arr.length === 0) {
    return null;
  }
  // Create the head node
  const head = new ListNode(arr[0]);
  let current = head;
  // Iterate through the array and create nodes
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  // Return the head of the linked list
  return head;
}

export { ListNode, createLinkedList };
