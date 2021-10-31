import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';
import { Link } from 'react-router-dom';
//react hook form //search and use


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        //search axios and copy from axios git and edit
        axios.post('https://grisly-skull-03334.herokuapp.com/places', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
                else {
                    alert('opps! user does not add')
                }
            })

    }
    return (
        // Add service Input form
        <div className='add-service' id='addservice'>
            <h1 className="text-primary">Admin Use Only</h1>
            <h2>Please Add A Place</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='enter your name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description' {...register("description")} />
                <textarea placeholder='Days' {...register("days")} />
                <textarea placeholder='person' type="number" {...register("person")} />
                <input placeholder='price' type="number" {...register("price")} />
                <input placeholder='image url' {...register("img")} />
                <input className='submit' type="submit" />
            </form>
            <Link to="/manageService"><button className="btn btn-warning my-5"><i class="far fa-calendar-times"></i> Delete Any Places??</button></Link>
        </div>
    );
};

export default AddService;