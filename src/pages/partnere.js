import React from 'react';
import { styled } from 'linaria/react';
// import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { LiveNationImage, SonyMusicImage, OYAImage } from '../components/image';

const PartnerePage = ({ data }) => (
  <Layout title="Partnere">
    <Wrapper className="container">
        <Row className="row">
          <Column className="col col-6 tablet-col-4">
            <Image>
              <LiveNationImage />
            </Image>
          </Column>
          <Column className="col col-6 tablet-col-4">
            <Image>
              <OYAImage />
            </Image>
          </Column>
          <Column className="col col-6 tablet-col-4">
            <Image>
              <SonyMusicImage />
            </Image>
          </Column>
          <div className="col col-6 tablet-col-4" />
        </Row>
    </Wrapper>
  </Layout>
);

const Image = styled.div`
  padding: 16px 32px;
`;

const Row = styled.div`
  align-items: center !important;
`;

const Column = styled.div`
  height: fit-content !important;
`;

const Wrapper = styled.div`
  height: 100vh !important;
  padding: 120px 0;
`;

export default PartnerePage;
