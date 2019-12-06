import React, { useState } from 'react';


const useForm = (callback) => {
    const [inputs, setInputs] = useState([
        { username: "" }, { password: "" }
    ])

    const handleSubmit = (e) => {
        e.preventDefault()
        callback()
    }

    const handleInputChange = (event) => {
        event.persist()
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }
    return {
        handleSubmit,
        handleInputChange,
        inputs,
        setInputs,
    }
}

export default useForm;

