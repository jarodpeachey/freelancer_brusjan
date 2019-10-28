import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import './breeze_layout.css';
import { styled } from 'linaria/react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import SEO from './seo';

const setBodyBlurState = (setBlur, blurState) => {
  if (blurState) {
    setBlur(false);
  } else {
    setBlur(true);
  }
};

const Layout = ({ children, title = 'Home', dark = false, subMenu = {} }) => {
  const [blurState, setBlur] = useState(false);
  const titleData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  })
  return (
    <div className={dark ? 'dark' : ''}>
      <Header
        subMenu={subMenu}
        dark={dark}
        activePage={title}
        className={blurState ? 'blur' : ''}
        siteTitle={titleData.site.siteMetadata.title}
        setBodyBlurState={setBodyBlurState.bind(null, setBlur, blurState)}
      />
      <SEO title={title} />
      <div className={blurState ? 'blur' : ''}>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
