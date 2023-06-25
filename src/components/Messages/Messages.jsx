import { NavLink } from "react-router-dom";
import classNames from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Messages = () => {
  let dialogsData = [
    { id: 1, name: "Lina" },
    { id: 2, name: "Marcus" },
    { id: 3, name: "Lucas" },
    { id: 4, name: "Andrew" },
    { id: 5, name: "Andrew" },
  ];

  let messagesData = [
    { id: 1, message: "Hello, man!" },
    { id: 2, message: "Whats up, buddy?" },
    { id: 3, message: "Why dont you respond?" },
    { id: 4, message: "Please call me!" },
    { id: 5, message: "Please call me!!!!!!!!!!!" },
  ];

  let dialogsElements = dialogsData.map((dial) => (
    <Dialog name={dial.name} id={dial.id} key={dial.id} />
  ));

  let messageElements = messagesData.map((mess) => {
    return <Message message={mess.message} key={mess.id} />;
  });

  return (
    <div className={classNames.dialogs__wrapper}>
      <div className={classNames.dialogs}>{dialogsElements}</div>
      <div className={classNames.messages}>{messageElements}</div>
    </div>
  );
};

export default Messages;
