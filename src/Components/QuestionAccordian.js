import React from 'react'

const QuestionAccordian = () => {
    return (
        <section className="container">
            <div className="text-center mb-5">
                <h1 className="fw-bold">Frequently Asked Questions</h1>
                <p className="text-secondary">Some frequently asked questions answers are given below,</p>
            </div>
            <div className="accordion" id="accordionExample">
                {/* 1st Question  */}
                <div className="accordion-item my-4 border-0">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button fw-bold border rounded-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What are the differences between flexbox and grid?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-secondary">
                            The basic difference between flexbox and grid Layout is that flexbox was designed for layout in one dimension - either a row or a column. Grid was designed for two-dimensional layout - rows, and columns at the same time.
                        </div>
                    </div>
                </div>
                {/* 2nd Question  */}
                <div className="accordion-item my-4 border-0">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed fw-bold border rounded-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What are the differences between bootstrap and tailwind CSS?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-secondary">
                            The main difference between TailwindCSS and Bootstrap is that Tailwind CSS is not a UI kit. Unlike UI kits such as Bootstrap, Tailwind CSS doesn't have a default theme or built-in UI components. Instead, it comes with predesigned widgets you can use to build your site from scratch.
                        </div>
                    </div>
                </div>
                {/* 3rd Question  */}
                <div className="accordion-item my-4 border-0">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed fw-bold border rounded-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What is CSS Box Model?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-secondary">
                            The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.
                        </div>
                    </div>
                </div>
                {/* 4th Question  */}
                <div className="accordion-item my-4 border-0">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed fw-bold border rounded-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            What is a Semantic tag?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-secondary">
                            The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuestionAccordian