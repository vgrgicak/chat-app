import { useState } from "react";
import React from "react";

function Input(props) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
    props.onSendMessage(text);
  }
  return (
    <div className="textInput">
      <form onSubmit={onSubmit}>
        <input
          value={text}
          onChange={onChange}
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
