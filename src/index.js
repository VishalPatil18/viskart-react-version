import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  CartProvider,
  AuthModalProvider,
  WishlistProvider,
  LoaderProvider,
  FilterProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <LoaderProvider>
      <AuthModalProvider>
        <AuthProvider>
          <FilterProvider>
            <CartProvider>
              <WishlistProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </WishlistProvider>
            </CartProvider>
          </FilterProvider>
        </AuthProvider>
      </AuthModalProvider>
    </LoaderProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
