import React from "react";

// Import images
import cahtbot from "./Asset/cahtbot.jpg";
import contentWriting from "./Asset/content-writing-2.png";
import customWeb from "./Asset/custome web.jpg";
import google from "./Asset/google.png";
import meta from "./Asset/meta.png";
import personalPort from "./Asset/personal port.png";
import posterdesign from "./Asset/posterdesign.jpg";
import shopifyWeb from "./Asset/ShopifyDevelopment.png";
import instaCampaignImg from './Asset/Insta.png'
const services = [
  { 
    name: "Chatbot", 
    image: cahtbot, 
    description: `We build AI-powered chatbots that automate customer support.  
They respond instantly to common queries, reducing workload on your team.  
Our chatbots can be integrated across websites, apps, and social platforms.  
They improve customer satisfaction by being available 24/7.  
We use NLP for human-like conversations.  
Bots can be customized for FAQs, lead generation, or booking systems.  
They reduce response time drastically.  
You save time and operational costs.  
Multi-language support ensures global reach.  
Integration with CRM keeps data organized.  
They continuously learn from interactions.  
Performance is tracked with detailed analytics.  
We ensure secure and scalable deployment.  
Your customers always get a professional experience.  
Chatbots are the future of customer service, and we bring that future to you.` 
  },
{ 
  name: "Instagram Page Campaigns",
  image: instaCampaignImg,
  description: `
    Our Instagram Page Campaign service is one of our strongest offerings, 
    designed to give your brand massive visibility and reach. 
    With access to more than 100+ active Instagram pages across different niches, 
    we can promote your business to a wide audience in an authentic and engaging way. 
    Each campaign is strategically planned, ensuring your content reaches not just random users, 
    but the right audience who are most likely to connect with your brand. 
    We carefully design creatives, captions, and content strategies 
    that align with your brand voice while still fitting the trends of each page. 
    This allows your brand to get organic-style visibility instead of looking like just another ad. 
    Our campaigns guarantee higher impressions, better engagement, 
    and more chances of converting viewers into followers and loyal customers. 
    By leveraging multiple Instagram pages, you get 10x more reach 
    compared to traditional single-page campaigns. 
    Whether your goal is brand awareness, lead generation, or direct sales, 
    our team ensures that every campaign is tailored to maximize results. 
    In short, we don’t just run ads – we build campaigns that leave a long-lasting digital impact.
  `
},


  { 
    name: "Content Writing", 
    image: contentWriting, 
    description: `We deliver SEO-optimized blogs, articles, and website content.  
Our writers craft engaging, unique, and well-researched content.  
Content is tailored to your brand voice and target audience.  
We ensure plagiarism-free and high-quality writing.  
Each piece is optimized for keywords and readability.  
Our goal is to improve your ranking in search engines.  
Engaging headlines capture audience attention.  
Well-structured articles drive higher engagement.  
We focus on storytelling for brand impact.  
Content is crafted for better lead generation.  
We cover technical, creative, and marketing niches.  
We provide long-form and short-form content.  
Editing and proofreading ensure perfection.  
Timely delivery meets your marketing schedules.  
Good content builds trust, and we help you achieve that.` 
  },
  { 
    name: "Custom Website", 
    image: customWeb, 
    description: `We create responsive websites tailored to your business.  
Every design is modern and user-friendly.  
We focus on mobile-first development.  
Our websites load quickly for better user retention.  
Security is implemented with the latest standards.  
We build both static and dynamic websites.  
Custom dashboards can be included.  
SEO optimization comes by default.  
We integrate analytics for insights.  
Websites are scalable as your business grows.  
E-commerce features can be added.  
Designs align with your brand identity.  
Cross-browser compatibility is ensured.  
Maintenance support is always available.  
Your website becomes your strongest digital asset.` 
  },
  { 
    name: "Google Ads", 
    image: google, 
    description: `We design and manage Google Ads campaigns.  
Our focus is on maximizing ROI.  
We research profitable keywords.  
Campaigns are optimized for conversions.  
We set up search, display, and video ads.  
Retargeting brings back lost leads.  
We create compelling ad copies.  
Landing pages are optimized for results.  
A/B testing improves performance.  
Budget allocation is handled smartly.  
You get detailed monthly reports.  
We ensure cost-effective clicks.  
Campaigns are continuously monitored.  
Competitor analysis is included.  
Your brand visibility skyrockets with Google Ads.` 
  },
  { 
    name: "Meta Ads", 
    image: meta, 
    description: `We specialize in Facebook and Instagram ads.  
Our ads target the right demographics.  
We use engaging creatives and videos.  
Lead generation forms are optimized.  
E-commerce businesses benefit hugely.  
We track metrics like CTR and conversions.  
Campaigns are optimized daily.  
Custom audiences increase relevance.  
We do split testing for better results.  
Story ads and reels boost engagement.  
We retarget abandoned carts.  
Reports show campaign effectiveness.  
You reach your customers where they spend time.  
Our ads improve sales and brand awareness.  
Meta Ads make digital growth faster.` 
  },
  { 
    name: "Personal Portfolio", 
    image: personalPort, 
    description: `We design stunning personal portfolio websites.  
Portfolios highlight your skills effectively.  
Each design is tailored to your career.  
Creative layouts make you stand out.  
Portfolios are fully responsive.  
They showcase projects and achievements.  
Blog sections can be included.  
We add testimonials for credibility.  
SEO ensures recruiters find you.  
Fast-loading pages create good impressions.  
Social links integrate seamlessly.  
Design matches your personal branding.  
Portfolios work as digital resumes.  
Maintenance support is optional.  
Your portfolio opens doors to opportunities.` 
  },
  { 
    name: "Poster Design", 
    image: posterdesign, 
    description: `We create attractive and professional posters.  
Our posters grab instant attention.  
They are perfect for events and promotions.  
We use modern design principles.  
Colors and fonts match brand identity.  
Each poster is unique and creative.  
Posters are optimized for print and digital.  
We design flyers and brochures too.  
Attention to detail is our priority.  
Graphics are sharp and engaging.  
We create both minimal and detailed designs.  
Posters are delivered in multiple formats.  
Turnaround time is quick.  
Our designs boost visibility.  
A good poster spreads your message fast.` 
  },
  { 
    name: "Shopify Website Development", 
    image: shopifyWeb, 
    description: `We build scalable Shopify e-commerce stores.  
Stores are easy to manage.  
Product pages are designed to sell.  
Checkout flows are seamless.  
Payment gateways are integrated.  
Inventory management is automated.  
We add custom features as needed.  
Themes are tailored for your brand.  
Mobile optimization is a priority.  
SEO ensures higher rankings.  
We integrate shipping solutions.  
Marketing tools are connected.  
Reports help track performance.  
Support and maintenance are available.  
Your online store is future-ready with Shopify.` 
  },
];


const AllServices = () => {
  return (
     <div className="container ">
      <h2 className="text-center mb-4 fw-bold">All Services</h2>
      <p className="text-center text-muted mb-5">
  Explore our wide range of digital solutions designed to help your brand grow online and stand out in the market.
</p>

      <div className="row">
        {services.map((service, index) => (
         <div key={index} className="col-lg-6 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
  <div 
    className="card h-100 shadow-sm" 
    style={{ width: "90%", minHeight: "420px" }} 
  >
    <img
      src={service.image}
      alt={service.name}
      className="card-img-top"
      style={{ height: "200px"}}
    />
    <div className="card-body">
      <h5 className="card-title">{service.name}</h5>
      <p className="card-text">{service.description}</p>
    </div>
  </div>
</div>

        ))}
      </div>
    </div>

  );
};

export default AllServices;
