import React from 'react';
import Cover1 from '../img/cover1.png';
import Cover2 from '../img/cover2.jpg';
import Cover3 from '../img/cover3.jpg';

function Carousel() {
    return (
        <section className="mt-5 container h-100 mb-5">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner position-relative">
                    <div className="carousel-item">
                        <img src={Cover1} className="d-block w-100 rounded" alt="cover 1" />
                        <div className="container-fluid carousel-caption d-flex flex-column h-100 align-items-center justify-content-center p-5 position-absolute start-0 bottom-0 bg-black rounded bsbgOpcity">
                            <h1 className="display-2 fw-bold w-75 sliderHeader">Get Started Digital Learning</h1>
                            <p className="sliderPara">We Are The Top Performing E-learning Platform</p>
                            <button className="btn btn-primary fs-4 fw-bold sliderBtn">Get Started</button>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={Cover2} className="d-block w-100 rounded" alt="cover 2" />
                        <div className="container-fluid carousel-caption d-flex flex-column h-100 align-items-center justify-content-center p-5 position-absolute start-0 bottom-0 bg-black rounded bsbgOpcity">
                            <h1 className="display-2 fw-bold w-75 sliderHeader">Get Started Digital Learning</h1>
                            <p className="sliderPara">Get A Chance To Shine In Your Life</p>
                            <button className="btn btn-primary fs-4 fw-bold sliderBtn">Get Started</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Cover3} className="d-block w-100 rounded" alt="cover 3" />
                        <div className="container-fluid carousel-caption d-flex flex-column h-100 align-items-center justify-content-center p-5 position-absolute start-0 bottom-0 bg-black rounded bsbgOpcity">
                            <h1 className="display-2 fw-bold w-75 sliderHeader">Get Started Digital Learning</h1>
                            <p className="sliderPara">We Are Always Here For You</p>
                            <button className="btn btn-primary fs-4 fw-bold sliderBtn">Get Started</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev d-none d-md-block d-lg-block d-xl-block d-xxl-block" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next d-none d-md-block d-lg-block d-xl-block d-xxl-block" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

export default Carousel