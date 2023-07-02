import { combineReducers, createStore } from "redux";
import messagesPageReducer from "./reducers/messagesPage-reducer";
import myPageReducer from "./reducers/myPage-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

let reducers = combineReducers({
  myPage: myPageReducer,
  messagesPage: messagesPageReducer,
  sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;
