import React, { useState, useContext, createContext } from 'react'


import {
  Container,
  Title,
  Item,
  Inner,
  Header,
  Body,
} from './styles/faq'

const ToggleContext = createContext()

export default function Accordion({ children, ...restprops }) {
  return (
    <Container {...restprops}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Title = function AccordionTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>
}
Accordion.Item = function AccordionItem({ children, ...restprops }) {
  const [toggleShow, setToggleShow] = useState(false)
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restprops}>{children}</Item>
    </ToggleContext.Provider>
  )
}
Accordion.Header = function AccordionHeader({ children, ...restprops }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext)

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restprops}
    >
      {children}
      {toggleShow ? (
        <img src='/images/icons/close-slim.png' alt="close"></img>
      ): (
        <img src="/images/icons/add.png" alt="open"></img>
      )}
    </Header>
  )
}

Accordion.Body = function AccordionBody({ children, ...restprops }) {
  const { toggleShow } = useContext(ToggleContext)

  return toggleShow ? <Body {...restprops}>{children}</Body> : null
}
