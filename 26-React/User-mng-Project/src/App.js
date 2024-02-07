import { BsFillCalendar2CheckFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

import Search from "./components/Search";
import AddAppoinment from "./components/AddAppoinment";

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
                
            </Container>
        </div>
    );
}

export default App;
