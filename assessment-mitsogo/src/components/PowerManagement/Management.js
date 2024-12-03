import React from 'react'
import { images } from '../Images'
import "./Management.css"

function Management() {
    return (
        <section id='Features' className='d-flex justify-content-center align-items-center' style={{ paddingBottom: '80px', paddingTop: '80px' }}>
            <div className='mainWidth'>
                <div className='d-flex justify-content-center'>
                    <h2 className='headingText'>Powerful endpoint management, built for the devices you choose</h2>
                </div>
                <div>
                    <div className='row d-flex justify-content-between mb-5'>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='mx-auto' >
                                <div class="rounded bg-light overflow-hidden w-100" style={{ maxWidth: '380px', maxHeight: " 240px" }}>
                                    <img
                                        alt="Zero touch enrolment with Hexnode UEM"
                                        loading="lazy"
                                        width="380"
                                        height="240"
                                        decoding="async"
                                        className="relative"
                                        src={images.ZEROTOUCH}
                                    />
                                </div>
                                <h2
                                    className="text-center text-md-start fw-bold text-dark imgTitle "
                                    
                                >
                                    Zero-touch Enrollment
                                </h2>
                                <p
                                    className="text-center text-md-start pText"
                                   
                                >
                                    Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.
                                </p>
                            </div>


                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='mx-auto' >
                                <div class="rounded bg-light overflow-hidden w-100" style={{ maxWidth: '380px', maxHeight: " 240px" }}>
                                    <img
                                        alt="Zero touch enrolment with Hexnode UEM"
                                        loading="lazy"
                                        width="380"
                                        height="240"
                                        decoding="async"
                                        className="relative"
                                        style={{ color: 'transparent' }}
                                        src={images.AUTOMATION}
                                    />
                                </div>
                                <h2
                                    className="text-center text-md-start fw-bold text-dark imgTitle"
                                >
                                   Automation
                                </h2>
                                <p
                                    className="text-center text-md-start pText"
                                    
                                >
                                  Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.</p>
                            </div>


                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='mx-auto' >
                                <div class="rounded bg-light overflow-hidden w-100" style={{ maxWidth: '380px', maxHeight: " 240px" }}>
                                    <img
                                        alt="Zero touch enrolment with Hexnode UEM"
                                        loading="lazy"
                                        width="380"
                                        height="240"
                                        decoding="async"
                                        className="relative"
                                        style={{ color: 'transparent' }}
                                        src={images.REMOTE}
                                    />
                                </div>
                                <h2
                                    className="text-center text-md-start fw-bold text-dark imgTitle"
                                >
                                   Remote Access Management
                                </h2>
                                <p
                                    className="text-center text-md-start pText"
                                    
                                >
                                    Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation. </p>
                            </div>


                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='mx-auto' >
                                <div class="rounded bg-light overflow-hidden w-100" style={{ maxWidth: '380px', maxHeight: " 240px" }}>
                                    <img
                                        alt="Zero touch enrolment with Hexnode UEM"
                                        loading="lazy"
                                        width="380"
                                        height="240"
                                        decoding="async"
                                        className="relative"
                                        style={{ color: 'transparent' }}
                                        src={images.ENDPOINT}
                                    />
                                </div>
                                <h2
                                    className="text-center text-md-start fw-bold text-dark imgTitle"
                                >
                                   Endpoint Security and Compliance
                                </h2>
                                <p
                                    className="text-center text-md-start pText"
                                    
                                >
                                  Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.</p>
                            </div>


                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='mx-auto' >
                                <div class="rounded bg-light overflow-hidden w-100" style={{ maxWidth: '380px', maxHeight: " 240px" }}>
                                    <img
                                        alt="Zero touch enrolment with Hexnode UEM"
                                        loading="lazy"
                                        width="380"
                                        height="240"
                                        decoding="async"
                                        className="relative"
                                        style={{ color: 'transparent' }}
                                        src={images.INTEGRATIONS}
                                    />
                                </div>
                                <h2
                                    className="text-center text-md-start fw-bold text-dark imgTitle"
                                >
                                   Integrations
                                </h2>
                                <p
                                    className="text-center text-md-start pText"
                                    
                                >
                                    Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.</p>
                            </div>


                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='mx-auto' >
                                <div class="rounded bg-light overflow-hidden w-100" style={{ maxWidth: '380px', maxHeight: " 240px" }}>
                                    <img
                                        alt="Zero touch enrolment with Hexnode UEM"
                                        loading="lazy"
                                        width="380"
                                        height="240"
                                        decoding="async"
                                        className="relative"
                                        style={{ color: 'transparent' }}
                                        src={images.APPMANAGEMENT}
                                    />
                                </div>
                                <h2
                                    className="text-center text-md-start fw-bold text-dark imgTitle"
                                >
                                    App Management
                                </h2>
                                <p
                                    className="text-center text-md-start pText"
                                    
                                >
                                    Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Management