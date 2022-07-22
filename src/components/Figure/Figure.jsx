import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";


function FigureAbout() {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1604413191066-4dd20bedf486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
      />
      <Card.Body>
        <div className="title-text-button">
          <Card.Title>Sobre Lolas</Card.Title>
          <Card.Text>
            Nossa historia e motivacoes 
          </Card.Text>
          <Button className="button-card">Clique aqui para saber mais</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default FigureAbout;


