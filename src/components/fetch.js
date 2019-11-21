import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Fetch() {
    const [respData, setRespData] = useState([]);

  // api Key: eCrBvri7EO7Qzqsi47n3m9oqK0gqrhXRQiTJvLsc
    const didUpdate = () => {
        axios
            // .get("https://dog.ceo/api/breed/hound/images/random/15")
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
            <button onClick={() => alert("change me") }>Get Image</button>
            <h1>{respData.title}</h1>
            <img className="APOD" alt="nassaImg" src={respData.hdurl} />
            <p> { respData.explanation }</p>
        </div>
    );
};

