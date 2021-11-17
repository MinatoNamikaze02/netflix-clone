import React, { useContext, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import '../assets/styles.css'
import logo from '../../logo.svg'
import { UserContext } from '../../context'

export default function Header() {
  let email
  const history = useHistory()
  const location = useLocation()
  if(location.state){
    email = location.state.email
    console.log(email)
  }else{
    email = ''
  }
  const [emailAddress, setEmailAddress] = useState(email)
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  

  const [state, setState] = useContext(UserContext)

  const handleSignIn = async (event) => {
    event.preventDefault()
    if (!emailAddress) setEmailError(true)
    if(!passwordError) setPasswordError(true)
    try {
      const { data } = await axios.post(`http://localhost:3001/api/login`, {
        emailAddress,
        password,
      })
      setState({
        user: data.user,
        token: data.token,
      })
      window.localStorage.setItem('auth', JSON.stringify(data))
      history.push('/main')
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }

  return (
    <>
      <div className='bg'>
        <div className='frame'>
          <img className='logo' src={logo} alt='netflix' />
        </div>
        <div className='sign-in-container'>
          <h1 className='sign-in-title'>Sign In</h1>
          <form className='sign-in-base' onSubmit={handleSignIn} method='POST'>
            <input
              className='sign-in-input'
              placeholder='Email'
              value={emailAddress}
              onChange={({ target }) => {
                setEmailAddress(target.value)
                setEmailError(false)
              }}
            />
            {emailError && <p className="sign-in-email-error">Field Empty</p>}
            <input
              
              className='sign-in-input'
              type='password'
              autoComplete='off'
              placeholder='Password'
              value={password}
              onChange={({ target }) => {
                setPassword(target.value)
                setPasswordError(false)
              }}
            />
            {passwordError && <p className="sign-in-email-error">Field Empty</p>}
            <button className='sign-in-button' disabled={false} type='submit'>
              Sign In
            </button>
          </form>
          <p className='sign-in-text'>
            New to Netflix?{' '}
            <a className='sign-in-link' href='/signup'>
              Sign Up Now!
            </a>
          </p>
          <p className='sign-in-smallText'>
            This is protected by Google reCAPTCHA to ensure you're not a bot.
            <a className='sign-in-learn-more' href='/more'>
              {' '}
              Learn More
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
