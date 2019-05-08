import React, { Component } from 'react'
import Navbar from '../../Navbar'
import { withProvider } from '../../../context'
// import { withRouter } from 'react-router-dom'

class Question1 extends Component {
state = {
  counter: 0,
  response: {
    resval: 5,
    questionId: ""
    
  }
}

resval = (e) => {
  const { value } = e.target
  this.setState(prevState => {
    return {
      response: { 
        ...prevState.response,
        resval: value 
      }
    }
  })
}

resetResVal = () => {
  console.log('running')
  this.setState({
    response: {
      resval: 5
    }
  }, console.log(this.state.response.resval))
}

counter = () => {

  console.log("hello")
  console.log(this.props.questions[this.state.counter]._id)
  this.setState(prevState => ({
    counter: prevState.counter + 1,
    response: {
      ...prevState.response,
      questionId: this.props.questions[prevState.counter]._id
    }
    
  }), () => {
    
    this.props.nextQSet(this.state.response, () => this.resetResVal())
  })
}

// prevQSet = () => {
//   if(this.state.counter === )  
// }

finishSurv = () => {

  console.log("finished")
  this.setState(prevState => ({
    counter: prevState.counter,
    response: {
      ...prevState.response,
      questionId: this.props.questions[prevState.counter]._id
    }
  }), () => {
    this.props.nextQSet(this.state.response, () => this.props.history.push("/final"))
    
  })
}

counterdec = () => {

  console.log("hello")
  this.setState(prevState => ({
    counter: prevState.counter - 1,
    response: {
      questionnum: this.props.questions[this.state.counter].questionnumber
    }
  }))
}

  render(props) {


    
    return (
      <React.Fragment>
      <Navbar />
      <div className="Lanbackground">
     { (() => {
       if(this.state.counter === 0){  
          return (
              <div className="d-flex justify-content-center">
                <button className="btn btn-lg btn-outline-dark mt-4" onClick={this.counter}>Next</button>
              </div> 
          )
      } else if (this.state.counter < 11){
        return (
            <div className="d-flex justify-content-between">
            <button className="btn btn-lg btn-outline-dark mt-3 ml-4" onClick={this.counterdec}>Previous</button>
            <button className="btn btn-lg btn-outline-dark mt-3 mr-4" onClick={this.counter}>Next</button>
            </div> 
        ) 
      } else {
        return (
          <div className="d-flex justify-content-between">
            <button className="btn btn-lg btn-outline-dark mt-3 ml-4" onClick={this.counterdec}>Previous</button>
          <button className="btn btn-lg btn-outline-dark mt-3 mr-4" onClick={this.finishSurv}>Finish</button>
          </div>
        )
     }
    })()}
    <div className="questcontainer">
          <div className="ml-4 mt-3">
          <span style={{fontSize: 18}}>Question {this.state.counter + 1} of 12</span>
          </div>
          <div className="questcontainer d-flex flex-column align-items-center mt-4">
          <div>
              <p className="ml-4 mr-4" style={{fontSize: 25}}>{this.props.questions[0] !== undefined ? this.props.questions[this.state.counter].question : null}
              </p>
          </div>
        <div className="inputrgsz mt-3">
          <input 
            type="range" 
            min="1" 
            max="10" 
            value={this.state.response.resval} 
            className="form-control-range rgcolor" 
            onChange={this.resval}/>
        </div>
        </div>
    </div>
    </div>
  </React.Fragment>
    )
  }
}


export default withProvider(Question1)