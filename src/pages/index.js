import React, { useState } from 'react';
import { styled } from 'linaria/react';
import Layout from '../components/Layout/layout';
import { MainLogo, MainLogoWhite } from '../components/image';

const IndexPage = ({ data }) => {
  const [splashScreenVisible, setSplashScreen] = useState(true);

  const setSplashScreenShow = () => {
    setSplashScreen(false);
  };

  return (
    <>
      {splashScreenVisible ? (
        <SplashScreenWrapper onMouseDown={setSplashScreenShow}>
          <SplashScreenWrapperInside className="splash-screen" />
        </SplashScreenWrapper>
      ) : (
        <Layout>
          <Wrapper>
            <InsideWrapper className="background-wrapper" />
          </Wrapper>
        </Layout>
      )}
    </>
  );
};

const Wrapper = styled.div`
  height: 100% !important;
  // margin-top: -94px;
  width: 100%;
`;

const InsideWrapper = styled.div`
  height: 519px !important;
  max-width: 488px;
  margin: 0 auto;
`;

const SplashScreenWrapperInside = styled.div`
  height: 100vh !important;
  margin: 0 auto;
  max-width: 488px;
  width: 488px;
`;

const SplashScreenWrapper = styled.div`
  background: black;
  height: 100vh !important;
`;

export default IndexPage;
