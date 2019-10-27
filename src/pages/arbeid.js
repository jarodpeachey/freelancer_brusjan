import React from 'react';
import { styled } from 'linaria/react';
// import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ArbeidList from '../components/arbeid-list';

const ArbeidPage = ({ data }) => {
  return (
    <Layout title="Arbeid">
      <Wrapper>
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
