import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/reducers/myPage-reducer.jsx";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  console.log(props.store);

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      post={state.myPage.posts}
      newPostText={state.myPage.newPostText}
    />
  );
};

export default MyPostsContainer;
