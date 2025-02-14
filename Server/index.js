import express from "express"; // Import express
import { WebSocketServer } from "ws";

const app = express(); // Create express app

const port = 8080; // Port number

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const wss = new WebSocketServer({ server });
wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log("%s: ", data);
    ws.send(`Hello from server : ${data}`);
  });
});
