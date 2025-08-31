// src/Component/Process.js
import React from "react";
import { FaSearch, FaLightbulb, FaCogs, FaChartLine } from "react-icons/fa";

const Process = () => {
  return (
    <section className="py-5 bg-light" id="process">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Our Process</h2>
        <div className="row text-center g-4">
          
          {/* Step 1 */}
          <div className="col-md-3">
            <div className="p-4 border rounded shadow-sm h-100 bg-white">
              <div className="mb-3">
                <FaSearch size={40} style={{ color: "orange" }} />
              </div>
              <h5 className="fw-bold">Discovery</h5>
              <p className="text-muted">
                We start by researching your brand, market, and audience to gain deep insights.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-3">
            <div className="p-4 border rounded shadow-sm h-100 bg-white">
              <div className="mb-3">
                <FaLightbulb size={40} style={{ color: "deeppink" }} />
              </div>
              <h5 className="fw-bold">Strategy</h5>
              <p className="text-muted">
                Our team crafts a data-driven plan designed to achieve your business goals.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-3">
            <div className="p-4 border rounded shadow-sm h-100 bg-white">
              <div className="mb-3">
                <FaCogs size={40} style={{ color: "dodgerblue" }} />
              </div>
              <h5 className="fw-bold">Execution</h5>
              <p className="text-muted">
                We put the plan into action with creative designs, ads, and campaigns.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="col-md-3">
            <div className="p-4 border rounded shadow-sm h-100 bg-white">
              <div className="mb-3">
                <FaChartLine size={40} style={{ color: "green" }} />
              </div>
              <h5 className="fw-bold">Results</h5>
              <p className="text-muted">
                We measure success, optimize performance, and deliver visible growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
