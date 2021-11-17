import React, { useState } from 'react'
import '../assets/styles.css'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import logo from '../../logo.svg'
import { regex } from '../../constants/regex'

export default function Header({ page }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const history = useHistory()
  const handleSubmitMain = () => {
    if (!email) {
      setError(true)
      toast.error('Email field in empty!')
      return
    }

    if (!regex.test(String(email).toLocaleLowerCase())) {
      console.log('Invalid Email')
      toast.error('Enter a valid Email')
      return
    }
    history.push({
      pathname: '/signin',
      state: { email: email },
    })
  }

  return (
    <div className='bg'>
      <div className='frame'>
        <img className='logo' src={logo} alt='netflix' />
        <a className='buttonLink' href='/signin'>
          Sign In
        </a>
      </div>
      <>
        <div className='outer'>
          <h1 className='outertitle'>
            Unlimited films, TV programmes and more.
          </h1>
          <h2 className='outersubtitle'>Watch anywhere. Cancel at any time.</h2>
        </div>
        <div className='form-container'>
          <input
            onChange={({ target }) => {
              setError(false)
              setEmail(target.value)
            }}
            className={error? 'form-input-error' :'form-input'}
            placeholder='Email Address'
            type='email'
          />
          <button onClick={handleSubmitMain} className='form-button'>
            Try it Now!
            <img src='/images/icons/chevron-right.png' alt='Try Now'></img>
          </button>
        </div>
        {error && <div className="error-text-home">
          <p>Field is Empty</p>
        </div>}
        <p className='form-text'>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </>
      )
    </div>
  )
}
