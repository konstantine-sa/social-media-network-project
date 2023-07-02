import React from "react";
import classNames from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // console.log(props);

  let postsElements = props.post.map((mess) => (
    <Post message={mess.message} key={mess.id} likesCount={mess.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classNames.user__posts}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div />
      <div className={classNames.user__posts_new}>New Post</div>
      <div className={classNames.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
