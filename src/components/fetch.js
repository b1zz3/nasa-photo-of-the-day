import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap";


export default function Fetch() {
  const [respData, setRespData] = useState([]);

  // api Key: eCrBvri7EO7Qzqsi47n3m9oqK0gqrhXRQiTJvLsc
  const didUpdate = () => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=eCrBvri7EO7Qzqsi47n3m9oqK0gqrhXRQiTJvLsc")
      .then(response => {
        setRespData(response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error));
    };

  useEffect(didUpdate, []);

  return (
    <div className="container">
      <Row>
        <Col sm="8">
          <Card body className="text-left" inverse style={{ background: "#333" }}>
            <CardBody>
              <CardImg top width="100%" alt="nassaImg" src={respData.hdurl} />
              <CardTitle tag="h3">{ respData.title }</CardTitle>
              <CardSubtitle tag="h4">{ respData.date }</CardSubtitle>
              <CardText> { respData.explanation }</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

