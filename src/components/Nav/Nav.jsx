import classNames from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classNames.nav}>
      <div className={classNames.item}>
        <a href="#">Profile</a>
      </div>
      <div className={`${classNames.item} ${classNames.active}`}>
        <a href="#">Messages</a>
      </div>
      <div className={classNames.item}>
        <a href="#">News</a>
      </div>
      <div className={classNames.item}>
        <a href="#">Music</a>
      </div>
      <div className={classNames.item}>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
};

export default Nav;
