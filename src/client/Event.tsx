import React from 'react'
import Style from 'styled-components';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function Event() {

    const [event, setEvent] = React.useState([]);

    React.useEffect(() => {
        fetch('./api/events')
            .then((res) => res.json())
            .then((event) => setEvent(event))
            .catch((err) => {
                console.log(err);
            });

    }, [])


    const hoverStyle = {
        "&:hover": {
            border: "solid 3px #00ddff"
        }
    }

    return (
        // <div className="d-flex justify-content-evenly flex-wrap">
        <>
            {
                event.map((event, index) => {
                    let date = event.date_of_event.slice(0, 10);
                    return (
                        <div className="row">

                            <div key={event.id} className="my-1 w-75 mx-auto">
                                <Link to={`/FullEventPage/${event.id}`} style={{ textDecoration: "none" }}>
                                    <Alert variant={index % 2 == 0 ? 'primary' : 'secondary'} className="alert-hover">
                                        {event.name_of_event} ({date})
                                    </Alert>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
        // </div>
    )
}
