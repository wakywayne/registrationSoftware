import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';



export default function DivisionsCards({ theId }: any) {

    const defaultState2 = {
        id: 3,
        date_created: "2022-01-11T21:20:29.000Z",
        name_of_event: "poop",
        date_of_event: "2022-10-11T04:00:00.000Z",
        location_of_event: "Long Island",
        event_description: "This def worked",
        created_by: "1"
    }

    const [divisionsForCards, setDivisionsForCards] = useState([]);

    React.useEffect(() => {
        fetch(`/api/event/divisions/${theId}`)
            .then((res) => res.json())
            .then((divisions) => {
                setDivisionsForCards(divisions)
            })
            .catch((err) => {
                console.log(err);
            });

    }, [])

    return (
        <div className='my-5 d-flex justify-content-around'>

            {divisionsForCards.map((divisionItem2) => {
                return (<>
                    <Card className="text-center" key={`Divisions Cards ${divisionItem2.id}`} style={{ width: '18rem' }}>
                        <Card.Header className="bg-primary text-light">Age: {divisionItem2.age}</Card.Header>
                        <Card.Body>
                            <Card.Title>{divisionItem2.name_of_division}</Card.Title>
                            <Card.Text>
                                Weight: {divisionItem2.weight_class}
                                <br />
                                Skill: {divisionItem2.skill_level}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Cost: {divisionItem2.cost}</Card.Footer>
                    </Card>
                </>
                )
            })}

        </div>
    )
}
// 