import { CREATE_MESSAGE, GET_MESSAGES } from '../actions/message';

const initialSatate = {
  messagesSent: [],
  messagesReccived: [],
};

export const messageReducer = (state = initialSatate, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return state;
    case GET_MESSAGES:
      return {
        messagesSent: action.messages.messageSent,
        messagesReccived: action.messages.messageReccived,
      };
    default:
      return state;
  }
};
