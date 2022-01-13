import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { apiService } from '../client/utils/apiservice'

export default function Payment() {
    const params = useParams();

    const defaultState = {
        id: 3,
        date_created: "2022-01-11T21:20:29.000Z",
        name_of_event: "HardCodedEvent",
        date_of_event: "2022-10-11T04:00:00.000Z",
        location_of_event: "Long Island",
        event_description: "This def worked",
        created_by: "1"
    }
    const [eventInfo, setEventInfo] = React.useState(defaultState);
    const [name, setName] = React.useState("");
    const [card, setCard] = React.useState("");

    console.log(params)

    // React.useEffect(() => {
    //     apiService(`/api/event/${params.id}`).then((event) => {
    //         const event1 = event[0];
    //         return event1;
    //     }).then((event1) => {
    //          setEventInfo(event1);
    //     })
    // }, [])

    console.log(eventInfo);

    let date = eventInfo.date_of_event.slice(0, 10);
    return (
        <div>
            <h1 className="text-center">{eventInfo.name_of_event}</h1>
            <div className="row mt-2">
                <Form style={{ width: "50%", border: "2px solid slateGrey", borderRadius: "5px" }} className="mx-auto mt-2 py-2">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name:</Form.Label>
                        <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="JohnDoe" />
                        <Form.Text className="text-muted">
                            Please Put your full name with no spaces
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Credit Card:</Form.Label>
                        <Form.Control onChange={(e) => setCard(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}
