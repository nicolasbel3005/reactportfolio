import ContactForm from "../components/ContactForm";
import { Container, Col, Row } from 'react-bootstrap'


export default function Contact() {
    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <h2>You can reach me at the follosing: </h2>
                        <ul>
                            <li>email:n.m.esquibel01@gmail.com</li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div>
                        <ContactForm />
                    </div>
                </Col>
            </Row>


        </Container>
    )
}