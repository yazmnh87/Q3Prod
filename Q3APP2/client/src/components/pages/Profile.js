import React, { Component } from 'react'
import Navbar from '../Navbar'
import { withProvider } from '../../context'

 class Profile extends Component {
     state={
         firstName: this.props.currentUserName,
         lastName: this.props.currentUserLastName,
         phoneNumber: "",
         birthday: "",
         careerInterests: [],
         hobbies: []
     }

     onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (
            <>
            <Navbar />
            <div className="profilebackground">
            <div className="col sm 8">
            <div className="row">
            <label>First Name</label>
            <input className="form-control" value={this.state.firstName} name="" onChange={this.onChange} disabled/>
            <label>Last Name</label>
            <input className="form-control" value={this.state.lastName} name="" onChange={this.onChange} disabled/>
            </div>
            </div>
            <label>Email</label>
            <input className="form-control" value={this.state.email} name="" onChange={this.onChange}/>
            <label>Phone Number</label>
            <input className="form-control" value={""} name="" onChange={this.onChange}/>
            <label>Birthday</label>
            <input className="form-control" value={""} name="" onChange={this.onChange}/>
            <label>Career Interests</label>
            <input className="form-control" value={""} name="" onChange={this.onChange}/>
            <label>Hobbies</label>
            <input className="form-control" value={""} name="" onChange={this.onChange}/>
            <div>
                <button>Updated</button>
            </div>
            </div>
            </>
        )
    }
}

export default withProvider(Profile)