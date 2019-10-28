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
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const item = data.allSitePage.edges[0].node.context;

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth);
    });
  });

  return (
    <Layout title="Arbeid">
      <Wrapper>
        <Container className="container">
          <div className="row">
            <div className="col col-8">
              <Image>
                <StockImage />
              </Image>
              <Title>
                {item.name}
                {' '}
                -
                {item.shortTitle}
              </Title>
            </div>
            <div className="col col-4">
              <ArbeidList
                activeItem={item.slug}
                listStyle={windowSize > 768 ? 'right' : 'center'}
              />
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  );
};

const Title = styled.h2`
  font-size: 60px;
  text-align: center;
  margin-top: 12px;
`;

const Image = styled.div`
  max-width: 670px;
  margin: 0 auto;
`;

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
            fullTitle
            shortTitle
            slug
          }
        }
      }
    }
  }
`;
