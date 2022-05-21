import React, {  useEffect, useState } from "react";
import Cards from "./Card";
import { Container, Row } from "react-bootstrap";
import InfinitScroll from "react-infinite-scroll-component";

const Main = ({ cartItems,setCartItems }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  async function fetchData() {
    let api = await fetch(
      `http://api.products.luezoid.com/products?page=${page}`,
      {
        method: "Get",
        headers: {
          Authorization: "Bearer ULxG9gG98KDGPql/BFI/woCN9T8=",
        },
      }
    );
    let res = await api.json();
    setData([...data,...res.items]);
    setPage(page+1)
  }

  useEffect(() => {
    fetchData();
  }, []);

 

  return (
    <>
      <InfinitScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={true}
        loader={<></>}
      >
        <Container className="my-3">
          <Row
            xs={1}
            md={2}
            className="g-4 d-flex align-items-center justify-content-center"
          >
            {data.map((item) => {
              return (
                <Cards
                  item={item}
                  setCartItems={setCartItems}
                  key={item.id}
                  title={item.name}
                  imgSrc={item.bannerImage.url}
                  description={item.description}
                  id={item.id}
                />
              );
            })}
          </Row>
        </Container>
      </InfinitScroll>
    </>
  );
};

export default Main;
