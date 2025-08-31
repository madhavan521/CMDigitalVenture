import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_j41n29j", "template_n745f6f", form.current, {
        publicKey: "Kf9IOn5zdYi4D9gU9",
      })
      .then(
        () => {
          toast.success("✅ Email Sent Successfully!");
          setTimeout(() => {
            setMessage("");
            setUserEmail("");
            setUsername("");
          }, 1000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("❌ Error, Try Again");
        }
      );
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <Toaster position="top-center" reverseOrder={false} />

        {/* Heading */}
        <div className="text-center mb-5">
          <h3 className="fw-bold">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/ios/50/135deg/contact-card.png"
              alt="contact-card"       

              className="me-2"
            />
            Contact Us
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/ios-filled/50/135deg/horizontal-line.png"
              alt="horizontal-line"
              className="ms-2"
            />
          </h3>
          <p className="text-muted small">We are always open to discuss new projects ✨</p>
        </div>

        {/* Form */}
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-4 rounded-4 shadow-sm bg-white"
            >
                <div className="mb-3">
                  <label htmlFor="user_name" className="form-label small">
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    id="user_name"
                    className="form-control form-control-sm rounded-3"
                    placeholder="Your Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="user_email" className="form-label small">
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    id="user_email"
                    className="form-control form-control-sm rounded-3"
                    placeholder="Your Email"
                    value={useremail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label small">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control form-control-sm rounded-3"
                    rows="3"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-sm fw-bold btn-gradient rounded-pill text-white"
                //   style={{
                //     background: "linear-gradient(90deg,#31fe16,#22C3E6)",
                //   }}
                >
                  🚀 Book Your Free Call
                </button>
              </div>
            </form>

            {/* Extra Info */}
            <div className="text-center mt-3 small text-muted">
              📧 businessmadhavan@gmail.com | 📍 Kanchipuram, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
