import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { styled } from 'linaria/react';
// import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Layout from '../components/Layout/layout';
import Header from '../components/Layout/header';
import SEO from '../components/Layout/seo';
import KontaktList from '../components/Kontakt/kontakt-list';
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
    <Layout
      dark
      title="Kontakt"
      subMenu={{
        text: "Folka",
        component: <KontaktList activeItem={item.slug} listStyle="right" />,
      }}
    >
      <Wrapper className="container">
        <Title>
          {item.title}
        </Title>
        <Name>
          {item.name}
        </Name>
        <Email>
          <strong>E: </strong>{item.email}
        </Email>
        <Phone>
          <strong>T: </strong>{item.phone}
        </Phone>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  height: 100vh !important;
  padding-top: 120px;
  margin: 0 auto;
  max-width: 569px;
`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 36px;
`;

const Name = styled.div`
  font-size: 90px;
  font-weight: 800;
  margin-bottom: 36px;
`;

const Phone = styled.div`
  font-size: 20px;
`;

const Email = styled.div`
  font-size: 20px;
`;

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
            title
            email
            phone
            slug
          }
        }
      }
    }
  }
`;
