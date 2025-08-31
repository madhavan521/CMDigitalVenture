import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import client1 from "../Component/Client/1.jpg";
import client2 from "../Component/Client/2.jpg";
import client3 from "../Component/Client/3.jpg";
import client4 from "../Component/Client/4.jpg";
import client5 from "../Component/Client/5.jpg";
import client6 from "../Component/Client/6.jpg";
import client7 from "../Component/Client/7.jpg";

function Clients() {
  const clients = [
    { name: "Wonderlamp Trading Academy", image: client7 },
    { name: "Makkal Nethi Maiyam", image: client3 },
    { name: "MS Events", image: client6 },
    { name: "Isha Hair Oil", image: client4 },
    { name: "TM Machine", image: client2 },
    { name: "Eagle Eye", image: client5 },
    { name: "Aram Alternative Foods", image: client1 },
  ];

  const settings = {
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
      <h2 className="text-center mb-4">Our Clients</h2>
      <p className="text-center mb-2">Trusted by businesses & organizations</p>

      <Slider {...settings}>
        {clients.map((client, index) => (
          <div
            key={index}
            className="d-flex justify-content-center align-items-center p-2"
          >
            <div
              className="card shadow text-center h-100"
              style={{ height: "320px" }}
            >
              <img
                src={client.image}
                alt={client.name}
                className="card-img-top"
                style={{
                  height: "120px",
                  objectFit: "contain",
                  padding: "15px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{client.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Clients;
