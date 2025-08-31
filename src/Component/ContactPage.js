import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactPage = () => {
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
    <div className="contact-page text-dark">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Hero Section */}
      <section className="py-5 text-center  text-dark">
        <h2 className="fw-bold">Let’s Build Something Amazing 🚀</h2>
        <p className="text-dark-50">
          Have a project in mind? Looking to scale your brand? We’re here to help you
          with digital marketing, websites, and smart AI solutions. Get in touch today!
        </p>
      </section>

      <div className="container py-5">
        <div className="row g-4">
          {/* Left Side Info */}
          <div className="col-lg-5">
            <div className="p-4 rounded-4 shadow-sm bg-white mb-4">
              <h5 className="fw-bold mb-3">📍 Contact Information</h5>
              <p className="mb-1"><strong>Email:</strong> businessmadhavan@gmail.com</p>
              <p className="mb-1"><strong>Phone:</strong> +91 6374675659</p>
              <p className="mb-1"><strong>Location:</strong> Kanchipuram, Tamil Nadu, India</p>
              <p><strong>Office Hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM</p>
              <p className="small text-muted">
                We usually respond within a few hours. For urgent queries, please call us directly.
              </p>
            </div>

            <div className="p-4 rounded-4 shadow-sm bg-white">
              <h5 className="fw-bold mb-3">🌐 Connect With Us</h5>
              <p className="mb-2">Follow us on social platforms and never miss an update:</p>
              <div className="d-flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">📸 Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">💼 LinkedIn</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦 Twitter</a>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="col-lg-7">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-4 rounded-4 shadow-sm bg-white text-dark"
            >
              <h5 className="fw-bold mb-3">📬 Send Us a Message</h5>

              <div className="mb-3">
                <label htmlFor="user_name" className="form-label small fw-bold">Name</label>
                <input
                  type="text"
                  name="from_name"
                  id="user_name"
                  className="form-control rounded-3"
                  placeholder="Your Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="user_email" className="form-label small fw-bold">Email</label>
                <input
                  type="email"
                  name="from_email"
                  id="user_email"
                  className="form-control rounded-3"
                  placeholder="Your Email"
                  value={useremail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label small fw-bold">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control rounded-3"
                  rows="4"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-gradient w-100 fw-bold rounded-pill"
              >
                🚀 Book Your Free Call
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-5">
          <h5 className="fw-bold mb-3">📍 Find Us in Kanchipuram</h5>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.523210912478!2d79.6990!3d12.8342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c2f2bbd4b2a5%3A0x6c3a0f9f63746756!2sKanchipuram%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1669044473229"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-4 shadow-sm"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
