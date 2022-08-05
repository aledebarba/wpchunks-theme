import { Loader } from '@googlemaps/js-api-loader';
import { useState, useEffect, useRef } from 'react';

export const TheMap = props => {
    const loader = new Loader({
        apiKey: "AIzaSyDvx9_uCU16OGHlHqQKO2FmamwVyF-p-pw",
        version: "weekly",
        libraries: ["places"]
      });
      
    const mapOptions = {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 3
    };

    const mapRef = useRef(null);
    const [map, setMap] = useState();
    useEffect(() => {
        loader.load().then( google => {
            new google.maps.Map(mapRef.current, mapOptions);
        })
    }, [map]);

    return <>
        <div ref={mapRef} className="GMap" style={{ width: "100%", height: "100%"}}/>
    </>
}