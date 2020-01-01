import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'components/common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, LogoWrapper } from './styles'
import darkLogo from 'assets/logo-dark.png'

const Navbar = () => (
  <Wrapper as={Container}>
    <LogoWrapper>
      <Link to="/"><img src={darkLogo} /></Link>
    </LogoWrapper>
    <NavbarLinks desktop />
  </Wrapper>
)

export default Navbar
