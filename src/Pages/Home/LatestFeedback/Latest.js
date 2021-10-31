import React from 'react';
import './Latest.css'

const Latest = ({ feed }) => {
    const { name, img, description, position, date } = feed;
    return (
// feedback data show
        <section >

            <div className="row">
                <div className="col-lg-12 col-sm-12">

                    <div id="specialist" className="feed" style={{ display: 'inline-block' }}>


                        <img src={img} alt="" />

                        <div className="cart">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <p className="description fw-lighter">{description}</p>
                            <div className="">
                                <p className="fw-bold">{name}</p>
                                <p className="text-warning">{position}</p>
                                <p>{date}</p>

                                <div className=""><a class="btn btn-dark btn-social mx-1 rounded-circle" href="#!"><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-dark btn-social mx-1 rounded-circle" href="#!"><i
                                        class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-dark btn-social mx-1 rounded-circle" href="#!"><i
                                        class="fab fa-linkedin-in"></i></a></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Latest;