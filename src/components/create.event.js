import React, { useContext, useState } from 'react';
import { Context } from "../customHooks/context"

const CreateEvent = () => {
    const userEventContext = useContext(Context)
    const { currentUser, inputs, setInputs, handleInputChange, handleSubmit } = userEventContext
    return (
        <form onSubmit={e => handleSubmit(e, "event")}>
            <input
                name="name"
                onChange={e => handleInputChange(e)}
                value={inputs.name || ""}
            />
            <label>Category</label>
            <select onChange={e => handleInputChange(e)} value={inputs.category || ""} name="category" >
                <option  >Category</option>
                <option value="Outdoors" >Outdoors</option>
                <option value="Food">    Food</option>
                <option value="Music">Music</option>
                <option value="thisWeekend">This Weekend</option>
                <option value="Charity" >Charity</option>
                <option value="Night">Night</option>
            </select>

            <label>Private</label>
            <select value={inputs.public} name="public" onChange={handleInputChange}>
                <option>select</option>
                <option value={false}>private</option>
                <option value={true}>public</option>
            </select>
            <button>Create Event</button>
        </form >
    )
}

export default CreateEvent;