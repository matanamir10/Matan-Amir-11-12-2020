import axios from 'axios';

export const CREATE_MESSAGE = 'create-message';
export const DELETE_MESSAGE = 'delete-message';
export const GET_MESSAGES = 'get-messages';

export const createMessage = (message) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/message/create', message);
      dispatch({
        type: CREATE_MESSAGE,
      });
    } catch (error) {
      console.log(error);
      //   dispatch({
      //     type: CREATE_MESSAGE,
      //     message: error.message,
      //   });
    }
  };
};

export const getMessages = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/message/${userId}`);
      dispatch({
        type: GET_MESSAGES,
        messages: data.messages,
      });
    } catch (error) {
      console.log(error);
      //   dispatch({
      //     type: CREATE_MESSAGE,
      //     message: error.message,
      //   });
    }
  };
};
