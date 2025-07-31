"use client";
;





// import { toast } from "react-hot-toast";

// import { ErrorMessage, Field, Form, Formik } from "formik";
// import emailjs from "emailjs-com";

// import { Button } from 'react-bootstrap';

import React, { useEffect ,useState} from 'react';
import { usePathname } from 'next/navigation';
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';
import Image from 'next/image';
// import banner from '../assets/machine1baneer.webp'; 
import logo from '../assets/logomain.png';
// import logo2 from '../assets/logonew.png';
// import logo3 from '../assets/logo3.png';


import cofemanu2 from '../assets/cofemanu2.webp'

// import { Autoplay } from 'swiper/modules';
// import counseling from '../assets/counseling.png';
// import warranty from '../assets/warranty.png';
// import support from '../assets/support.png';
// import technology from '../assets/technology.png';
// import sustainability from '../assets/sustainability.png';
// import f1 from '../assets/f1.png';
// import f2 from '../assets/f2.png';
// import f3 from '../assets/f3.png';
// import f4 from '../assets/f4.png';
// import f5 from '../assets/f5.png';
// import f6 from '../assets/f6.png';
// import f7 from '../assets/f7.png';
// import f8 from '../assets/f8.png';
// import f9 from '../assets/f9.png';
// import f10 from '../assets/f10.png';
// import f11 from '../assets/f11.png';
// import f12 from '../assets/f12.png';



import test1 from "@/assets/test1.webp";
import test2 from "@/assets/test2.webp";
import test3 from "@/assets/test3.webp";
import test4 from "@/assets/test4.webp";
import test5 from "@/assets/test5.webp";
import test6 from "@/assets/test6.webp";


import bannr1 from "../assets/b9new.jpg";
import bannr4 from "../assets/b3new.jpg";

import bannr3 from "../assets/b7new.jpg";


import bannr2 from "../assets/b10.jpg";


import Link from 'next/link';
// Swiper and Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Home() {
  const pathname = usePathname();



  
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/services' },
  { label: 'Product', href: '/Product' },

  { label: 'Contact', href: '/contact' },
];

const socialIcons = [
  { icon: 'facebook', color: '#F26522' },
  { icon: 'instagram', color: '#F26522' },
  { icon: 'linkedin', color: '#F26522' },
  { icon: 'twitter', color: '#F26522' },
  { icon: 'youtube', color: '#F26522' },
];

  useEffect(() => {
    import('bootstrap/js/dist/collapse').then(({ default: Collapse }) => {
      const collapseEl = document.getElementById('navbarNavDropdown');
      if (collapseEl?.classList.contains('show')) {
        const bsCollapse = Collapse.getInstance(collapseEl) || new Collapse(collapseEl);
        bsCollapse.hide();
      }
    });
  }, [pathname]);
// const banners = [
//   banner,
// banner,
// banner,
//  banner,
// banner,
// ];


// const features = [
//   {
//     icon: sustainability,
//     title: 'Sustainability',
//     desc: 'We prioritize a greener future through eco-friendly practices',
//   },
//   {
//     icon: technology,
//     title: 'Technology',
//     desc: 'Embrace innovation with cutting-edge technology for roasting experience',
//   },
//   {
//     icon: support,
//     title: '24/7 Technical Support',
//     desc: 'Enjoy round-the-clock support to address queries and troubleshoot',
//   },
//   {
//     icon: warranty,
//     title: 'International Warranty',
//     desc: 'Trust in our products with a comprehensive international warranty',
//   },
//   {
//     icon:counseling,
//       title: 'Counseling Services',
//     desc: 'We offer valuable insights and support for your coffee roasting journey',
//   }
// ];

