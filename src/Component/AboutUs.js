// src/Component/AboutUs.js
import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">About Us</h2>
          <p className="text-muted small">
            We blend creativity, strategy, and technology to help brands grow digitally.
          </p>
        </div>

        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://img.freepik.com/free-vector/flat-digital-marketing-concept-illustration_23-2148884967.jpg"
              alt="About CM Digital Venture"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <h4 className="fw-bold text-dark">We are CM Digital Venture 🚀</h4>
            <p className="text-dark">
              At <span className="fw-bold">CM Digital Venture</span>, we are more than just a digital agency.
              We are a team of innovators who help businesses, startups, and individuals 
              <b> stand out in the digital world</b>. From running high-performing ad campaigns 
              to building smart websites and AI solutions, we make sure your brand leaves a mark.
            </p>

            {/* Services highlight */}
            <ul className="text-dark">
              <li>⚡ <b>Google & Meta Ads</b> – Run targeted ad campaigns that convert.</li>
              <li>⚡ <b>Instagram Campaigns</b> – 100+ pages with strong reach & engagement.</li>
              <li>⚡ <b>Website & Portfolio Development</b> – Stunning, fast, and responsive designs.</li>
              <li>⚡ <b>Poster & Creative Design</b> – Eye-catching visuals that grab attention.</li>
              <li>⚡ <b>Content & Script Writing</b> – Engaging words that tell your brand story.</li>
              <li>⚡ <b>AI Chatbots</b> – Smart bots for automation & customer support.</li>
            </ul>

            {/* Stats */}
            <div className="row text-center my-4">
              <div className="col-4">
                <h3 className="fw-bold text-primary">100+</h3>
                <p className="small text-muted">Pages Managed</p>
              </div>
              <div className="col-4">
                <h3 className="fw-bold text-primary">1M+</h3>
                <p className="small text-muted">Followers Reached</p>
              </div>
              <div className="col-4">
                <h3 className="fw-bold text-primary">10+</h3>
                <p className="small text-muted">Happy Clients</p>
              </div>
            </div>

            {/* CTA */}
            <Link to='/contact' className="btn btn-dark px-4 py-2 rounded-pill shadow-sm">
              Let’s Work Together
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
