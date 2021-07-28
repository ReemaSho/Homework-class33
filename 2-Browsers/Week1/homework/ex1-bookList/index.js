//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
  },
];

function createBookList(books) {
  const booksCollection = document.createElement('ul');
  booksCollection.style.display = 'flex';
  booksCollection.style.listStyle = 'none';
  booksCollection.style.justifyContent = 'space-around';

  for (const book of books) {
    // create p with title
    const createABook = document.createElement('p');
    const bookTitle = document.createTextNode(`${book.title}-${book.author}`);
    createABook.appendChild(bookTitle);
    //create the list item and add p to it
    const bookListItem = document.createElement('li');
    bookListItem.appendChild(createABook);
    //create img  and add it to the list item
    const coverBook = document.createElement('img');
    bookListItem.appendChild(coverBook);

    if (book.title === 'The Design of Everyday Things') {
      coverBook.src = 'assets/the_design_of_everyday_things.jpg';
    } else if (book.title === 'The Most Human Human') {
      coverBook.src = 'assets/the_most_human_human.jpg';
    } else if (book.title === 'The Pragmatic Programmer') {
      coverBook.src = 'assets/the_pragmatic_programmer.jpg';
    }
    // set the background color
    if (book.alreadyRead === true) {
      bookListItem.style.backgroundColor = 'green';
    } else {
      bookListItem.style.backgroundColor = 'red';
    }
    booksCollection.appendChild(bookListItem);
  }
  booksCollection.className = 'books';
  return booksCollection;
}

const books = createBookList(myBooks);

document.getElementById('bookList').appendChild(books);
