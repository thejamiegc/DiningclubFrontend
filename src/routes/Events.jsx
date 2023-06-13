import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";

const Events = ({user}) => {
    const[dinnerEvents, setDinnerEvents] = useState([{
        id: "",
        time: "",
        location: "",
        dish: "",
        pricePrPerson: "",
    }]);

    const deleteEvent = (evt) => {
        evt.preventDefault();
        facade.deleteEvent(evt.target.value);
    }


useEffect( () => {
    //if(user.username !== ''){
        facade.fetchData("/dinnerevent").then(res => setDinnerEvents(res));
    //}
})

    return (
        <div>
            <h1>Dinner Events</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Dish</th>
                    <th>Price pr person</th>
                    {user.roles.includes("admin") && (
                        <>
                        <th></th>
                    </>
                    )}
                </tr>
                </thead>
                <tbody>
                {dinnerEvents.map((dinnerEvent, index) => (
                    <tr key={index}>
                        <td>{dinnerEvent.id}</td>
                        <td>{dinnerEvent.time}</td>
                        <td>{dinnerEvent.location}</td>
                        <td>{dinnerEvent.dish}</td>
                        <td>{dinnerEvent.pricePrPerson}</td>
                        {user.roles.includes("admin") && (
                            <>
                            <td><button value={dinnerEvent.id} onClick={deleteEvent}>Delete</button></td>
                        </>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Events;