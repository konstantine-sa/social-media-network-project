import React from "react";

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__background">
        <img
          className="profile__background_img"
          src="https://wallpapers.com/images/hd/profile-picture-background-10tprnkqwqif4lyv.jpg"
        ></img>
      </div>

      <div className="profile__user">User profile</div>

      <div className="profile__user__posts">
        <div className="profile__user__posts_new">New Post</div>
        <div className="profile__user__posts_list">
          <div className="user__post">Post 1</div>
          <div className="user__post">Post 2</div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
