import React from 'react'
import Footer from '../content/signup/footer'
import Header from '../content/signup/header'
import '../content/assets/styles.css'
import Body from '../content/signup/body'
require('dotenv').config()

export default function Signup() {
  return (
    <div className='signup'>
      <Header />
      <Body />
      <div className='sign-up-footer-bg'>
        <Footer />
      </div>
    </div>
  )
}
