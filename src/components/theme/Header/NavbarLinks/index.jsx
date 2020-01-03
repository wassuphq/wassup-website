import React from 'react';
import { Button } from 'components/common';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <a
      href="https://www.producthunt.com/posts/wassup-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-wassup-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=179602&theme=light"
        alt="Product Hunt Embed"
        style={{ width: 180, height: 41, margin: 0, padding: 0 }}
        width="180px"
        height="41px"
      />
    </a>
    <Button
      as="a"
      href="https://github.com/wassuphq/wassup"
      target="_blank"
      title="View code on GitHub"
      rel="noopener noreferrer"
    >
      View on GitHub
    </Button>
    <Button
      as="a"
      href="https://demo.wassuphq.com/login"
      target="_blank"
      title="Checkout the live demo of Wassup"
      rel="noopener noreferrer"
    >
      <strong>Live Demo</strong>
    </Button>
  </Wrapper>
);

export default NavbarLinks;
