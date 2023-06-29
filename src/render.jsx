import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { addPost, updateNewPostText } from "./redux/state.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>
  );
};

// to delete. Just a test
