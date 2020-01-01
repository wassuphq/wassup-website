import React from 'react';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import coverImage from 'assets/illustrations/cover.png';
import { Wrapper, IntroWrapper, Details, Thumbnail, Lead } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>
          <span style={{ display: 'none' }}>Wassup - </span>
          Save your memories &amp; emotions
        </h1>
        <Lead>
          A privacy-first open-source personal assistant to help keep your personal memories and emotions together.
        </Lead>
        <p>
          <small>
            <em>* Hosted version coming soon.</em>
          </small>
        </p>
      </Details>
      <Thumbnail>
        <img src={coverImage} alt="cover" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
