// src/Component/Testimonials.js
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Wolf Trading Academy",
      role: "Instagram Campaign + Script Writing",
      feedback:
        "CM Digital Venture crafted engaging scripts and ran targeted Instagram campaigns. Our followers increased significantly and the brand visibility grew.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // placeholder avatar
      rating: 5,
    },
    {
      name: "Makkal Nethi Maiyam",
      role: "Political Campaign",
      feedback:
        "They managed campaigns across 45+ Instagram pages with great consistency and reach. The creative content helped us connect with a larger audience.",
      img: "https://cdn-icons-png.flaticon.com/512/149/149071.png", // placeholder avatar
      rating: 5,
    },
    {
      name: "MS Event",
      role: "Instagram Campaign",
      feedback:
        "Our Instagram campaign was executed flawlessly. The page engagement and event awareness improved massively, thanks to CM Digital Venture.",
      img: "https://cdn-icons-png.flaticon.com/512/847/847969.png", // placeholder avatar
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h3 className="fw-bold text-dark">⭐ Client Testimonials</h3>
          <p className="text-muted small">
            Here’s how we helped brands grow with our digital marketing campaigns.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="row">
          {testimonials.map((t, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm border-0 rounded-4 h-100">
                <div className="card-body text-center p-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="rounded-circle mb-3 border"
                    width="80"
                    height="80"
                  />
                  <h6 className="fw-bold text-dark">{t.name}</h6>
                  <p className="small text-muted">{t.role}</p>
                  <p className="text-dark small fst-italic">“{t.feedback}”</p>

                  {/* Star Rating */}
                  <div>
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-warning">★</span>
                    ))}
                    {[...Array(5 - t.rating)].map((_, i) => (
                      <span key={i} className="text-muted">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-4">
          <p className="fw-bold text-dark">
            Your brand could be our next success story 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
