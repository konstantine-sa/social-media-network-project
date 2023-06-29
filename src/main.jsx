import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/state.js";
import App from "./App.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
      />
    </React.StrictMode>
  );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);
