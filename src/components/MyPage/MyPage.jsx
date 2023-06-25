import classNames from "./MyPage.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const MyPage = (props) => {
  return (
    <section>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </section>
  );
};

export default MyPage;
