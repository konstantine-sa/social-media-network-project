import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/redux-store";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
