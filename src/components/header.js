import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { styled } from 'linaria/react';

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

      console.log(document.body.scrollY);
    });
  });

  const toggleMenu = (event) => {
    if (event.type === 'touchend') {
      event.preventDefault();

      if (menuOpen) {
        setMenuState(false);
        setBodyBlurState();
      } else {
        setMenuState(true);
        setBodyBlurState();
      }
    } else if (event.type === 'click') {
      if (menuOpen) {
        setMenuState(false);
        setBodyBlurState();
      }
    } else {
      setMenuState(true);
      setBodyBlurState();
    }
  };

  const toggleSubMenu = (event) => {
    if (event.type === 'touchend') {
      event.preventDefault();

      if (subMenuOpen) {
        setSubMenuState(false);
        setBodyBlurState();
      } else {
        setSubMenuState(true);
        setBodyBlurState();
      }
    } else if (event.type === 'click') {
      if (subMenuOpen) {
        setSubMenuState(false);
        setBodyBlurState();
      }
    } else {
      setSubMenuState(true);
      setBodyBlurState();
    }
  };

  console.log(menuOpen, subMenuOpen);

  return (
    <header
      className={dark ? (pageScroll > 0 ? 'dark scrolled' : 'dark') : ''}
      id="navbar"
    >
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
              className={subMenuOpen ? 'mobile-submenu open' : 'mobile-submenu'}
            >
              <div
                className="mobile-submenu-items"
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
          top={24}
        >
          Meny
        </MobileMenuIcon>
        <ActivePageIndicator
          className={
            menuOpen || subMenuOpen ? 'full-height blur' : 'full-height'
          }
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
            top={92}
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
  top: ${props => props.top}px;
  right: 50px;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  z-index: ${props => (props.subMenuOpen ? -999 : 999)};
  font-weight: ${props => (props.menuOpen ? 800 : 500)};
`;

const MobileSubMenuIcon = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  right: 50px;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  z-index: ${props => (props.menuOpen ? -999 : 999)};
  font-weight: ${props => (props.subMenuOpen ? 800 : 500)};
`;

const ActivePageIndicator = styled.div`
  position: absolute;
  top: 0;
  right: 50px;
  display: flex;
  align-items: center;
  font-size: 14px;
  top: 36px;
  font-weight: 800;
`;

export default Header;
