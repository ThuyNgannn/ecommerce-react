import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Đảm bảo bạn đã cài đặt bootstrap nếu chưa có

const Contact = () => {
    return (
        <div className="container mb-5">
            <div className="text-center py-4 my-4">
                <h1>Have Some Questions?</h1>
                <hr className="w-25 mx-auto" />
            </div>
            <div className="row align-items-center">
                <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                    <img 
                        src="/assets/images/contact.png" 
                        alt="Contact Us" 
                        className="img-fluid" 
                        style={{ maxHeight: '300px' }} 
                    />
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="fullName" 
                                placeholder="John Smith" 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                placeholder="name@example.com" 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea 
                                className="form-control" 
                                id="message" 
                                rows="5" 
                                placeholder="Your message here..." 
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
