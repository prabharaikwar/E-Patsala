import React from 'react';
import RegisterNow from './RegisterNow';

const ReadyToJoin = () => {

    return (
        <section className="container mt-5 mb-5">
            <div className="d-md-block d-lg-flex justify-content-between align-items-center bg-info rounded p-5 text-center text-lg-start">
                <div className="text-white">
                    <h1 className="fw-bold">Ready To Join?</h1>
                    <p>We have so many courses, that you can enroll. Register for enrollment.</p>
                </div>
                <div>
                    <button type="button" className="btn btn-light px-3 py-2 text-info fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal" >Register Now</button>
                    <RegisterNow />
                </div>
            </div>
        </section>
    )
}

export default ReadyToJoin;