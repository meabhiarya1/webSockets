import React, { useState, useEffect } from "react";
import Styles from "./message.module.css";

const Message = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([
    { text: "Hello, how can I assist you today?", type: "incoming" },
  ]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Connect to WebSocket server
    const ws = new WebSocket("ws://localhost:8080");
    ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    ws.onmessage = (event) => {
      console.log("Message from server:", event.data);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: event.data, type: "incoming" },
      ]);
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    setSocket(ws);

    return () => {
      ws.close(); // Cleanup on unmount
    };
  }, []);

  const sendMessage = () => {
    if (inputValue.trim() && socket) {  
      socket.send(inputValue);
      setMessages([...messages, { text: inputValue, type: "outgoing" }]);
      setInputValue(""); // Clear input
    }
  };

  return (
    <div className={Styles.chatCard}>
      <div className={Styles.chatHeader}>
        <h2 className={Styles.h2}>Chat App</h2>
      </div>
      <div className={Styles.chatBody}>
        {messages.map((msg, index) => (
          <div key={index} className={`${Styles.message} ${Styles[msg.type]}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className={Styles.chatFooter}>
        <input
          className={Styles.chatInput}
          placeholder="Type your message"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        //   onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className={Styles.sendButton} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Message;
