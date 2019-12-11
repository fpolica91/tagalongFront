import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom'
import { Context } from "../customHooks/context"

const RequireAuthentication = ({ Component }) => {
    const authenticatedUser = useContext(Context)
    const { currentUser } = authenticatedUser
    if (!currentUser) {
        return <Redirect to="/login" />
    }
    return <Component />
}


export default RequireAuthentication;