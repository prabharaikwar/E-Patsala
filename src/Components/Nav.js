import React from 'react'

function Nav() {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className="container">                
                <button type='submit' className='rand fs-2 fw-bold btn '>E-Patsala</button>
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-outline-info d-none d-md-block d-lg-none me-3 fw-bold">Register</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse d-lg-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item px-4">                            
                            <button type='submit' className='nav-link  fw-semibold btn '>Home</button>
                        </li>
                        <li className="nav-item px-4">                            
                            <button type='submit' className='nav-link  fw-semibold btn'>Courses</button>
                        </li>
                        <li className="nav-item px-4">                            
                            <button type='submit' className='nav-link  fw-semibold btn'>Deals</button>
                        </li>
                        <li className="nav-item px-4">                            
                            <button type='submit' className='nav-link  fw-semibold btn'>About</button>
                        </li>
                        <li className="nav-item px-4">                            
                            <button type='submit' className='nav-link  fw-semibold btn'>Register</button>
                        </li>
                    </ul>
                </div>
                <button type="button" className="btn btn-outline-info fw-bold d-none d-lg-block d-xl-block d-xxl-block">Register</button>
            </div>

        </nav>
    )
}

export default Nav