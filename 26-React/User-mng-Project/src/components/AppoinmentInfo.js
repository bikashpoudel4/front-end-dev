import { ListGroup } from "react-bootstrap";

const AppoinmentInfo = ({appoinment}) => {
    return (
        <>
            <ListGroup.Item>
                <p><small>Date: {appoinment.aptDate}</small></p>
                <p><strong>First Name: </strong>{appoinment.firstName}</p>
                <p><strong>Last Name: </strong>{appoinment.lastName}</p>
                <p><strong>Notes: </strong>{appoinment.aptNotes}</p>
            </ListGroup.Item>
        </>
    )
}

export default AppoinmentInfo;