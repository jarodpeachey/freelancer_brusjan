import React from 'react';
import { styled } from 'linaria/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faInstagram,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/Layout/layout';
import { MainLogo } from '../components/image';

library.add(fab, faInstagram, faFacebookF);

const IndexPage = ({ data }) => (
  <Layout>
    <Wrapper>
      <MainLogo />
    </Wrapper>
  </Layout>
);

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
