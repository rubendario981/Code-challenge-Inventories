const initialState = {
  user: {},
  listActivesUser: []

}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    case "CREATE_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "CREATE_USER_ADMIN":
      return { ...state };

    case "LOGOUT":
      return {
        ...state,
        user: {},
      };

    case "IDENTIFY_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "CREATE_ACTIVE":
      return { ...state };

    case "GET_LIST_ACTIVES_BY_USER":
      return {
        ...state,
        listActivesUser: action.payload
      };



    default:
      return { ...state };
  }
};

export default rootReducer;