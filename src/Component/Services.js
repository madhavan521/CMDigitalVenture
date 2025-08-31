import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cahtbot from "../Asset/cahtbot.jpg";
import contentWriting from "../Asset/content-writing-2.png";
import customWeb from "../Asset/custome web.jpg";
import google from "../Asset/google.png";
import meta from "../Asset/meta.png";
import personalPort from "../Asset/personal port.png";
import posterdesign from "../Asset/posterdesign.jpg";
import shopifyWeb from "../Asset/ShopifyDevelopment.png";

function Services() {
  const services = [
    {
      name: "Chatbot",
      image: cahtbot,
      minidescription: "AI-powered chatbot solutions",
      description: "We build smart chatbots to automate your customer support and sales.",
    },
    {
      name: "Content Writing",
      image: contentWriting,
      minidescription: "Engaging content",
      description: "We provide SEO-friendly blogs, scripts, and social media content.",
    },
    {
      name: "Custom Website",
      image: customWeb,
      minidescription: "Personalized websites",
      description: "Responsive websites tailored to your business needs.",
    },
    {
      name: "Google Ads",
      image: google,
      minidescription: "Boost visibility",
      description: "Run high-conversion Google Ads to grow your brand reach.",
    },
    {
      name: "Meta Ads",
      image: meta,
      minidescription: "Meta platform marketing",
      description: "Targeted ads on Facebook & Instagram to maximize conversions.",
    },
    {
      name: "Personal Portfolio",
      image: personalPort,
      minidescription: "Showcase yourself",
      description: "Build your personal portfolio website to highlight your skills.",
    },
    {
      name: "Poster Design",
      image: posterdesign,
      minidescription: "Creative posters",
      description: "We design engaging posters for marketing and promotions.",
    },
    {
      name: "Shopify Website Development",
      image: shopifyWeb,
      minidescription: "E-commerce solutions",
      description: "Launch your Shopify store with professional design and setup.",
    },
  ];

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <p className="text-center mb-2">Slide To View More</p>

      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="d-flex justify-content-center align-item-center p-2">
            <div
              className="card shadow text-center h-100"
              style={{ height: "320px" }}
            >
              <img
                src={service.image}
                alt={service.name}
                className="card-img-top"
                style={{
                  height: "120px",
                  objectFit: "contain",
                  padding: "15px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="text-muted">{service.minidescription}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Services;
