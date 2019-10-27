import React from 'react';
import { styled } from 'linaria/react';
import Layout from '../components/layout';
import { MainLogo } from '../components/image';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Wrapper>
        <MainLogo />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  height: 100vh !important;
  display: flex;
  align-items: center;
  padding: 60px 0 0;
  & .gatsby-image-wrapper {
    width: 70% !important;
    // height: auto !important;
    margin: 0 auto;
    max-width: 460px;
  }
`;

export default IndexPage;