// const features2 = [
//  {
//     title: '2 Year Warranty',
//     icon: f1,
//     desc: 'Golden coffee roasters come with a 2-year warranty for worry-free performance.',
//   },
//   {
//     title: '3rd Party Software Compliance',
//     icon: f2,
//     desc: 'Compatible with third-party software such as Artisan and Cropster for seamless roasting control.',
//   },
//   {
//     title: 'Air Flow Control',
//     icon: f3,
//     desc: 'Precise airflow adjustment enables consistent and even roasting results.',
//   },
//   {
//     title: 'Conductive Roasting',
//     icon: f4,
//     desc: 'Ensures uniform heat transfer through conduction for enhanced bean flavor development.',
//   },
//   {
//     title: 'Double Wall Drum',
//     icon: f5,
//     desc: 'Reduces heat loss and improves roast stability using an insulated dual-layer drum.',
//   },
//   {
//     title: 'Drum Speed Control',
//     icon: f6,
//     desc: 'Allows users to fine-tune the drum rotation speed for optimal roast profiles.',
//   },
//   {
//     title: 'Energy Efficiency',
//     icon: f7,
//     desc: 'Designed for maximum energy savings while maintaining peak roasting performance.',
//   },
//   {
//     title: 'Flame Level Control',
//     icon: f8,
//     desc: 'Adjustable flame settings help regulate temperature for each roast stage.',
//   },
//   {
//     title: 'Fully Automation',
//     icon: f9,
//     desc: 'Offers full automation for easy and repeatable roast cycles with minimal operator input.',
//   },
//   {
//     title: 'High Thermal Insulation',
//     icon: f10,
//     desc: 'High-grade insulation materials preserve heat and reduce energy consumption.',
//   },
//   {
//     title: 'Low NOx',
//     icon: f11,
//     desc: 'Eco-friendly burner design ensures low nitrogen oxide (NOx) emissions for a greener roast.',
//   },
//   {
//     title: 'Modulated Burner',
//     icon: f12,
//     desc: 'Automatically modulates flame output for consistent and precise temperature control.',
//   }
// ];

