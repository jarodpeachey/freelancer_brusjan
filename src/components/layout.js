import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import './breeze_layout.css';
import { styled } from 'linaria/react';
// import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Layout;
