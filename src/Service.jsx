import {
  FaBrush,
  FaWater,
  FaPumpSoap,
  FaSprayCan,
  FaSoap,
  FaBolt,
  FaWind,
  FaCompress,
  FaFillDrip,
  FaCarSide,
  FaMotorcycle,
  FaTshirt,
  FaTools,
} from "react-icons/fa";
import "./service.css";
import { useNavigate } from "react-router-dom";

const tools = [
  {
    icon: <FaBrush />,
    title: "Cleaning Brushes",
    description: "Soft and hard brushes for wheels, tires, and body cleaning.",
  },
  {
    icon: <FaTshirt />,
    title: "Microfiber Towels",
    description: "Ultra-soft microfiber towels for drying and polishing.",
  },
  {
    icon: <FaSoap />,
    title: "Wash Sponges",
    description: "High-absorption sponges for safe car and bike washing.",
  },
  {
    icon: <FaTools />,
    title: "Detailing Brushes",
    description: "Small brushes for vents, grills, and tight areas.",
  },
  {
    icon: <FaWater />,
    title: "Pressure Washer",
    description: "High-pressure machines for deep exterior cleaning.",
  },
  {
    icon: <FaSprayCan />,
    title: "Foam Cannon",
    description: "Foam spray tools for thick snow foam wash.",
  },
  {
    icon: <FaPumpSoap />,
    title: "Wash Liquids",
    description: "Premium shampoo, wax, and polish solutions.",
  },
  {
    icon: <FaFillDrip />,
    title: "Spray Bottles",
    description: "Hand spray bottles for interior and exterior cleaning.",
  },
  {
    icon: <FaBolt />,
    title: "Electric Washer",
    description: "Portable electric washers for home use.",
  },
  {
    icon: <FaWind />,
    title: "Vacuum Cleaner",
    description: "Powerful vacuum tools for interior dust removal.",
  },
  {
    icon: <FaCompress />,
    title: "Air Compressor",
    description: "Air compressors for drying and dust blowing.",
  },
  {
    icon: <FaCarSide />,
    title: "Car Cleaning Tools",
    description: "Special tools designed for cars.",
  },
  {
    icon: <FaMotorcycle />,
    title: "Bike Cleaning Tools",
    description: "Compact tools specially made for bikes.",
  },
];

export default function WashTools() {
  const nav = useNavigate();

  return (
    <section className="tools-section">
      <div className="container position-relative">
        {/* Back Button */}

        <button className="btn btn-primary " onClick={() => nav("/")}>
          back
        </button>

        <div className="text-center mb-5">
          <h2 className="tools-title">Car & Bike Wash Tools</h2>
          <p className="tools-subtitle">
            Professional tools for powerful, safe, and efficient cleaning
          </p>
        </div>

        <div className="row g-4">
          {tools.map((tool, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="tool-card">
                <div className="tool-icon">{tool.icon}</div>
                <h5>{tool.title}</h5>
                <p>{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
