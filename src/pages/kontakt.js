import React from 'react';
import { styled } from 'linaria/react';
// import { graphql } from 'gatsby';
import Layout from '../components/layout';

const KontaktPage = ({ data }) => (
  <Layout title="Kontakt" dark>
    <Wrapper className="container">
      Stuff
    </Wrapper>
  </Layout>
);

const Wrapper = styled.div`
  height: 100vh !important;
  padding: 120px 0;
`;

export default KontaktPage;
