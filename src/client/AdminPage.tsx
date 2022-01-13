import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';


const AdminPage: React.FC = () => {
    const navigate = useNavigate();


    const [nameEvent, setNameOfEvent] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [nameOfEventForId, setNameOfEventForId] = useState("");


    const onSubmitEvent = () => {
        let token = localStorage.getItem("token");
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
                alert("EventAdded");
            } else {
                alert("it didn't work!");
                return
            }
        })
    };

    const NavigateToDivisionsPage = () => {
        fetch(`./api/event/name/${nameOfEventForId}`)
            .then((res) => res.json())
            .then((eventId) => {
                navigate(`/adminDivisionsPage/${eventId[0].id}`)
            })
            .catch((err) => {
                console.log(err);
            });
    }

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
            <div>
                <Form style={{ width: "50%", border: "2px solid slateGrey", borderRadius: "5px" }} className="mx-auto mt-2 py-2 px-1">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name Of Event</Form.Label>
                        <Form.Control onChange={(e) => setNameOfEventForId(e.target.value)} type="text" placeholder="Enter event name" />
                        <Form.Text className="text-muted">
                            Type the event name exactly how you wrote it
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={NavigateToDivisionsPage}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default AdminPage;