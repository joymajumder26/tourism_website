import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllOrder from '../Home/AllOrder/AllOrder';


const OrderDashboard = () => {
    const [Dashboard, setDashboard] = useState([])
// data load 
    useEffect(() => {
        fetch('https://grisly-skull-03334.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setDashboard(data));

    }, [Dashboard, setDashboard])


    return (

        <div>
            <div className="container">
                <h2 className="mt-5 text-center mb-4 bg-secondary text-white p-4">All Order Panel</h2>
                <Row xs={1} md={1} className="g-4">
                    {
                        Dashboard.map(allData => <AllOrder
                            key={allData._id}
                            allData={allData}
                        ></AllOrder>)
                    }
                </Row>

            </div>
        </div>
    );
};

export default OrderDashboard;