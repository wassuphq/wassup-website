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
    <a href="https://www.producthunt.com/posts/wassup-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-wassup-2" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=179602&theme=light" alt="Wassup - Keep your memories & emotions together | Product Hunt Embed" style={{width: 180, height: 41, margin: 0, padding: 0}} width="180px" height="41px" /></a>
  </Wrapper>
)

export default NavbarLinks
