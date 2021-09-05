import React , { useState } from "react";
import "./App.css";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { auth } from "./firebase";
import Navbar from "./components/navigation/Navbar";
import Product from "./components/products/Product";
import Cart from "./components/cart/Cart.jsx";
import Wishlist from "./components/wishlist/Wishlist";
import Home from "./components/homepage/Home";
import Login from "./components/login/Login";


function App() {
 const [user, setUser] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [emailError, setEmailError] = useState('');
 const [passwordError, setPasswordError] = useState('');
 const [hasAccount, setHasAccount] = useState('');

 const clearInputs = () =>{
  setEmail('');
  setPassword('');
 }

 const clearErrors = () =>{
   setEmailError('');
   setPasswordError('');
 };

 const handleLogin = async(event) =>{  
    event.preventDefault();
    clearErrors();
    try{
      await auth.signInWithEmailAndPassword(email , password)
    }catch(err){
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message)
          break;
        case "auth/wrong-password":
          setPasswordError(err.message)
          break;
      }
    };
  }

  const handleSignup = async(event) =>{
    event.preventDefault();
    clearInputs();
    try{
      await auth.createUserWithEmailAndPassword(email , password)
    }catch(err){
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message)
          break;
        case "auth/weak-password":
          setPasswordError(err.message)
          break;
      }
    }
  }

  const handleSignout = () =>{
    auth.signOut();
  };

  const authListner = () =>{

  }


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
