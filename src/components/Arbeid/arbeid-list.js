import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { styled } from 'linaria/react';
import ArbeidListItem from './arbeid-list-item';

const ArbeidList = ({ listStyle, activeItem }) => {
  const { allSitePage } = useStaticQuery(
    graphql`
      query {
        allSitePage(filter: { context: { fullTitle: { regex: "" } } }) {
          edges {
            node {
              context {
                fullTitle
                shortTitle
                name
                slug
              }
              id
            }
          }
        }
      }
    `,
  );

  console.log(
    allSitePage.edges.filter(
      ({ node }) => node.context.slug,
    ),
  );

  return (
    <>
      <CategoryTitle>Test</CategoryTitle>
      {allSitePage.edges
        .filter(({ node }) => node.context.tag === 'utvaigte-filmer')
        .map(item => (
          <ArbeidListItem
            activeItem={item.context.slug === activeItem}
            listStyle={listStyle}
            item={item.context}
            link={`/arbeid/${item.context.slug}`}
          />
        ))}
    </>
  );
};

const CategoryTitle = styled.div`
  font-family: 'Obviously';
  font-weight: bold;
  lin-height: 20px;
  font-size: 14px;
`;

export default ArbeidList;
