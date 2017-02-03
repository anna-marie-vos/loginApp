const React = require('react')
const debug = require('debug')('components:profile')
const { connect } = require('react-redux')
const request = require('superagent');

function Profile (props) {
  debug({props})
  const content = props.currentUser === Number(props.params.id)
    ? <p>Hello</p>
    : <p>Restricted</p>

  return (
    <div>
      {content}
    </div>
  )
}


module.exports = connect((state) => state)(Profile)
