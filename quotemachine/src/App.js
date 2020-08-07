import React, { Component } from "react";
import QuoteBox from "./components/QuoteBox";

class App extends Component {
  state = {
    color: ""
  };
  handleColorChange = color => {
    // console.log(color);
    this.setState({
      color
    });
  };
  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        <QuoteBox updateBgColor={this.handleColorChange} />
      </div>
    );
  }
}

export default App;
