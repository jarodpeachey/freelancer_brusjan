import React, { useState } from 'react';
import { styled } from 'linaria/react';
import { graphql, useStaticQuery } from 'gatsby';
import ListItem from './list-item';

const ArbeidList = ({ listStyle, activeItem }) => {
  console.log(activeItem);
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

  return (
    <>
      {allSitePage.edges.map(({ node }) => (
        <ListItem
          activeItem={node.context.slug === activeItem}
          listStyle={listStyle}
          name={node.context.name}
          title={node.context.fullTitle}
          link={`/arbeid/${node.context.slug}`}
        />
      ))}
    </>
  );
};

export default ArbeidList;
