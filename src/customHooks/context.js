import React, { useState, useEffect } from 'react';
import * as io from "socket.io-client"
import PropTypes from 'prop-types';
import useForm from './customHooks';
import api from '../services/api';

const Context = React.createContext()
const testContext = React.createContext()

const socket = io('http://localhost:5000')

const Provider = (props) => {

    const {
        users: initalUsers,
        events: initialEvents,
        currentUser: initialCurrentUser
    } = props

    const [currentUser, setCurrentUser] = useState(initialCurrentUser)
    const handler = (data) => {
        if (data === "login") {
            api.post('/login', inputs, { withCredentials: true })
                .then((response) => {
                    setCurrentUser(response.data.user)
                })
                .then(() => {
                    setInputs(inputs => ({ ...inputs, username: "", password: "" }))
                })
                .catch(err => console.log(`an unexpected error occurred ${err}`))
        }

        else if (data === "event") {
            console.log(inputs.name)
            console.log(inputs.category)
            console.log(inputs.public)
            const _event = {
                host: currentUser._id,
                name: inputs.name,
                category: inputs.category,
                public: inputs.public
            }
            console.log(_event)

            api.post('/event', _event)
        }
    }


    const { inputs, handleInputChange, handleSubmit, setInputs } = useForm(handler)


    const [users, setUsers] = useState(initalUsers)
    const [events, setEvents] = useState(initialEvents)



    // THIS IS THE SAME AS CDM
    useEffect(() => {
        socket.emit('init_communication')
        socket.on('users', get_users)
        socket.on('events', getEvents)
        api.get('/loggedin', { withCredentials: true })
            .then(response => {
                console.log(response.data)
                setCurrentUser(response.data)
            })
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
        currentUser,
        users,
        events,
        handleInputChange,
        handleSubmit,
        setInputs,
        inputs,
    }


    return <Context.Provider
        value={data}
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
    events: [],
};