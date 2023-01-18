import { useState } from "react";
import { Container,Row, Col,Button, Toast } from "react-bootstrap"

export const ShowHideMessage = () =>{
 const [show,setShow]=useState(false)
 const handleShowMessage = () => setShow(!show);
return(
<Container>
        <Row>
            <Col>
            <Button  onClick={handleShowMessage} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button>
        <Toast show={show} onClose={handleShowMessage}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
            </Col>
        </Row>
    </Container>
)
    
}