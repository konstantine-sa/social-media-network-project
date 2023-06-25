import classNames from "./../Messages.module.css";

const Message = (props) => {
  return <div className={classNames.message}>{props.message}</div>;
};

export default Message;
