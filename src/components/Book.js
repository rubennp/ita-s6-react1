import React, { Component } from "react";

class Book extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.book.title}</h1>
                <p>{this.props.book.author}</p>
            </div>
        )
    }
};

export default Book;