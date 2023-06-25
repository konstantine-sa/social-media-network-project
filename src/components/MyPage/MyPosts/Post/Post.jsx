/* eslint-disable react/prop-types */
import classNames from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classNames.item}>
      <img
        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
        className={classNames.item__avatar}
      ></img>
      <p>{props.message}</p>
      <div className={classNames.likes}>
        <img
          src="https://img.icons8.com/material-rounded/24/facebook-like--v1.png"
          className={classNames.likes__thumbup}
        ></img>
        <p>{props.likesCount}</p>
      </div>
    </div>
  );
};

export default Post;
