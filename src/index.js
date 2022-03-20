import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  DataProvider,
  AuthProvider,
  CartProvider,
  AuthModalProvider,
  WishlistProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthModalProvider>
        <DataProvider>
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </DataProvider>
      </AuthModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
