import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({ title, imgSrc, description, id, item, setCartItems }) => {
  function ellipsis(string, start, end) {
    return string.substr(start, end);
  }

  function handleClick(elem) {
    setCartItems((prev) => [...prev, elem]);
  }

  return (
    <Card
      style={{ width: "17rem" }}
      className="mx-3 p-2"
      bg="dark"
      text="light"
    >
      <Link to={"/itemDetails/" + id}>
        <Card.Img
          variant="top"
          src={imgSrc}
          style={{ width: "100%", aspectRatio: 16 / 9 }}
        />
      </Link>
      <Card.Body>
        <Card.Title>{ellipsis(title, 0, 30)}</Card.Title>
        <Card.Text>{ellipsis(description, 0, 100) + "..."}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            return handleClick(item);
          }}
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
