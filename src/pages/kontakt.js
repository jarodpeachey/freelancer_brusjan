import React from 'react';
import { styled } from 'linaria/react';
// import { graphql } from 'gatsby';
import Layout from '../components/layout';
import KontaktList from '../components/kontakt-list';

const KontaktPage = ({ data }) => (
  <Layout title="Kontakt" dark>
    <Wrapper className="container">
      <Title className="center-text">Vi er Brusjan, brur!</Title>
      <Subtitle className="center-text">En litenbio kanskje..</Subtitle>
      <KontaktList listStyle="row" />
    </Wrapper>
  </Layout>
);

const Wrapper = styled.div`
  height: 100vh !important;
  padding: 120px 0;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
`;

const Subtitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 120px;
`;

export default KontaktPage;
