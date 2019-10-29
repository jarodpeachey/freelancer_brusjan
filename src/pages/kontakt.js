import React from 'react';
import { styled } from 'linaria/react';
// import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/Layout/layout';
import KontaktList from '../components/Kontakt/kontakt-list';

const KontaktPage = ({ data }) => (
  <Layout title="Kontakt" dark>
    <Wrapper className="container">
      <Title className="center-text">Vi er Brusjan, brur!</Title>
      <Subtitle className="center-text">En litenbio kanskje..</Subtitle>
      <KontaktList listStyle="row" />
    </Wrapper>
    <Footer>
      <div className="container">
        <div className="row mobile">
          <div className="col col-6">
            <Address>
              <LineOne>Du finner oss i</LineOne>
              <LineTwo>Sandakerveien 52, 0477 Oslo</LineTwo>
            </Address>
          </div>
          <div className="col col-6">
            <SocialButtons>
              <SocialButton href="https://instagram.com">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </SocialButton>
              <SocialButton href="https://facebook.com">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </SocialButton>
            </SocialButtons>
          </div>
        </div>
      </div>
    </Footer>
  </Layout>
);

const Wrapper = styled.div`
  height: 100% !important;
  padding: 120px 48px !important;
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

const Footer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  background: black;
  z-index: 9999;
  color: white;
`;

const Address = styled.div``;

const LineOne = styled.div`
  font-size: 12px;
`;

const LineTwo = styled.div`
  font-size: 16px;
`;

const SocialButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SocialButton = styled.a`
  padding: 12px;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.25s;
  color: white !important;
  &:hover {
    background: white;
    color: black !important;
  }
`;

export default KontaktPage;
