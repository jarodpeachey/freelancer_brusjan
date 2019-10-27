import React, { useState } from 'react';
import { styled } from 'linaria/react';
import { graphql, useStaticQuery } from 'gatsby';
import ListItem from './list-item';

const ArbeidList = ({ listStyle, activeItem }) => {
  console.log(activeItem);
  const { allSitePage } = useStaticQuery(
    graphql`
      query {
        allSitePage(filter: { context: { title: { regex: "" } } }) {
          edges {
            node {
              context {
                title
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
          title={node.context.name}
          subtitle={node.context.title}
          link={`/arbeid/${node.context.slug}`}
        />
      ))}
    </>
  );
};

export default ArbeidList;
