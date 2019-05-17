import React, { Component } from 'react'
import { withProvider } from '../../context'
import Navbar from '../Navbar'

class Usermgmt extends Component {
    state= {
        firstName: "",
        lastName: "",
        email: ""
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
                    <tr className="">
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
        <div className="mt-3 ml-5">
        <span style={{fontSize: 20}} className="border border-outline-light">Add New User</span>
        <div>
        <label>First Name</label>
        <input onChange={this.onChange} name="firstName" value={this.state.firstName} className="mr-3"></input>
        <label>Last Name</label>
        <input onChange={this.onChange} name="lastName" value={this.state.lastName} className="mr-3"></input>
        <label>Email</label>
        <input onChange={this.onChange} name="email" value={this.state.email} className="mr-3"></input>
        <select className="mr-3">
            <option>Admin</option>
            <option>User</option>
        </select>
        <button onClick={""}>Add User</button>
        </div>
        </div>
        <div className="container mt-4">
        <div className="mb-2">
        <span style={{fontSize: 24, color: "#42512B"}} className="border-bottom border-dark">Users</span>
        </div>
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Date Created</th>
                    <th>Role</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {users}
            </tbody>
        </table>
        </div>
      </>
    )
  }
}


export default withProvider(Usermgmt)