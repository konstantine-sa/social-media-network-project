import classNames from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classNames.user__posts}>
      <div />
      <div className={classNames.user__posts_new}>New Post</div>
      <div className={classNames.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
