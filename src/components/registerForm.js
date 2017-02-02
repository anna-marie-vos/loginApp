const debug = require('debug')('components:loginForm')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent');


class registerForm extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch } = this.props

    return(
      <div>
        <form>
          <p>Username:</p><input type='text' ref='name' placeholder='name' />
          <p>Email:</p><input type='text' ref='email' placeholder='email' />
          <p>Password:</p><input type='password' ref='password' placeholder='password'/>
          <p></p>
          <button onClick={this.handleClick.bind(this)} className='button'>log In</button>
        </form>
      </div>
    )
  }

  handleClick(e){
    //by default button onClicks will want to refresh the page and eventListener
    e.preventDefault()
    console.log('refs', this.refs.email.value);
    const name = this.refs.name.value
    const email = this.refs.email.value
    const password = this.refs.password.value

    request.post('api/v1/register')
    .send({email,password, name})
    .end((err,response)=>{
      if(err){
        console.log('error in registerform', err);
      } else{
        console.log('response.body',response.body);
        this.props.router.push(`/profile`)
      }
    })
  }


}

module.exports = connect((state) => state)(registerForm)
