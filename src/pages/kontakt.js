import React from 'react';
import { styled } from 'linaria/react';
// import { graphql } from 'gatsby';
import Layout from '../components/layout';

const KontaktPage = ({ data }) => (
  <Layout title="Kontakt">
    <Wrapper>
      <Container className="container" />
    </Wrapper>
  </Layout>
);

const Container = styled.div`
  max-width: 569px !important;
`;

const Wrapper = styled.div`
  height: 100vh !important;
  width: 100% !important;
  background: white;
  padding: 120px 0;
`;

export default KontaktPage;
