import React from "react";
import { NavLink } from "react-router-dom";
import "./About.css"; // Thêm file CSS cho phong cách riêng

const About = () => {
  return (
    <div className="about-section">
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Welcome to TS Store, your go-to destination for stylish and
              quality clothing! Explore our diverse collection of modern,
              elegant, and casual wear, all at affordable prices. <br></br><br></br>
              At TS Store, we offer a user-friendly online shopping experience with top-notch
              customer service. From office outfits to casual attire, our
              carefully curated selection ensures you'll always look and feel
              your best. <br></br><br></br>
              Discover our latest collections, enjoy exclusive offers, and sign up for our newsletter to stay updated on fashion
              trends. We’re dedicated to providing you with excellent products
              and service, making your shopping experience enjoyable and
              satisfying.
            </p>
            <NavLink
              to="/contact"
              className="btn btn-outline-primary px-4 py-2"
            >
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src="/assets/images/about.png"
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        {/* <div className="row mt-5">
                    <div className="col-12">
                        <h2 className="text-center text-primary fw-bold mb-4">Our Mission</h2>
                        <p className="lead text-center mb-4">
                            Our mission is to provide the best services to our customers with utmost dedication and passion. We aim to deliver high-quality products that meet the needs and expectations of our clients.
                        </p>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default About;
