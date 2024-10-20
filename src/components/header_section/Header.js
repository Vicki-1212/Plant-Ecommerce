import { useState } from 'react';
import { LiaUserSolid } from "react-icons/lia";
import { BsCart3 } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import {Link} from 'react-router-dom'

import './Header.css'

const Header = () => {

  const [isShowMenu, setShowMenu] = useState(false);

  const toggle = () => {
    setShowMenu(!isShowMenu);
  }

  return (
    <>
      <div className="header-section-container">
        <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1729319827/gs87cmoxjnqhkshd2v9z.svg" alt="logo" className="logo-image" />
        <ul className="nav-link-container">
            <li>Home</li>
            <li>Plants & Pots</li>
            <li>Tools</li>
            <li>Our Services</li>
            <li>Blog</li>
            <li>Our Story</li>
        </ul>
        <div className="profile-cart-link-container">
            <div className="menu-link-container" onClick={toggle}>
                {isShowMenu ? <IoMdClose className="close icon" /> : (
                <>
                <IoMenuOutline className="menu icon"  />
                <p className="menu name">Menu</p>
                </>)}
            </div>
            <Link to="/">
              <div className="profile-link-container">
                  <LiaUserSolid className="user icon" />
                  <p  className="profile name">Profile</p>
              </div>
            </Link>
            <Link to="/cart">
              <div className="cart-link-container">
                  <BsCart3 className="cart icon" />
                  <p className="cart name">Cart</p>
              </div>
            </Link>
        </div>
      </div>
      <div className={isShowMenu ? "nav-bar-container-sm" : "nav-bar-container-sm-none"}>
        <ul className="nav-link-container-sm">
          <li>Home</li>
          <li>Plants & Pots</li>
          <li>Tools</li>
          <li>Our Services</li>
          <li>Blog</li>
          <li>Our Story</li>
        </ul>
      </div>
    </>
  )
}

export default Header
