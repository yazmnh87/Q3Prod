import React, { Component} from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'
const Context = React.createContext();


export class Provider extends Component {
    state = {
      questions: [],
      counter: 0,
      responses: [],
      currentUser: localStorage.user || "",
      totalResponses: [],
      users: [],
      userResponses: [],
      allUsers: [],
      currentUserName: localStorage.firstname || '',
      currentUserLastName: localStorage.lastname || ''
    }

    nextQSet = (pageres, f) => {
      this.setState(prevState => ({
        responses: [...prevState.responses, pageres]
      }), () => this.checkResLen(), f() )
    }
checkResLen = () => {
  console.log('check length ran')
  console.log(this.state.responses.length)
  if(this.state.responses.length === 12){
    this.postRes()
  }
}

    postRes = () => {
      console.log('post is on')
      const resobj = {
        responses: this.state.responses,
        user: this.state.currentUser,
      }
      console.log(resobj)
      axios.post('/api/responses/', resobj )
      .then(res => console.log(res))
    }

    componentDidMount(){
      this.getQuestions()
      // this.getResponses()
      this.getUsers()
    }

    login = (user) => {
     return axios.post('/api/users/login', user)
      .then(res => {
        console.log(res.data)
        const { token, payload } = res.data
        const { firstName, lastName } = payload
        
        localStorage.setItem('jwttoken', token)
        localStorage.setItem('user', payload.id)
        localStorage.setItem('firstname', payload.firstName)
        localStorage.setItem('lastname', payload.lastName)
        // console.log(prevState);
        this.setState(prevState => ({
          currentUser: localStorage.getItem("user"),
          currentUserName: localStorage.getItem("firstname"),
          currentUserLastName: localStorage.getItem("lastname")

        }))
    })
  }
  
  registerUser = (user) => {
    return axios.post('/api/users/register', user)
    .then((r) => {
      // console.log(r)
      this.setState(s => ({
      allUsers: [...s.allUsers, r.data]
  }))
}
)
    // .catch((err) => 
    // this.setState({
    //     errors: err.response.data,
    //     allUsers: user
    // })
    // )
  }

  getSelectedSurvey = (date) => {
    axios.get(`/api/responses/${date}`)
    .then(res => console.log(res))
  }

  getUserSurveys = (id) => {
    console.log('contextrunning')
    axios.get(`/api/responses/${id}`)
    .then(res => this.setState({
      userResponses: res.data
    })
    )}

  getQuestions = () => {
    axios.get('/api/questions')
    .then( (res) => this.setState({
      questions: res.data
    }))
  }

  getResponses = () => {
    axios.get('/api/responses')
    .then(res => this.setState({
      totalResponses: res.data
    }))
  }


  deleteUser = (id) => {
    console.log('deleting user')
    axios.delete(`/api/users/${id}`)
    .then(res => this.setState(prevState => ({
      allUsers: prevState.allUsers.filter(user => user._id !== id)
    })))
  }

  getAllUsers = () => {
    console.log('running getusers')
    axios.get('/api/users/allusers')
    .then( res => this.setState({
      allUsers: res.data
    }))
  }

  getUsers = () => {
    axios.get('/api/users')
    .then(res => this.setState({
      users: res.data
    }))
  }

  render() {
    return (
      <div>
         <Context.Provider value={{
           deleteUser: this.deleteUser,
           getAllUsers: this.getAllUsers,
           getSelectedSurvey: this.getSelectedSurvey,
           getUserSurveys:this.getUserSurveys,
           postRes: this.postRes,
           nextQSet: this.nextQSet,
           login: this.login,
           registerUser: this.registerUser, 
          ...this.props,
          ...this.state}}>
        {this.props.children}
      </Context.Provider>
      </div>
    )
  }
}

export function withProvider(C) {
  return props => <Context.Consumer>
    {value => <C {...value}{...props} />}
  </Context.Consumer>
}
