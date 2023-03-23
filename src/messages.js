import React from "react";
function Messages({ messages, currentMember }) {
  function renderMessage(message) {
    const { member, data } = message;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";
    return (
      <li className={className} key={Math.random()}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="Message-content">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{data}</div>
        </div>
      </li>
    );
  }
  return <ul className="Messages-list">{messages.map(renderMessage)}</ul>;
}

export default Messages;
