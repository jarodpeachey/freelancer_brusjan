import React, { useState } from 'react';
import { styled } from 'linaria/react';

const toggleHoverState = (hoverState, setHoverState) => {
  if (hoverState) {
    setHoverState(false);
  } else {
    setHoverState(true);
  }
};

const KontaktListItem = ({ link, item, listStyle, activeItem }) => {
  const [hoverState, setHoverState] = useState(false);
  return listStyle === 'row' ? (
    <Wrapper
      activeItem={activeItem}
      hover={hoverState}
      onMouseEnter={toggleHoverState.bind(null, hoverState, setHoverState)}
      onMouseLeave={toggleHoverState.bind(null, hoverState, setHoverState)}
      centered
      className="col col-6 tablet-col-4"
    >
      <a href={link}>
        <Name
          hover={hoverState}
          s
          activeItem={activeItem}
          centered={listStyle === 'center'}
        >
          {item.name}
        </Name>
        <Description activeItem={activeItem} centered={listStyle === 'center'}>
          {item.title}
        </Description>
      </a>
    </Wrapper>
  ) : (
    <a href={link} className="mobile-menu-item">
      <CondensedWrapper
        onMouseEnter={toggleHoverState.bind(null, hoverState, setHoverState)}
        onMouseLeave={toggleHoverState.bind(null, hoverState, setHoverState)}
        hover={hoverState}
        activeItem={activeItem}
      >
        <ListItemTitle centered={listStyle === 'center'}>
          {item.name}
        </ListItemTitle>
        <ListItemSubtitle centered={listStyle === 'center'}>
          {item.title}
        </ListItemSubtitle>
      </CondensedWrapper>
    </a>
  );
};

const Wrapper = styled.div`
  margin: 0 auto 36px auto;
  text-align: ${props => (props.centered ? 'center' : 'right')};
  font-weight: ${props => (props.hover || props.activeItem ? 'bold' : 'normal')};
  cursor: ${props => (props.hover ? 'pointer' : 'normal')};
  text-decoration: ${props => (props.activeItem ? 'line-through' : 'none')};
`;

const CondensedWrapper = styled.div`
  font-weight: ${props => (props.hover || props.activeItem ? 800 : 400)};
  cursor: ${props => (props.hover ? 'pointer' : 'normal')};
  margin-bottom: 39px;
`;

const ListItemTitle = styled.div`
  font-family: 'Obviously Extended';
  font-size: ${props => (!props.centered ? '36px' : '16px')};
  line-height: 30px;
  margin-bottom: 16px;
  @media (min-width: 569px) {
    font-family: 'Obviously Extended';
    font-size: ${props => (!props.centered ? '40px' : '20px')};
    line-height: 40px;
    margin-bottom: 16px;
  }
`;

const ListItemSubtitle = styled.div`
  font-family: 'Obviously Extended';
  font-size: ${props => (!props.centered ? '14px' : '14px')};
  line-height: 20px;
  margin-bottom: 16px;
  @media (min-width: 569px) {
    font-family: 'Obviously Extended';
    font-size: ${props => (!props.centered ? '16px' : '16px')};
    line-height: 18px;
    margin-bottom: 16px;
  }
`;

const Column = styled.div`
  text-align: center;
`;

const Name = styled.div`
  text-decoration: underline;
  font-family: ${props => (props.hover ? 'Obviously Extended' : 'Obviously')};
  line-height: 20px !important;
  font-size: 20px;
`;

const Description = styled.div`
  font-family: Obviously;
  line-height: 18px !important;
  font-size: 18px;
  text-decoration: none !important;
`;

export default KontaktListItem;
