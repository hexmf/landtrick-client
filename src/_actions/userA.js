import axios from 'axios';

// kata kerja

export const userLogin = data => {
  return {
    type: 'POST_USER_LOGIN',
    payload: axios({
      method: 'POST',
      url: 'http://localhost:5001/api/v1/login',
      data
    })
  };
};
