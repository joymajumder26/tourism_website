import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        //footer 
        <footer classNameName="footer footer ">
            <div className="container" >

                <div className="row mt-5">

                    <div className="col-lg-4">
                        <h4>Address</h4>
                        <p>59 Street, 1200 Techpark</p>
                        <p>+59888555</p>
                        <p>medilink@gmail.com</p>
                    </div>
                    <div className="col-lg-4  my-lg-0 text-lg-center ">
                        <h4>Follow us</h4>
                        <a className="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><i
                            className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><i
                            className="fab fa-linkedin-in"></i></a>
                    </div>

                    <div className="col-lg-4 text-lg-end ">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
                <div className="text-lg-center">Copyright &copy; Joy Majumder 2021</div>
            </div>
        </footer>
    );
};

export default Footer;