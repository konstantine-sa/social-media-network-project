import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Messages = (props) => {
  console.log(props);
  let dialogsElements = props.dialogsData.dialogsData.map((dial) => (
    <Dialog name={dial.name} id={dial.id} key={dial.id} />
  ));

  let messageElements = props.messagesData.messagesData.map((mess) => {
    return <Message message={mess.message} key={mess.id} />;
  });

  let newMessageElement = React.createRef();
  let sendMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={classNames.dialogs__wrapper}>
      <div className={classNames.dialogs}>{dialogsElements}</div>
      <div className={classNames.messages}>{messageElements}</div>
      <div>
        <h3>New message</h3>
        <textarea ref={newMessageElement}></textarea>
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  );
};

export default Messages;
