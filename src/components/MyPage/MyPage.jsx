import classNames from "./MyPage.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const MyPage = () => {
  return (
    <section>
      <ProfileInfo />
      <MyPosts />
    </section>
  );
};

export default MyPage;
