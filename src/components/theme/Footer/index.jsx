import React from 'react';
import { Container } from 'components/common';
import logoWithTaglineDark from 'assets/logo-with-tagline-dark.png';
import { Wrapper, Flex, Links, Details, FooterLogo } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <FooterLogo as="img" src={logoWithTaglineDark} />
    <Flex as={Container}>
      <Details>
        <span>
          Copyright Wassup © 2020, All rights reserved
          <span style={{ display: 'block' }}>
            Made with{' '}
            <span aria-label="love" role="img">
              💜
            </span>{' '}
            in India
          </span>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
