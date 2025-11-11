import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "./App.css";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Bike = () => {
  const nav = useNavigate();
  const font = {
    fontFamily: "'Poppins', sans-serif",
  };
  {
    /* Animation keyframes */
  }
  <style>
    {`
     @keyframes moveGradient {
       0% { transform: translate(-50%, -50%); }
       100% { transform: translate(0%, 0%); }
     }
     ul:hover {
       transform: scale(1.05);
     }
   `}
  </style>;
  const carWashOptions = [
    {
      id: 1,
      title: "4 Seat Car Wash Price",
      price: "₹350 Only",
      seats: "4 seat",
      img: "bikeblack.png",
      features: ["Foam Wash", "Tire Polish"],
      width: "350",
    },
  ];

  // Function to send WhatsApp message
  const sendWhatsAppMessage = () => {
    const phoneNumber = "917904746889"; // <-- Replace with your WhatsApp number
    const message = `Hello, I would like to book a car wash service.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <div
        style={{ font, backgroundColor: " rgb(55, 143, 194)" }}
        className="py-5"
      >
        <div className="container-fluid py-4">
          <button
            onClick={() => nav("/")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              border: "none",
              backgroundColor: "rgb(55, 143, 194)", // your accent color
              color: "white",
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",
              cursor: "pointer",

              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "rgb(40, 120, 170)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "rgb(55, 143, 194)")
            }
          >
            <img src="left-arrow.png" alt="Back" width={20} />
            Back to Home
          </button>
        </div>

        <div className="container-fluid mt-2 mt-md-5 py-5 px-5">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8">
              <div
                className="row d-flex justify-content-center"
                style={{
                  borderRadius: "20px",
                  // padding: "20px",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 8px 10px rgba(0, 0, 0, 0.3)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div className="col-12 col-md-6">
                  <img
                    src="bikeblack.png "
                    alt=""
                    className="img-fluid p-3 py-5"
                  />
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center">
                  {carWashOptions.map((car) => (
                    <div
                      key={car.id}
                      className="mb-4  d-flex flex-column align-items-center justify-content-around"
                    >
                      <h2
                        style={{
                          color: "black",
                          fontWeight: "600",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                        className="text-center text-white"
                      >
                        Bike Service ₹149 Only
                      </h2>

                      <ul
                        style={{
                          listStyle: "none",
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          padding: "12px 20px",
                          borderRadius: "16px",
                          background: "rgba(255, 255, 255, 0.15)",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                          color: "black",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: "500",
                          gap: "20px",
                          marginTop: "15px",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        {car.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>

                      <div className="d-flex justify-content-center mt-3">
                        <button
                          className="btn"
                          style={{
                          fontFamily: "'Poppins', sans-serif",
                          backgroundColor: "white",
                            color: "rgb(55, 143, 194)",
                            padding: "10px 24px",
                            fontSize: "16px",
                            fontWeight: "600",
                            border: "none",
                            borderRadius: "50px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                          onClick={() => sendWhatsAppMessage(car.seats)}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bike;
