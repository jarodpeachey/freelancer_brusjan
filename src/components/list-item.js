import React, { useState } from 'react';
import { styled } from 'linaria/react';

const toggleHoverState = (hoverState, setHoverState) => {
  if (hoverState) {
    setHoverState(false);
  } else {
    setHoverState(true);
  }
};

const ListItem = ({ title, subtitle, link, listStyle, activeItem}) => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <Wrapper
      activeItem={activeItem}
      hover={hoverState}
      onMouseEnter={toggleHoverState.bind(null, hoverState, setHoverState)}
      onMouseLeave={toggleHoverState.bind(null, hoverState, setHoverState)}
      centered={listStyle === 'center'}
    >
      <a href={link}>
        <ListItemTitle
          activeItem={activeItem}
          centered={listStyle === 'center'}
        >
          {title}
        </ListItemTitle>
        <ListItemSubtitle
          activeItem={activeItem}
          centered={listStyle === 'center'}
        >
          {subtitle}
        </ListItemSubtitle>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto 36px auto;
  width: 100%;
  text-align: ${props => (props.centered ? 'center' : 'right')};
  font-weight: ${props => (props.hover || props.activeItem ? 800 : 500)};
  cursor: ${props => (props.hover ? 'pointer' : 'normal')};
  & a {
    color: black !important;
    text-decoration: none !important;
  }
  text-decoration: ${props => (props.activeItem ? 'line-through' : 'none')};
`;

const ListItemTitle = styled.div`
  font-size: ${props => (props.centered ? '40px' : '20px')};
`;

const ListItemSubtitle = styled.div`
  font-size: ${props => (props.centered ? '16px' : '16px')};
`;

export default ListItem;
