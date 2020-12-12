import { CREATE_MESSAGE } from '../actions/message';

const initialSatate = {
  messages: [],
};

export const messageReducer = (state = initialSatate, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return { messages: [...state.messages, action.message] };
    default:
      return state;
  }
};
