import React, { useState } from "react";
import axios from "axios";


function FetchButton() {
    const [imgUrl, setImgUrl] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);

  // api Key: eCrBvri7EO7Qzqsi47n3m9oqK0gqrhXRQiTJvLsc

    axios
        // .get("https://dog.ceo/api/breed/hound/images/random/15")
        .get("https://api.nasa.gov/planetary/apod?api_key=eCrBvri7EO7Qzqsi47n3m9oqK0gqrhXRQiTJvLsc")
        .then(response => {
            
            setImgUrl(response.data.hdurl);
            setImgTitle(response.data.title);
        })
        .catch(error => {
            console.log(error);
        });

    return (
        <div className="container">
            <h1>{imgTitle}</h1>
            <img className="APOD" alt="nassaImg" src={imgUrl} />
        </div>
    );
}

export default FetchButton;