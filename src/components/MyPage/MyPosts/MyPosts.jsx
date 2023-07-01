import React from "react";
import classNames from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";

const MyPosts = (props) => {
  let postsElements = props.posts.map((mess) => (
    <Post message={mess.message} key={mess.id} likesCount={mess.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    console.log(props);
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={classNames.user__posts}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          // value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div />
      <div className={classNames.user__posts_new}>New Post</div>
      <div className={classNames.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
