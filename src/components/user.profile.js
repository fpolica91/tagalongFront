import React, { useContext } from 'react';
import { Context } from "../customHooks/context"
import { Link } from 'react-router-dom'
import api from '../services/api'


const Profile = (props) => {
    const userContext = useContext(Context)
    console.log(userContext)
    const { currentUser, events, handleSubmit, logOut } = userContext

    // THIS GIVES YOU THE EVENTS FOR THE CURRENT USER
    const userEvents = currentUser && events.filter(event => event.host._id === currentUser._id)

    // OLD WAY TO DEAL WITH LOGOUT
    const handleLogout = (e) => {
        e.preventDefault();
        api.delete('/logout', { withCredentials: true })
            .then(() => { 
                logOut()
                props.history.push('/login')})
    }

    console.log(userEvents, "these are the current user  events")
    console.log(currentUser)
    if (currentUser) {
        return (
            <div className='profile' >
                Welcome {currentUser.username}
                <button onClick={e => handleLogout(e)}>log out</button>
                <Link to ='/newcar'>Create new Car</Link>
                {userEvents.map(event => {
                    return (
                        <div key={event._id} >
                            <p>{event.category}</p>
                            <p>{event.name}</p>
                        </div>
                    )
                })}
                <Link to={`/createEvent/${currentUser._id}`}>Create Event</Link>
                <Link to={`/update/${currentUser._id}`}>Update Profile</Link>
            </div>
        )
    } else {
        return <p>loading...</p>
    }


    // return <p>this is the user profile</p>
}

export default Profile;