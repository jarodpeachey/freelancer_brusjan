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
                subCategory
              }
              id
            }
          }
        }
      }
    `,
  );

  return (
    <>
      <CategoryTitle center={listStyle === 'center'}>Utvaigte-Filmer</CategoryTitle>
      {allSitePage.edges
        .filter(({ node }) => node.context.subCategory === 'utvaigte-filmer')
        .map(({ node }) => (
          <ArbeidListItem
            activeItem={node.context.slug === activeItem}
            listStyle={listStyle}
            item={node.context}
            link={`/arbeid/${node.context.slug}`}
          />
        ))}
      <CategoryTitle center={listStyle === 'center'}>KULTUR</CategoryTitle>
      {allSitePage.edges
        .filter(({ node }) => node.context.subCategory === 'kultur')
        .map(({ node }) => (
          <ArbeidListItem
            activeItem={node.context.slug === activeItem}
            listStyle={listStyle}
            item={node.context}
            link={`/arbeid/${node.context.slug}`}
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
  text-align: ${props => (props.center ? 'center' : 'right')};
  margin-bottom: 39px;
`;

export default ArbeidList;
