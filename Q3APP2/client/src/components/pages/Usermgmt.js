import React, { Component } from 'react'
import { withProvider } from '../../context'
import Navbar from '../Navbar'

class Usermgmt extends Component {
    state= {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        permission: "",
        confirmPW: false,
        newUserAdded: []
    }

    componentDidUpdate(){
       return ( 
       this.state.newUserAdded
       )
    }

    componentDidMount(){
        this.props.getAllUsers()
        // displayUsers()
    }

   onChange = (e) => {
       this.setState({
        [e.target.name]: e.target.value
       })
   }

   onSubmit = () => {
       
    const newUser = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
        permission: this.state.permission
    }
    const login = login
  this.props.registerUser(newUser).then(() => this.setState({
    newUserAdded: newUser,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    permission: ""
}))
}
 

       
   

  render(props) {
      console.log(this.props.allUsers)
    const users = !!this.props.allUsers && this.props.allUsers.map(user => {
        return (<>
                    <tr className="mt-2" key={user}>
                        <td className="pr-5">{user.firstName + " " + user.lastName}</td>
                        <td className="pr-5">{user.email}</td>
                        <td className="pr-5">{user.date.slice(0,10)}</td>
                        <td className="pr-5"><strong>{user.permission}</strong></td>
                        <td className="pr-5" style={user.isActive ? {color: "green"} : {color: "red"}}>{user.isActive ? "Active" : "InActive"}</td>
                        <td><button className="btn btn-outline-info mr-3">Edit</button></td>
                        <td><button className="btn btn-light btn-outline-dark text-dark mr-3">Disable</button></td>
                        <td><button className="btn btn-danger" onClick={() => this.props.deleteUser(user._id)}>Delete</button></td>
                    </tr>
                </>
        )    
})
    
    
    return (
      <>
        <Navbar/>
        <div className="usermgmt pt-3">
        <div className="d-flex justify-content-between col-sm-12">
        <div className="ml-5">
        <span style={{fontSize: 20}} className="border border-outline-light">Add New User</span>
        <div className="mt-3 row">
        <div>
        <label>First Name</label>
        <input onChange={this.onChange} name="firstName" value={this.state.firstName} className="mr-3"></input>
        <label>Last Name</label>
        <input onChange={this.onChange} name="lastName" value={this.state.lastName} className="mr-3"></input>
        <label>Email</label>
        <input onChange={this.onChange} name="email" value={this.state.email} className="mr-3"></input>
        <label>Password</label>
        <input onChange={this.onChange} name="password" value={this.state.password} onBlur={()=> this.setState({confirmPW: true})}></input>
        </div>
        <label>Role:</label>
        <select className="mr-3" value={this.state.permission} onChange={(e) => this.setState({permission: e.target.value})}>
            <option></option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select>
        <button onClick={()=> this.onSubmit()} className="btn btn-outline-dark">Add User</button>
        </div>
        {this.state.confirmPW ?
        <div className="d-flex justify-content-end">
        <label>Confirm Password</label>
        <input onChange={this.onChange} name="password2" value={this.state.password2}></input></div> : null}
        </div>
        </div>
        <div className="container mt-4">
        <div className="mb-2">
        <span style={{fontSize: 24, color: "#42512B"}} className="border-bottom border-dark">Users</span>
        </div>
        
        { users ? <table>
            <thead>
                <tr>
                    <th className="border-bottom border-dark">User</th>
                    <th className="border-bottom border-dark">Email</th>
                    <th className="border-bottom border-dark">Date Created</th>
                    <th className="border-bottom border-dark">Role</th>
                    <th className="border-bottom border-dark">Status</th>
                </tr>
            </thead>
            <tbody>
                {users}
            </tbody>
        </table> : <div>Loading...</div>}
        </div>
        </div>
      </>
    )
  }
}


export default withProvider(Usermgmt)