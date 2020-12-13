import axios from 'axios';

export const CREATE_MESSAGE = 'create-message';
export const DELETE_MESSAGE = 'delete-message';
export const GET_MESSAGES = 'get-messages';

export const createMessage = (message) => {
  return (dispatch) => {
    return new Promise((resolve) => {
      axios.post('/api/message/create', message).then(() => {
        dispatch({
          type: CREATE_MESSAGE,
        });
        resolve();
      });
    });
  };
};

export const getMessages = (userId) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/message/${userId}`);
    dispatch({
      type: GET_MESSAGES,
      messages: data,
    });
  };
};

export const deleteMessage = (messageId, messgeType) => {
  return (dispatch) => {
    return new Promise((resolve) => {
      axios.delete(`/api/message/delete/${messageId}`).then(() => {
        dispatch({
          type: DELETE_MESSAGE,
          messageId,
          messgeType,
        });
        resolve();
      });
    });
  };
};
