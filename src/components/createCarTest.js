import React, {useContext} from 'react';
import { Context } from "../customHooks/context";

//THIS FILE IS ONLY FOR TESTING PURPOSE

const CreateCar = (props) => {
    
    const newCarContext = useContext(Context)
    const {currentUser} = newCarContext


    const { inputs, handleInputChange, handleSubmit } = newCarContext
    console.log(currentUser)

    return(
        <div>
        <h1>CREATE NEW CAR FORM</h1>

        <form onSubmit={e => handleSubmit(e, "createNewCar")}>
            <label>Model</label>
            <input
                onChange={handleInputChange}
                type="text"
                name="carmodel"
                value={inputs.carmodel || ""}
                required
            />
            <label>seats</label>
            <input
                onChange={handleInputChange}
                type="number"
                name="seats"
                value={inputs.seats || ""}
                required
            />
            <button>Add car</button>
        </form>
        </div>
    )
}

export default CreateCar