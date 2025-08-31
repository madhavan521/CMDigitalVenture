import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Clients</h2>
      <p className="text-center mb-3">Trusted by businesses & organizations</p>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // pagination={{ clickable: true }}
        // navigation={true}
             breakpoints={{
          0: { slidesPerView: 1 },     // xs
          576: { slidesPerView: 2 },   // sm
          768: { slidesPerView: 2 },   // md
          1024: { slidesPerView: 4 },  // lg+
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {clients.map((client) => (
          <SwiperSlide key={client.id}>
            <div className="card text-center shadow h-100">
              <div className="p-3">
                <img
                  src={client.image}
                  alt={client.name}
                  className="mx-auto d-block"
                  style={{
                    height: "100px",
                    width: "120px",
                    objectFit: "contain",
                  }}
                />
                <h6 className="mt-3">{client.name}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Clients;
