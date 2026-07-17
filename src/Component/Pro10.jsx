import { useState } from "react";

class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

function Pro10() {

    const [books, setBooks] = useState([]);

    // Create 5 Book Objects
    const bookData = [
        new Book("JavaScript", "John", 500),
        new Book("React JS", "David", 700),
        new Book("Python", "James", 650),
        new Book("Java", "Robert", 800),
        new Book("C++", "Thomas", 550)
    ];

    // Promise (3 seconds)
    const fetchBooks = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(bookData);
            }, 3000);
        });
    };

    // Async / Await
    const loadBooks = async () => {
        const data = await fetchBooks();
        setBooks(data);
    };

    // Arrow Function to Calculate Total Price
    const totalPrice = books.reduce((total, book) => total + book.price, 0);

    return (
        <div>
            <h1>10. Library Management System</h1>

            <button onClick={loadBooks}>
                Load Books
            </button>

            <br /><br />

            {
                books.map((book, index) => {

                    // Destructuring
                    const { title, author, price } = book;

                    return (
                        <div key={index}>
                            <h3>Book {index + 1}</h3>

                            <p>Title : {title}</p>
                            <p>Author : {author}</p>
                            <p>Price : ₹{price}</p>

                            <hr />
                        </div>
                    );
                })
            }

            {
                books.length > 0 && (
                    <h2>Total Price : ₹{totalPrice}</h2>
                )
            }

        </div>
    );
}

export default Pro10;