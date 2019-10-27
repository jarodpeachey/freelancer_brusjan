import React, { useState } from 'react';
import { styled } from 'linaria/react';
// import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
// import ListItem from '../components/list-item';
import ArbeidList from '../components/arbeid-list';

const setBodyBlurState = (setBlurState, blurState) => {
  if (blurState) {
    setBlurState(false);
  } else {
    setBlurState(true);
  }
};

const ArbeidPage = ({ data }) => {
  const [blurState, setBlurState] = useState(false);

  return (
    <Layout>
      <Header
        className={blurState ? 'blur' : ''}
        siteTitle="Brusjan"
        setBodyBlurState={setBodyBlurState.bind(null, setBlurState, blurState)}
        activePage="Arbeid"
      />
      <SEO title="Arbeid" />
      <Wrapper className={blurState ? 'wrapper-blur' : ''}>
        <Container className="container">
          <ArbeidList listStyle="center" />
        </Container>
      </Wrapper>
    </Layout>
  );
};

const Container = styled.div`
  max-width: 569px !important;
`;

const Wrapper = styled.div`
  height: 100vh !important;
  width: 100% !important;
  background: white;
  padding: 120px 0;
`;

export default ArbeidPage;
