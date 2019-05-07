import React, { Component } from 'react'
import { Link } from "react-router-dom"
import img from '../../img/Q3+Partners_1.png'
import { withProvider } from '../../context'
import { withRouter } from 'react-router-dom'
class Login extends Component {
  state = {
    email: "",
    password: "",
  }
onChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}
  onSubmit = (e) => {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(user).then((res) => this.props.history.push('/landing'))
  }

  render() {
    return (
      <div className="login">
        <div className="banner mx-auto justify-content-center">
        <div style={{width: '500px', height: '300px'}}>
        <img src={img} alt="" className="img-fluid"></img>
        </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
        <div className=" card lgcontainer d-flex justify-content-center pb-3 pt-3">
            <div className="ml-4 mr-4">
            <form onSubmit={this.onSubmit}>
                <label className="d-block">Email</label>
                <input name="email" value={this.state.email} style={{width: '300px', height: '40px'}} onChange={this.onChange}></input>
                <label className="d-block">Password</label>
                <input type="password" name="password" value={this.state.password} style={{width: '300px', height: '40px'}} onChange={this.onChange}></input>
                <button className="lgbutton btn btn-block mt-4">Login</button>
                <div className="d-flex justify-content-center">
                <Link to="/register"><button className="btn btn-outline-dark mt-2">Register</button></Link>
                </div>
            </form>
            </div>
            
        </div>
        </div>


        
      </div>
    )
  }
}


export default withRouter(withProvider(Login))