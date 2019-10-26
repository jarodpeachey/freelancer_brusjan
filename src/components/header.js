import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
// import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const toggleMenu = (menuOpen, setMenuState, setBodyBlurState) => {
  if (menuOpen) {
    setMenuState(false);
    setBodyBlurState();
  } else {
    setMenuState(true);
    setBodyBlurState();
  }
};

const Header = ({ className, siteTitle, setBodyBlurState }) => {
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

  return (
    <header id="navbar">
      <Container className="container full-height">
        <div className="navbar-content full-height">
          <div className="navbar-left">
            <div className={className}>
              <h2 className="navbar-title">
                <a href="/">{siteTitle}</a>
              </h2>
            </div>
          </div>
          <div className="navbar-right full-height">
            <div
              id="mobile-menu"
              className={menuOpen ? 'mobile-menu open' : 'mobile-menu'}
            >
              <div
                className="mobile-menu-items"
                onMouseLeave={toggleMenu.bind(
                  null,
                  menuOpen,
                  setMenuState,
                  setBodyBlurState,
                )}
              >
                <a className="mobile-menu-item" href="/">
                  Home
                </a>
                <a className="mobile-menu-item" href="/arbeid">
                  Arbeid
                </a>
                <a className="mobile-menu-item" href="#skills">
                  Partnere
                </a>
                <a className="mobile-menu-item" href="#portfolio">
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        </div>
        <MobileMenuIcon
          className="full-height"
          onMouseOver={toggleMenu.bind(
            null,
            menuOpen,
            setMenuState,
            setBodyBlurState,
          )}
        >
          Meny
        </MobileMenuIcon>
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
  position: absolute;
  top: 0;
  right: 60px;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition-duration: 0.5s;
  }
  z-index: 999;
`;

export default Header;
