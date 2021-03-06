// logging
const debug = require('debug')('index')
localStorage.debug = '*'

// modules
const request = require('superagent')
const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const { MuiThemeProvider } = require('material-ui/styles')
// const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const reducer = require('./reducer')
const initialState = require('../state')

// top level components
const App = require('./components/app')
const Profile = require('./components/profile')
const LoginForm = require('./components/loginForm')
const RegisterForm = require('./components/registerForm')


const store = createStore(reducer, initialState)

const Root = ({store}) => {
  return (
    <MuiThemeProvider>
      <Provider store={store} >
        <Router history={hashHistory} >
          <Route path="/" component={App} store={store}>
            <Route path='/login' component={LoginForm} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/:id/profile' component={Profile} />
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
}


document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')
    ReactDOM.render(
      <Root store={store}/>,
      root
    )
    request('/api/v1/:id/profile',function(err,res){
      store.dispatch({type:'USER_PROFILE', payload:res.body})
    })
})
