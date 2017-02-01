const debug = require('debug')('components:loginForm')
const React = require('react')

const { connect } = require('react-redux')


const loginForm = (props) => {
  debug({props})

  return (
    <div>
      <form>
        <p>Email:</p><input type='email' ref='email' placeholder='email' />
        <p>Password:</p><input type='password' ref='password' placeholder='password'/>
        <p></p>
        <button className='button'>log In</button>
      </form>
    </div>
  )
}

module.exports = connect((state) => state)(loginForm)
