import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const conditions = [
  { label: "PRP Therapy", slug: "prp-therapy" },
  { label: "Hair Loss Treatments", slug: "hair-loss-treatments" },
  { label: "Scalp Micropigmentation", slug: "scalp-micropigmentation" },
];

export default function HairTreatments() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (!isMobileView) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobileView) {
      setIsOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex flex-row lg:justify-center items-center">
        <Link
          href={`/hair-treatments-2`}
          className="text-gray-800 font-medium mr-3 hover:text-[#00796B] transition-colors flex items-center gap-1"
        >
          Hair Treatments
        </Link>
        <button
          onClick={toggleDropdown}
          className="focus:outline-none"
          aria-label="Toggle hair treatments dropdown"
        >
          <Image
            src="/images/chevron-down.png"
            alt="Toggle Dropdown"
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}

            width={16}
            height={16  }
          />
        </button>
      </div>
      
      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 top-full mt-1 w-64 bg-white/70 backdrop-blur-md rounded-md shadow-md z-50 transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        } ${isMobileView ? 'left-auto right-0' : ''}`}
      >
        <ul>
          {conditions.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/${item.slug}`}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:bg-white hover:text-[#00796B] transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}