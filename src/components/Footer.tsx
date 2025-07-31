import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logomain.png";
export default function Footer() {
  return (
    <>
      <div
        className="container-fluid   backgoundoramge  puzzle py-5 wow fadeIn  "
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item d-flex flex-column">
                <Image
                  src={logo}
                  alt="Golden Coffee Roasters Logo"
                  width={280}
                  height={110}
                  priority
                />
                <p className="mb-3 ">
                  At Quality Industries, we specialize in complete coffee
                  processing solutions — blending innovation, hygiene, and
                  precision to help manufacturers achieve consistent quality and
                  sustainable growth.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item d-flex flex-column px-md-5">
                <h4 className="mb-4">Quick Links</h4>
                <Link href="/" className="text-decoration-none text-black">
                  Home
                </Link>
                <Link href="/about" className="text-decoration-none text-black">
                  {" "}
                  About us
                </Link>
                <Link
                  href="/process"
                  className="text-decoration-none text-black"
                >
                  Process
                </Link>

                <Link
                  href="/product"
                  className="text-decoration-none text-black"
                >
                  Products
                </Link>
                <Link
                  href="/contact "
                  className="text-decoration-none text-black"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4">Contact Info</h4>
                <div  className=" text-decoration-none text-black d-flex gap-2">
                  <div> <i className="bi bi-geo-alt-fill text-decoration-none text-black"></i>{" "}</div>
                  <div>  Sy.No: 810, Plot No. 19-B/11, Phase-II, IDA Patancheru, Medak
                  Dist. 502319, Telangana.</div>
                
                </div>
          <div  className=" text-decoration-none text-black d-flex gap-2">
                  <i className="bi bi-geo-alt-fill text-decoration-none text-black"></i>{" "}
                  Flat No. 192, Maneesh Enclave, 2nd Floor, Bhagyanagar Phase-3,
                  Near MNR College Kukatpally, Hyderabad - 500090.
                  </div>
                <Link
                  href="mailto:info@example.com"
                  className="text-decoration-none text-black"
                >
                  <i className="bi bi-envelope-fill me-2 text-decoration-none text-black"></i>{" "}
                  qualityindustries123@gmail.com
                </Link>
                <Link
                  href="tel:+01234567890"
                  className="text-decoration-none text-black"
                >
                  <i className="bi bi-telephone-fill text-decoration-none text-black"></i>{" "}
                  +91 9100090879
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid puzzle   border-top">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-md-6 text-center text-md-start mb-md-0">
                <span className="">
                  <Link href="#" className="  fw-bold text-black">
                    <i className="bi bi-c-circle-fill px-2 text-decoration-none"></i>
                    Quality Industries.global
                  </Link>
                  , All right reserved.
                </span>
              </div>
              <div className="col-md-6 text-center text-md-end   text-decoration-none text-black">
                Designed By{" "}
                <Link
                  className="  text-decoration-none fw-bold text-black"
                  href="https://www.ambros.tech/"
                >
                  {" "}
                  Ambros Tech Solutions Pvt. Ltd.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <a href="#" className="btn backgoundoramge btn-lg-square back-to-top"><i className="bi bi-arrow-up text-white"></i></a>    */}
    </>
  );
}
