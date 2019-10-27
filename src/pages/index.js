import React, { useState } from 'react';
// import { Link } from 'gatsby';
// import Image from '../components/image';
// import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';
import { styled } from 'linaria/react';
import { noAuto } from '@fortawesome/fontawesome-svg-core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { MainLogo } from '../components/image';
import Background from '../components/background';
import Header from '../components/header';

const setBodyBlurState = (setBlur, blurState) => {
  if (blurState) {
    setBlur(false);
  } else {
    setBlur(true);
  }
};

const IndexPage = ({ data }) => {
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
  return (
    <Layout>
      <Header
        className={blurState ? 'blur' : ''}
        siteTitle={titleData.site.siteMetadata.title}
        setBodyBlurState={setBodyBlurState.bind(null, setBlur, blurState)}
      />
      <SEO title="Home" />
      {/* <Background>
      HELLO THERE
    </Background> */}
      <Wrapper className={blurState ? 'wrapper-blur' : ''}>
        <MainLogo />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  height: 100vh !important;
  width: 100% !important;
  background: white;
  display: flex;
  align-items: center;
  padding: 60px 0 0;
  & .gatsby-image-wrapper {
    width: 70% !important;
    // height: auto !important;
    margin: 0 auto;
    max-width: 460px;
  }
`;

export default IndexPage;
