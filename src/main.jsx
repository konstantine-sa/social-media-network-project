import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

let posts = [
  { id: 1, message: "This is my first post here" },
  { id: 2, message: "I like this social media!" },
  { id: 3, message: "Wish some more functionality" },
  { id: 4, message: "Hey, anybody here?" },
];

let dialogsData = [
  { id: 1, name: "Lina" },
  { id: 2, name: "Marcus" },
  { id: 3, name: "Lucas" },
  { id: 4, name: "Andrew" },
  { id: 5, name: "Andrew" },
];

let messagesData = [
  { id: 1, message: "Hello, man!" },
  { id: 2, message: "Whats up, buddy?" },
  { id: 3, message: "Why dont you respond?" },
  { id: 4, message: "Please call me!" },
  { id: 5, message: "Hey, Please call me!!!!!!!!!!!" },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);
