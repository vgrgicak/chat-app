import { useState } from "react";
import React from "react";
import Props from "prop-types";

function Input() {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    Props.onSendMessage(this.state.text);
  }
  return (
    <div className="textInput">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          value={text}
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="Enter your message and press ENTER"
          autoFocus={true}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Input;
