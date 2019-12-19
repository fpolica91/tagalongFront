import React, { useContext, Suspense } from 'react';
import { Context } from '../customHooks/context'
import { NavLink } from 'react-router-dom'



const Links = (props) => {
    const linkData = useContext(Context)
    const { currentUser } = linkData

    const redirectToLogin = () => {
        const { history } = props
        console.log(history)
        if (history) history.push('/login')
    }
    
    return (
        <div>
            <Suspense fallback={<div>...loading</div>}>
               {currentUser ? null : <NavLink to="/login">Login</NavLink> }
                <br />
                {currentUser ?
                    <NavLink to={`/profile/${currentUser._id}`}>Profile</NavLink>
                    : redirectToLogin()
                }
            </Suspense>
        </div>
    );
}

export default Links;