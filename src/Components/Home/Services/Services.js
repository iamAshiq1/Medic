import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="row my-5 mx-1 align-items-center">
            <h1 className="text-center mt-3 fw-bold mb-3">Our Medical Services</h1>
            {
                services.map((service) => <Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;