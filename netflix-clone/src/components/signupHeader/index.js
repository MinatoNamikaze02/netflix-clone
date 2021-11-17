import React from 'react'
import { Container, Logo, Nav } from './styles/signup'

export default function SignUpHeader({ children,...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

SignUpHeader.logo = function SignUpHeaderLogo({...restProps}) {
  return <Logo {...restProps}></Logo>
}

SignUpHeader.Nav = function SignUpHeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>
}
