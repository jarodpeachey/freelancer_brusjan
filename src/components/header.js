import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
// import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuState] = useState(false);

  useEffect(() => {
    // document.getElementById('mobile-menu').addEventListener('click', () => {
    //   setMenuState(false);
    //   // clearAllBodyScrollLocks();
    // });

    // const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');

    // mobileMenuItems.forEach((item) => {
    //   item.addEventListener('click', () => {
    //     setMenuState(false);
    //     // clearAllBodyScrollLocks();
    //   });
    // });
  });

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuState(false);
    } else {
      setMenuState(true);
    }
  };

  return (
    <header id="navbar">
      <Container className="container full-height">
        <div className="navbar-content full-height">
          <div className="navbar-left">
            <h2 className="navbar-title">
              <a href="/">{siteTitle}</a>
            </h2>
          </div>
          <div className="navbar-right full-height">
            <MobileMenuIcon className="full-height" onMouseOver={toggleMenu()}>
              Meny
            </MobileMenuIcon>
            <div
              id="mobile-menu"
              className={menuOpen ? 'mobile-menu open' : 'mobile-menu'}
            >
              <div id="mobile-menu-items" className="mobile-menu-items">
                <a className="mobile-menu-item" href="#home">
                  Home
                </a>
                <a className="mobile-menu-item" href="#about">
                  About
                </a>
                <a className="mobile-menu-item" href="#skills">
                  Skills
                </a>
                <a className="mobile-menu-item" href="#portfolio">
                  Portfolio
                </a>
                <br />
                <br />
                <br />
                <a
                  href="https://github.com/jarodpeachey"
                  className="mobile-menu-item"
                >
                  <FontAwesomeIcon icon={['fab', 'github']} id="menu-toggle" />
                </a>
                <a
                  href="https://linkeding.com/in/jarod-peachey"
                  className="mobile-menu-item"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'linkedin']}
                    id="menu-toggle"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

const Container = styled.div``;

const MobileMenuIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition-duration: .5s;
  }
  & > * {
    z-index: 999;
  }
`;

export default Header;
