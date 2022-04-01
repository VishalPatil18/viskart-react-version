const initialFilterState = {
  sortBy: "",
  categories: [],
  rating: "",
  priceRange: "300",
  search: "",
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_FILTERS":
      return initialFilterState;
    case "SORT_BY":
      return {
        ...state,
        sortBy: action.payload.sortBy,
      };
    case "CATEGORISE":
      return {
        ...state,
        categories: action.payload.categories,
      };
    case "RATING":
      return {
        ...state,
        rating: action.payload.rating,
      };
    case "PRICE_RANGE":
      return {
        ...state,
        priceRange: action.payload.priceRange,
      };
    case "SEARCH":
      return {
        ...state,
        search: action.payload.search,
      };
    default:
      return state;
  }
};

export { filterReducer, initialFilterState };
