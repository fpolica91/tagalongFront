import React, { useContext } from 'react';
import { Context } from "../customHooks/context"


const Login = () => {
    const loginContext = useContext(Context)
    const { inputs, handleInputChange, handleSubmit, setInputs } = loginContext


    return (
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
    )

}

export default Login;