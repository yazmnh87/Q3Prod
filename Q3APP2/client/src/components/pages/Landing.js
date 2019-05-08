import React, { Component } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import { withProvider } from '../../context'



class Landing extends Component {
  state = {
    reponseDates: []
  }

  componentDidMount(){
    console.log(this.props.currentUserName)
  }

  renderGraphs = (f) => {
    console.log('running')
    return this.props.getUserSurveys(this.props.currentUser), this.setResponses(), () => f()
  }

  setResponses = () => {
    const dates = this.props.userResponses.map(date => {return date.date}, ()=> this.setState({
      responseDates: dates
    }))
    
  }

  displayDates = () => {
    const mappedDates = this.state.responseDates.map(date => date.date)
    return (
      <div>
        <span>{mappedDates}</span>
      </div>
    )

  }

  render() {
    return (
      <div>
        <Navbar />
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
            <button className="btn btn-lg btn-outline-dark" onClick={this.renderGraphs( () => this.displayDates)}>View Previous Surveys</button>
            </div>
            </div>
      </div>
    )
  }
}

export default withProvider(Landing)