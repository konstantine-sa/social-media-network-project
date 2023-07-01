import messagesPageReducer from "./reducers/messagesPage-reducer";
import myPageReducer from "./reducers/myPage-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

// ====================================STORE==========

let store = {
  _state: {
    myPage: {
      posts: [
        { id: 1, message: "This is my first post here", likesCount: 2 },
        { id: 2, message: "I like this social media!", likesCount: 1 },
        { id: 3, message: "Wish some more functionality", likesCount: 14 },
        { id: 4, message: "Hey, anybody here?", likesCount: 1 },
      ],

      newPostText: "some new text from state",
    },

    messagesPage: {
      messagesData: [
        { id: 1, message: "Hello, man!" },
        { id: 2, message: "Whats up, buddy?" },
        { id: 3, message: "Why dont you respond?" },
        { id: 4, message: "Please call me!" },
        { id: 5, message: "Hey, Please call me!!!!!!!!!!!" },
      ],

      dialogsData: [
        { id: 1, name: "Lina" },
        { id: 2, name: "Marcus" },
        { id: 3, name: "Lucas" },
        { id: 4, name: "Andrew" },
        { id: 5, name: "Andrew" },
      ],

      newMessageBody: "",
    },

    sidebar: {},
  },
  _callSubscriber() {
    console.log("State is changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.myPage = myPageReducer(this._state.myPage, action);
    this._state.messagesPage = messagesPageReducer(
      this._state.messagesPage,
      action
    );
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
