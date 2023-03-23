import "./App.css";
import Messages from "./Messages";
import React, { useEffect, useState } from "react";
import Sending from "./Sending";
import randomColor from "./Randomizer";
import randomName from "./Randomizer";

function App() {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: randomName,
    color: randomColor,
  });
  const [drone] = useState(
    new window.Scaledrone("UPA03wf54sfo5p8p", {
      data: member,
    })
  );
  useEffect(() => {
    if (typeof drone === "object") {
      if (member.id === undefined) {
        drone.on("open", (error) => {
          if (error) {
            return console.error(error);
          }
          setMember({ ...member, id: drone.clientId });
        });
      }
      const room = drone.subscribe("observable-room");
      room.on("message", (message) => {
        setMessages([...messages, message]);
      });
    }
  }, [drone, member, messages]);
  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };

  return (
    <div className="App">
      <h1 className="Header">Chat App</h1>
      <Messages messages={messages} currentMember={member} />
      <Sending onSendMessage={onSendMessage} />
    </div>
  );
}

export default App;
