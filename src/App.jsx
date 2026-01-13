import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Button, Offcanvas } from "react-bootstrap";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { useNavigate } from "react-router-dom";

const App = () => {
  // states
  const [isLoading, setisLoading] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  // button-change state
  const [open, setOpen] = useState(false);

  //  Router Page
  const nav = useNavigate();

  const features = [
    {
      icon: <img src="metrial.png" alt="" className="img-fluid" width={100} />,
      title: " Washing",
      text: "Safe and quick washing with physical contact.",
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

  // Swiper components
  const slides = [
    {
      image: "Lamborghini.jpg",
      tag: "Premium Service",
      title: "Give Your Car the Care It Deserves",
      desc: "High-quality detailing services that restore shine, protect paint, and keep your car looking brand new.",
    },

    {
      image: "redcars.jpg",
      tag: "CARE YOUR CAR",
      title: "It’s time to Come Clean your Car",
      desc: "Professional Car Wash Center to help you to get clean vehicle!",
    },
    {
      image: "sidecar.jpg",
      tag: "PROFESSIONAL CARE",
      title: "Give Your Car a New Shine",
      desc: "We bring back the beauty of your ride.",
    },
    {
      image: "cardetailing.avif",
      tag: "BEST SERVICE",
      title: "Your Car Deserves The Best",
      desc: "Premium wash and detailing services.",
    },
  ];

  // use-Effect's

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

  // Book Now  Menu form

  const [forms, setForms] = useState({
    name: "",
    phone: "",
    vehicle: "",
    date: "",
    time: "",
  });

  const handleChanges = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  const handleSubmits = (e) => {
    e.preventDefault();

    const message = `
  Name: ${forms.name}
  Phone: ${forms.phone}
  Vehicle: ${forms.vehicle}
  Date: ${forms.date}
  Time: ${forms.time}
  `;

    window.open(
      `https://wa.me/917904746889?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    // close modal
    const modal = document.getElementById("appointmentModal");
    const instance =
      window.bootstrap.Modal.getInstance(modal) ||
      new window.bootstrap.Modal(modal);

    instance.hide();

    // clear form
    setForms({
      name: "",
      phone: "",
      vehicle: "",
      date: "",
      time: "",
    });
  };
  // Price Book
  const pricingPlans = [
    {
      title: "Sedan Monthly Package",
      price: "₹2000",
      duration: "4 Washes / Month",
      features: [
        "4 Exterior Washes",
        "₹500 per Wash",
        "Full Body Wax ₹200",
        "Wax Offer Price ₹100",
      ],
    },
    {
      title: "SUV Monthly Package",
      price: "₹2400",
      duration: "4 Washes / Month",
      best: true,
      features: [
        "4 Exterior Washes",
        "₹600 per Wash",
        "Full Body Wax Polish ₹300",
        "Wax Offer Price ₹150",
      ],
    },
    {
      title: "MPV Monthly Package",
      price: "₹2400",
      duration: "4 Washes / Month",
      features: [
        "4 Exterior Washes",
        "₹600 per Wash",
        "Full Body Wax Polish ₹300",
        "Wax Offer Price ₹150",
      ],
    },
  ];

  const priceviabooking = (plan) => {
    const message = `
  Car Wash Booking 🚗✨
  
  Plan: ${plan.title}
  Price: $${plan.price}
  Duration: ${plan.duration}
  
  Services:
  ${plan.features.map((f) => `- ${f}`).join("\n")}
  `;

    window.open(
      `https://wa.me/917904746889?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // ✅ Loader
  if (isLoading) {
    return (
      <div
        style={{ background: "black" }}
        className="min-vh-100 d-flex justify-content-center align-items-center"
      >
        <img src="speeddisplay.gif" alt="Loading" />
      </div>
    );
  }

  return (
    <>
      <div className="body">
        {/* Top Book Now with details */}
        <section className="d-none  d-md-block" style={{ overflow: "hidden" }}>
          <div className="row">
            <div
              className="col-10 py-2 d-flex justify-content-around align-items-center"
              style={{ background: "black" }}
            >
              <span className="text-white">
                🕒 Monday–Sunday 6:00AM - 6:00PM
              </span>
              <span className="text-white"> 📞 79047-46889</span>
              <span className="text-white">
                {" "}
                12/A Pampayan Ambalam Lane , Avaniyapuram , Madurai- 625012
              </span>
            </div>

            <button
              style={{ background: " rgb(22, 76, 148)" }}
              data-bs-toggle="modal"
              data-bs-target="#appointmentModal"
              className="col-2 book-now-top  rounded-0 rounded text-white fw-semibold d-flex align-items-center justify-content-center"
            >
              + Book Now
            </button>
          </div>
        </section>

        {/* open menu form*/}
        {/* MODAL */}
        <div
          className="modal fade"
          id="appointmentModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Schedule Appointment</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body">
                <form onSubmit={handleSubmits}>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={forms.name}
                        onChange={handleChanges}
                        required
                      />
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="">Phone Number</label>

                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                        value={forms.phone}
                        onChange={handleChanges}
                        required
                      />
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="">Select Vechicle</label>
                      <select
                        name="vehicle"
                        className="form-control"
                        value={forms.vehicle}
                        onChange={handleChanges}
                        required
                      >
                        <option value="">Select Vehicle</option>
                        <option value="Car">Car</option>
                        <option value="Bike">Bike</option>
                      </select>
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="">Date</label>
                      <input
                        type="date"
                        name="date"
                        className="form-control"
                        value={forms.date}
                        onChange={handleChanges}
                        required
                      />
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="">Time</label>
                      <input
                        type="time"
                        name="time"
                        className="form-control"
                        value={forms.time}
                        onChange={handleChanges}
                        required
                      />
                    </div>

                    <div className="col-12 mt-3">
                      <button type="submit" className="btn btn-dark px-4">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <section
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="d-md-none"
        >
          {/* ===== TOP SMALL BAR ===== */}
          <div
            className="d-flex justify-content-between align-items-center py-2"
            style={{ height: "46px", background: "black" }}
          >
            <button
              className="btn text-white"
              data-bs-toggle="collapse"
              data-bs-target="#topInfo"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                "✕"
              ) : (
                <img
                  src="down-chevron.png"
                  width={30}
                  alt=""
                  className="img-fluid"
                />
              )}
            </button>

            <button
              style={{ background: "rgb(22, 76, 148)" }}
              data-bs-toggle="modal"
              data-bs-target="#appointmentModal"
              className="book-now-top rounded-0 text-white fw-semibold py-2"
            >
              + Book Now
            </button>
          </div>

          {/* ===== COLLAPSIBLE CONTENT ===== */}

          <div
            style={{
              background: "black",
              overflow: "hidden",
              maxHeight: open ? "300px" : "0px",
              opacity: open ? 1 : 1,
              transition:
                "max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease",
            }}
          >
            <div style={{ padding: open ? "16px" : "0px", color: "white" }}>
              <p className="mb-2">
                📍12/A Pampayan Ambalam Lane , Avaniyapuram , Madurai- 625012
              </p>
              <p className="mb-2">📞 800-123-4567, Fax: 718-724-3312</p>
              <p className="mb-2">✉️ officeone@youremail.com</p>
              <p className="mb-3">⏰ Mon–Fri: 9:00 am – 5:00 pm</p>
            </div>
          </div>
        </section>

        {/* End Top Book Now with details */}

        {/* Navbar */}
        <section
          id="home"
          className="sticky-top"
          style={{ backgroundColor: "rgb(22, 76, 148)" }}
        >
          {/* ================= DESKTOP NAV ================= */}
          <div className="d-none d-md-block">
            <div className="container-md">
              <div className="d-flex align-items-center justify-content-between py-3">
                {/* Logo */}
                <a href="#home">
                  <img
                    src="gemlogo-bg.png"
                    width={90}
                    alt="Brand Logo"
                    className="img-fluid"
                  />
                </a>

                {/* Links */}
                <ul className="d-flex list-unstyled align-items-center gap-4 fw-semibold mb-0">
                  <li>
                    <a
                      href="#home"
                      className="text-white nav-hover text-decoration-none"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#home"
                      className="text-white nav-hover text-decoration-none"
                    >
                      Car Detailing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#home"
                      className="text-white nav-hover text-decoration-none"
                    >
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a
                      href="#car"
                      className="text-white nav-hover text-decoration-none"
                    >
                      Car Wash
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-white nav-hover text-decoration-none"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-white nav-hover text-decoration-none"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-white nav-hover text-decoration-none"
                    >
                      Contact
                    </a>
                  </li>
                </ul>

                {/* Button */}
                <div></div>
              </div>
            </div>
          </div>

          {/* ================= MOBILE NAV ================= */}
          <div className="d-md-none">
            <div className="container py-3 d-flex align-items-center justify-content-between">
              <img src="gemlogo-bg.png" width={80} alt="BrandLogo" />

              <button className="border-0 bg-transparent" onClick={handleShow}>
                <img src="menu.png" width={40} alt="menu" />
              </button>
            </div>

            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="start"
              style={{ background: "rgb(22, 76, 148)" }}
            >
              <Offcanvas.Header closeButton className="text-white">
                <Offcanvas.Title>Gem Menu</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <ul className="list-unstyled fs-4 d-flex flex-column gap-3">
                  {[
                    ["Home", "home", "charging-station.png"],
                    ["Car Wash", "car", "blue-bg.png"],
                    ["Service", "services", "mechanic.png"],
                    ["Contact", "contact", "operator.png"],
                    ["About", "about", "info.png"],
                  ].map(([label, link, icon]) => (
                    <li key={link}>
                      <a
                        href={`#${link}`}
                        className="text-white text-decoration-none d-flex align-items-center gap-2"
                        onClick={handleClose}
                      >
                        <img src={icon} width={28} alt="" />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </section>
        {/* End Navbar */}

        {/* Swiper section */}
        <section className="hero-wrapper ">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="hero-swiper"
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="hero-slide py-5"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  <div className="overlay "></div>

                  <div className="hero-content me-5 animate py-5">
                    <span className="tag delay-1">{item.tag}</span>
                    <h1 className="delay-2">{item.title}</h1>
                    <h1 className="delay-3">Gem car wash </h1>
                    <p className="delay-3">{item.desc}</p>
                    <button className="hero delay-4">Our Works</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        {/* end swiper */}

        {/* About section */}
        <section className="about-section ">
          <div className="container">
            <div className="row align-items-center">
              {/* LEFT IMAGE AREA */}
              <div className="col-lg-6 col-md-12 col-12 image-area">
                {/* TOP LAYER */}
                <div className="layer layer-top"></div>

                {/* IMAGE */}
                <div className="image-box">
                  <img src="gemlogo-bg.png" alt="Gem Car Wash" />
                </div>

                {/* BOTTOM LAYER */}
                <div className="layer layer-bottom"></div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="col-lg-6 col-md-12 col-12 content-area mt-3 mt-md-0">
                <h6 className="section-label">ABOUT US</h6>

                <h2 className="about-title">
                  Gem Car Wash & <br /> Detailing
                </h2>

                <p className="about-text">
                  We provide premium car wash and detailing services using
                  modern equipment and eco-friendly solutions to keep your
                  vehicle spotless.
                </p>

                <p className="about-text">
                  From exterior washing to deep interior cleaning, we guarantee
                  quality, care, and customer satisfaction.
                </p>

                <button className="about-btn">CONTACT US</button>
              </div>
            </div>
            <div
              className="container-fluid py-5"
              id="services"
              // style={{ background: "#f5f7fb" }}
            >
              <div className="container">
                <div className="row text-center">
                  {features.map((feature, index) => {
                    let aosEffect =
                      index === 1
                        ? "fade-left"
                        : index === 2
                        ? "fade-up"
                        : "fade-right";

                    return (
                      <div
                        key={index}
                        className="col-md-6 col-lg-3 mb-4"
                        data-aos={aosEffect}
                        data-aos-duration="1500"
                      >
                        <div className="service-card h-100">
                          <div className="icon-wrap">{feature.icon}</div>
                          <h5 className="mt-3">{feature.title}</h5>
                          <p>{feature.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About */}

        {/* Rating */}
        <section className="container p-4 ">
          <div className="row text-center py-5 rating">
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="rating-box">
                <Counter end={3} />
                <p>Years of Experience</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="rating-box">
                <Counter end={2000} />
                <p>Total Vehicles Detailed</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="rating-box">
                <Counter end={17} />
                <p>Awards & Recognitions</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="rating-box">
                <Counter end={2000} />
                <p>Trusted Clients</p>
              </div>
            </div>
          </div>
        </section>
        {/* end rating */}

        {/* car booking  */}
        <div className="container-fluid car-book">
          <div className="car-content">
            <h1 className="outline-fill">Premium Car Wash Service</h1>
            <p className="type-line delay-2">
              Give your car the shine it truly deserves.
            </p>

            <p className="type-line delay-5">
              Book your car wash in just one click.
            </p>

            <button
              className="details-btn "
              onClick={() => {
                nav("/car");
              }}
            >
              Book Now
            </button>
          </div>
        </div>
        {/* end car booking */}

        {/* car Detailing */}
        <section className="container mt-4 mb-4">
          <h1 className="text-center text-uppercase mb-4">Car Detailing</h1>

          <div className="row mt-5 d-flex justify-content-center">
            <div className="col-10 col-md-6 col-lg-4 mt-5 mt-md-0">
              <div className="post-card">
                <img
                  src="Detailing.jpg"
                  alt="Car Detailing Service"
                  className="post-image"
                />

                <p className="post-meta">
                  PAINT CORRECTION &nbsp;—&nbsp; EXTERIOR DETAILING
                </p>

                <h4 className="post-title">
                  Professional Paint Polishing & Gloss Enhancement
                </h4>

                <p className="post-text">
                  Expert paint correction that removes swirl marks, fine
                  scratches, and oxidation to restore a deep, mirror-like shine
                  and long-lasting protection.
                </p>
              </div>
            </div>

            <div className="col-10 col-md-6 col-lg-4 mt-5 mt-md-0">
              <div className="post-card">
                <img
                  src="cardetailing.avif"
                  alt="Car Detailing Service"
                  className="post-image"
                />

                <p className="post-meta">
                  PROFESSIONAL DETAILING &nbsp;—&nbsp; CAR CARE
                </p>

                <h4 className="post-title">
                  Complete Interior & Exterior Car Detailing
                </h4>

                <p className="post-text">
                  Our professional detailing service restores your vehicle’s
                  finish, enhances interior comfort, and protects paint,
                  leather, and trim using premium-grade products.
                </p>
              </div>
            </div>

            <div className="col-10 col-md-6 col-lg-4 mt-5 mt-md-0">
              <div className="post-card">
                <img
                  src="redcars.jpg"
                  alt="Car Detailing Service"
                  className="post-image"
                />
                <p className="post-meta">
                  EXTERIOR DETAILING &nbsp;—&nbsp; FOAM TREATMENT
                </p>

                <h4 className="post-title">
                  Advanced Foam Wash & Paint Decontamination
                </h4>

                <p className="post-text">
                  Thick foam safely loosens dirt and road grime before contact
                  washing, reducing swirl marks and preparing the surface for
                  polishing and protection.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*end car Detailing */}

        {/* Bike Booking */}
        <section className="video-hero mt-5">
          <video className="bg-video" controls autoPlay muted loop playsInline>
            <source src="/bikewash.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="video-overlay">
            <h1>Premium Bike Wash </h1>
            <p>
              Our professional bike wash safely cleans every part of your
              motorcycle, removing stubborn dirt while protecting paint, chrome,
              and mechanical parts.
            </p>

            <button
              className="details-btn"
              onClick={() => {
                nav("/bike");
              }}
            >
              Book Now
            </button>
          </div>
        </section>
        {/*end Bike Booking */}

        {/* Price Detail */}`
        <section
          className="pricing-section d-flex flex-column mt-5 "
          style={{ overflowX: "hidden" }}
        >
          <div className="pricing-overlay">
            <span className="pricing-tag">PRICING PLANS</span>
            <h2>Choose your Package</h2>
            <p>
              Unlimited Washes is for you! Wash whenever you want and enjoy the
              ease of auto monthly billing and you can cancel any time.
            </p>
          </div>
          <div className="row g-4 p-2">
            {pricingPlans.map((plan, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className={`wash-card ${plan.best ? "best" : ""}`}>
                  {plan.best && <span className="badge">Best Plan</span>}

                  <h6 className="plan-title">{plan.title}</h6>

                  <div className="price-box">
                    {/* <span className="currency">$</span> */}
                    {plan.price.split(".")[0]}
                    <span className="cents">{plan.price.split(".")[1]}</span>
                  </div>

                  <p className="duration">Duration: {plan.duration}</p>

                  <ul className="features">
                    {plan.features.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <button
                    className="btn choose-btn"
                    onClick={() => priceviabooking(plan)}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <section className="container-fluid footer mb-0">
          <div className="container">
            <div className="row py-3 py-md-5">
              <div className="col-6 d-none d-md-flex">
                <ul className="d-flex list-unstyled" style={{ gap: "20px" }}>
                  <li>
                    <a href="/" className="nav-link-custom">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="nav-link-custom">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/gallery" className="nav-link-custom">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="/car-detailing" className="nav-link-custom">
                      Car Detailing
                    </a>
                  </li>
                  <li>
                    <a href="/service" className="nav-link-custom">
                      Service
                    </a>
                  </li>
                  <li>
                    <a href="/car-wash" className="nav-link-custom">
                      Car Wash
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 d-none d-md-flex justify-content-center">
                <ul
                  className="d-flex list-unstyled align-items-center"
                  style={{ gap: "20px" }}
                >
                  <li className="h4 fw-bold">Connect With Us</li>

                  <li>
                    <a
                      href="https://www.instagram.com/gem_car__wash/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link-custom"
                    >
                      <img width={40} src="./instagram.png" alt="Instagram" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://wa.me/917904746889"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link-custom"
                    >
                      <img width={40} src="./whatsapp.png" alt="WhatsApp" />
                    </a>
                  </li>

                  <li>
                    <a href="tel:+917904746889" className="nav-link-custom">
                      <img width={40} src="./youtube.png" alt="YouTube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row d-md-none d-flex align-items-center mb-3 ">
              <div className="col-6">
                <h6>Connect With Us</h6>
              </div>
              <div className="col-6 justify-content-center">
                <ul
                  className="d-flex list-unstyled align-items-center"
                  style={{ gap: "20px" }}
                >
                  <li>
                    <a
                      href="https://www.instagram.com/gem_car__wash/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width={40}
                        src="./instagram.png"
                        alt="Instagram"
                        className="img-fluid"
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://wa.me/917904746889"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width={40}
                        src="./whatsapp.png"
                        alt="WhatsApp"
                        className="img-fluid"
                      />
                    </a>
                  </li>

                  <li>
                    <a href="tel:+917904746889">
                      <img
                        width={40}
                        src="./youtube.png"
                        alt="Call"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row d-flex justify-content-between">
              <div className="col-12 col-md-6 col-lg-3 ">
                <h4 className="fw-bold">Our Address</h4>
                <div style={{ lineHeight: "30px" }}>
                  12/A Pampayan Ambalam Lane,
                  <br />
                  Avaniyapuram,
                  <br />
                  Madurai – 625012
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                <h4 className="fw-bold">Opening Hours</h4>
                <div style={{ lineHeight: "30px" }}>
                  Monday – Saturday
                  <br />
                  09:00 AM – 06:00 PM
                  <br />
                  Sunday
                  <br />
                  08:00 AM – 08:00 PM
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                <h4 className="fw-bold">Contact</h4>
                <div style={{ lineHeight: "30px" }}>
                  79047-46889
                  <br />
                  If you have any question, feel free to contact us
                  <br />
                  <span className="text-warning">mpoobalanr15@gmail.com</span>
                </div>
              </div>
            </div>
            <hr className="bg-white" />

            <div className="row text-center text-md-start">
              <div className="col-12 col-md-6 mb-2 mb-md-0">
                <span>© 2026 All rights reserved</span>
              </div>

              <div className="col-12 col-md-6 text-md-end">
                <span>
                  Gem car wash detailing Developed by{" "}
                  <span className="text-warning">ANextTech</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