const testimonials = [
  {
    name: "Estella Castillo",
    role: "Dunes & Beans Cafe",
    text: "Ideal's turnkey coffee processing systems have completely transformed our production line. From green bean handling to final drying, every step is now streamlined, efficient, and quality-controlled.",
    image: test1,
  },
  {
    name: "Ricardo Alvarez",
    role: "Madrid Mornings Cafe",
    text: "Working with Ideal gave us more than just machines — they delivered a complete solution. Their extraction and drying technology preserved the rich aroma of our beans better than anything we’ve used before.",
    image: test2,
  },
  {
    name: "Harshita Jain",
    role: "Roasted Bliss",
    text: "What sets Ideal apart is their deep expertise and dedication. Their automated systems brought precision, efficiency, and consistent quality to our operations, all while reducing manual intervention.",
    image: test3,
  },
  {
    name: "Sonia Fernandes",
    role: "Cafe Mocha Vibe",
    text: "From equipment design to on-site commissioning, Ideal handled everything with professionalism. The support team is responsive and proactive — we truly feel like we’re in a long-term partnership.",
    image: test4,
  },
  {
    name: "Vikram Jha",
    role: "Bean Brew Express",
    text: "Thanks to Ideal’s energy-efficient technologies, we’ve reduced operating costs without compromising quality. Their commitment to sustainability and food safety matches our own values.",
    image: test6,
  },
  {
    name: "Ritika Menon",
    role: "The Roast Room",
    text: "Ideal doesn’t just supply equipment — they deliver results. Their systems helped us scale our production while maintaining premium taste, aroma, and compliance with international standards.",
    image: test5,
  },
];
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (



  <>





     <nav className="navbar navbar-expand-lg bgnavbar py-0 border-bottom">
      <div className="container-fluid px-3 px-md-5 d-flex align-items-center justify-content-between">
        {/* Logo */}
        <div className="d-flex align-items-center px-3 py-2">
          <Image
            src={logo} // change to your logo path
            alt="Continental Logo"
            width={250}
            height={80}
            className="d-inline-block align-top"
            priority
          />
        </div>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className={`collapse navbar-collapse justify-content-center ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav gap-3">
            {navLinks.map(({ label, href }) => (
              <li className="nav-item" key={href}>
                <Link
                  href={href}
                  className={`nav-link text-uppercase fw-semibold small custom-nav-link ${
                    pathname === href ? 'fw-bold border-bottom border-2 active-link' : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social icons for mobile view */}
          <div className="d-lg-none mt-3 d-flex justify-content-center gap-2">
            {socialIcons.map(({ icon, color }, idx) => (
              <div
                key={idx}
                className="d-flex justify-content-center align-items-center rounded-circle"
                style={{ width: '38px', height: '38px', backgroundColor: color }}
              >
                <i className={`bi bi-${icon} text-white`}></i>
              </div>
            ))}
          </div>
        </div>

        {/* Social Icons on Desktop */}
        <div className="d-none d-lg-flex gap-2">
          {socialIcons.map(({ icon, color }, idx) => (
            <div
              key={idx}
              className="d-flex justify-content-center align-items-center rounded-circle"
              style={{ width: '38px', height: '38px', backgroundColor: color }}
            >
              <i className={`bi bi-${icon} text-white`}></i>
            </div>
          ))}
        </div>
      </div>
    </nav>



   <section >
     

      

       
<Swiper
  modules={[Navigation, Pagination, EffectCreative, ]} // Include Autoplay
  navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
  pagination={{ el: ".custom-pagination", type: "fraction" }}
 
  autoplay={{
    delay: 2000, 
    disableOnInteraction: false, 
  }}
  loop
  className="mySwiper  swipwrheighr"
>
          {[bannr1,bannr2, bannr3, bannr4].map((image, index) => (
            <SwiperSlide className="swiperslid" key={index}>
              <div className="position-relative w-100 responsive-banner">
                <Image
                  src={image}
                  alt={`banner-${index + 1}`}
                  fill
                  className="object-cover w-100 h-100"
                  priority={index === 0}
                />
          
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
   
       

        
       

      </section>




  <section className="py-md-5 py-0">
      <div className="container text-center">
        {/* Heading */}
        <h2 className="fw-bold mb-4 text-uppercase" style={{ color: '#2D0B00' }}>About Us</h2>

        {/* Description */}
        <p className="mb-5 mx-auto" style={{ fontSize:'20px', lineHeight: '1.8' }}>
        We specialize in turnkey coffee processing solutions—from green bean handling to instant and soluble coffee production. Our advanced, energy-efficient systems ensure precision, hygiene, and compliance across extraction, evaporation, drying, and automation. Backed by decades of expertise and a global presence, we deliver integrated solutions with timely installation, 24/7 support, and strong client partnerships. Our mission is to preserve coffee’s richness while maximizing operational efficiency, sustainability, and long-term success.
        </p>

        {/* Stats */}
        <div className="row justify-content-center">
          {[
            { number: '400+', label: 'Clients' },
            { number: '1000+', label: 'Blends' },
            { number: '100+', label: 'Countries' },
          
          ].map((item, idx) => (
            <div className="col-6 col-sm-6 col-md-3 mb-4" key={idx}>
              <div className='statBox'>
                <div className="text-orange fw-bold fs-3">{item.number}</div>
                <div className="fw-semibold text-dark">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>





  <section className="container my-5 aboutSection ">
        <div className="row align-items-center">
          <div className="col-md-6 ortalama-ayari-768">
            <Image
              alt="Golden Coffee Roasters"
              className="mask-image lazy entered lazy-loaded"
              width="500"
              height="500"
              data-ll-status="loaded"
              src={cofemanu2}
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <h2 className="fw-bold">
              <span className="goldText">Quality Industries </span> – Pioneering
              Turnkey Coffee Process Engineering
              {/* Integrates Cutting-Edge Tech and{' '} */}
              {/* <span className='goldText'>Craftsmanship</span> with Mastery */}
            </h2>
            <p className="mt-3">
              Welcome to Quality Industries, where innovation meets precision in
              coffee processing. As a trusted provider of turnkey plant
              solutions for the coffee industry, we specialize in delivering
              technologically advanced, energy-efficient, and hygienic
              processing systems that span the entire production cycle — from
              green bean handling to instant and soluble coffee manufacturing.
            </p>
            <p>
              Our comprehensive expertise ensures that every step — from
              aroma-optimizing extraction, efficient evaporation, to
              spray-drying and freeze-drying — is engineered for maximum
              quality, consistency, and productivity.
            </p>
            <p>
              Whether you are a small-batch specialty producer or a large-scale
              industrial manufacturer, we offer customized solutions, global
              support, and a deep commitment to your long-term success. At
              Quality Industries, we don’t just build coffee plants — we build
              performance, trust, and a sustainable future for coffee.
            </p>

            <button className="btn btnorage px-4 py-2 rounded-pill mt-3 ">
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>




  <section className="container my-5">
        <h2 className="text-center mb-4 pb-4 h2size  ">Testimonials</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination, ]}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="card border-1 shadow-sm p-4 testimonialCard">
                <div className="d-flex align-items-center mb-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h6 className="mb-0">{item.name}</h6>
                    <small className="text-muted">{item.role}</small>
                  </div>
                </div>
                <p className="mb-0">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section> 

          {/* <section className="py-4 px-3 max90banner">
      <h5 className="text-dark fw-semibold mb-3">
        <span className="me-2" style={{ color: '#c49b00' }}>●</span>
      Innovating Coffee Roasting with Quality Industries Excellence
      </h5>


<Swiper
  modules={[Autoplay]}
  autoplay={{
    delay: 1000,
    disableOnInteraction: false,
  }}
  loop={true}
  spaceBetween={10}
  slidesPerView={1} 
  breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  }}
>
        {features.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='card py-3'>
              <div className="d-flex align-items-start gap-3">
                <img src={item.icon.src} alt={item.title} width={50} height={50} />
                <div>
                  <h6 className="fw-bold mb-1 goldenh6">{item.title}</h6>
                  <p className="mb-0 text-muted small">{item.desc}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section> */}



{/* 
        <section className='container my-5 aboutSection'>
      <div className="row align-items-center">
     


          <div className="col-md-6 ortalama-ayari-768">
                        <Image alt="Golden Coffee Roasters" className="mask-image lazy entered lazy-loaded" width="500" height="500" data-ll-status="loaded"   src={cofemanu2}/>
                    </div>

        <div className="col-lg-6">
          <h2 className="fw-bold">
            <span className='goldText'>Quality Industries </span>{' '}
            – Pioneering Turnkey Coffee Process Engineering
          
          </h2>
          <p className="mt-3">
           Welcome to Quality Industries, where innovation meets precision in coffee processing. As a trusted provider of turnkey plant solutions for the coffee industry, we specialize in delivering technologically advanced, energy-efficient, and hygienic processing systems that span the entire production cycle — from green bean handling to instant and soluble coffee manufacturing.
          </p>
          <p>
         Our comprehensive expertise ensures that every step — from aroma-optimizing extraction, efficient evaporation, to spray-drying and freeze-drying — is engineered for maximum quality, consistency, and productivity.
          </p>
          <p>
         Whether you're a small-batch specialty producer or a large-scale industrial manufacturer, we offer customized solutions, global support, and a deep commitment to your long-term success. At Quality Industries, we don’t just build coffee plants — we build performance, trust, and a sustainable future for coffee.
          </p>
          
          
      <button className="btn btn-dark px-4 py-2 rounded-pill mt-3 golden-hover">
  <span>Contact Us</span>
</button>


        </div>
      </div>
    </section> */}



    {/* <section className="py-5 container aboutSection">
      <div className=" text-center">
        <h2 className="mb-2">Product Features</h2>
        <p className="text-muted mb-4">Standard and Optional Features of Golden Products</p>

        <div className="row g-4">
          {features2.map((feature, idx) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={idx}>
              <div className='flipCard rounded-5'>
                <div className='flipCardInner rounded-1'>
                  <div className='flipCardFront p-4 rounded-5'>
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={100}
                      height={100}
                      className="mb-3"
                    />
                    <p className="fw-semibold">{feature.title}</p>
                  </div>
                  <div className='flipCardBack p-3 rounded-5'>
                    <p className="text-white m-0">{feature.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
 */}

     

  </>
  );
}
