import { Navbar, Footer } from "./components";
import { Home, ProductListing, Cart, Wishlist, User } from "./screens";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home cname={styles.main} />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart cname={styles.main} />} />
        <Route path="/wishlist" element={<Wishlist cname={styles.main} />} />
        <Route path="/user" element={<User cname={styles.main} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
