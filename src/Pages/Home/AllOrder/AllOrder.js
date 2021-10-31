import React from 'react';

import { Card, Col } from 'react-bootstrap';



const AllOrder = ({ allData }) => {
    const { firstName, _id, placeName, PhoneNumber, address } = allData;
    // handle Delete order
    const handleDelete = id => {
        const process = window.confirm("Are You Sure,You want To Removed");
        if (process) {

            const url = `https://grisly-skull-03334.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Order successfully removed');

                    }
                    console.log(data);

                })
        }

    }
    return (
        // all order manage and show all order
        <div className="mb-3">
            <Col>
                <Card className="bg-primary p-2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="m-2">
                                <Card.Title>Customer:{firstName}</Card.Title>
                                <h4>Destination:{placeName}</h4>
                                <h5>Booking Id:{_id}</h5>
                                <h5>Phone:{PhoneNumber}</h5>
                                <h5>Address:{address}</h5>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <button className="w-50 m-2 btn bg-warning text-white">Approve Order</button> <br />
                            <button onClick={() => handleDelete(_id)} className="w-50 m-2 btn bg-danger text-white">Cancel Order</button>
                        </div>

                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default AllOrder;