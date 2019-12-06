import React, { Component } from 'react';
import { Header } from './Header';
import { socket } from './Header'
import Login from "./components/Login"
import { Switch, Route} from 'react-router-dom'
import SignUp from './components/Signup';



class App extends Component {
  state = {
    users: [],
    events: []
  }

  componentDidMount() {
    socket.emit('init_communication')
    socket.on('users', this.getUsers)
    socket.on('events', this.getEvents)
    socket.on('reload', this.reFetch)
  }

  reFetch = () => socket.emit('init_communication')

  getUsers = (users) => {
    console.log("these are the users", users)
    this.setState({
      users: users
    })
  }

  getEvents = (events) => {

    this.setState({
      events: events
    })
  }

  render() {
    return (
      <div>
       <Header />
      <Switch>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
      
      </Switch>

      </div>
    );
  }
}

export default App;


// <Login />