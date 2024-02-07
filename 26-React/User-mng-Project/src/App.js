import { BsFillCalendar2CheckFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <h1 className="text-center fw-light mt-3">
                        <BsFillCalendar2CheckFill /> Appointments
                    </h1>
                    <div className="d-grid gap-2">
                        <Button size="sm">Hello World</Button>
                    </div>
                </Row>
                <Row>
                    <Col md={3}>
                        <h3>Hello, Bootstrap</h3>
                    </Col>
                    <Col md={3}>
                        <h3>Hello, Bootstrap</h3>
                    </Col>
                    <Col md={3}>
                        <h3>Hello, Bootstrap</h3>
                    </Col>
                    <Col md={3}>
                        <h3>Hello, Bootstrap</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
