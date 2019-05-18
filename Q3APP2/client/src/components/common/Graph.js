import React, { Component } from 'react'
import {Radar} from 'react-chartjs-2'

export default class Graph extends Component {
    state = {
        data:{
            labels: ['Sleep', 'Energy', 'global physical well-being', 'calm confidence', "interest, pleasure, joy", 'coping', 'interpersonal communication', 'social and professional support network', 'life balance', 'cognition organization', 'priorities', 'life purpose'],
            datasets: [
              {
                label: 'Student Survey Data',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [1,2,3,4,5,6,7,8,9,10,11,12]
              }
            ]
          }
  }
  render() {
    return (
        <Radar className="" data={this.state.data}/>
    )
  }
}
