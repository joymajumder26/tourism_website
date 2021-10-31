import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
// load data
    useEffect(() => {
        fetch('https://grisly-skull-03334.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
// handle delete place info
    const handleDelete = id => {
        const url = `https://grisly-skull-03334.herokuapp.com/places/${id}`;
        fetch(url, {
            method: 'DELETE'
        })

            .then(res => res.json())
            .then(data => {

                if (data.deletedCount) {
                    alert("deleted")
                    const remainig = services.filter(service => service._id !== id);
                    setServices(remainig);

                }

            })
    }
    return (
        <div>
            <h2>Manage Places</h2>
            {
                services.map(service => <div key={service._id}>

                    <h3>{service.name} </h3>
                    <button onClick={() => handleDelete(service._id)}><i class="fas fa-trash-alt"></i></button>


                </div>)
            }
        </div>
    );
};

export default ManageServices;