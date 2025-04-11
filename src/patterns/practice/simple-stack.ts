function simpleStack() {
  const books = ['book1', 'book2', 'book3', 'book4', 'book5'];

  const stack = [];

  stack.push(books[2]);
  stack.push(books[3]);
  stack.push(books[4]);

  // the top book
  console.log(stack[stack.length - 1]); // book5

  // the bottom book
  console.log(stack[0]); // book3
}

export { simpleStack };
