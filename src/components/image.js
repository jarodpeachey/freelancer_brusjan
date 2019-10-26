import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function withImageData (WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
        query {
          main_logo: file(relativePath: { eq: "main_logo_transparent.png" }) {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <WrappedComponent {...props} imageData={data} />}
    />
  );
}

const MainLogo = withImageData(props => (
  <Img fluid={props.imageData.main_logo.childImageSharp.fluid} />
));

export { MainLogo };
