import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer, initialState } from "../redux/dataReducer";
import axios from "axios";

const DataContext = createContext({
  dataState: {},
  dataDispatch: () => {},
});

const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
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
