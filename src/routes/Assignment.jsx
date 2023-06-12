import React from 'react';
import facade from "../apiFacade.js";

const Assignment = () => {
    const [familyName, setFamilyName] = React.useState("");
    const [email, setEmail] = React.useState("");

    const handleChange = (evt) => {
        if(evt.target.id === "familyName"){
            setFamilyName(evt.target.value);
        } else if(evt.target.id === "email"){
            setEmail(evt.target.value);
        }
    }

    const handleChange2 = (evt) => {
        if(evt.target.id === "familyName"){
            setFamilyName(evt.target.value);
        } else if(evt.target.id === "Eventid"){
            setEmail(evt.target.value);
        }
    }

    const addFamilyToMember = (evt) => {
        evt.preventDefault();
        facade.addFamilyToMember(familyName, email);
    }

    const addEventToFamily = (evt) => {
        evt.preventDefault();
        facade.addEventToFamily(familyName, email);
    }


    return (
        <div>
            <h1>Add family to member</h1>
            <form>
                <input placeholder="FamilyName" id="familyName" onChange={handleChange}/>
                <input placeholder="the persons email" id="email" onChange={handleChange}/>
                <button onClick={addFamilyToMember}>Add family to member</button>
            </form>
            <h1>add event to family</h1>
            <form>
                <input placeholder="FamilyName" id="familyName" onChange={handleChange2}/>
                <input placeholder="Eventid" id="Eventid" onChange={handleChange2}/>
                <button onClick={addEventToFamily}>Add event to family</button>
            </form>

        </div>
    );
};

export default Assignment;