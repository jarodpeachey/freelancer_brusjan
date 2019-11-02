import React, { useState } from 'react';
import { styled } from 'linaria/react';

const toggleHoverState = (hoverState, setHoverState) => {
  if (hoverState) {
    setHoverState(false);
  } else {
    setHoverState(true);
  }
};

const ArbeidListItem = ({ item, link, listStyle, activeItem }) => {
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
          {item.name}
        </ListItemTitle>
        <ListItemSubtitle
          activeItem={activeItem}
          centered={listStyle === 'center'}
        >
          {item.fullTitle}
        </ListItemSubtitle>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto 39px auto;
  height: fit-content;
  width: 100%;
  text-align: ${props => (props.centered ? 'center' : 'right')};
  font-weight: ${props => (props.hover || props.activeItem ? 'bold' : 'normal')};
  & a {
    color: black !important;
    text-decoration: none !important;
  }
  text-decoration: ${props => (props.activeItem ? 'line-through' : 'none')};
`;

const ListItemTitle = styled.div`
  font-size: ${props => (props.centered ? '30px' : '18px')};
  font-family: Obviously Extended;
  line-height: ${props => (props.centered ? '32px' : '16px')};
  @media (min-width: 569px) {
    font-size: ${props => (props.centered ? '40px' : '20px')};
    font-family: Obviously Extended;
    line-height: ${props => (props.centered ? '38px' : '18px')};
  }
`;

const ListItemSubtitle = styled.div`
  font-size: ${props => (props.centered ? '14px' : '14px')};
  line-height: ${props => (props.centered ? '18px' : '16px')};
  font-family: Obviously;
  @media (min-width: 569px) {
    font-size: ${props => (props.centered ? '16px' : '16px')};
    line-height: ${props => (props.centered ? '20px' : '18px')};
  }
`;

export default ArbeidListItem;
