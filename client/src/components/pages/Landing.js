import React, { Component } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import { withProvider } from '../../context'
import axios from 'axios'
import Graph from '../common/Graph'



class Landing extends Component {
  state = {
    displaySurveys: false,
    userResponses: [],
    displayGraph: false
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

  displayGraph = () => {
    console.log("displayGraphRunning")
    this.setState({
      displayGraph: true,
      displaySurveys: false
    })
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
        <button onClick={() => this.displayGraph()}>View Graph</button>
        </div>
        </div>
        </div>
    )}) : null

    return (
      <>
        <Navbar />
        { (() => {
        if (this.state.displaySurveys === false && this.state.displayGraph === false){
        return (
        <div className="Lanbackground">
            <div className="pl-5 pt-3">
            <h2>Welcome {this.props.currentUserName}!</h2>    
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
        )} else if (this.state.displaySurveys === true){
          return (
            <div className="container mt-5">
            <div className="d-flex justify-content-between mb-3">
            <h1>Previous Surveys</h1>
            <button className="btn btn-md" style={{backgroundColor: "#7D7D7D"}} onClick={() => this.setState({displaySurveys: false})}>close</button>
            </div>
            <div className="row mb-3">
            {mappedDates}
            </div>
            </div>
          )}
          else if(this.state.displayGraph === true){
            return (
              <>
              <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-md" style={{backgroundColor: "#7D7D7D"}} onClick={() => this.setState({displayGraph: false, displaySurveys: true})}>Close</button>
              </div>
              <div className="d-flex justify-content-center mt-4">
              <div className="graphContainer">
              <Graph />
              </div>
              </div>
              </>
            )}
          })()}
        </>
    )}
  }
export default withProvider(Landing)