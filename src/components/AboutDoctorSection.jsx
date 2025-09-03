"use client";

import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const AboutDoctorSection = () => {
  const statsRef = useRef([]);

  useEffect(() => {
    // Add smooth scroll behavior
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    // Add event listeners to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", handleScroll);
    });

    // Add animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    if (statsRef.current) {
      statsRef.current.forEach((el) => {
        if (el) {
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
          el.style.transition = "all 0.6s ease";
          observer.observe(el);
        }
      });
    }

    // Cleanup event listeners
    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener("click", handleScroll);
      });
      if (statsRef.current) {
        statsRef.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <>
      <div className="bg-[#EFF5FE]">
        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Doctor's Photo and Info */}
              <div className="gradient-bg p-8 md:p-12 flex flex-col items-center justify-center">
                <div className="relative mb-6 group overflow-hidden rounded-lg max-w-sm mx-auto">
                  <Image
                    src="/images/home/dr-ankit-mehra.jpeg"
                    alt="Dr. Ankit Mehra"
                    className="w-full aspect-square object-cover border-8 border-white shadow-2xl transform transition-transform duration-500 group-hover:scale-110"
                    width={500}
                    height={500}
                  />
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Dr. Ankit Mehra
                  </h2>
                  <p className="text-lg text-gray-600 font-medium">
                    MD in Skin & VD
                  </p>
                  <p className="text-sm text-gray-500 mt-2 px-4">
                    Venereology and Dermatology Specialist
                  </p>
                </div>
              </div>

              {/* Right Side - Clinic Information */}
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Welcome to Dr. Ankit Mehra’s Dermatology Clinic in Ajmer
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Where expertise, innovation, and compassionate care unite to
                    offer comprehensive solutions for all your skin and hair
                    needs. Dr. Ankit Mehra brings over 12 years of experience in
                    the field, with a background as a former Assistant Professor
                    at JLN Medical College, Ajmer.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Having conducted over 8,000 consultations and performed more
                    than 500 laser and skin treatments, Dr. Mehra is a trusted
                    expert who combines clinical precision with a personalized
                    approach to patient care.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our clinic specializes in diagnosing, treating, and managing
                    a wide range of dermatological concerns. We are dedicated to
                    enhancing your skin and hair health by utilizing advanced
                    technology and customized treatment plans designed to boost
                    your confidence.
                  </p>
                </div>

                {/* Specializations */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Our Specializations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      <i className="fas fa-check-circle text-green-500 mr-1"></i>
                      Acne Treatment
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      <i className="fas fa-check-circle text-green-500 mr-1"></i>
                      Anti-Aging
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      <i className="fas fa-check-circle text-green-500 mr-1"></i>
                      Hair Loss
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      <i className="fas fa-check-circle text-green-500 mr-1"></i>
                      Skin Cancer
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      <i className="fas fa-check-circle text-green-500 mr-1"></i>
                      Laser Therapy
                    </span>
                  </div>
                </div>

             
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx global>{`
        body {
          font-family: "Inter", sans-serif;
        }
        .gradient-bg {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
};

export default AboutDoctorSection;
