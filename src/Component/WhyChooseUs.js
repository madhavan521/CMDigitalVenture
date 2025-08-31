// src/Component/WhyChooseUs.js
import React from "react";
import { FaUsers, FaRocket, FaAward, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-5 bg-white" id="why-choose-us">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Why Choose Us</h2>
        <p className="text-center text-muted mb-5">
          We’re not just another digital agency — we focus on delivering real growth, 
          personalized support, and creative strategies that make your brand stand out.
        </p>
        <div className="row text-center g-4">
          
          {/* Feature 1 */}
          <div className="col-md-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <FaUsers size={40} style={{ color: "orange" }} className="mb-3" />
              <h5 className="fw-bold">Experienced Team</h5>
              <p className="text-muted">
                A passionate group of marketers, designers, and developers driving results.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <FaRocket size={40} style={{ color: "deeppink" }} className="mb-3" />
              <h5 className="fw-bold">Innovative Strategies</h5>
              <p className="text-muted">
                We bring fresh, out-of-the-box ideas to keep you ahead of competitors.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <FaAward size={40} style={{ color: "dodgerblue" }} className="mb-3" />
              <h5 className="fw-bold">Proven Results</h5>
              <p className="text-muted">
                With 100+ successful campaigns, we know how to deliver measurable growth.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="col-md-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <FaHeadset size={40} style={{ color: "green" }} className="mb-3" />
              <h5 className="fw-bold">Dedicated Support</h5>
              <p className="text-muted">
                We’re always just a call or message away to help your business succeed.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
