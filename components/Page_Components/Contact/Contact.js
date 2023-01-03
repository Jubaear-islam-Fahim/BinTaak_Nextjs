import React from 'react';


const Contact = () => {
    return (
        <>
            <div className="contact-area ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="title">
                            <h2>Contact us</h2>
                            <h3>Chat with BinTaak Family</h3>
                            <p>We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                        </div>


                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-contact">
                                        <i className="ri-map-pin-line"></i>
                                        <p className="office">Office</p>
                                        <span>Come say hello at our office HQ.</span>
                                        <p className="location">100 Smith Street Collingwood VIC 3066 AU</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-contact">
                                        <i className="ri-phone-line"></i>
                                        <p className="office">Phone</p>
                                        <span>Mon-Fri from 8am to 5pm.</span>
                                        <a href="tel:+1 (555) 000-0000" className="phone">+1 (555) 000-0000</a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-contact">
                                        <i className="ri-mail-fill"></i>
                                        <p className="office">Email</p>
                                        <span>Come say hello at our office HQ.</span>
                                        <a href="mailto:hi@bintaal.com" className="phone">hi@bintaal.com</a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-contact">
                                        <i className="ri-whatsapp-line"></i>
                                        <p className="office">Live chat</p>
                                        <span>Our friendly team is here to help.</span>
                                        <a href="#" className="phone">Start new chat</a>
                                    </div>
                                </div>
                            </div>
                            <div className="qr">
                                <img src="/assets/img/qr.png" alt="qr" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <form action="#" className='contact-from'>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group mb-4">
                                            <label>First name</label>
                                            <input type="text" name="fname" id="fname" className="form-control" required="" placeholder="First name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mb-4">
                                            <label>Last name</label>
                                            <input type="text" name="lname" id="lname" className="form-control" required="" placeholder="Last name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" name="email" id="email" className="form-control" required="" placeholder="you@mail.com" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input type="text" name="phone" id="phone" className="form-control" required="" placeholder="+123 456874645" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-5">
                                        <div className="form-group has-error">
                                            <textarea name="message" className="form-control" id="message" cols="30" rows="5" placeholder="Your Message"></textarea>
                                        </div>
                                    </div>

                                    <a href="#" className="box-btn w-100">Send Message</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;