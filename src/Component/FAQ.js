import React from "react";

const FAQ = () => {
  return (
    <section className="py-5 bg-light" id="faq">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                What services does CM Digital Venture provide?
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse show"
              aria-labelledby="faq1"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                We provide end-to-end digital marketing services including
                Instagram campaigns, Meta & Google ads, website development,
                AI-powered solutions, content creation, and branding.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                Do you guarantee results?
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              aria-labelledby="faq2"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                We don’t believe in fake promises. Instead, we guarantee
                data-driven strategies and consistent growth tailored to your
                brand goals.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
              >
                How long does it take to see growth?
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse"
              aria-labelledby="faq3"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Growth depends on your niche and campaign strategy. Generally,
                you start noticing measurable results within 4–8 weeks of
                consistent marketing efforts.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
              >
                Why should I choose CM Digital Venture?
              </button>
            </h2>
            <div
              id="collapse4"
              className="accordion-collapse collapse"
              aria-labelledby="faq4"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                We manage 100+ Instagram page campaigns, have proven client
                success stories, and use AI-driven marketing to deliver faster
                and smarter results.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse5"
                aria-expanded="false"
                aria-controls="collapse5"
              >
                How can I get started?
              </button>
            </h2>
            <div
              id="collapse5"
              className="accordion-collapse collapse"
              aria-labelledby="faq5"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Simply contact us via the form or WhatsApp. Our team will
                discuss your goals, build a strategy, and launch your campaign.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
