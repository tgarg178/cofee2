'use client'
import React from 'react'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'
// import Link from 'next/link'


import GlobalEnquiryForm from '@/components/GlobalPopupEnquiry';


import cofeebaneer from "@/assets/process1.webp";





const Services = () => {

  return (
    <>
      {/* <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" >
                <h4 className="text-white display-4 mb-4 wow  animate__animated animate__fadeInDown fs700" data-wow-delay="0.1s">PRODUCTS</h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow  animate__animated animate__fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item "><Link href="/" className='text-decoration-none text-white'>Home</Link></li>
                   
                    <li className="breadcrumb-item active text-white">Products</li>
                </ol>    
            </div>
        </div> */}





          <section className=" text-white py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 text-uppercase text-black ">Our Product</h2>

        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="img-container border rounded overflow-hidden">
              <Image src={cofeebaneer} alt="Coffee Processing Systems" className="img-fluid w-100" />
            </div>
          </div>

          <div className="col-md-6">
            <h4 className="fw-bold mb-3 text-black">Complete Coffee Plant Solutions</h4>
            <p className='text-black'>
              We specialize in building end-to-end, fully automated coffee processing plants tailored to your needs.
              Our systems are designed to maximize flavor, consistency, and operational efficiency, while adhering to international food safety standards.
            </p>

            <ul className="list-unstyled">
              <li className='text-black'><span  className="bi bi-check-lg text-black me-2"></span> <strong>Green Coffee Handling:</strong> Systems for intake, cleaning, storage & weighing</li>
              <li className='text-black'><span  className="bi bi-check-lg text-black  me-2"></span> <strong>Extraction Units:</strong> Optimized for aroma retention and high yield</li>
              <li className='text-black'><span  className="bi bi-check-lg text-black me-2"></span> <strong>Evaporation Systems:</strong> Concentrate coffee efficiently with minimal energy loss</li>
              <li className='text-black'><span  className="bi bi-check-lg text-black me-2"></span> <strong>Spray Drying & Freeze Drying:</strong> Delivering high-quality instant and soluble coffee</li>
              <li className='text-black'><span  className="bi bi-check-lg text-black me-2"></span> <strong>Automated Control Panels:</strong> PLC/SCADA-based systems for precision control</li>
              <li className='text-black'><span  className="bi bi-check-lg text-black me-2"></span> <strong>Custom Plant Design:</strong> Built to meet your production scale and footprint</li>
            </ul>
          </div>
        </div>

        
<div className="row">
  <div className="col-md-6 mb-4">
    <h5 className="text-black fw-bold mb-3">Modular and Scalable Systems</h5>
    <p className='text-black'>
      Our coffee processing systems are modular — built to scale with your business. Start with a base configuration
      and expand production without disrupting existing operations. Ideal for both new startups and large enterprises.
    </p>

    <h5 className="text-black fw-bold mt-4 mb-3">Tailored to Every Roast & Blend</h5>
    <p className='text-black'>
      Whether you are processing Arabica, Robusta, or specialty blends, our systems are fully configurable to match your roast profile,
      flavor goals, and packaging requirements — ensuring brand consistency across batches.
    </p>
  </div>

  <div className="col-md-6 mb-4">
    <h5 className="text-black  fw-bold mb-3">Certified Quality Assurance</h5>
    <p className='text-black'>
      Every component in our system is designed and manufactured under strict international standards (ISO, CE, and FDA where required).
      We implement thorough quality checks at each stage of production and assembly.
    </p>

    <h5 className="text-black fw-bold mt-4 mb-3">Sustainability-Driven Engineering</h5>
    <p className='text-black'>
      From water reuse systems to energy recovery and low-emission designs, our coffee plants are built to reduce environmental impact
      and help you meet sustainability targets without compromising performance.
    </p>
  </div>
</div>
<div className="text-center mt-4">


     <GlobalEnquiryForm className="btn  backgoundoramge text-white rounded-0 pymainatin py-3 px-5 px-md-5 ms-2 me-2 " buttonText="Enquire About Our Solutions"
          />

</div>
      </div>
    </section>
    </>
  )
}

export default Services
