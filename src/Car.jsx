import React from "react";
import "./App.css";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Car = () => {
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
      price: "₹399 Only",
      seats: "4 seat",
      img: "redcar.png",
      wax: "Lioum Premium Wax Polish Extra ₹50",
      features: ["Foam Wash", "Interior Vacuum", "Tire Polish"],
      width: "350",
    },
    {
      id: 2,
      title: "SUV Seat Car Wash Price",
      price: "₹449 Only",
      seats: "6 seat",
      img: "whitecar.png",
      wax: "Lioum Premium Wax Polish Extra ₹50",
      features: ["Foam Wash", "Interior Vacuum", "Tire Polish"],
      width: "350",
    },
    {
      id: 3,
      title: "8 Seat Car Wash Price",
      price: "₹499 Only",
      seats: "8 seat",
      img: "toyocar.png",
      wax: "Lioum Premium Wax Polish Extra ₹50",
      features: ["Foam Wash", "Interior Vacuum", "Tire Polish"],
      width: "300",
    },
  ];

  // Function to send WhatsApp message
  const sendWhatsAppMessage = (seats) => {
    const phoneNumber = "917904746889"; // <-- Replace with your WhatsApp number
    const message = `Hello, I would like to book a ${seats} car wash service.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div style={{ font, backgroundColor: " rgb(55, 143, 194)" }}>
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

        <div className="container-fluid mt-2 mt-md-5">
          <div className="row p-3 g-4">
            {carWashOptions.map((car) => (
              <div key={car.id} className="col-12 col-sm-6 col-md-4">
                <div
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
                  {/* Glass animated background */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "200%",
                      height: "200%",
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0))",
                      animation: "moveGradient 6s infinite linear",
                      zIndex: 0,
                    }}
                  ></div>

                  <div style={{ position: "relative", zIndex: 1 }}>
                    <h1
                      className="text-center text-uppercase fs-3 text-white mb-3"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {car.title}
                    </h1>

                    <div className="d-flex flex-column justify-content-around align-items-center">
                      <img
                        src={car.img}
                        alt={car.title}
                        width={car.width}
                        className="img-fluid mb-3"
                      />

                      <section className="text-center">
                        <h2
                          style={{
                            color: "black",
                            fontWeight: "600",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                          className="text-white"
                        >
                          Car Service {car.price}
                        </h2>
                        <h5
                          style={{
                            color: "black",
                            fontWeight: "600",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                          className="text-white py-2"
                        >
                          {car.wax}
                        </h5>

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
                      </section>
                    </div>

                    <div className="d-flex justify-content-center mt-3">
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "white",
                          color: "rgb(55, 143, 194)",
                          padding: "10px 24px",
                          fontSize: "16px",
                          fontWeight: "600",
                          border: "none",
                          borderRadius: "50px",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                          cursor: "pointer",
                          fontFamily: "'Poppins', sans-serif",

                          transition: "all 0.3s ease",
                        }}
                        onClick={() => sendWhatsAppMessage(car.seats)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Car;
