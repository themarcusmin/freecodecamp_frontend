import React, { Component } from "react";
import axios from "axios";

class QuoteBox extends Component {
  state = {
    content: [],
    color: ""
  };
  colors = [
    "tomato",
    "aqua",
    "slateblue",
    "steelblue",
    "brown",
    "burlywood",
    "grey",
    "seagreen",
    "black",
    "firebrick",
    "plum",
    "khaki"
  ];
  fetchQuote() {
    axios.get("https://thesimpsonsquoteapi.glitch.me/quotes").then(res => {
      //console.log(res.data[0]);
      this.setState({
        content: res.data[0],
        color: this.colors[Math.floor(Math.random() * this.colors.length)]
      });
      this.props.updateBgColor(this.state.color);
    });
  }
  componentDidMount() {
    this.fetchQuote();
  }
  handleQuote = e => {
    e.preventDefault();
    this.fetchQuote();
  };
  render() {
    return (
      <div className="container quote-box">
        <div className="row">
          <div className="col">
            <div className="card white">
              <div className="card-content black-text">
                <h4>
                  <span>'' </span>
                  {this.state.content.quote}
                </h4>
                <h5>
                  <span>- </span>
                  {this.state.content.character}
                </h5>
              </div>
              <div className="card-action">
                <a
                  className="waves-effect waves-light btn-large"
                  style={{ backgroundColor: this.state.color }}
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  className="waves-effect waves-light btn-large"
                  style={{ backgroundColor: this.state.color }}
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  className="waves-effect waves-light btn-large"
                  style={{ backgroundColor: this.state.color }}
                  onClick={this.handleQuote}
                >
                  New Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
