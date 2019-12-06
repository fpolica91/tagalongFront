import React, { useState } from 'react';
import useForm from '../customHooks/customHooks';
import api from "../services/api"

const Login = () => {

    const [user, setCurrentUser] = useState([])
    const handleLogin = () => {
        api.post('/login', inputs).then((response) => {
                setCurrentUser(response.data)
            })
            .then(() => {
                setInputs(inputs => ({ ...inputs, username: "", password: "" }))
            })
            .catch(err => console.log(`an unexpected error occurred ${err}`))
    }

    const { inputs, handleInputChange, handleSubmit, setInputs } = useForm(handleLogin)

    return (
        <form onSubmit={handleSubmit}>
            <label>username</label>
            <input
                name="username"
                onChange={handleInputChange}
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