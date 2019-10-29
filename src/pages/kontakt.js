import React from 'react';
import { styled } from 'linaria/react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
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
      <Container className="container">
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
                <FaInstagram />
              </SocialButton>
              <SocialButton href="https://facebook.com">
                <FaFacebookF />
              </SocialButton>
            </SocialButtons>
          </div>
        </div>
      </Container>
    </Footer>
  </Layout>
);

const Wrapper = styled.div`
  height: 100% !important;
  padding: 50px 0 64px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  font-family: 'Obviously Extended';
  line-height: 40px;
  @media (min-width: 569px) {
    font-size: 40px;
    font-weight: bold;
    line-height: 50px;
  }
`;

const Subtitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 140px;
  font-family: 'Obviously';
  line-height: 20px;
`;

const Container = styled.div`
  padding-bottom: 12px;
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
  line-height: 16px;
`;

const LineTwo = styled.div`
  font-size: 16px;
  line-height: 16px;
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
