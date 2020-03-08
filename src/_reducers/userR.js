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
    default:
      return state;
  }
};

export default users;
