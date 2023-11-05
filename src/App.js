import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Wishlist from "./Pages/Wishlist";
import ShopContext from "../src/components/ShopContext";
import ForgetPassword from "./Pages/ForgetPassword";
import Details from "./Pages/Details";
function App() {
  return (
    <>
      <ShopContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgetpasword" element={<ForgetPassword />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/details" element={<Details />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShopContext>
    </>
  );
}

export default App;
