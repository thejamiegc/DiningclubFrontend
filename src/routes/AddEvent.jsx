import React, {useState} from 'react';
import facade from "../apiFacade.js";

const AddEvent = () => {
    const [event, setEvent] = useState({
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

    const addEvent = (evt) => {
        evt.preventDefault();
        console.log(event)
        facade.addEvent(event.time, event.location, event.dish, event.pricePrPerson);

    }

    return (
        <div>
            <h1>Add dinner event</h1>
            <form>
                <input placeholder="Time" id="time" onChange={handleChange}/><br/>
                <input placeholder="Location" id="location" onChange={handleChange}/><br/>
                <input placeholder="Dish" id="dish" onChange={handleChange}/><br/>
                <input placeholder="Price pr person" id="pricePrPerson" onChange={handleChange}/><br/>
                <button onClick={addEvent}>Add event</button>
            </form>
        </div>
    );
};

export default AddEvent;