import { NavLink } from "react-router-dom";
import classNames from "./Messages.module.css";

const setActive = ({ isActive }) => (isActive ? classNames.active : "");

//===================================== DIALOG ==============================================

const Dialog = (props) => {
  return (
    <div className={classNames.dialog}>
      <NavLink to={"/messages/" + props.id} className={setActive}>
        {props.name}
      </NavLink>
    </div>
  );
};

let dialogsData = [
  { id: 1, name: "Lina" },
  { id: 2, name: "Marcus" },
  { id: 3, name: "Lucas" },
  { id: 4, name: "Andrew" },
  { id: 5, name: "Andrew" },
];

let dialogsElements = dialogsData.map((dial) => (
  <Dialog name={dial.name} id={dial.id} key={dial.id} />
));

//===================================== MESSAGES ==============================================

const Message = (props) => {
  return <div className={classNames.message}>{props.message}</div>;
};

let messagesData = [
  { id: 1, message: "Hello, man!" },
  { id: 2, message: "Whats up, buddy?" },
  { id: 3, message: "Why dont you respond?" },
  { id: 4, message: "Please call me!" },
  { id: 5, message: "Please call me!!!!!!!!!!!" },
];

let messageElements = messagesData.map((mess) => {
  return <Message message={mess.message} key={mess.id} />;
});

//===================================== end of MESSAGES ==============================================

const Messages = () => {
  return (
    <div className={classNames.dialogs__wrapper}>
      <div className={classNames.dialogs}>{dialogsElements}</div>
      <div className={classNames.messages}>{messageElements}</div>
    </div>
  );
};

export default Messages;
