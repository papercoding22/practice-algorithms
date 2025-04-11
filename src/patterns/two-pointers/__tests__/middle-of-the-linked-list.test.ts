import { middleNode } from '../middle-of-the-linked-list';

import { createLinkedList } from '../../../utils/linked-list';

describe('middleNode', () => {
  const testCases = [
    {
      input: [1, 2, 3, 4, 5],
      expected: [3, 4, 5],
    },
    {
      input: [1, 2, 3, 4, 5, 6],
      expected: [4, 5, 6],
    },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`Input: ${input} => Output: ${expected}`, () => {
      const head = createLinkedList(input);
      const result = middleNode(head);
      const resultArray: number[] = [];
      let current = result;
      while (current) {
        resultArray.push(current.value);
        current = current.next;
      }
      expect(resultArray).toEqual(expected);
    });
  });
});
