// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./Details";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:prod" element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
