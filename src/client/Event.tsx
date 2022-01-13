import React from 'react'
import { Card, Button } from 'react-bootstrap';
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


    return (
        <div className="d-flex justify-content-evenly flex-wrap">
            {
                event.map((event) => {
                    let date = event.date_of_event.slice(0, 10);
                    return (
                        <div key={event.id} className="my-1">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{event.name_of_event}</Card.Title>
                                    <Card.Text>
                                        {date}
                                    </Card.Text>
                                    <Link to={`/FullEventPage/${event.id}`}><Button variant="primary">Register</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
        </div>
    )
}
