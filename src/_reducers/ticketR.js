const initialState = {
  // menampung data response API
  data: [],
  dataError: [],
  isLoading: false
};

const showTicket = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TICKET_PENDING':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_TICKET_FULFILLED':
      return {
        ...state,
        data: action.payload
      };
    case 'GET_TICKET_REJECTED':
      return {
        ...state,
        error: true,
        dataError: action.payload.response
      };
    default:
      return state;
  }
};

export default showTicket;
