import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap";


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
            <Card>
                
                <CardImg top width="80%" alt="nassaImg" src={respData.hdurl} />
                <CardBody>
                    <CardTitle>{ respData.title }</CardTitle>
                    <CardSubtitle>{ respData.date }</CardSubtitle>
                    <CardText> { respData.explanation }</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

