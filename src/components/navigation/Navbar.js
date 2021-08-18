import React from 'react';
import header_Img1 from "../../assets/header_icon.png";
import "./Navbar.css"
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';


function Navbar(){
  return (
    <nav className="header">
      <Link to="/">
        <img className="header_image_logo"
        src={ header_Img1 }
        alt=""
        />
      </Link>
      <div className="header_search">
        <input className="header_search_input" type="text"/>
        <SearchIcon className="header_search_icon"/>
      </div>
      <div className="header_nav">
        <Link to="/product" className="header_item_link">
          <span className="product_item header_item_headingTwo">Products</span>
        </Link>
        <Link to ="/cart" className="header_item_link">
              <AddShoppingCartSharpIcon className="header_item_icon"/>
        </Link>
        <Link to ="/wishlist" className="header_item_link">
              <FavoriteSharpIcon className="header_item_icon"/>
        </Link>
        <Link to="signIn">
          <div className="header_item">
            <div className="header_item_heading">
              <span className="header_item_headingOne">Hello,</span>
              <span className="header_item_headingTwo">User</span>
            </div>
            <span className="header_profile_icon"><AccountCircleSharpIcon className="header_item_icon"/></span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
