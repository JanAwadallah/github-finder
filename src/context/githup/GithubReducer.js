const githupReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload.users,
        totalCount: action.payload.totalCount,
        loading: false,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.latestRepos,
        loading: false,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        usser: {},
        totalCount: null,
        loading: false,
      };
    default:
      return state;
  }
};
export default githupReducer;
