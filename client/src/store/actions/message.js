import axios from 'axios';

export const CREATE_MESSAGE = 'create-message';
export const DELETE_MESSAGE = 'delete-message';
export const GET_MESSAGES = 'get-messages';

export const createMessage = (message) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/message/create', message);
      dispatch({
        type: CREATE_MESSAGE,
        message: data.message,
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
