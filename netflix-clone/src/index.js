import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Home, Signin, Signup, Main } from './pages'
import 'normalize.css'
import { GlobalStyles } from '../src/global-styles'
import { UserProvider } from './context'

ReactDOM.render(
  <UserProvider>
    <Router>
      <>
        <Switch>
          <Route exact path='/'>
            <Home />
            <GlobalStyles />
          </Route>
          <Route exact path='/signin'>
            <Signin />
            <GlobalStyles />
          </Route>
          <Route exact path='/main'>
            <Main />
            <GlobalStyles />
          </Route>
          <Route exact path='/main/profiles'>
            <Main />
            <GlobalStyles />
          </Route>
        </Switch>
      </>
      <Switch>
        <Route exact path='/signup'>
          <Signup />
        </Route>
      </Switch>
    </Router>
  </UserProvider>,
  document.getElementById('root')
)
