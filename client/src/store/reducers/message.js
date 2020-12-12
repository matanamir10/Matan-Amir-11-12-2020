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
        messagesSent: action.messages.sended,
        messagesReccived: action.messages.reccived,
      };
    default:
      return state;
  }
};
