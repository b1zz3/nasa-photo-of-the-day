import React, { useState } from "react";
import axios from "axios";


function FetchButton() {
    const [ imgData, setImgData] = useState(null);

  // api Key: eCrBvri7EO7Qzqsi47n3m9oqK0gqrhXRQiTJvLsc

    axios
        // .get("https://dog.ceo/api/breed/hound/images/random/15")
        .get("https://api.nasa.gov/planetary/apod?api_key=eCrBvri7EO7Qzqsi47n3m9oqK0gqrhXRQiTJvLsc")
        .then(response => {
            console.log(response);
            setImgData(response.data.hdurl);
            console.log("imgdat", imgData);
            console.log("setImg",setImgData);
        })
        .catch(error => {
            console.log(error);
        });

    return (
        <div className="container">
            <img className="APOD" alt="nassaImg" src={imgData} />
        </div>
    );
}

export default FetchButton;