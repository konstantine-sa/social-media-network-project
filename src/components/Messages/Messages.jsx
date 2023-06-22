import classNames from "./Messages.module.css";

const Messages = () => {
  console.log(classNames);
  return (
    <div className={classNames.dialogs__wrapper}>
      <div className={classNames.dialogs}>
        <div className={classNames.dialog + " " + classNames.active}>
          Person 1
        </div>
        <div className={classNames.dialog}>Person 2</div>
        <div className={classNames.dialog}>Person 3</div>
      </div>
      <div className={classNames.messages}>
        <div className={classNames.message}>Hello!</div>
        <div className={classNames.message}>Whats up, buddy?</div>
        <div className={classNames.message}>Please call me!</div>
      </div>
    </div>
  );
};

export default Messages;
