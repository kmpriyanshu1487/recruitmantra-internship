import React, { useState } from 'react';
import '../Style/Navbar.css';
import NavLogo from '../Assets/logo_RM.png';
import profileImg from '../Assets/user.png';

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOptionClick = (option) => {
    console.log(option); 
    setIsDropdownVisible(false); 
  };

  return (
    <nav className="nav-container">
      <div className="nav-left">
        <img src={NavLogo} alt="Logo" />
      </div>
      <div className="nav-right">
        <a href="/">Home</a>
        <a href="/feedback">Feedback</a>
        <a href="/contact">Contact Us</a>
        <a href="/about">About</a>
        <div className="profile-container" onClick={toggleDropdown}>
          <img id="user" src={profileImg} alt="User Profile" />
          {isDropdownVisible && (
            <ul className="dropdown-menu">
              <li onClick={() => handleOptionClick('Your Profile')}>
                <a href="/profile">
                  <i className="bx bx-user"></i> Your Profile
                </a>
              </li>
              <li onClick={() => handleOptionClick('Redeem Coins')}>
                <a href="/redeem-coins">
                  <i className="bx bx-user-circle"></i> Redeem Coins
                </a>
              </li>
              <li onClick={() => handleOptionClick('Contact Us')}>
                <a href="/contact">
                  <i className="bx bx-info-circle"></i> Contact Us
                </a>
              </li>
              <li onClick={() => handleOptionClick('About Us')}>
                <a href="/about">
                  <i className="bx bx-info-circle"></i> About Us
                </a>
              </li>
              <li onClick={() => handleOptionClick('Log Out')}>
                <a href="/logout">
                  <i className="bx bx-log-in"></i> Log Out
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
