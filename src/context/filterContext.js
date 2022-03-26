import { createContext, useContext, useEffect, useReducer } from "react";
import { filterReducer, initialFilterState } from "../redux";

const FilterContext = createContext({
  filterState: {},
  filterDispatch: () => {},
});

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  useEffect(() => {
    filterDispatch({
      type: "INITIALIZE_FILTERS",
    });
  }, []);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
