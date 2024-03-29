import classNames from "./MyPage.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const MyPage = (props) => {
  console.log(props);
  return (
    <section>
      <ProfileInfo />
      <MyPostsContainer />
    </section>
  );
};

export default MyPage;
