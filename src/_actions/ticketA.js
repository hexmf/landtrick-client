import axios from 'axios';

export const showTicket = () => {
  return {
    type: 'GET_TICKET',
    payload: axios({
      method: 'GET',
      url: 'http://localhost:5001/api/v1/ticket'
    })
  };
};
