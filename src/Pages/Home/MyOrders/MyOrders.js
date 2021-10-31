import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import UiOrder from '../UiOrder/UiOrder';



const MyOrders = () => {
    const { user } = useAuth();
    const [order, setOrder] = useState([]);
    useEffect(() => {
        const url = 'https://grisly-skull-03334.herokuapp.com/order';
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [order, setOrder])
    // console.log(order)
    const userOrder = order.filter(myOrder => myOrder.firstName === user.displayName);


    return (
        <div className="container">
            <h2>Cheackout your order</h2>

            <Row xs={1} md={1} className="g-4">
                {
                    userOrder.map(uniqOrder => <UiOrder
                        key={uniqOrder._id}
                        myOrder={uniqOrder}
                    ></UiOrder>)
                }
            </Row>

        </div>
    );
};

export default MyOrders;