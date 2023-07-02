const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messagesData: [
    { id: 1, message: "Hello, man!" },
    { id: 2, message: "Whats up, buddy?" },
    { id: 3, message: "Why dont you respond?" },
    { id: 4, message: "Please call me!" },
    { id: 5, message: "Hey, Please call me!!!!!!!!!!!" },
  ],

  dialogsData: [
    { id: 1, name: "Lina" },
    { id: 2, name: "Marcus" },
    { id: 3, name: "Lucas" },
    { id: 4, name: "Andrew" },
    { id: 5, name: "Andrew" },
  ],

  newMessageBody: "",
};

const messagesPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messagesData.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default messagesPageReducer;
