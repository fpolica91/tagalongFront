import React, { useState } from 'react';


const useForm = (callback) => {
    const [inputs, setInputs] = useState({})

    const handleSubmit = (e, data) => {

        e.preventDefault()
        callback(data)
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

