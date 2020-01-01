import React from 'react'
import { Wrapper } from './styles'
import { Button } from 'components/common'


const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <Button
      as="a"
      href="https://github.com/wassuphq/wassup"
      target="_blank"
      title="View code on GitHub"
      rel="noopener noreferrer">
      View on GitHub
    </Button>
  </Wrapper>
)

export default NavbarLinks
