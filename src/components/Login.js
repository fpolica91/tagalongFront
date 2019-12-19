import React, { useContext } from 'react';
import { Context } from "../customHooks/context"
import { Redirect } from 'react-router-dom';


const Login = (props) => {
    const loginContext = useContext(Context)
    const {currentUser, inputs, handleInputChange, handleSubmit, setInputs } = loginContext

    const redirectToDashboard = () => {
        const { history } = props
        if (history) history.push('/dashboard')
    }

    return (
        <div>
    {currentUser ? redirectToDashboard() : 
        <form onSubmit={(e) => handleSubmit(e, "login")}>
            <label>username</label>
            <input
                name="username"
                onChange={(e) => handleInputChange(e)}
                value={inputs.username || ""}

            />
            <label>password</label>
            <input
                name="password"
                value={inputs.password || ""}
                onChange={handleInputChange}

            />
            <button>Login</button>
        </form>
    }
    </div>
    )

}

export default Login;