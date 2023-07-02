import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/redux-store";
import App from "./App.jsx";
import "./index.css";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(StoreContext);

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
