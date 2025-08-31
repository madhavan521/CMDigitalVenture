import React from 'react';
import Hero from './Component/Hero';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Testimonials from './Component/Testimonial';
import Clients from './Component/Clients';
import FAQ from './Component/FAQ'
import Process from './Component/Process';
import WhyChooseUs from './Component/WhyChooseUs';

const Home = () => {
  return (
    <div>
    <Hero />
    <Services />
    <Process />
    <WhyChooseUs />
    <Clients /> 
     <Testimonials />

    <FAQ />
    <Contact />

      
    </div>
  );
}

export default Home;
