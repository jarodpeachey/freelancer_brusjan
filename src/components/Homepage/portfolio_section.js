import React from 'react';
import { styled } from 'linaria/react';
import { CalTrackImage, WeVoteImageOne } from '../image';

const PortfolioSection = () => (
  <section className="bg-white section" id="portfolio">
    <div className="container">
      <h2 className="title">Portfolio</h2>
      <div className="row">
        <div className="col col-6 desktop-col-4">
          <PortfolioWrapper>
            <a
              href="https://caltrack.netlify.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <PortfolioImage>
                <CalTrackImage />
              </PortfolioImage>
            </a>
            <PortfolioTitle>CalTrack</PortfolioTitle>
            <PortfolioDescription>
              <p>
                CalTrack is an app I built using React, Redux and Material UI.
                {' '}
              </p>
              <p>
                {' '}
                It allows multiple users to sign up and track their meals and
                workouts. The data is collected and their calories gained/lost
                are displayed on the dashboard.
              </p>
            </PortfolioDescription>
            <PortfolioSkills>
              <PortfolioSkill>HTML</PortfolioSkill>
              <PortfolioSkill>CSS</PortfolioSkill>
              <PortfolioSkill>React</PortfolioSkill>
            </PortfolioSkills>
          </PortfolioWrapper>
        </div>
        <div className="col col-6 desktop-col-4">
          <PortfolioWrapper>
            <a
              href="https://wevote.us"
              rel="noopener noreferrer"
              target="_blank"
            >
              <PortfolioImage>
                <WeVoteImageOne />
              </PortfolioImage>
            </a>
            <PortfolioTitle>WeVote</PortfolioTitle>
            <PortfolioDescription>
              <p>
                At WeVote, I was responsible for the development and maintenance
                of a large single-page application using React and Flux.
              </p>
              <p>
                I updated 7+ pages to optimize the user experience based on
                designs from the team. I also browsed through codebase, removing
                +-10,000 lines of unnecessary code. I added over 16,000 lines of
                new features.
              </p>
            </PortfolioDescription>
            <PortfolioSkills>
              <PortfolioSkill>HTML</PortfolioSkill>
              <PortfolioSkill>CSS</PortfolioSkill>
              <PortfolioSkill>React</PortfolioSkill>
            </PortfolioSkills>
          </PortfolioWrapper>
        </div>
        <div className="col col-6 desktop-col-4">
          <PortfolioWrapper>
            <a
              href="https://wevote.us"
              rel="noopener noreferrer"
              target="_blank"
            >
              <PortfolioImage>
                <CalTrackImage />
              </PortfolioImage>
            </a>
            <PortfolioTitle>WeVote</PortfolioTitle>
            <PortfolioDescription>
              <p>
                At WeVote, I was responsible for the development and maintenance
                of a large single-page application using React and Flux.
              </p>
              <p>
                I updated 7+ pages to optimize the user experience based on
                designs from the team. I also browsed through codebase, removing
                +-10,000 lines of unnecessary code. I added over 16,000 lines of
                new features.
              </p>
            </PortfolioDescription>
            <PortfolioSkills>
              <PortfolioSkill>HTML</PortfolioSkill>
              <PortfolioSkill>CSS</PortfolioSkill>
              <PortfolioSkill>React</PortfolioSkill>
            </PortfolioSkills>
          </PortfolioWrapper>
        </div>
        <div className="col col-6 desktop-col-4">
          <PortfolioWrapper>
            <a
              href="https://wevote.us"
              rel="noopener noreferrer"
              target="_blank"
            >
              <PortfolioImage>
                <CalTrackImage />
              </PortfolioImage>
            </a>
            <PortfolioTitle>WeVote</PortfolioTitle>
            <PortfolioDescription>
              <p>
                At WeVote, I was responsible for the development and maintenance
                of a large single-page application using React and Flux.
              </p>
              <p>
                I updated 7+ pages to optimize the user experience based on
                designs from the team. I also browsed through codebase, removing
                +-10,000 lines of unnecessary code. I added over 16,000 lines of
                new features.
              </p>
            </PortfolioDescription>
            <PortfolioSkills>
              <PortfolioSkill>HTML</PortfolioSkill>
              <PortfolioSkill>CSS</PortfolioSkill>
              <PortfolioSkill>React</PortfolioSkill>
            </PortfolioSkills>
          </PortfolioWrapper>
        </div>
      </div>
    </div>
  </section>
);

const PortfolioWrapper = styled.div`
  position: relative;
  padding: 24px;
`;

const PortfolioImage = styled.div`
  position: relative;
  overflow: hidden;
  &::before {
    background: transparent;
    transition-duration: 5;
    display: block;
    min-height: 200px;
    height: 100%;
    width: 100%;
    content: '';
    z-index: 9;
    position: absolute;
  }
  &:hover::before {
    display: block;
    min-height: 200px;
    width: 100%;
    content: 'View Project';
    display: flex;
    align-items: center;
    color: white;
    font-size: 38px;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9;
    position: absolute;
  }
`;

const PortfolioTitle = styled.div`
  font-size: 28px;
  color: black;
  font-weight: bold;
  text-align: center;
  margin: 12px 0;
  @media(min-width: 576px) {
    font-size: 36px;
  }
`;

const PortfolioDescription = styled.div`
  text-align: center !important;
  font-weight: 500 !important;
  color: #666 !important;
`;

const PortfolioSkills = styled.div`
  margin-top: 16px;
`;

const PortfolioSkill = styled.div`
  padding: 4px 12px;
  margin: 8px;
  background: rgb(37, 72, 100);
  // border: 1px solid #ddd;
  display: inline-block;
  font-weight: bold;
  font-size: 12px;
  border-radius: 4px;
  color: white;
`;

export default PortfolioSection;
