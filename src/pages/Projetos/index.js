import { Container, Card, Button } from 'react-bootstrap';
import './projetos.css';

function Projetos() {
  const projetos = [
    {
      id: 1,
      nome: "Projeto de Bot Telegram",
      descricao: "Como fazer um botzinho no Telegram para saber se o número é disarium ou não.",
      link: "https://github.com/mateuspadilha166/disarium",
    },
    {
      id: 2,
      nome: "Projeto de API",
      descricao: "Projeto para usar uma API e trazer piadas do Chuck Norris.",
      link: "https://github.com/mateuspadilha166/PiadasChuck",
    },
    {
      id: 3,
      nome: "Projeto de API para Filmes",
      descricao: "Projeto de API para trazer informações sobre filmes.",
      link: "https://github.com/mateuspadilha166/CatalogoFilmes",
    },
    {
      id: 4,
      nome: "Projeto de back-end",
      descricao: "Projeto de fazer backend para fazer uma conexão com banco de dados.",
      link: "https://github.com/mateuspadilha166/DesenvolviemtoBack-end",
    },
    {
      id: 5,
      nome: "Projeto de API",
      descricao: "Projeto de API para trazer certas receitas... Não consegui T_T",
      link: "https://github.com/mateuspadilha166/Trabalho-de-receitas",
    },
    {
      id: 6,
      nome: "Projeto do jogo da veia",
      descricao: "Projeto de jogo da veia em react.",
      link: "https://github.com/mateuspadilha166/JogoDaVelhaReact",
    },
    {
      id: 7,
      nome: "Fundation",
      descricao: "Um pequeno grupo de estudantes para github.",
      link: "https://github.com/basementdevs/aula-github-foundations",
    },
  ];

  return (
    <Container className="projetos-container mt-5">
      <h2 className="text-center mb-4">Meus Projetos</h2>
      <div className="row">
        {projetos.map(projeto => (
          <div key={projeto.id} className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{projeto.nome}</Card.Title>
                <Card.Text>{projeto.descricao}</Card.Text>
                <Button variant="primary" href={projeto.link} target="_blank" rel="noopener noreferrer">
                  Ir ao Git
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Projetos;
