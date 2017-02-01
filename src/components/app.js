const debug = require('debug')('components:app')
const _ = require('lodash')
const React = require('react')

const { connect } = require('react-redux')
const { AppBar } = require('material-ui')
const { Link } = require('react-router')

const App = (props) => {
  debug({props})

  return (
    <div>
      <Link to="/profile">
        <button onClick={()=> dispatch(renderPic(1))} >
          Button One
        </button>
      </Link>
      {props.children}
      <Link to="/">
        <button >
          back
        </button>
      </Link>
    </div>
  )
}

module.exports = connect((state) => state)(App)

function renderPic(id){
  return {type:'RENDER_PIC1', payload: id}
}
