import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
    { id: 1, name: "Chatbot", image: cahtbot },
    { id: 2, name: "Content Writing", image: contentWriting },
    { id: 3, name: "Custom Website", image: customWeb },
    { id: 4, name: "Google Ads", image: google },
    { id: 5, name: "Meta Ads", image: meta },
    { id: 6, name: "Personal Portfolio", image: personalPort },
    { id: 7, name: "Poster Design", image: posterdesign },
    { id: 8, name: "Shopify Development", image: shopifyWeb },
  ];

  return (
    <div className="container my-4">

      <h2 className="text-center mb-4">Our Services</h2>
       <p className="text-center mb-3">Slide To View More</p>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        // navigation
        breakpoints={{
          0: { slidesPerView: 1 },     // xs
          576: { slidesPerView: 2 },   // sm
          768: { slidesPerView: 2 },   // md
          1024: { slidesPerView: 4 },  // lg+
        }}
      >
        {services.map((item) => (
          <SwiperSlide key={item.id}>
            <article className="card h-100 shadow-sm text-center">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{ width: "100%", height: 180, objectFit: "cover" }}
              />
              <div className="card-body">
                <h3 className="card-title fs-6">{item.name}</h3>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Services;
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
    { id: 1, name: "Chatbot", image: cahtbot, minidescription: "AI-powered chatbot" },
    { id: 2, name: "Content Writing", image: contentWriting, minidescription: "Engaging content" },
    { id: 3, name: "Custom Website", image: customWeb, minidescription: "Personalized websites" },
    { id: 4, name: "Google Ads", image: google, minidescription: "Boost visibility" },
    { id: 5, name: "Meta Ads", image: meta, minidescription: "Meta platform marketing" },
    { id: 6, name: "Personal Portfolio", image: personalPort, minidescription: "Showcase yourself" },
    { id: 7, name: "Poster Design", image: posterdesign, minidescription: "Creative posters" },
    { id: 8, name: "Shopify Development", image: shopifyWeb, minidescription: "E-commerce solutions" },
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Default lg
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024, // md & tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // sm
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576, // xs
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
      <p className="text-center mb-3">Slide To View More</p>

      <div className="row">
        <div className="col">
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.id} className="px-2"> {/* spacing wrapper */}
                <div className="card text-center shadow h-100">
                  <div className="p-3">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="mx-auto d-block"
                      style={{ height: "100px", width: "120px", objectFit: "contain" }}
                    />
                    <h6 className="mt-3">{service.name}</h6>
                    <p className="text-muted small">{service.minidescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Services;
