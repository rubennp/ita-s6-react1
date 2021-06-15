import { Component } from "react";

// import "../assets/css/App.css";
import Book from "./Book";

class App extends Component {
  render() {
    return (
      <div>
        <Book frase="Viatge a la lluna" />
      </div>
    );
  }
}

export default App;
