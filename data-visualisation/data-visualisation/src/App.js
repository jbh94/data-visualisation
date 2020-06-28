import React from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
