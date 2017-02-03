const React = require('react')
const debug = require('debug')('components:profile')
const { connect } = require('react-redux')
const request = require('superagent');

function Profile (props) {
  debug({props})
  const content = props.currentUser === Number(props.params.id)
    ? UserProfile(props.userInfo)
    : <p>Restricted</p>

  return (
    <div>
      {content}
    </div>
  )
}


module.exports = connect((state) => state)(Profile)

function UserProfile(user){
  console.log('userProfile', user.name);
  return (
    <div>
      Profile of {user.name}
    </div>
  )

}
