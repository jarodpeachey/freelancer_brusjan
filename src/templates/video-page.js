import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { styled } from 'linaria/react';
// import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Layout from '../components/Layout/layout';
import ArbeidList from '../components/Arbeid/arbeid-list';

const image = require('../images/Video.png');

export default ({ data }) => {
  const [windowSize, setWindowSize] = useState(0);
  const item = data.allSitePage.edges[0].node.context;

  useEffect(() => {
    setWindowSize(window.innerWidth);

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
              <VideoContainer>
                <img src={image} alt="" />
              </VideoContainer>
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
  font-size: 40px;
  text-align: center;
  margin-top: 12px;
  font-weight: bold;
  font-family: Obviously Extended;
  line-height: 60px;
  @media (min-width: 569px) {
    font-size: 60px;
  }
`;

const VideoContainer = styled.div`
  max-width: 670px;
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100% !important;
  background: white;
  height: 100% !important;
  padding: 50px 0 64px;
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
