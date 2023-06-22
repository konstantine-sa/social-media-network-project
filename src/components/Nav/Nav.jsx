import classNames from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classNames.nav}>
      <div className={classNames.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={`${classNames.item} ${classNames.active}`}>
        <a href="/messages">Messages</a>
      </div>
      <div className={classNames.item}>
        <a href="/news">News</a>
      </div>
      <div className={classNames.item}>
        <a href="/music">Music</a>
      </div>
      <div className={classNames.item}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
};

export default Nav;
