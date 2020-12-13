import { MessageType } from '../../constants/messageType';
import {
  CREATE_MESSAGE,
  DELETE_MESSAGE,
  GET_MESSAGES,
} from '../actions/message';

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
    case DELETE_MESSAGE:
      let key =
        action.messgeType === MessageType.To
          ? 'messagesSent'
          : 'messagesReccived';
      return {
        ...state,
        [key]: state[key].filter((msg) => msg.id !== action.messageId),
      };
    default:
      return state;
  }
};
