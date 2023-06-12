import React from 'react';
import working from '../img/working.png';

const ExploreSection = () => {
    return (
        <section className="container mb-5 pb-5 pt-5">
            <div className="card border rounded-0">
                <div className="row g-0">
                    <div className="col-md-6 col-lg-4">
                        <img src={working} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-8 d-flex  exploreColor">
                        <div className="card-body px-lg-5 d-flex flex-column justify-content-center">
                            <h1 className="fw-bold pb-lg-2">Explore The E-Patsala Institute</h1>
                            <p className="">Our institute is the market-leading e-learning platform. By joining our institute you can learn so many things. Nowadays e-learning is the best platform for learning. We offer you many courses, from which you can choose one or more.</p>
                            <div className="d-flex my-md-3 my-lg-3">
                                <div className="pe-md-3 pe-lg-5">
                                    <h1 className="fw-bold">3.2K+</h1>
                                    <h5>Online Course</h5>
                                </div>
                                <div className="pe-md-3 pe-lg-5">
                                    <h1 className="fw-bold">600+</h1>
                                    <h5>Expert Member</h5>
                                </div>
                                <div className="pe-md-3 pe-lg-5">
                                    <h1 className="fw-bold">1K+</h1>
                                    <h5>Rating &amp; Review</h5>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-primary fw-bold px-4 py-2">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExploreSection