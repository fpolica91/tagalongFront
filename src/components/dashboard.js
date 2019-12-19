import React, {useContext} from 'react';
import { Context } from "../customHooks/context"

const Dashboard = (props) => {
    const dashContext = useContext(Context)
    const {users, currentUser, events, tagRequest} = dashContext
    console.log(users)
    console.log(events)
    console.log(dashContext)

    if(currentUser){ 
    return(
        <div>
        <div>THIS IS DASHBOARD</div>
        {events.length && events.map(eachEvent => {
            return <div key={eachEvent._id}>
            {eachEvent.name}
            {eachEvent.host.username !== currentUser.username && <button onClick={e => tagRequest(e, eachEvent._id, currentUser)}>THIS IS FOR JESUS</button>}
            
            </div>
        })}
        </div>
    )
}else{
    return(
        <div>PLEASE LOG IN</div>
    )
}
}

export default Dashboard