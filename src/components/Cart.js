import React from "react";
import { Card, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = ({ cartItems }) => {
  function ellipsis(string, start, end) {
    return string.substr(start, end);
  }

  return (
    <>
      <Container className="my-3">
        <Row
          xs={1}
          md={2}
          className="g-4 d-flex align-items-center justify-content-center"
        >
          {cartItems.map((item) => {
            return (
              <Card
                style={{ width: "15rem" }}
                className="mx-3 p-2"
                key={item.id}
              >
                <Link to={"/itemDetails/" + item.id}>
                  <Card.Img
                    variant="top"
                    src={item.bannerImage.url}
                    style={{ aspectRatio: 16 / 9 }}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{ellipsis(item.name, 0, 30)}</Card.Title>
                  <Card.Text>
                    {ellipsis(item.description, 0, 100) + "..."}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Cart;
