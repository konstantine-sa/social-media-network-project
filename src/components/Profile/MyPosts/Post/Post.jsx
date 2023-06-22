import classNames from "./Post.module.css";

const Post = () => {
  return (
    <div className={classNames.item}>
      <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"></img>
      <p>My awesome text</p>
    </div>
  );
};

export default Post;
