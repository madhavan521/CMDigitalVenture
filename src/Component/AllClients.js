import React from "react";

import client1 from "../Component/Client/1.jpg";
import client2 from "../Component/Client/2.jpg";
import client3 from "../Component/Client/3.jpg";
import client4 from "../Component/Client/4.jpg";
import client5 from "../Component/Client/5.jpg";
import client6 from "../Component/Client/6.jpg";
import client7 from "../Component/Client/7.jpg";
import { Link } from "react-router-dom";

function AllClients() {
  const clients = [
    { 
      name: "Wonderlamp Trading Academy", 
      image: client7,
      desc: "We helped them grow student community through Instagram campaigns, scripts, and content design." 
    },
    { 
      name: "Makkal Nethi Maiyam", 
      image: client3,
      desc: "Executed large-scale political digital campaigns across 45+ Instagram pages with high engagement." 
    },
    { 
      name: "MS Events", 
      image: client6,
      desc: "Built brand awareness through event promotions and social media strategies." 
    },
    { 
      name: "Isha Hair Oil", 
      image: client4,
      desc: "Handled creative campaigns to boost product visibility and build brand trust." 
    },
    { 
      name: "TM Machine", 
      image: client2,
      desc: "Managed digital campaigns that highlighted their products & services." 
    },
    { 
      name: "Eagle Eye", 
      image: client5,
      desc: "Created impactful ad campaigns to grow online reputation and client base." 
    },
    { 
      name: "Aram Alternative Foods", 
      image: client1,
      desc: "Developed brand identity and promoted healthy lifestyle products through social campaigns." 
    },
  ];

  return (
    <div className="container my-5">
      {/* Header */}
      <h2 className="text-center mb-3">Our Clients</h2>
      <p className="text-center text-muted mb-5">
        At <b>CM Digital Venture</b>, we are proud to partner with businesses, organizations, 
        and influencers across different industries. Our clients trust us to build their 
        digital presence, run high-performing campaigns, and create measurable results.
      </p>

      {/* Clients Grid */}
      <div className="row">
        {clients.map((client, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4">
            <div className="card shadow h-100 d-flex flex-column justify-content-center align-items-center">
              <img
                src={client.image}
                alt={client.name}
                className="card-img-top"
                style={{
                  height: "160px",
                  width: "auto",
                  objectFit: "contain",
                  padding: "15px",
                }}
              />
              <div className="card-body text-center">
                <h6 className="card-title fw-bold">{client.name}</h6>
                <p className="card-text text-muted">{client.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Studies */}
      <div className="my-5">
        <h3 className="text-center mb-4">Success Stories</h3>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow p-3 h-100">
              <h5>Wonderlamp Trading Academy</h5>
              <p className="text-muted">
                Increased followers & engagement through structured Instagram campaigns 
                and educational content. Built strong digital presence for trading students.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow p-3 h-100">
              <h5>Makkal Nethi Maiyam</h5>
              <p className="text-muted">
                Managed political awareness campaigns across 45+ Instagram pages, 
                reaching lakhs of users and driving active engagement during campaigns.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow p-3 h-100">
              <h5>MS Events</h5>
              <p className="text-muted">
                Promoted events through creative ad campaigns and local social media targeting, 
                ensuring high audience turnout & visibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center my-5 p-4  text-dark rounded shadow">
        <h4>Want to become our next success story?</h4>
        <p>
          Whether you are a startup, brand, or political organization, 
          we can help you grow digitally with impactful campaigns.
        </p>
        
       <Link to="/contact" className="btn btn-gradient fw-bold">
          Contact Us Today
        </Link>
      </div>
    </div>
  );
}

export default AllClients;
