import React, { useContext, Suspense } from 'react';
import { Context, testContext } from "../customHooks/context"
import { Link } from 'react-router-dom'


const Profile = () => {
    const userContext = useContext(Context)

    const { currentUser, events } = userContext

    // THIS GIVES YOU THE EVENTS FOR THE CURRENT USER
    const userEvents = currentUser && events.filter(event => event.host === currentUser._id)
    console.log(userEvents)
    if (currentUser) {
        return (
            <div className='profile' >
                Welcome {currentUser.username}
                {userEvents.map(event => {
                    return (
                        <div key={event._id} >
                            <p>{event.name}</p>
                        </div>
                    )
                })}
                <Link to={`/createEvent/${currentUser._id}`}>Create Event</Link>
            </div>
        )
    } else {
        return <p>loading...</p>
    }


    // return <p>this is the user profile</p>
}

export default Profile;