import { BsFillCalendar2CheckFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Card, ListGroup } from "react-bootstrap";

import Search from "./components/Search";
import AddAppoinment from "./components/AddAppoinment";
import appoinmentList from "./data.json";
import AppoinmentInfo from "./components/AppoinmentInfo"

function App() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <h1 className="text-center fw-light mt-3">
                        <BsFillCalendar2CheckFill /> Appointments
                    </h1>                    
                </Row>
                <Row className="justify-content-center">
                    <AddAppoinment />
                </Row>
                <Row className="justify-content-center">
                    <Col md="4">
                        <Search />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md="8">
                        <Card className="mb-3">
                            <Card.Header>Appoinments</Card.Header>
                            <ListGroup variant="flush">
                                {appoinmentList.map(appoinment => (
                                    <AppoinmentInfo key={appoinment.id} appoinment={appoinment} />
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
}

export default App;
