import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Details.css'



const Details = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch(`https://grisly-skull-03334.herokuapp.com/places/${serviceId}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch('https://grisly-skull-03334.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Processed SuccessFully');

                    reset();


                }
            })
    }



    return (
        // Details book Place and input other data
        <section className="container " >
            <div id="about" className="row my-5 about">

                <div className="col-lg-6 col-sm-6 q-img d-flex img">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img style={{ height: '300px' }} src={users.img} class="img-fluid rounded-start " alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{users.name}</h5>
                                    <p class="card-text">{users.description}</p>
                                    <h5>{users.price}</h5>
                                    <p class="card-text"><small class="text-muted"><p>{users.person}</p><p>{users.days}</p></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6 q-img d-flex img">


                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="user-form">
                            <h5>Please Input All Information</h5>
                            <p className="text-danger fw-bold">N.D: Atleast Click Input Field one time,Otherwise Data not Send..</p>
                            <input {...register("firstName")} placeholder="Your full Name" defaultValue={user.displayName} required /> <br />
                            <input {...register("Email")} placeholder="Enter your email" defaultValue={user.email} required /> <br />
                            <input {...register("placeName")} placeholder='visit place' defaultValue={users?.name} required /> <br />
                            <input {...register("placeImg")} placeholder='image-link' defaultValue={users?.img} required /> <br />
                            <input {...register("cost")} placeholder='cost' defaultValue={users?.price} required /> <br />
                            <input {...register("Passfort")} placeholder="Enter Your Passport no" required /> <br />
                            <input {...register("PhoneNumber")} placeholder="Enter Your Phone Number" required /> <br />
                            <input {...register("address")} placeholder="Enter Your Address" required /> <br />


                        </div>
                        <input className="bg-warning " type="submit" value="Make confirm your order" />
                    </form>

                </div>

            </div>
            
        </section>


    );


};

export default Details;