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
          <Card.Title>algum titulo aqui</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="button-card">Sobre nós</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default FigureAbout;


