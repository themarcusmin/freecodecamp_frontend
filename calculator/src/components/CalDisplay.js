import React, { Component } from "react";

class CalDisplay extends Component {
  render() {
    return (
      <div className="screen">
        <div className="upper">{this.props.upper}</div>
        <div className="lower">{this.props.lower}</div>
      </div>
    );
  }
}

export default CalDisplay;
