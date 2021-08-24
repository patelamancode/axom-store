import "./App.css";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Product from "./components/products/Product";
import Cart from "./components/cart/Cart.jsx";
import Wishlist from "./components/wishlist/Wishlist";
import Home from "./components/homepage/Home";
import Login from "./components/login/Login";


function App() {
 return(
  <Router>
    <div className="app">
      <Switch>
        <Route path="/cart">
          < Navbar />
          < Cart />
        </Route>
        <Route path="/wishlist">
          < Navbar />
          < Wishlist />
        </Route>
        <Route path="/signIn">
          < Login />
        </Route>
        <Route path="/product">
          < Navbar />
          < Product />
        </Route>
        <Route path="/">
          < Navbar />
          < Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
