import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer, initialState } from "../redux";
import { productsService } from "../services";

const DataContext = createContext({
  dataState: {},
  dataDispatch: () => {},
});

const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const response = await productsService();
        dataDispatch({ type: "INITIAL_DATA", payload: response.data.products });
      } catch (error) {
        console.log("ERROR: ", error);
      }
    })();
  }, []);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
