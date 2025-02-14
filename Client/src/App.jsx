import { useState } from "react";
import "./App.css";
import Message from "./comp/message";

function App() {
  return (
    <>
      <div>
        {/* <h1>React Chat App</h1> */}
        <Message />
      </div>
    </>
  );
}

export default App;
