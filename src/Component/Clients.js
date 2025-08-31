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
    { id: 1, name: "Wonderlamp Trading Academy", image: client7 },
    { id: 2, name: "Makkal Nethi Maiyam", image: client3 },
    { id: 3, name: "MS Events", image: client6 },
    { id: 4, name: "Isha Hair Oil", image: client4 },
    { id: 5, name: "TM Machine", image: client2 },
    { id: 6, name: "Eagle Eye", image: client5 },
    { id: 7, name: "Aram Alternative Foods", image: client1 },
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinite: false,
    speed: 500,
    slidesToShow: 4, // lg
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024, // md
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
      <h2 className="text-center mb-4">Our Clients</h2>
      <p className="text-center mb-3">Trusted by businesses & organizations</p>

      <div className="row">
        <div className="col">
          <Slider {...settings}>
            {clients.map((client) => (
              <div key={client.id} className="px-2"> {/* spacing */}
                <div className="card text-center shadow h-100">
                  <div className="p-3">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="mx-auto d-block"
                      style={{ height: "100px", width: "120px", objectFit: "contain" }}
                    />
                    <h6 className="mt-3">{client.name}</h6>
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

export default Clients;
