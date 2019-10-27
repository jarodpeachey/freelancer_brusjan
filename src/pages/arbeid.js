import React from 'react';
import { styled } from 'linaria/react';
// import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ArbeidList from '../components/arbeid-list';

const ArbeidPage = ({ data }) => (
  <Layout title="Arbeid">
    <Wrapper className="container">
      <ArbeidList listStyle="center" />
    </Wrapper>
  </Layout>
);

const Wrapper = styled.div`
  height: 100vh !important;
  padding: 120px 0;
`;

export default ArbeidPage;
