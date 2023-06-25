import { NavLink } from "react-router-dom";
import classNames from "./Nav.module.css";

const setActive = ({ isActive }) => (isActive ? classNames.active : "");

const Nav = () => {
  return (
    <nav className={classNames.nav}>
      <div className={classNames.item}>
        <NavLink to="/mypage" className={setActive}>
          My page
        </NavLink>
      </div>
      <div className={`${classNames.item}`}>
        <NavLink to="/messages" className={setActive}>
          Messages
        </NavLink>
      </div>
      <div className={classNames.item}>
        <NavLink to="/news" className={setActive}>
          News
        </NavLink>
      </div>
      <div className={classNames.item}>
        <NavLink to="/music" className={setActive}>
          Music
        </NavLink>
      </div>
      <div className={classNames.item}>
        <NavLink to="/settings" className={setActive}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
