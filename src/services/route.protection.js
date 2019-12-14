import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom'
import { Context } from "../customHooks/context"

const RequireAuthentication = ({ Component }) => {
    const data = useContext(Context)
    const { currentUser } = data
    console.log(currentUser)
    if (!currentUser) {
        return <Redirect to="/login" />
    }
    return <Component />
}


export default RequireAuthentication;