import React from 'react'
import { Link } from 'gatsby'
import Nav from './nav'
import styled from '@emotion/styled'

const Container = styled.div`
  ${tw`bg-grey-lightest px-32 py-8`};
`
const Title = styled.h1`
  ${tw`text-grey-darkest m-0`};
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-inherit`};
`

const Header = ({ siteTitle }) => (
  <Container>
    <StyledLink to="/">
      <Title>{siteTitle}</Title>
    </StyledLink>
    <Nav/>
  </Container>
)

export default Header
