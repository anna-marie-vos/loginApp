const debug = require('debug')('components:loginForm')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent');




class loginForm extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch } = this.props

    return(
      <div>
        <form>
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
    const email = this.refs.email.value
    const password = this.refs.password.value

    request.post('api/v1/login')
    .send({email,password})
    .end((err,response)=>{
      if(err){
        console.log('error in loginform', err);
      } else{
        const id = response.body.user.id
        const user = response.body.user
        console.log('response', response);
          this.props.dispatch({type:'USER_PROFILE', payload:user})
        this.props.router.push(`/${id}/profile`)
      }
    })
  }


}

module.exports = connect((state) => state)(loginForm)
