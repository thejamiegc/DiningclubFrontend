import React, {useState} from 'react';
import facade from "../apiFacade.js";

const UpdateEvent = () => {
    const [event, setEvent] = useState({
        id: "",
        time: "",
        location: "",
        dish: "",
        pricePrPerson: "",
    });

    const handleChange = (evt) => {
        setEvent({
            ...event,
            [evt.target.id]: evt.target.value,
        });
    }

    const updateEvent = (evt) => {
        evt.preventDefault();
        console.log(event)
        facade.updateEvent(event.id, event.time, event.location, event.dish, event.pricePrPerson);
    }

    return (
        <div>
            <h1>Update dinner event</h1>
            <form>
                <input placeholder="Id" id="id" onChange={handleChange}/><br/>
                <input placeholder="Time" id="time" onChange={handleChange}/> <br/>
                <input placeholder="Location" id="location" onChange={handleChange}/> <br/>
                <input placeholder="Dish" id="dish" onChange={handleChange}/> <br/>
                <input placeholder="Price pr person" id="pricePrPerson" onChange={handleChange}/> <br/>
                <button onClick={updateEvent}>Update event</button> <br/>
            </form>

        </div>
    );
};

export default UpdateEvent;