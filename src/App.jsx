import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/signup" element={<Register/>}/>
        <Route path="/productList" element={<ProductList/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </Router>  
  );
};

export default App;