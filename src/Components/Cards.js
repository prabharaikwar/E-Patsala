import React from 'react';
import course1 from '../img/course1.png';
import course2 from '../img/course2.png';
import course3 from '../img/course3.png';
import course4 from '../img/course4.png';
import course5 from '../img/course5.png';
import course6 from '../img/course6.png';

function Cards() {
    return (
        <section className="container-fluid d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center justify-content-center text-center col-lg-10 col-md-11 col-sm-11">
                <div className="mb-5">
                    <h1 className="fs-1 fw-bold">Discover Our Popular Courses</h1>
                    <p>Our popular courses are listed below</p>
                </div>
                <div className="gap-4 d-flex flex-wrap justify-content-center">
                    {/* Courses Start  */}
                    <article className="d-block d-lg-flex d-md-flex border rounded col-12 col-lg-5 col-md-12 col-sm-12">
                        <div className="d-flex height">
                            <img src={course1} alt="course 1" className="flex-fill" />
                        </div>
                        <div className="d-flex flex-column justify-content-center px-3 text-start height">
                            <h2 className="fs-4 fw-bold">Fundamental of UI/UX Design</h2>
                            <p>In this course you will learn about user interface and user experience.</p>
                            <h3 className="fs-5 text-primary tw-bold">Price : 20$</h3>
                        </div>
                    </article>
                    <article className="d-block d-lg-flex d-md-flex border rounded col-12 col-lg-5 col-md-12 col-sm-12">
                        <div className="d-flex height">
                            <img src={course2} alt="course 2" className="flex-fill" />
                        </div>
                        <div className="d-flex flex-column justify-content-center px-3 text-start height">
                            <h2 className="fs-4 fw-bold">Javascript Basic to advanced</h2>
                            <p>In this course you will learn about Javascript, from basic to advance.</p>
                            <h3 className="fs-5 text-primary tw-bold">Price : 20$</h3>
                        </div>
                    </article>
                    <article className="d-block d-lg-flex d-md-flex border rounded col-12 col-lg-5 col-md-12 col-sm-12">
                        <div className="d-flex height">
                            <img src={course3} alt="course 3" className="flex-fill" />
                        </div>
                        <div className="d-flex flex-column justify-content-center px-3 text-start height">
                            <h2 className="fs-4 fw-bold">Fullstack Web Development</h2>
                            <p>In this course you will learn Fullstack Web Devolopment, from basic to advance.</p>
                            <h3 className="fs-5 text-primary tw-bold">Price : 20$</h3>
                        </div>
                    </article>
                    <article className="d-block d-lg-flex d-md-flex border rounded col-12 col-lg-5 col-md-12 col-sm-12">
                        <div className="d-flex height">
                            <img src={course4} alt="course 4" className="flex-fill" />
                        </div>
                        <div className="d-flex flex-column justify-content-center px-3 text-start height">
                            <h2 className="fs-4 fw-bold">Digital Marketing</h2>
                            <p>In this course you will learn about digital marketing.</p>
                            <h3 className="fs-5 text-primary tw-bold">Price : 20$</h3>
                        </div>
                    </article>
                    <article className="d-block d-lg-flex d-md-flex border rounded col-12 col-lg-5 col-md-12 col-sm-12">
                        <div className="d-flex height">
                            <img src={course5} alt="course 5" className="flex-fill" />
                        </div>
                        <div className="d-flex flex-column justify-content-center px-3 text-start height">
                            <h2 className="fs-4 fw-bold">Photography Basic Rules</h2>
                            <p className="tw-bold">In this course you will learn about the basic rules of Photography.</p>
                            <h3 className="fs-5 text-primary tw-bold">Price : 20$</h3>
                        </div>
                    </article>
                    <article className="d-block d-lg-flex d-md-flex border rounded col-12 col-lg-5 col-md-12 col-sm-12">
                        <div className="d-flex height">
                            <img src={course6} alt="course 6" className="flex-fill" />
                        </div>
                        <div className="d-flex flex-column justify-content-center px-3 text-start height">
                            <h2 className="fs-4 fw-bold">Motion Graphics</h2>
                            <p>In this course you will learn about Motion Graphics.</p>
                            <h3 className="fs-5 text-primary tw-bold">Price : 20$</h3>
                        </div>
                    </article>
                    {/* Courses End  */}
                </div>
                <button type="button" className="btn btn-primary fw-bold px-4 py-2 mt-5 mb-5">See More Courses</button>
            </div>
        </section>
    )
}

export default Cards