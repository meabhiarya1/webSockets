import React from "react";
import Styles from "./message.module.css";

const Message = () => {
  return (
    <div className={Styles.chatCard}>
      <div className={Styles.chatHeader}>
        <h2 className={Styles.h2}>ChatGPT</h2>
      </div>
      <div className={Styles.chatBody}>
        <div className={`${Styles.message} ${Styles.incoming}`}>
          <p>Hello, how can I assist you today?</p>
        </div>
        <div className={`${Styles.message} ${Styles.outgoing}`}>
          <p>I have a question about your services.</p>
        </div>
        <div className={`${Styles.message} ${Styles.incoming}`}>
          <p>Sure, I'm here to help. What would you like to know?</p>
        </div>
      </div>
      <div className={Styles.chatFooter}>
        <input
          className={Styles.chatInput}
          placeholder="Type your message"
          type="text"
        />
        <button className={Styles.sendButton}>Send</button>
      </div>
    </div>
  );
};

export default Message;
