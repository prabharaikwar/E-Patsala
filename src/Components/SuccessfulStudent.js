import React from 'react';
import student1 from '../img/student1.png';
import student2 from '../img/student2.png';
import student3 from '../img/student3.png';
import student4 from '../img/student4.png';

const SuccessfulStudent = () => {
    return (

        <section className="container mb-5 pt-5">
            <div>
                <div className="mb-5 text-center text-md-start">
                    <h1 className="fw-bold pb-4">Meet Our Successfull Students</h1>
                    <p className="text-secondary">Those are our successfull students. They took our courses and performed well.</p>
                </div>
                <div className="row g-3 mb-5">
                    {/* Single Student  */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="border rounded">
                            <img src={student1} className="img-fluid col-md-12 col-12" alt="Student 1" />
                            <div className="ps-3 pt-3">
                                <p className="text-secondary">
                                    <span className="text-dark fw-bold">Awlad Hossain</span><br />UI/UX Designer
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Single Student  */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="border rounded">
                            <img src={student2} className="img-fluid col-md-12 col-12" alt="Student 2" />
                            <div className="ps-3 pt-3">
                                <p className="text-secondary">
                                    <span className="text-dark fw-bold">Jannatul Islam</span><br />Motion Design
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Single Student  */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="border rounded">
                            <img src={student3} className="img-fluid col-md-12 col-12" alt="Student 3" />
                            <div className="ps-3 pt-3">
                                <p className="text-secondary">
                                    <span className="fw-bold text-dark">Imran Hossain</span><br />Graphic Designer
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Single Student  */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="border rounded">
                            <img src={student4} className="img-fluid col-md-12 col-12" alt="Student 4" />
                            <div className="ps-3 pt-3">
                                <p className="text-secondary">
                                    <span className="fw-bold text-dark">Nishi Akter</span><br />Web Developer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary fw-bold px-4 py-2">View All</button>
                </div>
            </div>
        </section>
    )
}

export default SuccessfulStudent