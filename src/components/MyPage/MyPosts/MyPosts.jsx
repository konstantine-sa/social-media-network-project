import classNames from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((mess) => (
    <Post message={mess.message} key={mess.id} />
  ));

  return (
    <div className={classNames.user__posts}>
      My Post
      <div />
      <div className={classNames.user__posts_new}>New Post</div>
      <div className={classNames.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
