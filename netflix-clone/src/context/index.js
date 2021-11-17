import { useState, createContext, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const history = useHistory()
  const [state, setState] = useState({
    user: {},
    token: '',
  })

  axios.interceptors.response.use(
    (response) => response,

    (error) => {
      let res = error.response
      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        setState(null)
        window.localStorage.removeItem('auth')
        history.push('/signin')
      }
    }
  )

  useEffect(() => {
    setState(JSON.parse(window.localStorage.getItem('auth')))
  }, [])

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
