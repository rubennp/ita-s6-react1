import React, { Component } from "react";

// import "../assets/css/App.css";
import booksData from "../assets/data/books";
import Book from "./Book";

class App extends Component {
  render() {
    const books = booksData.map((book, index) => <Book key={index} book={book} />);
    return (
      <div>
        {books}
      </div>
    );
  }
}

export default App;