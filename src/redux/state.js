// ====================================STORE==========
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.myPage.newPostText,
        likesCount: 0,
      };
      this._state.myPage.posts.push(newPost);
      this._state.myPage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.myPage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

// ===========================ACTION CREATOR==========
export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;
