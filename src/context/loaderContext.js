import { createContext, useContext, useState } from "react";

const LoaderContext = createContext({});

const LoaderProvider = ({ children }) => {
  const [loader, setLoaderActive] = useState({
    loaderActive: false,
    loaderMsg: "I'm Working",
  });

  const setLoader = (loaderState = false, loaderMsg) => {
    setLoaderActive({ ...loader, loaderActive: loaderState, title: loaderMsg });
  };

  return (
    <LoaderContext.Provider value={{ loader, setLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

const useLoader = () => useContext(LoaderContext);

export { LoaderProvider, useLoader };
