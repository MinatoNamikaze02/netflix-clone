import React from 'react'
import '../content/assets/styles.css'
import Header from '../content/home/header'
import Median from '../content/home/median'
import FAQ from '../content/home/faq'
import Footer from '../content/home/footer'

function Home() {

  return (
    <>
      <Header page={window.location.pathname}/>
      <Median />
      <FAQ />
      <Footer/>
    </>
  )
}

export default Home
