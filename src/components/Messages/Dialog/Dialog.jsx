import { NavLink } from "react-router-dom";
import classNames from "./../Messages.module.css";

const setActive = ({ isActive }) => (isActive ? classNames.active : "");

const Dialog = (props) => {
  return (
    <div className={classNames.dialog}>
      <NavLink to={"/messages/" + props.id} className={setActive}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
