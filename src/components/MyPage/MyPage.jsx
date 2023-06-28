import classNames from "./MyPage.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const MyPage = (props) => {
  // console.log(props);
  return (
    <section>
      <ProfileInfo />
      <MyPosts
        posts={props.posts.posts}
        addPost={props.addPost}
        newPostText={props.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </section>
  );
};

export default MyPage;
