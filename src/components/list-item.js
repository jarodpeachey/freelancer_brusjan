import React, { useState } from 'react';
import { styled } from 'linaria/react';

const toggleHoverState = (hoverState, setHoverState) => {
  if (hoverState) {
    setHoverState(false);
  } else {
    setHoverState(true);
  }
};

const ListItem = ({ title, subtitle, link }) => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <Wrapper
      hover={hoverState}
      onMouseEnter={toggleHoverState.bind(null, hoverState, setHoverState)}
      onMouseLeave={toggleHoverState.bind(null, hoverState, setHoverState)}
    >
      <a href={link}>
        <ListItemTitle>{title}</ListItemTitle>
        <ListItemSubtitle>{subtitle}</ListItemSubtitle>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 36px auto;
  width: 100%;
  text-align: center;
  font-weight: ${props => (props.hover ? 800 : 500)};
  cursor: ${props => (props.hover ? 'pointer' : null)};
  & a {
    color: black !important;
    text-decoration: none !important;
  }
`;

const ListItemTitle = styled.div`
  font-size: 40px;
`;

const ListItemSubtitle = styled.div`
  font-size: 16px;
`;

export default ListItem;
