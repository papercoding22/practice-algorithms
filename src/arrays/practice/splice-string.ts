/**
 * A simple program how to use splice method to remove elements from an array
 */

function spliceString() {
  const str = 'Hello, World!';
  const arr = str.split('');
  arr.splice(0, 1);
  console.log(arr); // [ 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!' ]
  const newStr = arr.join('');
  console.log(newStr); // ello, World!
}

export { spliceString };
