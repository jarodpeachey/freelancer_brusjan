import React from 'react';
import { styled } from 'linaria/react';
// import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import ArbeidList from '../components/Arbeid/arbeid-list';

const ArbeidPage = () => (
  <Layout title="Arbeid">
    <Wrapper className="container">
      <ArbeidList listStyle="center" />
    </Wrapper>
  </Layout>
);

const Wrapper = styled.div`
  height: 100% !important;
  padding: 50px 0 64px;
`;

export default ArbeidPage;
