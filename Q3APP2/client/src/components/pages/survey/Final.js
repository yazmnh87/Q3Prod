import React, { Component } from 'react'
import Navbar from '../../Navbar'
import { withProvider } from '../../../context'
import {Radar} from 'react-chartjs-2'

class Final extends Component {
  state = {
        data:{
            labels: [],
            datasets: [
              {
                label: 'Student Survey Data',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: []
              }
            ]
          }
    ,
    responses: []

  }

  setGraphData = () => {
    this.setState({
      responses: this.props.responses
    }, () => this.setSurveyData())
  }

  setSurveyData = () => {
    console.log("running")
    console.log(this.state.responses)
    if(this.state.responses.length !== 0){
    this.setState(() => ({
            data: {
                labels: ['Sleep', 'Energy', 'global physical well-being', 'calm confidence', "interest, pleasure, joy", 'coping', 'interpersonal communication', 'social and professional support network', 'life balance', 'cognition organization', 'priorities', 'life purpose' ],
                datasets:[
                  {
                    label: 'Student Survey Data',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(66, 81, 43, 1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [this.state.responses[0].resval,
                    this.state.responses[1].resval,
                    this.state.responses[2].resval,
                    this.state.responses[3].resval,
                    this.state.responses[4].resval,
                    this.state.responses[5].resval,
                    this.state.responses[6].resval,
                    this.state.responses[7].resval,
                    this.state.responses[8].resval,
                    this.state.responses[9].resval,
                    this.state.responses[10].resval,
                    this.state.responses[11].resval]
                }]
              }
          }))}}

  componentDidMount(){
    this.setGraphData()
  }
  render() {

    return (
      <>
      <Navbar />
      <div className="Lanbackground">
            <div className="d-flex justify-content-center pt-4">
              <span style={{fontSize: 25}}>Thank you for taking a survey</span>
            </div>
            <div className="d-flex justify-content-center">
            <button className="btn btn-dark mt-3">Logout</button>
            </div>
        <div className="d-flex justify-content-center mt-4">
        {this.state.responses.length !== 0 ? <div className="graphContainer d-flex justify-content-center border border-dark p-4"><Radar className="d-flex justify-content-center m-3" data={this.state.data}/></div> : <div className="d-flex justify-content-center"><span className="mt-5">No Survey Data to Display</span></div>}
        </div>
      </div>
      </>
    )
  }
}


export default withProvider(Final)