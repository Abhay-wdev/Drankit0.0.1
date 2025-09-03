import Link from "next/link";
import React from "react";
import Image from "next/image";
export const metadata = {
  title: "Effective Hair Loss Treatments for Healthy Hair | Dr. Ankit Mehra",
  description:
    "Combat hair loss with proven treatments and personalized care. Regain confidence with tailored solutions at Dr. Ankit Mehra's clinic.",
  keywords: [
    "hair loss treatment Ajmer",
    "best hair fall treatment",
    "hair restoration clinic Ajmer",
    "hair thinning solutions",
    "follicular unit extraction Ajmer",
    "hair transplant alternatives",
    "hair growth treatment Ajmer",
    "Dr. Ankit Mehra hair clinic",
    "effective hair fall treatment",
    "advanced hair care Ajmer",
  ],
  openGraph: {
    title: "Effective Hair Loss Treatments for Healthy Hair | Dr. Ankit Mehra",
    description:
      "Combat hair loss with proven treatments and personalized care. Regain confidence with tailored solutions at Dr. Ankit Mehra's clinic.",
    images: [
      {
        url: "/images/mature-man-going-through-follicular-unit-extraction-process-scaled.jpg", // replace with actual image path
        width: 1200,
        height: 630,
        alt: "Hair Loss Treatment",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/hair-loss-treatments/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/hair-loss-treatments/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Effective Hair Loss Treatments for Healthy Hair | Dr. Ankit Mehra",
    description:
      "Combat hair loss with proven treatments and personalized care. Regain confidence with tailored solutions at Dr. Ankit Mehra's clinic.",
    images: [
      "/images/mature-man-going-through-follicular-unit-extraction-process-scaled.jpg",
    ], // replace with actual image path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": "-1",
      "max-video-preview": "-1",
    },
  },
  other: {
    "application-name": "Dr. Ankit Mehra - Hair Loss Treatments",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const HairLossTreatments = () => {
  const skinInfo = {
    title: "Hair Loss Treatments",
    description:
      "Hair loss treatments aim to slow down hair loss, promote new growth, and improve overall hair density through various methods including medications, topical treatments, and PRP therapy.",
    image:
      "/images/home/mature-man-going-through-follicular-unit-extraction-process-1536x1024.jpg",
    details: [
      {
        category: "Symptoms",
        items: ["Sparse hair", "Receding hairline", "Visible scalp"],
      },
      {
        category: "Causes",
        items: [
          "Genetics",
          "Hormonal imbalance",
          "Poor scalp health",
          "Stress",
        ],
      },
      {
        category: "Risks",
        items: ["Scalp irritation", "Drug side effects", "Allergic reactions"],
      },
      {
        category: "Prevention",
        items: [
          "Healthy diet",
          "Early treatment",
          "Regular scalp massage",
          "Stress management",
        ],
      },
    ],
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <div className="relative w-full h-[500px]">
              {" "}
              {/* set a fixed or responsive height */}
              <Image
                src={skinInfo.image}
                alt="Hair loss treatment showing professional procedures to address thinning hair and scalp health"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {skinInfo.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Advanced Hair Loss Solutions
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed">
                {skinInfo.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skinInfo.details.map((section, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-indigo-100 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                    <span className="inline-block w-3 h-3 bg-indigo-600 rounded-full mr-3"></span>
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href={"/bookconsultation"}>
                <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Book Your Hair Loss Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Professional Hair Loss Treatments
              </h3>
              <p className="text-gray-600">
                All procedures performed by certified trichologists
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">FDA Approved</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Safe & Effective</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HairLossTreatments;
