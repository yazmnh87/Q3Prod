import React, { Component } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import { withProvider } from '../../context'
import axios from 'axios'



class Landing extends Component {
  state = {
    displaySurveys: false,
    userResponses: []
  }

  getUserSurveys = (id) => {
    console.log('contextrunning')
    axios.get(`/api/responses/${id}`)
    .then(res => 
      // console.log(res.data)
      this.setState({
      userResponses: res.data
    })
    )}

  renderGraphs = (f) => {
    console.log('running')
    return this.getUserSurveys(this.props.currentUser), f()
  }


  setView = () => {
    console.log('hellotut')
    this.setState({
      displaySurveys: true
    })
  }

  render() {

const mappedDates = this.state.userResponses !== undefined ?
    this.state.userResponses.map(date => {
      return (
        <div className="card" style={{Width: 200, Height: 200, backgroundColor: "#7D7D7D"}}>
        <div className="card-header bg-light">
        <div className="card-body">
        <p className="card-text">Date: {date.date.slice(0, 10)}</p>
        <button>View Graph</button>
        </div>
        </div>
        </div>
    )}) : null

    return (
      <>
        <Navbar />
        {this.state.displaySurveys === false ?
        <div className="Lanbackground">
            <div className="pl-5 pt-3">
            <h2>Welcome! {this.props.currentUserName}</h2>    
            </div> 
            <div className="d-flex flex-column">
            <div className="ml-5 mt-3">       
            <Link to="/question"><button className="btn btn-lg btn-outline-dark">Create New Survey</button></Link>
            </div> 
            </div>
            <div className="ml-5 mt-3">
            <button className="btn btn-lg btn-outline-dark" onClick={() => this.renderGraphs(this.setView)}>View Previous Surveys</button>
            </div>
            </div>
            :
            <div className="container mt-5">
            <h1>Previous Surverys</h1>
            <button className="btn btn-sm" style={{backgroundColor: "#7D7D7D"}} onClick={() => this.setState({displaySurveys: false})}>close</button>
            <div className="row mb-3">
            {mappedDates}
            </div>
            </div>
        }
        </>
        )
  }
}

export default withProvider(Landing)