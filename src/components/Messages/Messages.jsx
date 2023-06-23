import { NavLink } from "react-router-dom";
import classNames from "./Messages.module.css";

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

const Message = (props) => {
  return <div className={classNames.message}>{props.message}</div>;
};

const Messages = () => {
  console.log(classNames);
  return (
    <div className={classNames.dialogs__wrapper}>
      <div className={classNames.dialogs}>
        <Dialog name="Person 123" id="1" />
        <Dialog name="Person 223" id="2" />
        <Dialog name="Person 334" id="3" />
        <Dialog name="Person 445" id="4" />
      </div>
      <div className={classNames.messages}>
        <Message message="Hello, man!" />
        <Message message="Whats up, buddy?" />
        <Message message="Why dont you respond?" />
        <Message message="Please call me!" />
      </div>
    </div>
  );
};

export default Messages;
