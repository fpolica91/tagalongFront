import React, { Component, useState, useEffect } from 'react';
import * as io from "socket.io-client"
import PropTypes from 'prop-types';
import api from '../services/api'

const Context = React.createContext()

const socket = io('http://localhost:5000')

const Provider = (props) => {

    const {
        users: initalUsers,
        events: initialEvents,
        count: initiaCount = 0
    } = props


    const [users, setUsers] = useState(initalUsers)
    const [events, setEvents] = useState(initialEvents)
    const [count, setCount] = useState(initiaCount)

    useEffect(() => {
        socket.emit('init_communication')
        socket.on('users', get_users)
        socket.on('events', getEvents)
        socket.on('reload', reload)

        api.get('/loggedin', {withCredentials: true}).then(theData => console.log(theData))
    }, [])

    const increment = (arg) => {
        console.log(arg)
        setCount(count + 1)
    }

    const getEvents = (events) => {
        setEvents(events)
    }
    const get_users = (users) => {
        setUsers(users)
    }

    const reload = () => socket.emit('init_communication')

    const data = {
        users,
        events,
        count,
        increment
    }


    return <Context.Provider
        value={data}
        increment={increment}
    >{props.children}</Context.Provider>

}



// class Provider extends React.Component {
//     state = {
//         users: [],
//     }




//     render() {
//         console.log('these are the users', this.state.users)
//         return (
//             <Context.Provider value={{
//                 ...this.state
//             }} >
//                 {this.props.children}
//             </Context.Provider>
//         )
//     }
// }



export { Context, Provider }

Provider.propTypes = {
    users: PropTypes.array,
    events: PropTypes.array
};

Provider.defaultProps = {
    users: [],
    events: []
};