import { Component } from "react";
import React from "react";

class Input extends Component {
  state = {
    text: "",
  };
  render() {
    return (
      <div className="textInput">
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input
            onChange={(e) => this.onChange(e)}
            type="text"
            placeholder="Enter your message and press ENTER"
            autoFocus={true}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
  onChange(e) {
    this.setState({ text: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSendMessage(this.state.text);
  }
}

export default Input;
