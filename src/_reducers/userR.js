// mengolah data yang dikirim dari action

const initialState = {
  data: [],
  dataError: [],
  isLoading: false
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_USER_LOGIN_PENDING':
      return {
        ...state,
        error: false,
        isLoading: true
      };
    case 'POST_USER_LOGIN_FULFILLED':
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        error: false,
        isLoading: false,
        data: action.payload.data
      };
    case 'POST_USER_LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        error: true,
        dataError: action.payload.response
      };
    case 'POST_USER_REGISTER_PENDING':
      return {
        ...state,
        error: false,
        isLoading: true
      };
    case 'POST_USER_REGISTER_FULFILLED':
      // console.log('hfgyusagdfugsis', action.payload.data);
      // window.localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.payload.data
      };
    case 'POST_USER_REGISTER_REJECTED':
      // console.log('hahaha', action.payload.response.data);

      return {
        ...state,
        isLoading: false,
        error: true,
        dataError: action.payload.response.data
        // console.log(dataError);
      };
    default:
      return state;
  }
};

export default users;
