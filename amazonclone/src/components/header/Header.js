import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import "./header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }


  return (
    <div className="header">
      <Link to="/">
        <h3 className="header__logo">
          <strong>Amazon</strong>Clone
        </h3>
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <AiOutlineSearch className="header__searchIcon" />
      </div>
      <div className="header__nav">
      <Link to={!user && '/login'}> 
        <div onClick={handleAuthenticaton} className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
          
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
        <div className="header__optionBasket">
          <BsCart4 className="header__basketIcon" />
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
