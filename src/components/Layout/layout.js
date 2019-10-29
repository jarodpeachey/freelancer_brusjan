import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../breeze_layout.css';
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

const Layout = ({ children, title = 'Home', dark = false, subMenu = {}, pageIndicatorLink }) => {
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
  });

  return (
    <div className={dark ? 'dark full-height' : 'full-height'}>
      <Header
        pageIndicatorLink={pageIndicatorLink}
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
  title: PropTypes.string,
  dark: PropTypes.bool,
  subMenu: PropTypes.object,
};

export default Layout;
