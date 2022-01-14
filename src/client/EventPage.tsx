import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { apiService } from '../client/utils/apiservice'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import DivisionsCards from './DivisionsCards'

export default function EventPage() {
    const navigate = useNavigate();
    const params = useParams();
    const stripe = useStripe();
    const elements = useElements();
    const paramId = params.id;

    const handleCardSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        const cardInfo = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardInfo,

            billing_details: {
                name
            }
        });

        if (error) {
            console.log(error)
        } else {

            const res = await fetch('/api/donate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chosenDivision, paymentMethod })
            });

            const paymentCompleted = await res.json();
            // console.log(paymentCompleted);
            alert('payment accepted');
            navigate("/thankYouPage");


        }
    }


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
    const [name, setName] = React.useState("");


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



    return (
        <>
            <div className="row mt-2 w-100">
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
                                                    {/* If jason shows me data I can get the name of event here */}
                                                    <option value={divisionItem.cost} key={`DivisionsId:${divisionItem.id}`}>{divisionItem.name_of_division}~ ${divisionItem.cost}</option>
                                                </>
                                            )
                                        })}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Text className="text-light">
                                        PLease enter your
                                    </Form.Text>
                                    <br />
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Ex. John Doe Smith" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>You will be charged</Form.Label>
                                    <CardElement className="form-control" />
                                    {/* <Form.Control disabled onChange={(e) => setEmail(e.target.value)} type="number" placeholder={String(chosenDivision)} /> */}
                                </Form.Group>
                                <Button variant="success" size='lg' className="w-50" type="submit" onClick={handleCardSubmit}>Register</Button>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>

            </div>
            <DivisionsCards theId={paramId} />
        </>
    )
}


