import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const [data, setData] = useState([]);
  let params = useParams();

  async function fetchData() {
    let api = await fetch(`http://api.products.luezoid.com/products?page=1`, {
      method: "Get",
      headers: {
        Authorization: "Bearer ULxG9gG98KDGPql/BFI/woCN9T8=",
      },
    });
    let res = await api.json();
    setData(res.items);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data
        .filter((item) => {
          return item.id === parseInt(params.id);
        })
        .map((filtered) => {
          return (
            <>
              <Container className="p-5 d-flex align-items-center justify-content-center">
                <Card style={{ width: "30rem" }}>
                  <Card.Img
                    variant="top"
                    src={filtered.bannerImage.url}
                    style={{ aspectRatio: 16 / 9 }}
                  />
                  <Card.Body>
                    <Card.Title>{filtered.name}</Card.Title>
                    <Card.Text>{filtered.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Container>
            </>
          );
        })}
    </>
  );
};

export default ItemDetails;
