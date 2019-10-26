import React, { useState } from 'react';
import { styled } from 'linaria/react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import ListItem from '../components/list-item';

const setBodyBlurState = (setBlurState, blurState) => {
  if (blurState) {
    setBlurState(false);
  } else {
    setBlurState(true);
  }
};

const ArbeidPage = ({ data }) => {
  const [blurState, setBlurState] = useState(false);

  const listItems = [
    {
      title: 'Snow Boyz',
      subtitle: 'Musikkvideo - "Grov Shit"',
      link: 'https://google.com',
    },
    {
      title: '"Wanted" Diplom - Is',
      subtitle: 'for We Are Live',
      link: 'https://google.com',
    },
    {
      title: 'Kjartan Lauritzen',
      subtitle: 'Musikkvideo - "Pappa"',
      link: 'https://google.com',
    },
    {
      title: 'Vin & Rap',
      subtitle: 'Ymse episodar',
      link: 'https://google.com',
    },
    {
      title: '"Ramm & Tornquist redder Norge"',
      subtitle: 'TV2 innslag',
      link: 'https://google.com',
    },
    {
      title: 'Fanny Andersen',
      subtitle: '*placeholder text*',
      link: 'https://google.com',
    },
  ];

  return (
    <Layout>
      <Header
        className={blurState ? 'blur' : ''}
        siteTitle="Brusjan"
        setBodyBlurState={setBodyBlurState.bind(null, setBlurState, blurState)}
      />
      <SEO title="Arbeid" />
      {/* <Background>
      HELLO THERE
    </Background> */}
      <Wrapper className={blurState ? 'wrapper-blur' : ''}>
        <Container className="container">
          {listItems.map(item => (
            <ListItem
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
            />
          ))}
        </Container>
      </Wrapper>
    </Layout>
  );
};

const Container = styled.div`
  max-width: 569px !important;
`;

const Wrapper = styled.div`
  height: 100vh !important;
  width: 100% !important;
  background: white;
  padding: 120px 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: black;
    z-index: 9999;
    border-radius: 50px;
  }
`;

export default ArbeidPage;
