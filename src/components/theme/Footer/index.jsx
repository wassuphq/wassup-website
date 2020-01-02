import React from 'react';
import { Container, Button } from 'components/common';
import logoWithTaglineDark from 'assets/logo-with-tagline-dark.png';
import { Wrapper, Flex, Links, Details, FooterLogo, FooterLogoWrapper } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <MailListForm />
    <FooterLogoWrapper>
      <FooterLogo as="img" src={logoWithTaglineDark} />
    </FooterLogoWrapper>
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

const MailListForm = () => (
  <div>
    <div id="mc_embed_signup">
      <form
        action="https://wassuphq.us4.list-manage.com/subscribe/post?u=54d104fa8627a2687dcea0f90&amp;id=c62b9bee1a"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <p>Get all future updates and announcements from us delivered to your inbox.</p>
        <div id="mc_embed_signup_scroll">
          <input
            type="email"
            defaultValue=""
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            placeholder="Your Email Address"
            required
          />
          <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
            <input type="text" name="b_54d104fa8627a2687dcea0f90_c62b9bee1a" tabIndex={-1} value="" />
          </div>
          <div className="clear">
            <Button
              as="input"
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
);
