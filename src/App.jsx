import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Button, Offcanvas } from "react-bootstrap";

// import { Swiper, SwiperSlide } from "swiper/react";

// import { FaShower, FaSprayCan, FaTools, FaBroom } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import Autoplay module
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [isLoading, setisLoading] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    vehicle: "Car",
    time: "",
    address: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = () => {
    if (!form.name || !form.time || !form.address) {
      alert("Please fill all fields!");
      return;
    }

    // Format WhatsApp message
    const message = `Hello, I want to book a wash:
Name: ${form.name}
Vehicle: ${form.vehicle}
Time: ${form.time}
Address: ${form.address}`;

    // Open WhatsApp
    const url = `https://wa.me/917904746889?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const features = [
    {
      icon: <img src="metrial.png" alt="" className="img-fluid" width={100} />,
      title: "Contactless Washing",
      text: "Safe and quick washing without any physical contact.",
    },
    {
      icon: (
        <img src="car-painting.png" alt="" className="img-fluid" width={100} />
      ),
      title: "Safety Materials",
      text: "Eco-friendly cleaning solutions for your vehicle.",
    },
    {
      icon: <img src="car-wash.png" alt="" className="img-fluid" width={100} />,
      title: "Modern Equipment",
      text: "Latest technology for efficient car cleaning.",
    },
    {
      icon: (
        <img src="upholstery.png" alt="" className="img-fluid" width={100} />
      ),
      title: "Extensive Cleaning",
      text: "Thorough cleaning for every part of your vehicle.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration (ms)
      once: false, // whether animation should happen only once
    });
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 2000);

    // cleanup when component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="position-relative  min-vh-100 d-flex flex-column justify-content-center align-items-center overflow-hidden">
        {/* Background Video */}
        <img
          src="car.png"
          width={300}
          height={300}
          alt=""
          className="img-fluid"
          data-aos="zoom-out"
        />

        {/* Overlay Content */}
        <div className="d-flex justify-content-center align-items-center ">
          <h1
            className=" fw-bold text-center display-2 loading-title"
            data-aos="zoom-in"
            style={{ color: "rgba(55, 143, 194, 0.85)" }}
          >
            Welcome GEM Car Wash
          </h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="body">
        <div className="container-fluid video-container" id="home">
          {/* desktop mood */}
          <div className="d-md-flex justify-content-between align-items-center d-none ">
            <img
              src="logos-removebg-preview.png"
              width={200}
              alt=""
              className="img-fluid"
            />
            <ul className="list-unstyled d-flex justify-content-between nav-list align-items-center gap-5 fw-bold desktop-nav">
              <ul className="d-flex list-unstyled gap-4">
                <li>
                  <a href="#home" className="text-decoration-none text-dark">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#car" className="text-decoration-none text-dark">
                    Car Wash
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-decoration-none text-dark"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-decoration-none text-dark">
                    About
                  </a>
                </li>
              </ul>
            </ul>

            <button className="contact-btn rounded ">
              <a href="#contact" className="text-decoration-none text-white">
                Contact
              </a>
            </button>
          </div>

          {/*  */}
          {/* This button will only show on small screens */}
          <div className="row py-2 d-md-none ">
            <div className="col-12 shadow d-flex justify-content-between fixed-top py-3 bg-white  align-items-center">
              <h1 className="display-4" data-aos="fade-left">
                GEM CAR WASH
              </h1>
              <Button
                className="d-md-none bg-white border-0"
                onClick={handleShow}
              >
                <img
                  src="hamburger.png"
                  width={30}
                  alt=""
                  className="img-fluid"
                />
              </Button>

              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="start" // left side
                className="d-md-none
          " // hide on md and above
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    style={{ fontStyle: "'Poppins', sans-serif" }}
                  >
                    Gem Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ul className="list-unstyled fs-2 d-flex flex-column gap-3">
                    <li className="d-flex align-items-center gap-2">
                      <a
                        href="#home"
                        className=" text-decoration-none text-dark d-flex align-items-center gap-2"
                        onClick={handleClose}
                      >
                        <img width={30} src="charging-station.png" alt="" />{" "}
                        Home
                      </a>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <a
                        href="#car"
                        className=" text-decoration-none text-dark d-flex align-items-center gap-2"
                        onClick={handleClose}
                      >
                        <img width={30} src="blue-bg.png" alt="" /> Car Wash
                      </a>
                    </li>

                    <li className="d-flex align-items-center gap-2">
                      <a
                        href="#services"
                        className=" text-decoration-none text-dark d-flex align-items-center gap-2"
                        onClick={handleClose}
                      >
                        <img width={30} src="mechanic.png" alt="" /> Service
                      </a>
                    </li>

                    <li className="d-flex align-items-center gap-2">
                      <a
                        href="#contact"
                        className=" text-decoration-none text-dark d-flex align-items-center gap-2"
                        onClick={handleClose}
                      >
                        <img width={30} src="operator.png" alt="" /> Contact
                      </a>
                    </li>

                    <li className="d-flex align-items-center gap-2">
                      <a
                        href="#about"
                        className=" text-decoration-none text-dark d-flex align-items-center gap-2"
                        onClick={handleClose}
                      >
                        <img width={30} src="info.png" alt="" /> About
                      </a>
                    </li>
                  </ul>
                </Offcanvas.Body>
              </Offcanvas>
            </div>

            <div className="col-12 mt-5 py-3">
              {/* <img
            src="logos-removebg-preview.png"
            alt=""
            data-aos="zoom-in"
            className="img-fluid mt-5"
          /> */}
            </div>
          </div>
        </div>

        <div className="container-fluid car-banner ">
          <div>
            <h1 className="mt-5">Premium Car & Bike Wash</h1>
            <p className="d-flex flex-column px-3  py-3 align-items-center ">
              <button
                className="btn-book w-50"
                onClick={() => {
                  nav("/car");
                }}
              >
                Book Now
              </button>
              <p className="mt-2 fs-5">
                Because a clean car isn’t just about looks — it’s about
                confidence, care, and driving with pride.
              </p>
              <p className="mt-2 fs-1">Open and Close Time 6 AM to 6 PM</p>
            </p>
          </div>
        </div>

        <div
          className="container py-5 px-4 px-md-0"
          style={{ overflow: "hidden" }}
          id="services"
        >
          <div className="row text-center">
            {features.map((feature, index) => {
              // set AOS animation based on index
              let aosEffect = "";
              if (index === 1) aosEffect = "fade-left";
              else if (index === 2) aosEffect = "fade-up";
              else aosEffect = "fade-right"; // default

              return (
                <div
                  key={index}
                  className="col-md-6 col-lg-3 mb-4"
                  data-aos={aosEffect}
                  data-aos-duration="2500"
                >
                  <div
                    className="glass-card p-4 text-white rounded-3 h-100"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(55, 143, 194, 0.85), rgba(10, 40, 80, 0.85))",
                    }}
                  >
                    <div className="mb-3 fs-1">{feature.icon}</div>
                    <h5>{feature.title}</h5>
                    <p className="mb-0">{feature.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="container-fluid  mt-5"
          style={{ overflow: "hidden " }}
          id="about"
        >
          <div className="row flex-row-reverse">
            <div
              className="col-12 col-md-6  d-flex justify-content-center align-items-center"
              style={{ background: "black" }}
            >
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="blue-bg.png" alt="Car 3" className="img-fluid" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-12 text-white about-us py-4 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h2
                className="about-h1"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                About Our Company
              </h2>

              <p data-aos="fade-up" data-aos-delay="100">
                We’re a professional Car & Bike Wash team delivering a showroom
                shine.
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                From foam wash to detailing, we treat every vehicle with care.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                Our experts use modern tools and eco-friendly products for safe
                cleaning.
              </p>
              <p data-aos="fade-up" data-aos-delay="400">
                Fast service, flexible slots, and complete customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="container py-5" style={{ overflow: "hidden" }}>
          <div
            className="row d-flex justify-content-center justify-content-md-around g-4"
            id="car"
          >
            {/* Car Card */}
            <div className="col-12 col-md-5" data-aos="fade-right">
              <div
                className="carbike d-flex justify-content-between align-items-center p-4 shadow rounded-4 h-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(55, 143, 194, 0.85), rgba(10, 40, 80, 0.85))",
                }}
              >
                <div className="d-flex flex-column justify-content-center align-items-center text-start">
                  <h2 className="fw-bold text-white text-center mb-3">
                    Car Details
                  </h2>
                  <button
                    className="details-btn"
                    onClick={() => {
                      nav("/car");
                    }}
                  >
                    Details
                  </button>
                </div>
                <div>
                  <img
                    src="blue-bg.png"
                    alt="Car"
                    className="img-fluid"
                    width={280}
                  />
                </div>
              </div>
            </div>

            {/* Bike Card */}
            <div className="col-12 col-md-5" data-aos="fade-left">
              <div
                className="carbike d-flex justify-content-between align-items-center p-4 shadow rounded-4 h-100 flex-md-row "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(55, 143, 194, 0.85), rgba(10, 40, 80, 0.85))",
                }}
              >
                <div>
                  <img
                    src="bike-removebg-preview.png"
                    alt="Bike"
                    className="img-fluid"
                    width={200}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center text-start ms-md-4">
                  <h2 className="fw-bold text-white mb-3 text-center">
                    Bike Details
                  </h2>
                  <button
                    className="details-btn"
                    onClick={() => {
                      nav("/bike");
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid  py-3"
          style={{
            backgroundImage: "url(lable.jpg)",
            backgroundSize: "cover", // makes it cover full div
            backgroundPosition: "center", // keeps it centered
            backgroundRepeat: "no-repeat", // avoid tiling
          }}
        >
          <div className="row p-3 d-flex justify-content-center">
            <div
              className="col-12 col-md-6 p-5 text-white"
              style={{
                borderRadius: "20px",
                padding: "20px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 8px 10px rgba(0, 0, 0, 0.3)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <h2 className="mb-4">Book Your Wash</h2>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Choose Vehicle</label>
                <select
                  name="vehicle"
                  value={form.vehicle}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Car">Car</option>
                  <option value="Bike">Bike</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Choose Time (6 AM - 6 PM)</label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  min="06:00"
                  max="18:00"
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your address"
                ></textarea>
              </div>

              <button onClick={handleSubmit} className="btn btn-primary w-100">
                Submit on WhatsApp
              </button>
            </div>
          </div>
        </div>

        <div
          className="container-fluid mt-5 p-3"
          style={{ background: "black" }}
          id="contact"
        >
          <h1 className="text-uppercase fs-1 text-white text-center">
            Contact
          </h1>
          <div
            style={{ width: "100%", height: "2px" }}
            className="text-white bg-white"
          ></div>
          <div className="row mt-4 py-3">
            <div className="col-12 col-sm-6 col-md-4">
              <h1 className="text-white">Gem Car Wash</h1>
              <span className="text-white fs-5">
                Premium car wash solutions – trusted for shine & care.
              </span>{" "}
              <br />
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex flex-column align-items-start mt-3 mt-md-0 ">
              <h1 className="text-white text-center">Quick Link</h1>
              <ul className="list-unstyled" style={{ gap: "10px" }}>
                <li>
                  <a href="#home" className="text-white text-decoration-none">
                    {" "}
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white text-decoration-none"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white text-decoration-none"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-white d-flex flex-column align-items-start mt-3 mt-md-0">
              <h1 className="">Follow Us</h1>
              <div className="contact-info d-flex flex-column">
                <div className="contact-item d-flex align-items-center mb-2">
                  <img
                    src="whatsapp.png"
                    alt="WhatsApp"
                    className="contact-icon me-2"
                  />
                  <span>7904746889</span>
                </div>

                <div className="contact-item d-flex align-items-center mb-2">
                  <img
                    src="instagram.png"
                    alt="Instagram"
                    className="contact-icon me-2"
                  />
                  <a
                    href="https://www.instagram.com/gem_water_wash/"
                    className="text-white"
                  >
                    gem_water_wash
                  </a>
                </div>

                <div className="contact-item d-flex align-items-center mb-2">
                  <img
                    src="gmail.png"
                    alt="Gmail"
                    className="contact-icon me-2"
                  />
                  <span>mpoobalan15@gmail.com</span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", height: "2px" }}
          className="text-white bg-white"
        ></div>
      </div>
    </>
  );
};

export default App;
