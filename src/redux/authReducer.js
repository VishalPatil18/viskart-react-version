/**
 * Welcome to @VISKart / SRC / REDUX / AUTH_REDUCER
 *
 * This is a Reducer function for the @AuthContext
 *
 * @type - reducer-function
 * @return - {object} updated AuthState for AuthContext
 * @export {object} -initialAuthState
 * @export {dispatch-function} - authReducer()
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const initialAuthState = {
  token: null,
  user: null,
  addresses: [],
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_CHECK":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        addresses: action.payload.addresses,
      };
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        addresses: action.payload.addresses,
      };
    case "LOGOUT":
      return { ...state, token: null, user: null, addresses: [] };
    case "SIGNUP":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        addresses: [],
      };
    case "ADD_NEW_ADDRESS":
      return {
        ...state,
        addresses: action.payload.addresses,
      };
    case "REMOVE_ADDRESS":
      return {
        ...state,
        addresses: action.payload.addresses,
      };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        addresses: action.payload.addresses,
      };
    default:
      return state;
  }
};

export { initialAuthState, authReducer };
