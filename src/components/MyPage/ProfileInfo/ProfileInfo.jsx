import classNames from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={classNames.profile__wrapper}>
      <img
        className={classNames.background_img}
        src="https://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg"
      ></img>

      <div className={classNames.description__wrapper}> Ava + User profile</div>
    </div>
  );
};

export default ProfileInfo;
