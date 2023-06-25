import { NavLink } from "react-router-dom";
import classNames from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Messages = (props) => {
  let dialogsElements = props.dialogsData.map((dial) => (
    <Dialog name={dial.name} id={dial.id} key={dial.id} />
  ));

  let messageElements = props.messagesData.map((mess) => {
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
