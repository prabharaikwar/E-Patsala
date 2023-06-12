import React from 'react'

const RegisterNow = () => {
    return (
        <section>
            <div className="modal fade block" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold" id="exampleModalLabel">Register Now</h5>
                            <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-email" className="col-form-label">E-mail Id : </label>
                                    <input type="email" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Password :</label>
                                    <input type="password" className="form-control" id="recipient-password" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                            <button type="button" className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterNow