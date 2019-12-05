import React, { Component } from 'react';
import { Header } from './Header';
import { socket } from './Header'



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
        {this.state.events.map(event => {
          return <p key={event._id} >{event.name}</p>
        })}
        <Header />
      </div>
    );
  }
}

export default App;
