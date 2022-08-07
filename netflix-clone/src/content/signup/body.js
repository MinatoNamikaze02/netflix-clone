
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import '../assets/styles.css'
require('dotenv').config()

export default function Body() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPassError, setConfirmPassError] = useState(false)

  const history = useHistory()

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    if (!email) setEmailError(true)
    if (!password) setPasswordError(true)
    if (!confirmPass)setConfirmPassError(true)
      
    if (password !== confirmPass) {
      setConfirmPassError(true)
    }
    try {
      const { data } = await axios.post(`http://localhost:3001/api/register`, {
        email,
        password,
        photoURL: Math.floor(Math.random() * 5) + 1,
      })
      setEmail('')
      setPassword('')
      setConfirmPass('')
      history.push('/signin')
    } catch (error) {
      toast.error("Email ID already exists.")
    }
  }

  const handleEmailOnChange = (event) => {
    setEmail(event.target.value)
    setEmailError(false)
  }
  const handlePassOnChange = (event) => {
    setPassword(event.target.value)
    setPasswordError(false)
  }
  const handleConfirmPassOnChange = (event) => {
    setConfirmPass(event.target.value)
    setConfirmPassError(false)
  }

  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleFormSubmit} className='signup-form'>
        <div className='signup-form-container'>
          <div className='signup-header-container'>
            <span className='sign-up-step-indicator'>
              STEP <b>1</b> OF <b>3</b>
            </span>
            <h1 className='sign-up-welcome-back'>
              Welcome back!
              <br />
              Rejoining Netflix is easy.
            </h1>
          </div>
          <p className='sign-up-enter-email-pass'>
            Sign up with your details and you'll be watching in no time.
          </p>
          <div className='sign-up-form-inp'>
            <p>Email</p>
            <input
              onChange={handleEmailOnChange}
              className={emailError ? 'sign-up-input-error' : 'sign-up-input'}
              placeholder='Enter your email'
              type='email'
            />
            {emailError ? <p className='sign-up-error'>field missing</p> : null}
            <p>Password</p>
            <input
              onChange={handlePassOnChange}
              className={
                passwordError ? 'sign-up-input-error' : 'sign-up-input'
              }
              placeholder='Enter your password'
              //type='password'
            />
            {passwordError ? (
              <p className='sign-up-error'>field missing</p>
            ) : null}
            <p>Confirm password</p>
            <input
              onChange={handleConfirmPassOnChange}
              className={
                confirmPassError ? 'sign-up-input-error' : 'sign-up-input'
              }
              placeholder='Re-enter your password'
              //type='password'
            />
            {confirmPassError ? (
              confirmPass !== password ? (
                <p className='sign-up-error'>Passwords don't Match</p>
              ) : (
                <p className='sign-up-error'>Field is empty</p>
              )
            ) : null}
            <div className='sign-up-forgot-pass-container'>
              <a className='sign-up-forgot-pass' href='#'>
                Forgot your Password?
              </a>
            </div>
            <div>
              <button
                className='signup-submit-button'
                type='submit'
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
