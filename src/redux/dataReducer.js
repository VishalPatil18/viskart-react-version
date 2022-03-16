const initialState = {
  products: [],
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export { initialState, dataReducer };
