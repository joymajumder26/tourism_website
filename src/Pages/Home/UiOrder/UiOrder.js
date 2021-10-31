import React from 'react';
import { Card, Col } from 'react-bootstrap';


const UiOrder = ({ myOrder }) => {
    const { firstName, placeImg, placeName, cost, _id } = myOrder;


    // handleDelete------------------------------delete order
    const handleDelete = id => {
        const process = window.confirm("Are You Sure,You want To Removed");
        if (process) {

            const url = `https://grisly-skull-03334.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Order successfully removed');

                    }
                    console.log(data);

                })

        }
    }
    return (
        // show my oder 
        <div>
            <Col>
                <Card >
                    <div className="row">
                        <div className=" col-6 col-lg-4">
                            <Card.Img className="img-fluid " variant="top" src={placeImg} />
                        </div>

                        <div className="col-6 col-lg-4 pt-3">
                            <Card.Body>
                                <Card.Title>Customer:{firstName}</Card.Title>
                                <h4>Locaton:{placeName}</h4>
                                <h3>Total Cost:{cost}</h3>
                            </Card.Body>
                        </div>

                        <div className="col-11 col-lg-3 pt-3">
                            <button className="btn btn-danger m-2 w-100"><small>Status:Pending</small></button> <br />
                            <button onClick={() => handleDelete(_id)} className="btn btn-secondary m-2 w-100">Remove Order</button>
                        </div>
                    </div>
                </Card>
            </Col>
        </div>
    );
};
export default UiOrder;
