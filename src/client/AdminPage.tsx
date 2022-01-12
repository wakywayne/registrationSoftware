import React from "react";
import { useState, useEffect } from 'react';
// let userID = data.UID;

const ShirtSelector: React.FC = () => {

    const [nameEvent, setNameOfEvent] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");


    const onSubmitEvent = () => {
        let token = localStorage.getItem("token");
        console.log(token);
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },

            body: JSON.stringify({
                "name_of_event": nameEvent,
                "date_of_event": date,
                "location_of_event": location,
                "event_description": description,
                "created_by": Number(localStorage.getItem("UID"))
            }),
        };
        fetch("/auth/makeAnEvent", requestOptions).then((res) => {
            if (res.ok) {
                alert("Event added");
            } else {
                alert("it didn't work!");
            }
        });
    };

    // Delete an item

    const onDeleteEvent = (id: number) => {
        let token = sessionStorage.getItem("token");
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                id: id, //check to see if this can just be id
            }),
        };
        fetch(`/api/earnableItems/delete/${id}`, requestOptions).then((res) => {
            if (res.ok) {
                alert("Row deleted");
            } else {
                alert("it didn't work!");
            }
        });
    };


    return (
        <>
            <h1 className="text text-center">Add an Event</h1>
            <div className="row sticky-top bg-white ml-2 mt-2">
                <form className="mx-auto form-group w-50">
                    <label htmlFor="itemName">Name of Event: </label>
                    <input type="text" className="form-control" id="itemName" onChange={(e) => setNameOfEvent(e.target.value)} />
                    <br />
                    <label htmlFor="itemColor">Date of Event:</label>
                    <input type="date" className="form-control" id="itemColor" onChange={(e) => setDate(e.target.value)} />
                    <br />
                    <label htmlFor="itemPercent">
                        Location of Event:
                    </label>
                    <input type="text" className="form-control" id="itemPercent" onChange={(e) => setLocation(e.target.value)} />
                    <br />
                    <label htmlFor="eventDescription">
                        Event description:
                    </label>
                    <textarea className="form-control" id="eventDescription" onChange={(e) => setDescription(e.target.value)}></textarea>
                    <br />
                    <button
                        id="submitNewItemButton"
                        className="btn btn-success"
                        onClick={onSubmitEvent}
                    >
                        Submit New Item
                    </button>
                </form>
            </div>
        </>
    );
}

export default ShirtSelector;