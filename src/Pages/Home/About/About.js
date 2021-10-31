import React from 'react';
import './About.css';

const About = () => {
    return (
        // About pages Details
        <section className="container my-5 " id="Question">

            <div id="about" className="row my-5 about">

                <div className="col-lg-6 col-sm-6 q-img d-flex img">

                    <img className="ms-5" src="https://tevily-html.vercel.app/assets/images/resources/about-one-img-1.png" style={{ width: "750px", height: "550px" }} alt="" />


                </div>
                <div className="col-lg-6 col-sm-12 my-5 activity">

                    <div>
                        <h5 className="mt-5 mb-4 text-success">Welcome To Tevily Website</h5>
                        <h1>Plan Your Trip with Trevily</h1>
                        <p className="fw-light"> With our all in one platform for booking and managing trains, flights, hotels and car hire with 24/7 customer support, business travel has never been smoother.</p>
                        <h5><i class="far fa-hand-point-right"></i> Find Your Perfect Trip</h5>
                        <h5><i class="far fa-hand-point-right"></i>  Book With Confidence</h5>
                        <h5><i class="far fa-hand-point-right"></i> We've Got Your Back</h5>
                        <button className="btn btn-danger button mt-3">Booking With us Now</button>
                    </div>

                </div>


            </div>




        </section>
    );
};

export default About;