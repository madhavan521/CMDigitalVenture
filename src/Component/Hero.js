import React from 'react';
import '.././App.css'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div>
       <section className=" d-flex align-items-center justify-content-center text-center">
      <div className="container">
<h1 className="display-4 fw-bold">CM Digital Venture</h1>
<p className="lead">
  Your Digital Growth Partner <br />
  Websites · Ads · Creative Design · Chatbots
</p>
<p className="sub-lead">
  We create stunning websites, powerful ad campaigns, 
  eye-catching designs, and smart AI chatbots 
  to grow your brand online.
</p>



        <Link to='/Allservice' className="btn btn-gradient  btn-lg mt-3">
          Explore Services  
        </Link>
      </div>
    </section>
    </div>
  );
}

export default Hero;
