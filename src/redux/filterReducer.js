/**
 * Welcome to @VISKart / SRC / REDUX / FILTER_REDUCER
 *
 * This is a Reducer function for the @FilterContext
 *
 * @type - reducer-function
 * @return - {object} updated FilterState for FilterContext
 * @export {object} -initialFilterState
 * @export {dispatch-function} - filterReducer()
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

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
    case "CLEAR":
      return {
        ...state,
        sortBy: "",
        rating: "",
        priceRange: "300",
        search: "",
      };
    default:
      return state;
  }
};

export { filterReducer, initialFilterState };
