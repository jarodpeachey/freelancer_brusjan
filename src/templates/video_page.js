import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { styled } from 'linaria/react';
// import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';
import ArbeidList from '../components/arbeid-list';
import { StockImage } from '../components/image';

const setBodyBlurState = (setBlurState, blurState) => {
  if (blurState) {
    setBlurState(false);
  } else {
    setBlurState(true);
  }
};

export default ({ data }) => {
  const [blurState, setBlurState] = useState(false);
  const item = data.allSitePage.edges[0].node.context;

  return (
    <Layout>
      <Header
        className={blurState ? 'blur' : ''}
        siteTitle="Brusjan"
        setBodyBlurState={setBodyBlurState.bind(null, setBlurState, blurState)}
        activePage="Arbeid"
      />
      <SEO title="Arbeid" />
      <Wrapper>
        <Container className="container">
          <div className="row">
            <div className="col col-8">
              <StockImage />
            </div>
            <div className="col col-4">
              <ArbeidList activeItem={item.slug} listStyle="right" />
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  height: 100vh !important;
  width: 100% !important;
  background: white;
  padding: 120px 0;
`;

const Container = styled.div`
  padding-top: 0;
  padding-bottom: 0;
`;

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
            title
            slug
            image
          }
        }
      }
    }
  }
`;
