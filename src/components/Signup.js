import React from 'react';
import useForm from '../customHooks/customHooks';
import api from '../services/api';

const SignUp = () => {

    const submitSignUp = () => {
        api.post('/newUser', inputs)
    }
    const { inputs, handleInputChange, handleSubmit, setInputs } = useForm(submitSignUp)
    return (
        <form onSubmit={handleSubmit}>
            <label>username</label>
            <input
                onChange={handleInputChange}
                type="text"
                name="username"
                value={inputs.username || ""}
                required
            />
            <label>email</label>
            <input
                onChange={handleInputChange}
                type="text"
                name="email"
                value={inputs.email || ""}
                required
            />
            <label>password</label>
            <input
                onChange={handleInputChange}
                type="password"
                name="password"
                value={inputs.password || ""}
                required
            />
            <button>Sign Up</button>

        </form>
    );
}

export default SignUp;