import React from 'react';
import company1 from '../img/company1.png';
import company2 from '../img/company2.png';
import company3 from '../img/company3.png';
import company4 from '../img/company4.png';
import company5 from '../img/company5.png';
import company6 from '../img/company6.png';

const TrustedCompanies = () => {
    return (
        <section className="d-none d-lg-block container mt-5">
            <div>
                <div className="text-center pb-5">
                    <h1 className="fw-bold">Trusted by over 800+ companies</h1>
                </div>
                <div className="d-flex justify-content-between mb-5 pb-5">
                    <div><img src={company1} alt="Company 1" /></div>
                    <div><img src={company2} alt="Company 2" /></div>
                    <div><img src={company3} alt="Company 3" /></div>
                    <div><img src={company4} alt="Company 4" /></div>
                    <div><img src={company5} alt="Company 5" /></div>
                    <div><img src={company6} alt="Company 6" /></div>
                </div>
            </div>
        </section>
    )
}

export default TrustedCompanies;