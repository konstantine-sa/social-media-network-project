import React from "react";
import ReactDOM from "react-dom/client";
import state from "./redux/state.js";
import App from "./App.jsx";
import "./index.css";
import { addPost, updateNewPostText } from "./redux/state.js";
import { subscribe } from "./redux/state.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

let renderEntireTree = () => {
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

renderEntireTree(state);

subscribe(renderEntireTree);
