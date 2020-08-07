import React, { Component } from "react";
import CalDisplay from "./CalDisplay";
import CalButtons from "./CalButtons";
// If a numer is clicked, three options >>> previous can be 0/AC, sign or number
// If a sign is clicked, three options >>> previous can be 0/AC, sign or number
// If an equal is clicked, three options >>> AC to remove memory, handleSign with answers, handleNum with new input
// After decimal is clicked, click AC to reset, click sign to reset, not apply next decimal click, click equal to reset

class CalFrame extends Component {
  state = {
    operation: "",
    lastClick: 0,
    equalClicked: false,
    decimalClicked: false
  };
  num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  sign = ["/", "+", "x", "*", "-"];
  isSign = val => {
    return this.sign.includes(val) ? true : false;
  };
  isNumber = val => {
    return this.num.includes(val) ? true : false;
  };
  handleAC = () => {
    this.setState({
      operation: "",
      lastClick: 0,
      equalClicked: false,
      decimalClicked: false
    });
  };
  // previous is 0/AC || previous is sign || previous is number
  handleNum = val => {
    console.log("num function");
    console.log(val);
    if (this.state.lastClick === 0 || this.state.equalClicked === true) {
      this.setState({
        operation: val,
        lastClick: val,
        equalClicked: false
      });
    } else {
      this.setState({
        operation: this.state.operation + val,
        lastClick: this.isSign(this.state.lastClick)
          ? val
          : this.state.lastClick + val
      });
    }
  };
  // Sign >>> 3 options >>> previous is 0/None || previous is sign || previous is number
  handleSign = val => {
    // default display
    this.setState({
      lastClick: val === "*" ? "x" : val,
      decimalClicked: false
    });
    if (this.state.equalClicked === true) {
      this.setState({
        operation: this.state.lastClick + val,
        equalClicked: false
      });
    } else if (this.state.lastClick === 0) {
      this.setState({
        operation: val
      });
    } else if (this.isSign(this.state.lastClick)) {
      // catch three consecutive signs to reset
      if (this.isSign(this.state.operation.slice(-2, -1))) {
        console.log("test1");
        this.setState({
          operation: this.state.operation.slice(0, -2) + val
        });
      } else {
        // +- is +-, /- is / is, x- is x-, rest is replacement
        console.log("test2");
        this.setState({
          operation:
            val === "-" && ["/", "x", "+"].includes(this.state.lastClick)
              ? this.state.operation + val
              : this.state.operation.slice(0, -1) +
                (this.state.operation.slice(-1) === "*" ? "*" : val)
        });
      }
    } else {
      console.log("test3");
      this.setState({
        operation: this.state.operation + val
      });
    }
  };
  handleEqual = () => {
    try {
      var answer = eval(this.state.operation);
      this.setState({
        operation: this.state.operation + "=" + answer,
        lastClick: answer,
        equalClicked: true,
        decimalClicked: false
      });
    } catch (err) {
      console.log(err);
    }
  };
  handleDecimal = val => {
    if (this.state.decimalClicked === false) {
      this.setState({
        operation: this.state.operation + val,
        lastClick: this.state.lastClick + val,
        decimalClicked: true
      });
    }
  };
  handleClick = e => {
    if (e.target.value === "AC") {
      this.handleAC();
    } else if (this.isNumber(e.target.value)) {
      this.handleNum(e.target.value);
    } else if (this.isSign(e.target.value)) {
      this.handleSign(e.target.value);
    } else if (e.target.value === "=") {
      this.handleEqual();
    } else {
      this.handleDecimal(e.target.value);
    }
  };
  render() {
    return (
      <div className="position_frame">
        <div className="frame">
          <CalDisplay
            upper={this.state.operation}
            lower={this.state.lastClick}
          />
          <CalButtons onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default CalFrame;
