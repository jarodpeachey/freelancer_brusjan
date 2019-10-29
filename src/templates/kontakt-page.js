import React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'linaria/react';
import Layout from '../components/Layout/layout';
import KontaktList from '../components/Kontakt/kontakt-list';

export default ({ data }) => {
  const item = data.allSitePage.edges[0].node.context;

  return (
    <Layout
      dark
      title="Kontakt"
      pageIndicatorLink
      subMenu={{
        text: 'Folka',
        component: <KontaktList activeItem={item.slug} listStyle="right" />,
      }}
    >
      <Wrapper className="container">
        <Title>{item.title}</Title>
        <Name>{item.name}</Name>
        <Email>
          <strong>E: </strong>
          {item.email}
        </Email>
        <Phone>
          <strong>T: </strong>
          {item.phone}
        </Phone>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  height: 100% !important;
  padding: 50px 0 64px;
  margin: 0 auto;
  max-width: 769px;
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 18px;
  margin-bottom: 67px;
`;

const Name = styled.div`
  font-family: 'Obviously Extended';
  font-size: 90px;
  line-height: 80px;
  font-weight: bold;
  @media (max-width: 400px) {
    font-size: 70px;
  }
  margin-bottom: 67px;
`;

const Phone = styled.div`
  font-family: 'Obviously Extended';
  font-size: 20px;
  line-height: 18px;
`;

const Email = styled.div`
  font-family: 'Obviously Extended';
  font-size: 20px;
  line-height: 18px;
  margin-bottom: 16px;
`;

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
            title
            email
            phone
            slug
          }
        }
      }
    }
  }
`;
