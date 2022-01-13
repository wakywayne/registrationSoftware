import React from 'react'
import { Card, Button, Form } from 'react-bootstrap';
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
    const [incrementor, setIncrementor] = React.useState(0);
    const [divisions, setDivisions] = React.useState([]);
    const [chosenDivision, setChosenDivision] = React.useState<any>("");


    React.useEffect(() => {
        apiService(`/api/event/${params.id}`).then((event) => {
            const event1 = event[0];
            return event1;
        }).then((event1) => {
            setOneEvent(event1);
            if (event1) {
                setIncrementor(incrementor + 1);
            }
        })
    }, [])



    React.useEffect(() => {
        fetch(`/api/event/divisions/${oneEvent.id}`)
            .then((res) => res.json())
            .then((divisions) => setDivisions(divisions))
            .catch((err) => {
                console.log(err);
            });

    }, [incrementor])

    // console.log(divisions);
    console.log(chosenDivision);

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
                        <Form style={{ width: "80%", border: "2px solid slateGrey", borderRadius: "5px" }} className="mx-auto mt-2 py-2 px-1 bg-dark">
                            <Form.Group className="mb-3" controlId="formBasicDivision">
                                <Form.Label>Choose Division</Form.Label>
                                <Form.Select onChange={(e) => setChosenDivision(e.target.value)} placeholder="Choose Your Event" >
                                    <option>Choose Your Division</option>
                                    {divisions.map((divisionItem) => {
                                        return (
                                            <>
                                                <option value={divisionItem.cost} key={`DivisionsId:${divisionItem.id}`}>{divisionItem.name_of_division}~ ${divisionItem.cost}</option>
                                            </>
                                        )
                                    })}
                                </Form.Select>
                                <Form.Text className="text-light">
                                    I feel like we will need this
                                </Form.Text>
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>You will be charged</Form.Label>
                                <Form.Control disabled onChange={(e) => setEmail(e.target.value)} type="number" placeholder={String(chosenDivision)} />
                            </Form.Group> */}
                            <Button variant="primary" size='lg' className="w-50">Register</Button>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}