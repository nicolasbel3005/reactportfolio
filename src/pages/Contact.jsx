import ContactForm from "../components/ContactForm";
import { Container, Col, Row } from 'react-bootstrap'


export default function Contact() {
    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <h2>you can react me at the follosing: </h2>
                        <ul>
                            <li>email</li>
                            <li>email</li>
                            <li>email</li>
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