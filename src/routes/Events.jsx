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

useEffect( () => {
    if(user.username !== ''){
        facade.fetchData("/dinnerevent").then(res => setDinnerEvents(res));
    }
})

    return (
        <div>
            <h1>Dinner Events</h1>
            {user.username ? (<>
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Dish</th>
                    <th>Price pr person</th>
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

                    </tr>
                ))}
                </tbody>
            </table>
                </>) : (
                <p>Please login to see the dinner events</p>
                )}
        </div>
    );
};

export default Events;