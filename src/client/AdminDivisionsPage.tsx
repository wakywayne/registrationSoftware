import React from "react";
import { Form, Button } from 'react-bootstrap';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShirtSelector: React.FC = () => {

    const [nameDivision, setNameDivision] = useState("");
    const [age, setAge] = useState("");
    const [weightClass, setWeightClass] = useState("");
    const [skillLevel, setSkillLevel] = useState("");
    const [cost, setCost] = useState(1);

    const params = useParams();


    const onSubmitDivision = () => {
        let token = localStorage.getItem("token");
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },

            body: JSON.stringify({
                "name_of_division": nameDivision,
                "age": age,
                "weight_class": weightClass,
                "skill_level": skillLevel,
                "cost": cost,
                "event_id": Number(params.idd)
            }),
        };
        fetch("/auth/makeAnEvent/divisions", requestOptions).then((res) => {
            if (res.ok) {
                alert("Division added");
            } else {
                alert("it didn't work!");
            }
        });
    };

    console.log(params.idd);

    return (
        <>
            <h1 className="text text-center">Add Divisions</h1>
            <div className="row sticky-top bg-white ml-2 mt-2">
                <Form style={{ width: "50%", border: "2px solid slateGrey", borderRadius: "5px" }} className="mx-auto mt-2 py-2">
                    <Form.Text className="text-muted">
                        Add divisions for the table you just created
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Division Name:</Form.Label>
                        <Form.Control onChange={(e) => setNameDivision(e.target.value)} type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>Ages:</Form.Label>
                        <Form.Control onChange={(e) => setAge(e.target.value)} type="text" placeholder="Enter ages" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicWeight">
                        <Form.Label>Weigh Range:</Form.Label>
                        <Form.Control onChange={(e) => setWeightClass(e.target.value)} type="text" placeholder="Enter weight" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSkill">
                        <Form.Label>Skill:</Form.Label>
                        <Form.Control onChange={(e) => setSkillLevel(e.target.value)} type="text" placeholder="Enter skill" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCost">
                        <Form.Label>Cost:</Form.Label>
                        <Form.Control onChange={(e) => setCost(Number(e.target.value))} type="number" placeholder="Enter cost" />
                    </Form.Group>
                    <Button variant="success" type="submit" onClick={onSubmitDivision}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default ShirtSelector;