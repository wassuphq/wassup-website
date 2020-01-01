import React from 'react';
import secureIllustration from 'assets/illustrations/secure.svg';
import chartIllustration from 'assets/illustrations/chart.svg';
import likeIllustration from 'assets/illustrations/like.svg';
import { Container } from 'components/common';
import { Wrapper, CardsWrapper, Card, CardHeading, CardDescription, Thumbnail } from './styles';

export const Features = () => (
  <Wrapper>
    <CardsWrapper as={Container}>
      <Card>
        <CardHeading as="h3">Secure & Private</CardHeading>
        <Thumbnail>
          <img src={secureIllustration} alt="Secure" />
        </Thumbnail>
        <CardDescription>
          All your saved memories are visible to only you. There is no way to share it anyone else.
        </CardDescription>
      </Card>
      <Card>
        <CardHeading as="h3">Favorite Liked Memories</CardHeading>
        <Thumbnail>
          <img src={likeIllustration} alt="Secure" />
        </Thumbnail>
        <CardDescription>
          Easily favorite or unfavorite the memories to recap and reflect upon them in future.
        </CardDescription>
      </Card>
      <Card>
        <CardHeading as="h3">Detailed Charts</CardHeading>
        <Thumbnail>
          <img src={chartIllustration} alt="Secure" />
        </Thumbnail>
        <CardDescription>
          See patterns of how your mood has been changing over time with the help of detailed mood charts.
        </CardDescription>
      </Card>
    </CardsWrapper>
  </Wrapper>
);
