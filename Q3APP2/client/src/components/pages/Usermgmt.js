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
        confirmPW: false
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

 

       
   

  render(props) {
    const users = this.props.allUsers.map(user => {
        return (<>
                    <tr className="mt-2">
                        <td className="pr-5">{user.firstName + " " + user.lastName}</td>
                        <td className="pr-5">{user.email}</td>
                        <td className="pr-5">{user.date.slice(0,10)}</td>
                        <td className="pr-5"><strong>{user.permission}</strong></td>
                        <td className="pr-5" style={user.isActive ? {color: "green"} : {color: "red"}}>{user.isActive ? "Active" : "InActive"}</td>
                        <button className="btn btn-outline-info mr-3">Edit</button>
                        <button className="btn btn-light btn-outline-dark text-dark mr-3">Disable</button>
                        <button className="btn btn-danger" onClick={() => this.props.deleteUser(user._id)}>Delete</button>
                    </tr>
                </>
        )    
})
    
    
    return (
      <>
        <Navbar/>
        <div className="usermgmt pt-3">
        <div className="ml-5">
        <span style={{fontSize: 20}} className="border border-outline-light">Add New User</span>
        <div className="mt-3">
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
        <select className="mr-3">
            <option>Admin</option>
            <option>User</option>
        </select>
        <button onClick={""} className="btn btn-outline-dark">Add User</button>
        </div>
        {this.state.confirmPW ?
        <div>
        <label>Confirm Password</label>
        <input onChange={this.onChange} name="password2" value={this.state.password2}></input> </div> : null}
        </div>
        <div className="container mt-4">
        <div className="mb-2">
        <span style={{fontSize: 24, color: "#42512B"}} className="border-bottom border-dark">Users</span>
        </div>
        <table>
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
        </table>
        </div>
        </div>
      </>
    )
  }
}


export default withProvider(Usermgmt)