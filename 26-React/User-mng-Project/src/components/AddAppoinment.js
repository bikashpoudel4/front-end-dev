import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";


const AddAppoinment = () => {

    let [toggleForm, setToggleForm] = useState(false);
    return (
        <>
            <Col md="8">
                <Card className="mb-3">
                    <Card.Header>Add Appoinment
                        <Button size="sm"
                            className="small float-end"
                            onClick={() => { setToggleForm(!toggleForm) }}>+</Button>
                    </Card.Header>
                    { toggleForm &&
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </Form.Group>
                                </Row>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Appoinment Date</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Appoinment Time</Form.Label>
                                    <Form.Control type="time" />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Comments</Form.Label>
                                    <Form.Control as="textarea" placeholder="Comments" />
                                </Form.Group>
                                <Button variant="primary">Submit</Button>
                            </Form>
                        </Card.Body>
                    }
                </Card>
            </Col>
        </>
    )
}

export default AddAppoinment;