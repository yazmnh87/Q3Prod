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
            <div className="row d-flex justify-content-center align-items-center ml-3 mr-3 pt-5">
            <label>First Name: </label>
            <input className="form-control col sm 4 mr-3" value={this.state.firstName} name="" onChange={this.onChange} disabled/>
            <label>Last Name: </label>
            <input className="form-control col sm 4 ml-3 mr-3" value={this.state.lastName} name="" onChange={this.onChange} disabled/>
            <label>DOB: </label>
            <input className="form-control col sm 4 mr-3 ml-3" value={""} name="" onChange={this.onChange}/>
            </div>
            </div>
            {/* <div className='col d-flex justify-content-center mt-3'> */}
            <div className="row ml-5 mt-4 justify-content-center">
            <label>Email: </label>
            <input className="form-control w-50" value={this.state.email} name="" onChange={this.onChange}/>
            </div>
            <div className="row ml-4 mt-4 justify-content-center">
            <label>Phone: </label>
            <input className="form-control w-50" value={""} name="" onChange={this.onChange}/>
            </div>
            {/* </div> */}
            <div className="row ml-4 mt-4 justify-content-center">
            <label>Career Interests: </label>
            <input className="form-control w-50" value={""} name="" onChange={this.onChange}/>
            </div>
            <div className="row ml-4 mt-4 justify-content-center">
            <label>Hobbies: </label>
            <input className="form-control w-50" value={""} name="" onChange={this.onChange}/>
            </div>
            <div className="row ml-4 mt-4 justify-content-center">
                <button>Updated</button>
            </div>
            </div>
            </>
        )
    }
}

export default withProvider(Profile)