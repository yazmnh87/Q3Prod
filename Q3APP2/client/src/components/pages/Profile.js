import React, { Component } from 'react'
import Navbar from '../Navbar'
import { withProvider } from '../../context'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

 class Profile extends Component {
     state={
        firstName: this.props.currentUserName,
        lastName: this.props.currentUserLastName,
        phoneNumber: "",
        birthday: "",
        careerInterests: [],
        hobbies: [],
        startDate: new Date()
     }

     onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChange = (date) => {
        this.setState({
          startDate: date
        });
      }

    render() {

        return (
            <>
            <Navbar />
            <div className="profilebackground">
            <div className="col-sm-12">
            <div className="row d-flex justify-content-center align-items-center ml-3 mr-3 pt-5">
            <label>First Name: </label>
            <input className="form-control col sm 4 mr-3" value={this.state.firstName} name="" onChange={this.onChange} disabled/>
            <label>Last Name: </label>
            <input className="form-control col-sm-4 ml-3 mr-3" value={this.state.lastName} name="" onChange={this.onChange} disabled/>
            <label>DOB: </label>
            <DatePicker className="form-control"
            selected={this.state.startDate}
            onChange={this.handleChange}
            />
            {/* <input className="form-control col sm 4 mr-3 ml-3" value={""} name="" onChange={this.onChange}/> */}
            </div>
            </div>
            {/* <div className='col d-flex justify-content-center mt-3'> */}
            <div className="col-sm-12">
            <div className="row ml-3 mr-3">
            <div className="d-inline mr-2" style={{width:'49%'}}>
            <label className="d-inline">Email: </label>
            <input className="form-control" value={this.state.email} name="" onChange={this.onChange}/>
            </div>
            <div className="d-inline" style={{width:'49%'}}>
            <label className="d-inline">Phone: </label>
            <input className="form-control" value={""} name="" onChange={this.onChange}/>
            </div>
            </div>
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
                <button>Update</button>
            </div>
            </div>
            </>
        )
    }
}

export default withProvider(Profile)