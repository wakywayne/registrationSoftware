import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { apiService } from '../client/utils/apiservice'

export default function EventPage() {
    const params = useParams();

    const defaultState = {
        id: 3,
        date_created: "2022-01-11T21:20:29.000Z",
        name_of_event: "OtherEvent2",
        date_of_event: "2022-10-11T04:00:00.000Z",
        location_of_event: "Long Island",
        event_description: "This def worked",
        created_by: "1"
    }
    const [oneEvent, setOneEvent] = React.useState(defaultState);

    console.log(params)

    React.useEffect(() => {
        apiService(`/api/event/${params.id}`).then((event) => {
            const event1 = event[0];
            return event1;
        }).then((event1) => {
            setOneEvent(event1);
        })
    }, [])

    console.log(oneEvent);

    let date = oneEvent.date_of_event.slice(0, 10);
    return (
        <div className="row mt-2">
            <Card className="mx-auto my-auto text-light" style={{ width: '90%' }} bg="secondary">
                <Card.Body>
                    <Card.Title className="text-center"><h1>{oneEvent.name_of_event}</h1></Card.Title>
                    <Card.Text className="text-center">
                        <h5>{oneEvent.event_description}</h5>
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" size='lg' className="w-50">Register</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}