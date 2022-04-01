import { Navbar, Footer, Loader, SingleProductPage } from "./components";
import {
  Home,
  ProductListing,
  Cart,
  Wishlist,
  User,
  Checkout,
} from "./screens";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useLoader } from "./context";
import "react-toastify/dist/ReactToastify.css";
import styles from "./App.module.css";

function App() {
  const { loader } = useLoader();

  return (
    <div className={styles.app}>
      {loader.loaderActive ? <Loader /> : null}

      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className={styles.toast}
      />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home cname={styles.main} />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart cname={styles.main} />} />
        <Route path="/wishlist" element={<Wishlist cname={styles.main} />} />
        <Route path="/user" element={<User cname={styles.main} />} />
        <Route path="/product/:productID" element={<SingleProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
