import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({ title, imgSrc, description, id, item, cartItems }) => {
  function ellipsis(string, start, end) {
    return string.substr(start, end);
  }

  function handleClick(i) {
    cartItems.push(i);
  }

  return (
    <Card style={{ width: "15rem" }} className="mx-3 p-2">
      <Link to={"/itemDetails/" + id}>
        <Card.Img variant="top" src={imgSrc} style={{ aspectRatio: 16 / 9 }} />
      </Link>
      <Card.Body>
        <Card.Title>{ellipsis(title, 0, 30)}</Card.Title>
        <Card.Text>{ellipsis(description, 0, 100) + "..."}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            handleClick(item);
          }}
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
