import classNames from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <section className={classNames.profile}>
      <div className={classNames.profile__background}>
        <img
          className={classNames.profile__background_img}
          src="https://wallpapers.com/images/hd/profile-picture-background-10tprnkqwqif4lyv.jpg"
        ></img>
      </div>

      <div className={classNames.profile__user}>User profile</div>
      <MyPosts />
    </section>
  );
};

export default Profile;
