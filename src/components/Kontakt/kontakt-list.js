import React from 'react';
import { styled } from 'linaria/react';
import { graphql, useStaticQuery } from 'gatsby';
import KontaktListItem from './kontakt-list-item';

const KontaktList = ({ listStyle, activeItem }) => {
  const { allSitePage } = useStaticQuery(
    graphql`
      query {
        allSitePage(filter: { context: { email: { regex: "" } } }) {
          edges {
            node {
              context {
                email
                phone
                name
                slug
                title
              }
              id
            }
          }
        }
      }
    `,
  );

  return (listStyle === 'row' ? (
    <Row className="row mobile-lg">
      {allSitePage.edges.map(({ node }) => (
        <KontaktListItem
          activeItem={node.context.slug === activeItem}
          listStyle={listStyle}
          item={node.context}
          link={`/kontakt/${node.context.slug}`}
        />
      ))}
    </Row>
  ) : (
    <>
      {allSitePage.edges.map(({ node }) => (
        <KontaktListItem
          activeItem={node.context.slug === activeItem}
          listStyle={listStyle}
          item={node.context}
          link={`/kontakt/${node.context.slug}`}
        />
      ))}
    </>
  ));
};

const Row = styled.div`
  margin-top: 64px;
`;

export default KontaktList;
