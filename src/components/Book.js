import { Component } from "react";

class Book extends Component {
    render() {
        return (
            <div>
                <p>{this.props.frase}</p>
            </div>
        )
    }
};

export default Book;