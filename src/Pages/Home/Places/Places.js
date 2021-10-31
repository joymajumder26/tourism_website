import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Places.css'

const Places = () => {
    const [places, setPlaces] = useState([])
// load data
    useEffect(() => {
        fetch('https://grisly-skull-03334.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data));

    }, [])
   
    return (
        // map Place data
        <div id="places d-flex">
            <h1>Trending, <span className="fw-bold text-danger">Best Selling <br />
                Tours And</span> Fun Destinations</h1>
                <p className="fw-light">India is among the most popular travel destinations in the world.</p>
            <div  className="row my-5 shop-container">
            <div className="service-container col-lg-12 col-sm-6 ">
                {
                    places.map(place => <Place
                        key={place.id}
                        place={place}
                    ></Place>)
                }
            </div>
           
            </div>
        </div>
    );
};

export default Places;