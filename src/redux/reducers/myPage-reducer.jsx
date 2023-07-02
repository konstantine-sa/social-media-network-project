/* eslint-disable no-case-declarations */
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "This is my first post here", likesCount: 2 },
    { id: 2, message: "I like this social media!", likesCount: 1 },
    { id: 3, message: "Wish some more functionality", likesCount: 14 },
    { id: 4, message: "Hey, anybody here?", likesCount: 1 },
  ],

  newPostText: "some new text from state",
};

const myPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default myPageReducer;
