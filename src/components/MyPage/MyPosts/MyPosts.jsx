import classNames from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classNames.user__posts}>
      My Post
      <div />
      <div className={classNames.user__posts_new}>New Post</div>
      <div className={classNames.posts}>
        <Post message="This is my first post here" likesCount="6" />
        <Post message="Here is the second post" />
      </div>
    </div>
  );
};

export default MyPosts;
