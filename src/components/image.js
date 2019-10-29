import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function withImageData (WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
        query {
          main_logo: file(relativePath: { eq: "brusjan_emblem.png" }) {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          main_logo_white: file(relativePath: { eq: "brusjan_emblem_white.png" }) {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          stock_image: file(relativePath: { eq: "stock_image.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          live_nation: file(relativePath: { eq: "live_nation.png" }) {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          oya: file(relativePath: { eq: "oya.png" }) {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          sony_music: file(relativePath: { eq: "sony_music.png" }) {
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
const MainLogoWhite = withImageData(props => (
  <Img fluid={props.imageData.main_logo_white.childImageSharp.fluid} />
));
const LiveNationImage = withImageData(props => (
  <Img fluid={props.imageData.live_nation.childImageSharp.fluid} />
));
const SonyMusicImage = withImageData(props => (
  <Img fluid={props.imageData.sony_music.childImageSharp.fluid} />
));
const OYAImage = withImageData(props => (
  <Img fluid={props.imageData.oya.childImageSharp.fluid} />
));

export { MainLogo, MainLogoWhite, LiveNationImage, SonyMusicImage, OYAImage };
