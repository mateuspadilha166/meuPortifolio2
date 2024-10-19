import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap';
import './app.css';

function Contato() {
    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Meus Contatos</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>LinkedIn</Card.Title>
                            <Card.Text>
                                Conecte-se comigo no LinkedIn.
                            </Card.Text>
                            <Button variant="primary" href="https://www.linkedin.com/in/seu-linkedin" target="_blank" rel="noopener noreferrer">
                                Ir para LinkedIn
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>GitHub</Card.Title>
                            <Card.Text>
                                Confira meus projetos no GitHub.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">
                                Ir para GitHub
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>WhatsApp</Card.Title>
                            <Card.Text>
                                Entre em contato comigo pelo WhatsApp.
                            </Card.Text>
                            <Button variant="primary" href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                                Ir para WhatsApp
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    );
}

export default Contato;
