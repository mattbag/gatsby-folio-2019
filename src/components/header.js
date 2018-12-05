import React from 'react'
import { Link } from 'gatsby'
import Nav from './nav'
import styled from '@emotion/styled'

const Container = styled.div`
  ${tw`px-32 py-8 fixed w-screen pin-b`};
  z-index:1;
`
const Topbar = styled.div`
  ${tw`px-32 max-w-lg mx-auto py-2 text-white`};
  ul{
    display:flex;
    margin:0;
    padding:0;
    justify-content:space-around;
    list-style:none;
    li{
      margin:0 3px;
    }
  }
`
const Title = styled.h1`
  ${tw`text-grey-darkest m-0`};
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-inherit`};
`

const Header = ({ siteTitle }) => (
  <Container>
    {/* <StyledLink to="/">
      <Title>{siteTitle}</Title>
    </StyledLink> */}

    <Topbar>
      <ul>
        <li><a href="" target="_blank" rel="noreferrer nofollow">Github</a></li> 
        <li><a href="" target="_blank" rel="noreferrer nofollow">Twitter</a></li>
        <li><a href="" target="_blank" rel="noreferrer nofollow">LinkedIn</a></li>
        <li><a href="" target="_blank" rel="noreferrer nofollow">Email</a></li>
      </ul>
    </Topbar>
    <Nav />
  </Container>
)

export default Header
