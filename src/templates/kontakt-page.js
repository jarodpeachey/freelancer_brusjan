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
  height: 100vh !important;
  padding-top: 120px;
  margin: 0 auto;
  max-width: 569px;
`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 36px;
`;

const Name = styled.div`
  font-size: 90px;
  font-weight: 800;
  margin-bottom: 36px;
  @media(max-width: 400px) {
    font-size: 70px;
  }
`;

const Phone = styled.div`
  font-size: 20px;
`;

const Email = styled.div`
  font-size: 20px;
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
