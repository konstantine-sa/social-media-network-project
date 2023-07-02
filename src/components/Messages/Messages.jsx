import React from "react";

import classNames from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Messages = (props) => {
  let state = props.messagesPage;

  let dialogsElements = state.dialogsData.map((dial) => (
    <Dialog name={dial.name} id={dial.id} key={dial.id} />
  ));

  let messageElements = state.messagesData.map((mess) => {
    return <Message message={mess.message} key={mess.id} />;
  });

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classNames.dialogs__wrapper}>
      <div className={classNames.dialogs}>{dialogsElements}</div>
      <div className={classNames.messages}>{messageElements}</div>
      <div>
        <h3>New message</h3>
        <textarea
          onChange={onNewMessageChange}
          value={newMessageBody}
          placeholder="Enter your message"
        ></textarea>
        <button onClick={onSendMessageClick}>Send message</button>
      </div>
    </div>
  );
};

export default Messages;
