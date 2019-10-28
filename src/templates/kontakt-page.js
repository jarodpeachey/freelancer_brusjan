import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { styled } from 'linaria/react';
// import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';
import KontaktList from '../components/kontakt-list';
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
        {item.name}
        {item.title}
        {item.email}
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  height: 100vh !important;
  padding: 120px 0;
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
