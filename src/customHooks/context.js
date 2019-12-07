import React, { Component, useState, useEffect } from 'react';
import * as io from "socket.io-client"
import PropTypes from 'prop-types';

const Context = React.createContext()

const socket = io('http://localhost:5000')

const Provider = (props) => {
    const {
        users: initalUsers,
        events: initialEvents
    } = props

    const [users, setUsers] = useState(initalUsers)
    const [events, setEvents] = useState(initialEvents)

    useEffect(() => {
        socket.emit('init_communication')
        socket.on('users', get_users)
        socket.on('events', getEvents)
        socket.on('reload', reload)

    }, [])

    const getEvents = (events) => {
        setEvents(events)
    }
    const get_users = (users) => {
        setUsers(users)
    }

    const reload = () => socket.emit('init_communication')

    const data = {
        users,
        events
    }


    return <Context.Provider value={data} >{props.children}</Context.Provider>

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