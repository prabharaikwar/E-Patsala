import React from 'react';
import comma from '../img/comma.png';
import student5 from '../img/student5.png';
import student6 from '../img/student6.png';

const FeedbackStudent = () => {
    return (
        <section className="container">
            <div>
                <div className="text-center">
                    <h1 className="fw-bolder">Some Students Feedback</h1>
                    <p>Here is some feedback from our formal students</p>
                </div>
                <div>
                    <div className="row g-3 mb-5">
                        {/* Single Student Feedback  */}
                        <div className="col-lg-6">
                            <div className="border rounded p-4">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <img src={comma} alt="Comma" />
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-regular fa-star text-warning"></i>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <p className="text-secondary">This E-Learning platform is very good. I took a course in web development. They teach us properly. It's interesting that, From a beginner, right now I am a professional web developer. Thanks to E-Patsala institute.</p>
                                </div>
                                <div className="d-flex">
                                    <div>
                                        <img src={student5} className="img-fluid" alt="Student 5" />
                                    </div>
                                    <p className="ps-3 text-secondary"><span className="text-dark fw-bold">Awlad Hossain</span><br />Web Developer</p>
                                </div>
                            </div>
                        </div>
                        {/* Single Student Feedback  */}
                        <div className="col-lg-6">
                            <div className="border rounded p-4">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <img src={comma} alt="Comma" />
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-regular fa-star text-warning"></i>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <p className="text-secondary">This E-Learning platform is very good. I took a course in graphics design. They teach us properly. It's interesting that, From a beginner, right now I am a professional graphics designer. Thanks to E-Patsala institute.</p>
                                </div>
                                <div className="d-flex">
                                    <div>
                                        <img src={student6} className="img-fluid" alt="Student 6" />
                                    </div>
                                    <p className="ps-3 text-secondary"><span className="fw-bold text-dark">Shanta Akter</span><br />Graphic Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mb-5 d-lg-none">
                <button className="btn btn-primary fw-bold px-4 py-2">View All</button>
            </div>
        </section>
    )
}

export default FeedbackStudent