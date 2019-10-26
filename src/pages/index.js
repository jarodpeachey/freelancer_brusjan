import React from 'react';
// import { Link } from 'gatsby';
// import Image from '../components/image';
// import BackgroundImage from 'gatsby-background-image';
import { styled } from 'linaria/react';
import { noAuto } from '@fortawesome/fontawesome-svg-core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { MainLogo } from '../components/image';
import Background from '../components/background';
import Header from '../components/header';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {/* <Background>
      HELLO THERE
    </Background> */}
    <Wrapper>
      <MainLogo />
    </Wrapper>
    
  </Layout>
);

const Wrapper = styled.div`
  height: 100vh !important;
  width: 100% !important;
  background: white;
  display: flex;
  align-items: center;
  padding: 120px 0;
  & .gatsby-image-wrapper {
    width: 70% !important;
    height: auto !important;
    margin: 0 auto;
    max-width: 500px;
  }
`;

export default IndexPage;
