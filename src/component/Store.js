import React from "react";
import { Col, Row } from "react-bootstrap";
import storedItems from "../data/storedItems.json";
import StoredItem from "./StoredItem";
const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storedItems.map((ele) => (
          <Col key={ele.id}>
            <StoredItem {...ele} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
