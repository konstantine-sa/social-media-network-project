import React from "react";
import classNames from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((mess) => (
    <Post message={mess.message} key={mess.id} />
  ));

  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={classNames.user__posts}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
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
