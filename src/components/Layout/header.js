import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { styled } from 'linaria/react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const Header = ({
  className,
  siteTitle,
  setBodyBlurState,
  activePage,
  dark,
  subMenu = {},
}) => {
  const [menuOpen, setMenuState] = useState(false);
  const [subMenuOpen, setSubMenuState] = useState(false);
  const [pageScroll, setPageScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setPageScroll(window.scrollY);
    });
  });

  const toggleMenu = (event) => {
    if (event.type === 'touchend') {
      event.preventDefault();

      if (menuOpen) {
        clearAllBodyScrollLocks();
        setMenuState(false);
        setBodyBlurState();
      } else {
        disableBodyScroll(document.getElementsByClassName('mobile-menu-items'));
        setMenuState(true);
        setBodyBlurState();
      }
    } else if (event.type === 'click') {
      if (menuOpen) {
        clearAllBodyScrollLocks();
        setMenuState(false);
        setBodyBlurState();
      }
    } else if (menuOpen) {
      clearAllBodyScrollLocks();
      setMenuState(false);
      setBodyBlurState();
    } else {
      disableBodyScroll(document.getElementsByClassName('mobile-menu-items'));
      setMenuState(true);
      setBodyBlurState();
    }
  };

  const toggleSubMenu = (event) => {
    if (event.type === 'touchend') {
      event.preventDefault();

      if (subMenuOpen) {
        clearAllBodyScrollLocks();
        setSubMenuState(false);
        setBodyBlurState();
      } else {
        disableBodyScroll(document.getElementsByClassName('mobile-menu-items'));
        setSubMenuState(true);
        setBodyBlurState();
      }
    } else if (event.type === 'click') {
      if (subMenuOpen) {
        clearAllBodyScrollLocks();
        setSubMenuState(false);
        setBodyBlurState();
      }
    } else if (subMenuOpen) {
      clearAllBodyScrollLocks();
      setSubMenuState(false);
      setBodyBlurState();
    } else {
      disableBodyScroll(document.getElementsByClassName('mobile-menu-items'));
      setSubMenuState(true);
      setBodyBlurState();
    }
  };

  return (
    <header
      className={dark ? (pageScroll > 0 ? 'dark scrolled' : 'dark') : ''}
      id="navbar"
    >
      <Container className="container">
        <div className="navbar-content">
          <div className="navbar-left">
            <div className={className}>
              <h2 className="navbar-title">
                <a href="/">{siteTitle}</a>
              </h2>
            </div>
          </div>
          <div className="navbar-right">
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
                <a className="mobile-menu-item" href="/arbeid">
                  Arbeid
                </a>
                <a className="mobile-menu-item" href="/partnere">
                  Partnere
                </a>
                <a className="mobile-menu-item" href="/kontakt">
                  Kontakt
                </a>
              </div>
            </div>
            <div
              id="mobile-submenu"
              className={subMenuOpen ? 'mobile-menu open' : 'mobile-menu'}
            >
              <div
                className="mobile-menu-items"
                onMouseLeave={toggleSubMenu.bind(
                  null,
                  subMenuOpen,
                  setSubMenuState,
                  setBodyBlurState,
                )}
              >
                {subMenu.component}
              </div>
            </div>
          </div>
        </div>
        <MobileMenuIcon
          id="mobile-menu-icon"
          subMenuOpen={subMenuOpen}
          menuOpen={menuOpen}
          className={subMenuOpen && 'blur'}
          onMouseOver={!subMenuOpen ? toggleMenu : undefined}
          onTouchEnd={!subMenuOpen ? toggleMenu : undefined}
          onClick={!subMenuOpen ? toggleMenu : undefined}
          top={39}
        >
          Meny
        </MobileMenuIcon>
        <ActivePageIndicator
          className={
            menuOpen || subMenuOpen ? 'blur' : ''
          }
          top={78}
        >
          {activePage !== 'Home' ? activePage : null}
        </ActivePageIndicator>
        {subMenu ? (
          <MobileSubMenuIcon
            id="mobile-submenu-icon"
            className={menuOpen && 'blur'}
            menuOpen={menuOpen}
            subMenuOpen={subMenuOpen}
            onMouseOver={!menuOpen ? toggleSubMenu : undefined}
            onTouchEnd={!menuOpen ? toggleSubMenu : undefined}
            onClick={!menuOpen ? toggleSubMenu : undefined}
            top={78 + 39}
          >
            {subMenu.text}
          </MobileSubMenuIcon>
        ) : null}
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
  top: 39px;
  right: 50px;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  z-index: ${props => (props.subMenuOpen ? -999 : 999)};
  font-weight: normal;
  font-family: Obviously Extended;
  line-height: 20px;
`;

const MobileSubMenuIcon = styled.div`
  position: absolute;
  top: 0;
  top: 78px;
  right: 50px;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  z-index: ${props => (props.menuOpen ? -999 : 999)};
  font-weight: normal;
  font-family: Obviously Extended;
  line-height: 20px;
`;

const ActivePageIndicator = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  right: 50px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: Obviously Extended;
  font-weight: bold;
  z-index: ${props => (props.menuOpen ? -999 : 1)};
  line-height: 20px;
`;

export default Header;
