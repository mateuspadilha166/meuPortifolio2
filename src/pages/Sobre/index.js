import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';/*MALDITO BOOTSTRAP */
import './sobre.css';
import gogeta from './gogeta.jpg';

function Sobre() {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="text-center">
                        <Card.Body>
                            <img className="perfil" src={gogeta} alt="Não tenho foto minha" />
                            <h2>Sobre Eu.....</h2>
                            <p>
                                Estou cursando Análise e Desenvolvimento de Sistemas no Senac Jaraguá do Sul.<br />
                                Confira meus <Link to="/Projetos" className="link-projetos">Projetos</Link>!
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Sobre;
